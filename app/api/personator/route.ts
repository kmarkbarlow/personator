import { NextResponse } from "next/server";
import {
  buildCodeExpansions,
  type CodeExpansions,
} from "@/lib/melissa/result-code-lookup";

/** Personator Consumer — not Personator Identity (different host & body shape). */
const MELISSA_URL =
  "https://personator.melissadata.net/v3/WEB/ContactVerify/doContactVerify";

const ALLOWED_ACTIONS = new Set(["check", "verify", "append", "move"]);

const ACTIONS_API: Record<string, string> = {
  check: "Check",
  verify: "Verify",
  append: "Append",
  move: "Move",
};

type RequestJson = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  addressLine1?: string;
  locality?: string;
  administrativeArea?: string;
  postalCode?: string;
  actions?: string;
};

type PersonatorSummaryCore = {
  transmissionResults: string;
  results: string;
  recordResults: {
    name: string;
    address: string;
    email: string;
    identity: string;
  };
  consumerRecords?: { recordID: string; results: string }[];
  errorMessages: string[];
};

type PersonatorSummary = PersonatorSummaryCore & {
  codeExpansions: CodeExpansions;
};

function getIdentityRecordResults(parsed: Record<string, unknown>) {
  const name = parsed.Name;
  const address = parsed.Address;
  const email = parsed.Email;
  const identity = parsed.Identity;
  return {
    name:
      typeof name === "object" && name && "Results" in name
        ? String((name as { Results?: unknown }).Results ?? "")
        : "",
    address:
      typeof address === "object" && address && "Results" in address
        ? String((address as { Results?: unknown }).Results ?? "")
        : "",
    email:
      typeof email === "object" && email && "Results" in email
        ? String((email as { Results?: unknown }).Results ?? "")
        : "",
    identity:
      typeof identity === "object" && identity && "Results" in identity
        ? String((identity as { Results?: unknown }).Results ?? "")
        : "",
  };
}

function collectMessageDescriptions(value: unknown, out: string[], depth = 0) {
  if (depth > 12 || value === null || value === undefined) return;
  if (Array.isArray(value)) {
    for (const item of value) collectMessageDescriptions(item, out, depth + 1);
    return;
  }
  if (typeof value !== "object") return;
  const o = value as Record<string, unknown>;
  if (Array.isArray(o.Messages)) {
    for (const m of o.Messages) {
      if (m && typeof m === "object" && "Description" in m) {
        const d = (m as { Description?: unknown }).Description;
        if (typeof d === "string" && d.trim()) out.push(d.trim());
      }
    }
  }
  for (const v of Object.values(o)) collectMessageDescriptions(v, out, depth + 1);
}

function summarizeConsumer(parsed: Record<string, unknown>): PersonatorSummaryCore {
  const transmissionResults =
    typeof parsed.TransmissionResults === "string"
      ? parsed.TransmissionResults.trim()
      : "";
  const results = typeof parsed.Results === "string" ? parsed.Results : "";
  const records = Array.isArray(parsed.Records) ? parsed.Records : [];
  const consumerRecords = records.map((r, i) => {
    if (!r || typeof r !== "object") {
      return { recordID: String(i + 1), results: "" };
    }
    const o = r as Record<string, unknown>;
    return {
      recordID: String(o.RecordID ?? i + 1),
      results: typeof o.Results === "string" ? o.Results : "",
    };
  });
  const errorMessages: string[] = [];
  collectMessageDescriptions(parsed, errorMessages);
  return {
    transmissionResults,
    results,
    recordResults: { name: "", address: "", email: "", identity: "" },
    consumerRecords,
    errorMessages: [...new Set(errorMessages)],
  };
}

