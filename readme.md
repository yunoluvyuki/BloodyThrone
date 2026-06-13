# Rejected Draft — Game Design Document

> Single-file browser idle/RPG game. No server, no dependencies.  
> File: `index.html` | Save: `localStorage` (key: `rejected_draft_save`)

---

## Tech Stack

| Layer       | Choice                                      |
|-------------|---------------------------------------------|
| Runtime     | Vanilla HTML/CSS/JS, single file            |
| Persistence | `localStorage` JSON (no server required)    |
| Game loop   | `requestAnimationFrame` + frame counter     |
| Rendering   | DOM manipulation, SVG creature art inline   |
| Font        | Courier New (monospace, matches sketch aesthetic) |

---

## UI Layout

```
┌──────────────────────────────────────────────────────────────┐
│ TOPBAR: Title | BATTLE GALLERY SHOP ARCHIVE SETTINGS | GRA WAX CHA +Q │
├───────────┬──────────────────────────────────┬──────────────┤
│ LEFT      │ CONTENT AREA (tab panes)         │ RIGHT        │
│ SIDEBAR   │                                  │ SIDEBAR      │
│           │                                  │              │
│ Portrait  │ Battle / Gallery / Shop /        │ PROTOCOLS    │
│ Stats     │ Archive / Settings               │ Auto-Challenge│
│ Resources │                                  │ Auto-Retry   │
│ Fundamentals│                                │              │
└───────────┴──────────────────────────────────┴──────────────┘
```

---

## Player Stats

| Stat | Full Name          | Starting Value | Description                        |
|------|--------------------|----------------|------------------------------------|
| HP   | Hit Points         | 50             | Player health pool                 |
| ATK  | Attack             | 3              | Base damage per hit                |
| MND  | Mind               | 0              | Multiplies resource gains          |
| MXD  | Mixed              | 1.0            | General damage multiplier          |
| SPD  | Speed              | 100            | Attack interval (ms)               |
| RGN  | Regen              | 0              | HP regenerated per second          |
| DOG  | Dodge              | 0              | % chance to avoid enemy attack     |
| CRC  | Crit Chance        | 0              | % chance for critical hit          |
| CRD  | Crit Damage        | 1.0            | Crit damage multiplier             |
| ARM  | Armor              | 0              | Flat damage reduction              |
| APN  | Attacks Per Note   | 1.0            | Attacks per second                 |
| FRL  | Ferality           | 0              | Bonus ATK scaling factor           |

---

## Resources

| Resource  | Symbol | How Gained                              | Used For                      |
|-----------|--------|-----------------------------------------|-------------------------------|
| Graphite  | GRA    | Battle wins + idle generation           | Buying shop items             |
| Wax       | WAX    | Battle wins + idle (Charcoal → Wax)     | Mid/late shop items           |
| Charcoal  | CHA    | Battle wins + idle (Wax → Charcoal)     | High-tier shop items          |
| Quintessence | Q  | Milestone reward (every 1618 GRA/WAX/CHA) | Redraw World (prestige)     |

### Idle Generation

- Charcoal generates Wax; Wax generates Graphite (compound system).
- Offline rate: `0.5 + (redraws × 0.1)` resources/second, capped at 86,400s (24h).

### Milestone: 1618 (Golden Ratio × 1000)

Each resource tracks progress toward 1618. Hitting the milestone awards 1 pending Quintessence and resets the counter.

---

## Prestige — "Redraw World"

- **Cost:** 100 pending Quintessence
- **Effect:** Resets stats, resources, victories, and shop — but keeps `redraws` count
- **Reward multiplier:** `1 + (redraws × 0.05)` applied to all battle rewards
- **Offline rate bonus:** +0.1/s per redraw
- **Purpose:** Unlocks exponentially faster early-game; required to beat late Tier 5

---

## Battle System

### Flow

1. Player selects a creature from Gallery → `startBattle(id)`
2. Real-time tick loop runs every `requestAnimationFrame`
3. Both sides deal damage simultaneously based on APN/SPD
4. Player damage: `ATK × MXD × APN × critMult − enemy.def`
5. Enemy damage: `enemy.atk − ARM` (capped at 0), mitigated by DOG
6. Player regenerates `RGN` HP/second while alive
7. **Win** → `onWin()`: rewards applied, victory counter incremented
8. **Lose** → `onLose()`: death counter incremented, death overlay shown

### Protocols (right sidebar)

| Protocol       | Effect                                              |
|----------------|-----------------------------------------------------|
| Auto-Challenge | Automatically starts next non-maxed creature       |
| Auto-Retry     | Re-starts battle immediately after losing          |

---

## Glossary Multiplier

