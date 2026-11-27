import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I sounded certain because I was betting nobody here would check.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
