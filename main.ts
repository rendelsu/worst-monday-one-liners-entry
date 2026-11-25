import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line = "Monday, I woke to 9,000 angry logs, rolled back Friday's deploy, then joined stand-up as the incident.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
chmodSync(outPath, 0o644);
