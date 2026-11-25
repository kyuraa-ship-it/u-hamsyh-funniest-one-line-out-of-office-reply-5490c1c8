import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office until Tuesday. I left my to-do list in charge; it has already resigned.";

// Gate: 1-160 characters, single line, not only whitespace.
if (
  entry.length < 1 ||
  entry.length > 160 ||
  !entry.trim() ||
  entry.includes("\n")
) {
  throw new Error(`gate failed: entry is ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