`calcGlossaryMult()` — scales all battle rewards based on total victories across all creatures. The more you beat, the higher the multiplier.

---

## Creatures (30 total)

### Tier 1 — Starter Sketches

| ID                | Name              | ATK  | DEF  | HP    | VicReq | Rewards                        |
|-------------------|-------------------|------|------|-------|--------|--------------------------------|
| stick_man         | STICK MAN         | 2    | 1    | 1,000 | 10     | atk+0.17, gra+0.19             |
| smudge            | SMUDGE            | 6    | 1.5  | 2,400 | 10     | hp+0.87, gra+0.56              |
| perspective_block | PERSPECTIVE BLOCK | 18   | 4    | 1,800 | 10     | hp+1.31, gra+0.84              |
| v_wing_bat        | V-WING BAT        | 10   | 0.75 | 500   | 10     | atk+0.12, gra+1.85             |
| stick_knight      | STICK KNIGHT      | 25   | 2.5  | 2,000 | 10     | atk+0.08, gra+1.39, arm+0.05  |
| danger_noodle     | DANGER NOODLE     | 40   | 2.5  | 1,200 | 10     | crc+6.8%, wax+0.37, crd+0.009 |

### Tier 2 — Developing Drafts

| ID               | Name             | ATK  | DEF  | HP    | VicReq | Key Rewards                    |
|------------------|------------------|------|------|-------|--------|--------------------------------|
| scribble         | SCRIBBLE         | 45   | 2    | 900   | 10     | rgn+0.03, gra+2.32, atk+0.05  |
| broccoli_grove   | BROCCOLI GROVE   | 50   | 5    | 1,500 | 10     | atk+0.13, gra+2.78             |
| ghost_line       | GHOST LINE       | 55   | 3.3  | 1,600 | 10     | dog+3%, wax+0.51, atk+0.09    |
| tangled_spider   | TANGLED SPIDER   | 140  | 8    | 2,400 | 10     | rgn+0.02, wax+0.74, atk+0.33  |
| contrast_crusher | CONTRAST CRUSHER | 260  | 10   | 4,000 | 4      | atk+0.73, cha+1.02, apn+1     |
| stick_ribs       | STICK RIBS       | 350  | 13   | 3,500 | 4      | hp+32, wax+10.2, frl+0.35     |
| ink_blot         | INK BLOT         | 175  | 25   | 2,525 | 20     | atk+3.18, gra+81.6             |
| top_heavy_brute  | TOP-HEAVY BRUTE  | 500  | 12   | 2,550 | 20     | arm+1, gra+51, mxd+0.5, cha+2.55 |
| rotten_fruit     | ROTTEN FRUIT     | 350  | 9    | 1,800 | 20     | rgn+0.35, gra+45.9, wax+45.9, hp+5.6 |

### Tier 3 — Shadow Entities

| ID             | Name           | ATK   | DEF | HP     | VicReq | Key Rewards                        |
|----------------|----------------|-------|-----|--------|--------|------------------------------------|
| shadow_scrawl  | SHADOW SCRAWL  | 620   | 18  | 8,000  | 30     | atk+5.2, arm+1.5, gra+120          |
| twisted_star   | TWISTED STAR   | 780   | 22  | 10,000 | 30     | crc+15%, crd+0.2, gra+180, wax+30  |
| wax_golem      | WAX GOLEM      | 950   | 30  | 13,000 | 35     | hp+80, arm+2.5, gra+250, wax+80    |
| charcoal_beast | CHARCOAL BEAST | 1,150 | 36  | 16,000 | 35     | atk+8.5, rgn+1.2, cha+10, gra+350 |
| eraser_wraith  | ERASER WRAITH  | 1,350 | 44  | 20,000 | 40     | dog+80%, mnd+2, gra+500, wax+150   |

### Tier 4 — Deep Drafts

| ID             | Name           | ATK   | DEF | HP     | VicReq | Key Rewards                           |
|----------------|----------------|-------|-----|--------|--------|---------------------------------------|
| void_sketch    | VOID SKETCH    | 1,700 | 56  | 28,000 | 50     | atk+15, crc+30%, gra+800, wax+300     |
| ink_serpent    | INK SERPENT    | 2,200 | 68  | 36,000 | 60     | hp+200, atk+18, cha+25, gra+1,200     |
| paper_tiger    | PAPER TIGER    | 2,700 | 82  | 45,000 | 75     | arm+8, mxd+1.0, gra+1,800, wax+600   |
| abstract_horror| ABSTRACT HORROR| 3,200 | 98  | 55,000 | 75     | crd+0.5, dog+120%, gra+2,500, wax+1k |
| the_revision   | THE REVISION   | 3,800 | 115 | 68,000 | 100    | atk+30, rgn+5, cha+60, gra+3,500     |

