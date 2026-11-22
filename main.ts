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
// POST.json holds a placeholder until the meme is posted on X; replace it
// with the post's address (https://x.com/<handle>/status/<id>) before
// submitting, or the gate refuses the entry.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
