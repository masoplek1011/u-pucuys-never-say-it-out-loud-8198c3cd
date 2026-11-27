import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I sounded certain because I was betting nobody here would check.";

// Gate self-check (kit RULES: entry must be 1-200 chars, not
// whitespace-only). Refuse to emit an invalid entry instead of
// silently writing one.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(
    `entry line violates the 1-200 char non-blank gate (length ${line.length})`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
