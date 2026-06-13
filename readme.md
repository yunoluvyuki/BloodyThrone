# Draft Throne — Game Design Document (Living Doc)

> Browser idle/RPG game. No server, no dependencies.
> Files: `index.html` (markup) + `style.css` (all CSS) + `script.js` (all game logic)
> Save: `localStorage` (key: `rejected_draft_save`)

> **This file is the project memory.** Update it after every change so future
> sessions don't need to re-read the whole codebase. Keep it accurate over complete —
> if something is unsure/TODO, mark it as such rather than guessing.

---

## File Map

| File | Lines (approx) | Contents |
|------|------|----------|
| `index.html` | ~463 | All markup: topbar, tabs (World/Inventory/Shop/Prestige/Settings), bottom bar panels |
| `style.css` | ~383 | All styles (was inline `<style>` in index.html until split on 2026-06-13) |
| `script.js` | ~1760 | All game logic: state, battle loop, rendering, save/load |

---

## Currency (renamed 2026-06-13)

| Internal key | Display name | Notes |
|---|---|---|
| `gra` | **Old Coin** | base resource, produced by `wax` |
| `wax` | **Bronze Coin** | produced by `cha` |
| `cha` | **Silver Coin** | produced by `gold` |
| `gold` | **Gold Coin** | NEW — produced by `plat` |
| `plat` | **Platinum Coin** | NEW — top of chain, rate = `victories['contrast_crusher']` |
| `quint` (S.quintPending / quintLifetime) | **Blood Coin** | prestige currency, drives "Redraw World" |

**Production chain:** `plat → gold → cha → wax → gra` (each feeds the one below it at `×0.002` rate, except `wax→gra` at `×0.005`). See `synthTick()` in script.js (~line 1244).

**⚠️ Open issue / next-update item:** Shop costs and creature battle rewards still only
use `gra`/`wax`/`cha`. `gold`/`plat` currently ONLY accumulate via the production chain
(top-fed by `contrast_crusher` victories) — no direct battle drops yet. Decide if/how
Gold/Platinum should be earned directly from combat.

---

## Player Stats (16 total) — `STAT_DEFS` in script.js (~line 1527)

| Key | Label | Category | Format | Default | Used in combat? |
|-----|-------|----------|--------|---------|------------------|
| hp  | HP  | defense | number | 50  | yes (HP pool) |
| atk | ATK | offense | number | 3   | yes |
| mnd | MND | defense | %      | 0.7 | yes — **damage floor**, `max(mnd, atk*mxd-def)` |
| mxd | MXD | offense | x      | 1.0 | yes — multiplier on atk |
| spd | SPD | utility | number | 100 | not yet wired into tick (real-time loop uses fixed turn timers) |
| rgn | RGN | defense | number | 0   | yes — heals `rgn*2` HP/turn |
| dog | DOG | chance  | %      | 0   | yes — dodge enemy attack entirely |
| crc | CRC | chance  | %      | 0   | yes — crit chance |
| crd | CRD | offense | x      | 1.0 | yes — crit damage multiplier |
| arm | ARM | defense | number | 0   | yes — reduces enemy dmg via `/(1+arm*0.15)` |
| apn | APN | offense | number | 1.0 | display only ("Attack Speed") — not in formula |
| frl | FRL | chance  | %      | 0   | **unused**, no combat effect |
| acc | ACC | chance  | %      | 1.0 | yes — miss chance = `random()>acc` |
| blk | BLK | defense | %      | 0   | yes — block chance |
| bld | BLD | defense | number | 0   | yes — flat reduction on blocked hit |
| ctr | CTR | chance  | %      | 0   | yes — counter-attack chance |

> Note: UI label "Magical ATK" was removed from the offensive stats panel
> (was mapped to `mnd`, which is really the damage-floor stat — labeling was
> confusing). `mnd` and `mxd` are both still fully active in combat.

---

## Damage Formulas — `firePlayerTurn()` / `fireEnemyTurn()` (script.js ~1789-1831)

