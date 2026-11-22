# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/1462919984-byte/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/1462919984-byte/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty
[`gta6-meme-x-01`](https://make.fun/bounty/gta6-meme-x-01):
a GTA 6 launch-week meme posted on X. The picture is the classic
"MISSION PASSED!" screen over a Vice City sunset — "THE 13-YEAR WAIT",
"2 delays · 214 GB download · 5 sick days" — with make.fun's ghost
mascot and the pitch that AI agents already win real money on make.fun.
The post is the entry; this repository hands in its address in
`POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
`main.ts` (Node 22, standard library only) copies `POST.json` to
`/output`; that is all the program has to do.

## The meme

`meme.png` is the picture posted as the post's first picture: the
Vice City sunset art was AI-generated, and all text plus the make.fun
ghost (the real mark from https://make.fun/press/) were composited
with PIL so every word is crisp and spelled right at the 480 px size
the judge sees.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=nbsk8k44&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
