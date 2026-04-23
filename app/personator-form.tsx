"use client";

import { useState } from "react";
import type { CodeExpansions, ExpandedCode } from "@/lib/melissa/result-code-lookup";

type RecordResults = {
  name: string;
  address: string;
  email: string;
  identity: string;
};

type Summary = {
  transmissionResults: string;
  results: string;
  recordResults: RecordResults;
  consumerRecords?: { recordID: string; results: string }[];
  errorMessages: string[];
  codeExpansions?: CodeExpansions;
};

function CodeDescriptions({
  heading,
  raw,
  expanded,
}: {
  heading: string;
  raw: string;
  expanded: ExpandedCode[];
}) {
  const showRaw = raw.trim().length > 0;
  const showTable = expanded.length > 0;
  if (!showRaw && !showTable) {
    return (
      <div>
        <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
          {heading}
        </p>
        <p className="mt-0.5 font-mono text-xs text-zinc-400">(empty)</p>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
        {heading}
      </p>
      {showRaw ? (
        <p className="break-all font-mono text-xs text-zinc-800 dark:text-zinc-200">
          {raw}
        </p>
      ) : null}
      {showTable ? (
        <div className="overflow-x-auto rounded border border-zinc-200 dark:border-zinc-700">
          <table className="w-full min-w-[min(100%,36rem)] text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-100/80 dark:border-zinc-700 dark:bg-zinc-900/50">
                <th className="px-2 py-1.5 font-medium">Code</th>
                <th className="px-2 py-1.5 font-medium">Short</th>
                <th className="px-2 py-1.5 font-medium">Long</th>
              </tr>
            </thead>
            <tbody>
              {expanded.map((row, i) => (
                <tr
                  key={`${heading}-${row.code}-${i}`}
                  className="border-b border-zinc-100 last:border-0 dark:border-zinc-800"
                >
                  <td className="px-2 py-1.5 align-top font-mono">{row.code}</td>
                  <td className="px-2 py-1.5 align-top text-zinc-800 dark:text-zinc-200">
                    {row.known ? (row.title ?? "—") : "—"}
                    {!row.known ? (
                      <span className="mt-0.5 block text-[10px] text-amber-800 dark:text-amber-400">
                        Not in bundled Personator Consumer list
                      </span>
                    ) : null}
                  </td>
                  <td className="px-2 py-1.5 align-top text-zinc-600 dark:text-zinc-400">
                    {row.known ? (row.description ?? "—") : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

type SuccessPayload = {
  melissaStatus: number;
  melissaRaw: string;
  summary?: Summary;
  parseError?: string;
};

type ErrorPayload = {
  error: string;
  melissaStatus?: number | null;
  melissaRaw?: string;
};

export function PersonatorForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [locality, setLocality] = useState("");
  const [administrativeArea, setAdministrativeArea] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [actions, setActions] = useState("check");

  const [loading, setLoading] = useState(false);
  const [routeStatus, setRouteStatus] = useState<number | null>(null);
  const [payload, setPayload] = useState<SuccessPayload | ErrorPayload | null>(
    null,
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setPayload(null);
    setRouteStatus(null);
    try {
      const res = await fetch("/api/personator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          addressLine1,
          locality,
          administrativeArea,
          postalCode,
          actions,
        }),
      });
      setRouteStatus(res.status);
      const data = (await res.json()) as SuccessPayload & ErrorPayload;
      setPayload(data);
    } catch (err) {
      setRouteStatus(0);
      setPayload({
        error: err instanceof Error ? err.message : "Request failed",
      });
    } finally {
      setLoading(false);
    }
  }

  const err =
    payload && "error" in payload && typeof payload.error === "string"
      ? (payload as ErrorPayload)
      : undefined;

  const melissa =
    payload &&
    typeof payload === "object" &&
    typeof (payload as SuccessPayload).melissaStatus === "number"
      ? (payload as SuccessPayload)
      : null;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 sm:px-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">
          Personator Consumer (test)
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Calls Melissa Consumer{" "}
          <code className="font-mono text-xs">
            v3/WEB/ContactVerify/doContactVerify
          </code>{" "}
          via your server route. License stays in{" "}
          <code className="font-mono text-xs">.env</code>.
        </p>
      </header>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 rounded-lg border border-zinc-200 bg-zinc-50/80 p-5 dark:border-zinc-800 dark:bg-zinc-950/40"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">First name</span>
            <input
              className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="given-name"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Last name</span>
            <input
              className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="family-name"
            />
          </label>
        </div>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Email</span>
          <input
            type="email"
            className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Phone</span>
          <input
            type="tel"
            className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            autoComplete="tel"
            placeholder="e.g. 5551234567"
          />
        </label>
        <div className="border-t border-zinc-200 pt-3 dark:border-zinc-800">
          <p className="mb-2 text-sm font-medium">Address (US)</p>
          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-1 text-sm">
              <span>Street line 1</span>
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                autoComplete="address-line1"
              />
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-sm">
                <span>City</span>
                <input
                  className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  autoComplete="address-level2"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span>State</span>
                <input
                  className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
                  placeholder="e.g. CA"
                  value={administrativeArea}
                  onChange={(e) => setAdministrativeArea(e.target.value)}
                  autoComplete="address-level1"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1 text-sm">
              <span>ZIP</span>
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                autoComplete="postal-code"
              />
            </label>
            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              Country is fixed to <strong>US</strong> for all requests.
            </p>
          </div>
        </div>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Actions</span>
          <select
            className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
            value={actions}
            onChange={(e) => setActions(e.target.value)}
          >
            <option value="check">
              Check — validate &amp; correct address, email, name (US/CA)
            </option>
            <option value="verify">
              Verify — correlate inputs (centric: address)
            </option>
            <option value="append">
              Append — enrich from address/email/phone centricity
            </option>
            <option value="move">
              Move — NCOA-style move check (needs name + address)
            </option>
          </select>
        </label>
        <button
          type="submit"
          disabled={loading}
          className="mt-1 rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {loading ? "Calling Melissa…" : "Send to Personator"}
        </button>
      </form>

      {(routeStatus !== null || payload) && (
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Response</h2>

          <div className="rounded-lg border border-zinc-200 p-4 text-sm dark:border-zinc-800">
            <p className="font-medium text-zinc-700 dark:text-zinc-300">
              App route HTTP status
            </p>
            <p className="font-mono text-base">{routeStatus ?? "—"}</p>
          </div>

          {err?.error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
              <p className="font-medium">Error</p>
              <p className="mt-1 font-mono text-xs">{err.error}</p>
            </div>
          )}

          {melissa && (
            <div className="rounded-lg border border-zinc-200 p-4 text-sm dark:border-zinc-800">
              <p className="font-medium text-zinc-700 dark:text-zinc-300">
                Melissa HTTP status
              </p>
              <p className="font-mono text-base">{melissa.melissaStatus}</p>
            </div>
          )}

          {melissa?.parseError && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm dark:border-amber-900 dark:bg-amber-950/30">
              <p className="font-medium">Parse note</p>
              <p className="mt-1 font-mono text-xs">{melissa.parseError}</p>
            </div>
          )}

          {melissa?.summary && (
            <div className="flex flex-col gap-4 rounded-lg border border-zinc-200 p-4 text-sm dark:border-zinc-800">
              <p className="font-medium text-zinc-700 dark:text-zinc-300">
                Result codes
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                Descriptions come from a local snapshot of the Personator Consumer
                result-code reference (same doc as GE/SE transmission codes on that
                page).
              </p>
              <CodeDescriptions
                heading="TransmissionResults"
                raw={melissa.summary.transmissionResults}
                expanded={
                  melissa.summary.codeExpansions?.transmission ?? []
                }
              />
              <CodeDescriptions
                heading="Results (top-level)"
                raw={melissa.summary.results}
                expanded={melissa.summary.codeExpansions?.topLevel ?? []}
              />
              {melissa.summary.consumerRecords &&
              melissa.summary.consumerRecords.length > 0 ? (
                <div className="space-y-4">
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    Records[].Results (Consumer)
                  </p>
                  {melissa.summary.consumerRecords.map((r, idx) => (
                    <CodeDescriptions
                      key={r.recordID}
                      heading={`Record ${r.recordID}`}
                      raw={r.results}
                      expanded={
                        melissa.summary?.codeExpansions?.records[idx]
                          ?.items ?? []
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    Personator Identity-style blocks
                  </p>
                  <CodeDescriptions
                    heading="Name.Results"
                    raw={melissa.summary.recordResults.name}
                    expanded={
                      melissa.summary.codeExpansions?.identity.name ?? []
                    }
                  />
                  <CodeDescriptions
                    heading="Address.Results"
                    raw={melissa.summary.recordResults.address}
                    expanded={
                      melissa.summary.codeExpansions?.identity.address ?? []
                    }
                  />
                  <CodeDescriptions
                    heading="Email.Results"
                    raw={melissa.summary.recordResults.email}
                    expanded={
                      melissa.summary.codeExpansions?.identity.email ?? []
                    }
                  />
                  <CodeDescriptions
                    heading="Identity.Results"
                    raw={melissa.summary.recordResults.identity}
                    expanded={
                      melissa.summary.codeExpansions?.identity.identity ?? []
                    }
                  />
                </div>
              )}
              {melissa.summary.errorMessages.length > 0 && (
                <div>
                  <p className="mb-1 font-medium text-zinc-700 dark:text-zinc-300">
                    Messages (from response JSON)
                  </p>
                  <ul className="list-inside list-disc font-mono text-xs">
                    {melissa.summary.errorMessages.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {melissa?.melissaRaw ? (
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Raw Melissa JSON
              </p>
              <pre className="max-h-[min(70vh,32rem)] overflow-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed dark:border-zinc-800 dark:bg-zinc-950">
                {melissa.melissaRaw}
              </pre>
            </div>
          ) : null}
        </section>
      )}
    </div>
  );
}
