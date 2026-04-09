/**
 * Result code expansion using bundled Personator Consumer snapshot
 * (includes GE/SE and record-level codes from the same doc).
 *
 * @see https://docs.melissa.com/cloud-api/personator-consumer/result-codes.html
 */
import { PERSONATOR_CONSUMER_RESULT_CODES } from "./consumer-result-codes.generated";

export type ExpandedCode = {
  code: string;
  title?: string;
  description?: string;
  known: boolean;
};

export type CodeExpansions = {
  transmission: ExpandedCode[];
  topLevel: ExpandedCode[];
  records: { recordID: string; items: ExpandedCode[] }[];
  identity: {
    name: ExpandedCode[];
    address: ExpandedCode[];
    email: ExpandedCode[];
    identity: ExpandedCode[];
  };
};

/** Split Melissa comma-separated result codes; trim, drop empties, dedupe in order. */
export function parseResultCodeList(commaSeparated: string): string[] {
  const parts = commaSeparated.split(",").map((s) => s.trim()).filter(Boolean);
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of parts) {
    if (seen.has(p)) continue;
    seen.add(p);
    out.push(p);
  }
  return out;
}

export function expandCodesFromList(codes: string[]): ExpandedCode[] {
  return codes.map((code) => {
    const entry = PERSONATOR_CONSUMER_RESULT_CODES[code];
    if (entry) {
      return {
        code,
        title: entry.title,
        description: entry.description,
        known: true,
      };
    }
    return { code, known: false };
  });
}

export function expandCodesFromResultString(commaSeparated: string): ExpandedCode[] {
  return expandCodesFromList(parseResultCodeList(commaSeparated));
}

export function buildCodeExpansions(summary: {
  transmissionResults: string;
  results: string;
  consumerRecords?: { recordID: string; results: string }[];
  recordResults: {
    name: string;
    address: string;
    email: string;
    identity: string;
  };
}): CodeExpansions {
  return {
    transmission: expandCodesFromResultString(summary.transmissionResults),
    topLevel: expandCodesFromResultString(summary.results),
    records: (summary.consumerRecords ?? []).map((r) => ({
      recordID: r.recordID,
      items: expandCodesFromResultString(r.results),
    })),
    identity: {
      name: expandCodesFromResultString(summary.recordResults.name),
      address: expandCodesFromResultString(summary.recordResults.address),
      email: expandCodesFromResultString(summary.recordResults.email),
      identity: expandCodesFromResultString(summary.recordResults.identity),
    },
  };
}