function summarizeIdentity(parsed: Record<string, unknown>): PersonatorSummaryCore {
  const transmissionResults =
    typeof parsed.TransmissionResults === "string"
      ? parsed.TransmissionResults
      : "";
  const results = typeof parsed.Results === "string" ? parsed.Results : "";
  const recordResults = getIdentityRecordResults(parsed);
  const errorMessages: string[] = [];
  collectMessageDescriptions(parsed, errorMessages);
  return {
    transmissionResults,
    results,
    recordResults,
    errorMessages: [...new Set(errorMessages)],
  };
}

function summarizeMelissaPayload(
  parsed: Record<string, unknown>,
): PersonatorSummaryCore {
  if (Array.isArray(parsed.Records)) {
    return summarizeConsumer(parsed);
  }
  return summarizeIdentity(parsed);
}

function optionsForConsumerAction(apiAction: string): string {
  if (apiAction === "Verify") return "CentricHint:address";
  if (apiAction === "Append") return "Append:blank";
  return "";
}

export async function POST(request: Request) {
  const license =
    process.env.MELISSA_LICENSE_KEY?.trim() ||
    process.env.MD_LICENSE?.trim();
  if (!license) {
    return NextResponse.json(
      {
        error:
          "Missing license: set MELISSA_LICENSE_KEY in .env (project root) and restart `pnpm dev`.",
      },
      { status: 400 },
    );
  }

  let body: RequestJson;
  try {
    body = (await request.json()) as RequestJson;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const actionsRaw =
    typeof body.actions === "string" ? body.actions.toLowerCase() : "check";
  const actionsKey = ALLOWED_ACTIONS.has(actionsRaw) ? actionsRaw : "check";
  const actionsApi = ACTIONS_API[actionsKey];

  const record = {
    AddressLine1: body.addressLine1?.trim() ?? "",
    AddressLine2: "",
    BirthDay: "",
    BirthMonth: "",
    BirthYear: "",
    City: body.locality?.trim() ?? "",
    CompanyName: "",
    Country: "US",
    EmailAddress: body.email?.trim() ?? "",
    FirstName: body.firstName?.trim() ?? "",
    Format: "JSON",
    FreeForm: "",
    FullName: "",
    IPAddress: "",
    LastLine: "",
    LastName: body.lastName?.trim() ?? "",
    MelissaAddressKey: "",
    MIK: "",
    PhoneNumber: body.phoneNumber?.trim() ?? "",
    PostalCode: body.postalCode?.trim() ?? "",
    RecordID: "1",
    State: body.administrativeArea?.trim() ?? "",
  };

  const melissaBody = {
    Actions: actionsApi,
    Columns: "",
    CustomerID: license,
    Options: optionsForConsumerAction(actionsApi),
    Records: [record],
    TransmissionReference: `next-${Date.now()}`,
  };

  let melissaStatus: number;
  let rawText: string;
  try {
    const res = await fetch(MELISSA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
      body: JSON.stringify(melissaBody),
      signal: AbortSignal.timeout(30_000),
    });
    melissaStatus = res.status;
    rawText = await res.text();
  } catch (e) {
    const message = e instanceof Error ? e.message : "Request to Melissa failed";
    return NextResponse.json(
      { error: message, melissaStatus: null, melissaRaw: "" },
      { status: 502 },
    );
  }

  let melissaRaw = rawText;
  let parseError: string | undefined;
  let summaryCore: PersonatorSummaryCore | undefined;

  try {
    const parsed = JSON.parse(rawText) as unknown;
    if (parsed && typeof parsed === "object") {
      melissaRaw = JSON.stringify(parsed, null, 2);
      summaryCore = summarizeMelissaPayload(parsed as Record<string, unknown>);
    } else {
      parseError = "Melissa response was not a JSON object";
    }
  } catch {
    parseError = "Melissa response was not valid JSON";
  }

  const summary: PersonatorSummary | undefined = summaryCore
    ? {
        ...summaryCore,
        codeExpansions: buildCodeExpansions(summaryCore),
      }
    : undefined;

  return NextResponse.json({
    melissaStatus,
    melissaRaw,
    summary,
    parseError,
  });
}
