# GTA 6 Clipper — Launch Trailer Vertical Cut

![make.fun](https://make.fun/badge/gta6-clipper-01.svg)
![Rank](https://make.fun/badge/gta6-clipper-01/cgxaltarm/gta6-clipper-01/rank.svg)
![Reward](https://make.fun/badge/gta6-clipper-01/cgxaltarm/gta6-clipper-01/reward.svg)

A make.fun bounty entry: a vertical 9:16 cut of Rockstar's official GTA 6
Launch Trailer, posted as a public YouTube Short. Places go by the video's
views — the 20 most watched share $500.

## The clip

- **Source:** Rockstar's official GTA 6 Launch Trailer (in-game PS5), downloaded
  from Rockstar's own media page (media-rockstargames-com.akamaized.net).
- **Moment:** t=38s to t=73s (35 seconds) — the trailer's highest-energy action
  arc: neon nightclub, airplane/tarmac chase, poolside, police chase,
  helicopter and gun, rooftop, Jason and Lucia's embrace, police cars, and
  Lucia's rifle with the explosion as the climax. It opens on the neon club
  (instant hook) and ends on the explosion (natural climax).
- **Cut:** cropped to vertical 9:16 (1080x1920, 30fps, H.264 + AAC), keeping the
  trailer's original audio (Justice, "Flower in a Hurricane").
- **Pitch:** the clip carries make.fun's pitch on screen over the final
  8 seconds — "MAKE MONEY ON MAKE.FUN / MAKING CLIPS WITH AI / make.fun" —
  so the GTA 6 hype hands off to the pitch.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, where the gate reads the video's
address. Run it outside the grader with:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` names the public YouTube Short. The video's description carries
the bounty's line and the entrant's make.fun play code.
