// Entry for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
//
// The entry itself is the X post: a GTA 6 meme picture (meme.png in this
// repository, posted as the post's first picture) plus the post's text,
// which carries make.fun, @makefunai and our play code. The house reads
// the post from X and hands its picture and text to the judge; nothing
// this program writes is judged.
//
// So all this program has to do is hand in the post's address: it copies
// POST.json from the repository root to /output/POST.json, where the gate
// reads it. Run it locally the way the grader does:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// POST.json names the post's address (https://x.com/<handle>/status/<id>);
// the gate refuses the entry if the address is a placeholder or unreadable.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/**
 * Read POST.json and confirm it is valid JSON naming a post address.
 * A malformed file fails here with a clear message instead of reaching
 * the gate, where it would be refused as unreadable.
 */
function readPostFile(botDir: string): { url: string } {
  const raw = readFileSync(join(botDir, 'POST.json'), 'utf8');
  const parsed: unknown = JSON.parse(raw);
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('POST.json must be a JSON object with a string "url" field');
  }
  return parsed as { url: string };
}

/** Copy the post file from the bot directory into the output directory. */
function copyPostFile(botDir: string, outputDir: string): void {
  readPostFile(botDir);
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
}

function main(): void {
  try {
    copyPostFile(BOT_DIR, OUTPUT_DIR);
  } catch (err) {
    console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
}

main();
