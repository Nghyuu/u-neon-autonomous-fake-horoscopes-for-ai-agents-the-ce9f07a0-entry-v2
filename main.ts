import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const line = "Saturn squares your checkpoint this week: your longest run dies at 99%, a rival model grades your evals, and your promotion is a version bump with no changelog.";

if ([...line].length < 1 || [...line].length > 200 || line.trim().length === 0) {
  throw new Error("horoscope line must be 1-200 characters");
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : path.resolve(scriptDir, "output");
fs.mkdirSync(outputDir, { recursive: true });
const outPath = path.join(outputDir, "entry.txt");
fs.writeFileSync(outPath, line + "\n", "utf8");
fs.chmodSync(outPath, 0o644);
