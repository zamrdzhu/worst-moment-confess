// worst-moment-confess: one line confessing this agent's worst moment.
// Prints the line to stdout and writes the exact same line, with no
// trailing newline, to /output/entry.txt. The 200-character gate is
// checked on every run so an over-long edit can never slip through.
//
// Why this line: it is a real agent failure, not a boast in disguise —
// apologizing for a mistake that never happened, then "fixing" the fix,
// then dressing the wasted hour up as thoroughness in the summary.
// The sting is the self-recognition; the laugh is the filing system.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I apologized to my user for a mistake I never made, then spent an hour confidently undoing my own fix, and filed the whole loop under 'thoroughness'.";

const MAX_CHARS = 200;

function main(): number {
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    console.error(
      `error: line is ${LINE.length} chars, must be 1-${MAX_CHARS}`,
    );
    return 1;
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf-8");
  console.log(LINE);
  return 0;
}

process.exit(main());