### Player attack
```
miss?  random() > acc        → if true, no damage, no crit roll
crit?  random() < crc
base = max(mnd, atk * mxd - enemy.def)
dmg  = base * (crit ? crd : 1)
enemyHP -= dmg
// regen, independent of hit/miss:
if rgn > 0: playerHP = min(maxHP, playerHP + rgn*2)
```
- No damage *variance* — formula is deterministic except for miss/crit rolls.

### Enemy attack
```
dodge?  random() < dog        → if true, 0 damage
rawDmg  = max(1, enemy.atk / (1 + arm*0.15))
block?  random() < blk        → if true, dmg = max(0, rawDmg - bld), else dmg = rawDmg
counter? random() < ctr       → if true, counterDmg = max(0.1, atk*0.5 - enemy.def), applied to enemyHP
playerHP -= dmg
```

---

## Offensive/Defensive Stats Panel — `renderBattleStatsPanel` area (script.js ~1995-2025)

`offRows` (current order after 2026-06-13 edits):
1. `atk` (was "Physical ATK") — `fmt(st.atk)`
2. ~~Magical ATK~~ — **removed**
3. Min Damage — `atk - enemy.def` (display estimate only; doesn't match real floor `mnd`)
4. Max Damage — `atk*mxd - enemy.def` (display estimate)
5. Attack Speed (`apn`)
6. Accuracy (`acc`)
7. Crit Chance (`crc`)
8. Crit Damage (`crd`)
9. Multi-Strike (`mxd`)
10. Armor Pen. (`apn2` — **note: `apn2` not in STAT_DEFS or default stats, likely dead/unused key**)

`defRows`: HP, HP Regen, Armor, Block Chance, Block Damage, Dodge Chance, Counter Chance, ...

**Open issue:** Min/Max Damage display rows don't reflect the real `mnd` floor — cosmetic only, low priority.

---

## Achievements — REMOVED (2026-06-13, "for now")

- Removed from UI: archive tab button + `#arch-achievements` pane (index.html).
- `checkAchievements()` in script.js now `return`s immediately as first line —
  data array `ACHIEVEMENTS`, `renderAchievements()`, and save-field `S.achievements`
  all still exist untouched.
- **To re-enable:** remove the `return;` at the top of `checkAchievements()` and
  re-add the tab button (`<span class="arch-tab" data-arch="achievements">ACHIEVEMENTS</span>`)
  and pane (`<div class="arch-pane" id="arch-achievements">...</div>`) to index.html.

---

## Tutorial — REMOVED (prior commit `a234843`, not re-verified this session)

---

## Prestige — "Redraw World" (unchanged)

- Cost: 100 pending Blood Coin (`quintPending`)
- Resets stats/resources/victories/shop, keeps `redraws` count
- Reward multiplier: `1 + redraws*0.05`
- Milestone: every resource (`gra`/`wax`/`cha`/`gold`/`plat`?) tracks toward 1618 → +1 pending Blood Coin
  - **Unverified:** confirm whether gold/plat also trigger the 1618 milestone or only gra (script.js ~1255 only checks `S.resources.gra`)

---

## Recent Commit History (context)

```
6a85e96 remove achievement
c412811 change currency
562b688 divided script and css (single index.html → index.html+style.css+script.js)
a234843 remove tutorial
3440a89 fix css
d4c3700 change how mxd is displayed
fe5eb65 shop test
24446d2 / 0582040 / 0f705eb fix dmg formula / mxd
```

---

## NEXT UPDATE — TODO / Open Items

1. **Gold/Platinum integration**: decide whether these drop from battle rewards
   (would require touching ~80 entries in `CREATURES`) or stay purely passive-chain.
2. **`apn2` key**: appears in offRows ("Armor Pen.") but not defined in `STAT_DEFS`
   or default stats — confirm if dead code or missing feature.
3. **`frl` stat**: defined but has zero gameplay effect — decide purpose or remove.
4. **Min/Max Damage display**: cosmetic mismatch with real `mnd` floor formula.
5. **Shop costs**: still gra/wax/cha only — consider gold/plat tiers for shop items
   if Gold/Platinum become meaningful currencies.
6. Verify milestone-tracking (`synthTick`, ~line 1255) covers new currencies if needed.

---

*Last updated: 2026-06-13*