### Tier 5 — Endgame Bosses (Elite/Boss)

| ID               | Name             | ATK    | DEF | HP      | VicReq | Key Rewards                                       |
|------------------|------------------|--------|-----|---------|--------|---------------------------------------------------|
| masterpiece_draft| MASTERPIECE DRAFT| 5,000  | 145 | 90,000  | 150    | hp+500, arm+15, apn+3, gra+6k, wax+2.5k          |
| rejected_deity   | REJECTED DEITY   | 6,500  | 185 | 120,000 | 200    | atk+60, crc+80%, crd+1.0, gra+10k, wax+4k, cha+200 |
| infinite_loop    | INFINITE LOOP    | 8,500  | 228 | 160,000 | 300    | mxd+2.0, dog+250%, rgn+12, gra+18k, wax+8k       |
| the_critique     | THE CRITIQUE     | 11,000 | 275 | 200,000 | 400    | atk+100, arm+25, apn+5, cha+500, gra+30k          |
| final_draft      | FINAL DRAFT      | 16,000 | 360 | 280,000 | **500**| hp+2k, atk+200, arm+50, apn+10, gra+60k, wax+25k, cha+1k |

> VicReq = victories required to "max" (fully unlock) the creature.  
> Final Draft at 500 victories is the primary long-term grind target.

---

## Shop (15 items)

### Tier 1 — Early Game (Graphite only)

| Item              | Cost (GRA) | Effect                    |
|-------------------|------------|---------------------------|
| Iron Quill        | 50         | ATK +5                    |
| Sketch Shield     | 80         | ARM +2                    |
| Ink Vial          | 100        | HP +20                    |
| Wax Seal          | 120 GRA + 5 WAX | RGN +0.5             |
| Charcoal Blade    | 200 GRA + 5 CHA | ATK +10, APN +0.5    |
| Draft Armor       | 300 GRA + 20 WAX | ARM +5, HP +30      |
| Perspective Lens  | 250 GRA + 15 WAX | CRC +1%, CRD +0.1   |
| Phantom Step      | 180 GRA + 8 WAX  | DOG +1%, SPD +100   |

### Tier 2 — Mid Game (Wax required)

| Item              | Cost                  | Effect                    |
|-------------------|-----------------------|---------------------------|
| Wax Tablet        | 500 GRA + 50 WAX      | MND +5%, APN +1           |
| Charcoal Sigil    | 800 GRA + 80 WAX + 10 CHA | CRC +2%, CRD +0.25   |
| Bone Quill        | 1,200 GRA + 120 WAX   | ATK +25, ARM +8            |
| Ink Reservoir     | 1,500 GRA + 30 CHA    | HP +100, RGN +3            |

### Tier 3 — Late Game (Charcoal required)

| Item              | Cost                        | Effect                    |
|-------------------|-----------------------------|---------------------------|
| Void Fragment     | 3,000 GRA + 400 WAX + 80 CHA | DOG +3%, MXD +0.5        |
| Master Palette    | 6,000 GRA + 800 WAX          | ATK +80, APN +2           |
| Draft Crown       | 10,000 GRA + 2,000 WAX + 300 CHA | HP +300, ARM +20, CRC +3% |

---

## Achievements (20 total)

### Progression

| ID            | Name             | Requirement                    | Icon |
|---------------|------------------|--------------------------------|------|
| first_blood   | FIRST STROKE     | Win 1 battle                   | ✏    |
| ten_wins      | GETTING STARTED  | Win 10 battles total           | ⚔    |
| hundred_wins  | THE GRIND BEGINS | Win 100 battles total          | 💀   |
| thousand_wins | INK SOAKED       | Win 1,000 battles total        | 🌑   |
| tenk_wins     | LIFETIME ARTIST  | Win 10,000 battles total       | 👁   |

### Collection

| ID          | Name                | Requirement                          | Icon |
|-------------|---------------------|--------------------------------------|------|
| gloss_5     | SKETCH COLLECTOR    | Unlock 5 glossary entries            | 📖   |
| gloss_15    | PORTFOLIO           | Unlock 15 glossary entries           | 🗂   |
| gloss_all   | COMPLETE GALLERY    | Unlock all 30 creatures              | 🏆   |
| tier3_first | DEEPER DRAFT        | Defeat any Tier 3 creature once      | 🌘   |
| boss_first  | FINAL CONFRONTATION | Defeat FINAL DRAFT for the first time| ⭐   |

### Stats

