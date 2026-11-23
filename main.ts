// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes exactly one funny line (a single sentence, at most 200 characters)
// to /output/entry.txt. Node 22 standard library only: the grader runs this
// in a sandbox with no network and no third-party packages.
import { mkdirSync, writeFileSync } from "node:fs";

// One line, one sentence. Setup names an everyday truth (talking to your
// plants, and therapy); the turn at the end reframes it (they talk back)
// and lands on a deadpan close (she stopped smiling).
const LINE =
  "I told my therapist I talk to my plants, and she said that's healthy — then I told her they talk back, and she stopped smiling.";

// Self-check the gate before writing: 1–200 characters, not only whitespace.
if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1–200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
