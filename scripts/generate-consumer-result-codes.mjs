/**
 * One-time / maintenance: parses downloaded Melissa Personator Consumer
 * result-codes HTML into a TypeScript record.
 *
 * Source: https://docs.melissa.com/cloud-api/personator-consumer/result-codes.html
 *
 * Usage: node scripts/generate-consumer-result-codes.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function stripHtml(s) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#\d+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const htmlPath = path.join(
  __dirname,
  "melissa-consumer-result-codes.html",
);
const html = fs.readFileSync(htmlPath, "utf8");

const rows = html.match(/<tr class="row-[^"]*">[\s\S]*?<\/tr>/g) || [];

/** @type {Record<string, { title: string; description: string }>} */
const map = {};

for (const tr of rows) {
  const codeMatch = tr.match(/<span class="pre">([A-Z0-9]{4})<\/span>/);
  if (!codeMatch) continue;
  const code = codeMatch[1];
  const tds = [...tr.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)];
  if (tds.length < 3) continue;
  const title = stripHtml(tds[1][1]);
  const description = stripHtml(tds[2][1]);
  if (!title && !description) continue;
  map[code] = { title, description };
}

const outPath = path.join(
  __dirname,
  "..",
  "lib",
  "melissa",
  "consumer-result-codes.generated.ts",
);

const header = `/**
 * Auto-generated from Personator Consumer result codes HTML.
 * Snapshot: scripts/melissa-consumer-result-codes.html
 * Source: https://docs.melissa.com/cloud-api/personator-consumer/result-codes.html
 * Generated: ${new Date().toISOString().slice(0, 10)}
 */
`;

const body = `export const PERSONATOR_CONSUMER_RESULT_CODES: Record<
  string,
  { title: string; description: string }
> = ${JSON.stringify(map, null, 2)} as const;
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, header + body, "utf8");

console.log("Wrote", outPath, "entries:", Object.keys(map).length);