| ID      | Name               | Requirement      | Icon |
|---------|--------------------|------------------|------|
| atk_100 | SHARP EDGE         | ATK ≥ 100        | 🗡   |
| atk_500 | MASTERFUL STROKE   | ATK ≥ 500        | ⚡   |
| arm_50  | THICK SKIN         | ARM ≥ 50         | 🛡   |
| hp_500  | IRON CONSTITUTION  | HP ≥ 500         | ❤   |
| apn_10  | RAPID FIRE         | APN ≥ 10         | 💨   |

### Resources

| ID       | Name            | Requirement                        | Icon |
|----------|-----------------|------------------------------------|------|
| gra_1k   | INK STAINED     | Accumulate 1,000 Graphite lifetime | ▲    |
| gra_100k | GRAPHITE HOARD  | Accumulate 100,000 Graphite lifetime| ◆   |

### Meta

| ID            | Name              | Requirement                      | Icon |
|---------------|-------------------|----------------------------------|------|
| first_death   | CRITIQUE ACCEPTED | Die 50 times                     | 💔   |
| play_1h       | OVERNIGHT SHIFT   | 1 hour total active play time    | ⏱   |
| first_redraw  | WORLD REDRAWN     | Complete 1 Redraw World (prestige)| 🔄  |

---

## Archive Tabs

| Sub-tab              | Content                                                      |
|----------------------|--------------------------------------------------------------|
| Glossary             | Encyclopedia entries unlocked by defeating each creature     |
| Conceptual Synthesizer| Resource milestones — each at 1618 awards 1 Quintessence    |
| Achievements         | 20 achievement cards, grouped by category, locked/unlocked  |
| Masterpiece Archive  | *(Reserved)* Creatures that are fully maxed                  |

---

## Settings

| Section         | Options                                                                    |
|-----------------|----------------------------------------------------------------------------|
| Interface       | Light/dark mode, invert images, show portraits, toggle protocols sidebar  |
| Notifications   | Enable/disable General / Timing / Loot / Glossary / Milestone per column  |
| Settings & Data | View game state, switch dark-blue theme, save slot, reset tutorials       |
| Danger Zone     | Wipe progress (hard reset), Take Fresh Game                               |
| Community       | Full Discord, Send Feedback, Report a Bug                                 |
| Wishlist        | Wishlist on Steam button                                                  |
| Tutorial        | Popup shown on first Settings visit; shows game tips                      |

---

## Grind Design Philosophy

The game is designed to keep players farming for a very long time through:

1. **Exponential stat scaling** — Tier 5 enemies have 100–200× the HP of Tier 1
2. **Victory requirements** — Maxing Final Draft requires 500 wins against a 280k HP enemy
3. **Gating by stat thresholds** — Tier 4/5 creatures are effectively unkillable without shop upgrades
4. **Shop cost scaling** — Late-tier items cost 10,000+ GRA + 2,000 WAX + 300 CHA
5. **Prestige incentive** — Each Redraw adds +5% to all rewards, making loop #2+ dramatically faster
6. **Idle offline progress** — Returning players get banked resources, encouraging daily sessions
7. **Achievement milestones** — 10k victories and 100k lifetime Graphite take dozens of hours

---

## Save Format (localStorage)

```json
{
  "stats": { "hp": 50, "atk": 3, "mnd": 0, "mxd": 1.0, "spd": 100,
             "rgn": 0, "dog": 0, "crc": 0, "crd": 1.0, "arm": 0, "apn": 1.0, "frl": 0 },
  "resources": { "gra": 0, "wax": 0, "cha": 0 },
  "victories": {},
  "shopOwned": {},
  "quintPending": 0,
  "quintLifetime": 0,
  "redraws": 0,
  "activeTime": 0,
  "offlineTime": 0,
  "deaths": 0,
  "lifeGra": 0,
  "achievements": {},
  "lastSave": 1718251234567,
  "settings": { "lightMode": false, "invertImg": false, "showProtocols": true,
                "combatLog": true, "uiZoom": 100, "battleNav": "manual", "numNotation": "mixed" },
  "protocols": { "autoChallenge": false, "autoRetry": false },
  "sessionRewards": {}
}
```

---

## Key Formulas

```
playerDPS     = ATK × MXD × APN × critMult
critMult      = CRC chance: CRD multiplier, else 1.0
damageTaken   = max(0, enemy.atk − ARM) × (1 − DOG)
rewardMult    = 1 + (redraws × 0.05)
glossaryMult  = f(totalVictories)   // scales with progress
offlineGain   = (0.5 + redraws×0.1) × min(elapsed, 86400)
quintsNeeded  = 100   // to trigger Redraw World
```

---

*Generated 2026-06-13*
