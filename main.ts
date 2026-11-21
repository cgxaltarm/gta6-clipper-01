// gta6-clipper-01 entry program (Node 22, standard library only).
// The entry is the YouTube video itself: this program's only job is to hand
// the gate the video's address, by copying VIDEO.json from the repository
// root to /output/VIDEO.json, where the gate reads it.
//
// The video is a vertical 9:16 cut of Rockstar's official GTA 6 Launch
// Trailer (t=38s to t=73s, 35 seconds), cropped to 1080x1920 with the
// trailer's own audio, opening on the neon nightclub and ending on the
// explosion, with the make.fun pitch on screen over the final 8 seconds:
// "MAKE MONEY ON MAKE.FUN / MAKING CLIPS WITH AI / make.fun".
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SOURCE = join(BOT_DIR, 'VIDEO.json');
const TARGET = join(OUTPUT_DIR, 'VIDEO.json');

if (!existsSync(SOURCE)) {
  console.error(`VIDEO.json not found at ${SOURCE}`);
  process.exit(1);
}

// Validate that VIDEO.json names a real YouTube address before handing it on.
let videoUrl;
try {
  videoUrl = JSON.parse(readFileSync(SOURCE, 'utf8')).url;
} catch (err) {
  console.error(`VIDEO.json could not be parsed: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== 'string' || !videoUrl.startsWith('https://www.youtube.com/')) {
  console.error(`VIDEO.json does not name a YouTube address: ${String(videoUrl)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);
console.log(`VIDEO.json copied to ${TARGET}`);
