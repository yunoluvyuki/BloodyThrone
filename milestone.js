// ═══════════════════════════════════════════════════════
// MILESTONE SYSTEM
// ═══════════════════════════════════════════════════════

// Milestone thresholds: 1024, 1024*1000, 1024*1000*1000, ...
const MILESTONE_THRESHOLDS = [
  1024,
  1024 * 1000,
  1024 * 1000 * 1000,
  1024 * 1000 * 1000 * 1000,
  1024 * 1000 * 1000 * 1000 * 1000,
];

// How many milestones have been crossed for a given total
function getMilestoneCount(total){
  let count = 0;
  for(let i = 0; i < MILESTONE_THRESHOLDS.length; i++){
    if(total >= MILESTONE_THRESHOLDS[i]) count++;
    else break;
  }
  return count;
}

// ── DIMINISHING BLOOD GAIN ────────────────────────────
// Once this session's bloodPending passes the reference (blood banked last
// reincarnation), gain rate halves at each doubling cap: R×1 → 50%, R×2 → 25%,
// R×4 → 12.5%, ... Halving continues forever (never hits zero).
// First run (bloodRef 0) = no cap, full rate.
function bloodGainMult(){
  const ref = S.bloodRef || 0;
  const pending = S.bloodPending || 0;
  if(ref <= 0 || pending < ref) return 1;        // no reference yet, or below first cap
  const caps = Math.floor(Math.log2(pending / ref)) + 1; // how many caps passed
  return Math.pow(0.5, caps);
}

// Output scale for a milestone level: level 1 = ×1, 2 = ×2, 3 = ×4, 4 = ×8...
// (doubles each level). Level 0 = ×0 (tier not active yet).
function mScale(level){ return level > 0 ? Math.pow(2, level - 1) : 0; }

// ── MILESTONE TICK ────────────────────────────────────
// Called every second from gameLoop
// Updates M.Coin counts and generates Blood Coin
function milestoneTick(){
  if(!S.lifetimeEarned) S.lifetimeEarned = {old:0};
  if(!S.sessionEarned) S.sessionEarned = {bronze:0,silver:0,gold:0,plat:0};
  if(!S.mCoins) S.mCoins = {old:0,bronze:0,silver:0,gold:0,plat:0};
  if(!S.mAccum) S.mAccum = {old:0,bronze:0,silver:0,gold:0,plat:0};

  // Milestone levels (from crossing earning thresholds).
  // M.Old level: based on SESSION Old earned this run (like other coins), but
  // floored by the highest level ever reached (S.mOldBest, persists across
  // reincarnate). So M.Old never drops below your best, but a strong run can
  // push it higher.
  const oldSessionLevel = getMilestoneCount(S.sessionEarned.old || 0);
  S.mOldBest = Math.max(S.mOldBest || 0, oldSessionLevel);
  S.mCoins.old    = Math.max(oldSessionLevel, S.mOldBest);
  S.mCoins.bronze = getMilestoneCount(S.sessionEarned.bronze || 0);
  S.mCoins.silver = getMilestoneCount(S.sessionEarned.silver || 0);
  S.mCoins.gold   = getMilestoneCount(S.sessionEarned.gold   || 0);
  S.mCoins.plat   = getMilestoneCount(S.sessionEarned.plat   || 0);

  // ── PRODUCTION CHAIN (per tick = per second) ──────────
  // Each tier's TOTAL = milestone level (base count) + accumulated-from-above.
  // Each second a tier produces  TOTAL × scale(own level)  of the tier below,
  // where scale doubles per milestone level (1,2,4,8...).
  // Plat → Gold → Silver → Bronze → Old → Blood. Process top→down.
  const totalPlat   = S.mCoins.plat   + S.mAccum.plat;
  S.mAccum.gold   += totalPlat   * mScale(S.mCoins.plat);

  const totalGold   = S.mCoins.gold   + S.mAccum.gold;
  S.mAccum.silver += totalGold   * mScale(S.mCoins.gold);

  const totalSilver = S.mCoins.silver + S.mAccum.silver;
  S.mAccum.bronze += totalSilver * mScale(S.mCoins.silver);

  const totalBronze = S.mCoins.bronze + S.mAccum.bronze;
  S.mAccum.old    += totalBronze * mScale(S.mCoins.bronze);

  const totalOld    = S.mCoins.old    + S.mAccum.old;

  // Blood/sec = TOTAL M.Old × scale(M.Old level) × mults.
  // M.Old level 1 → each M.Old = 1 blood; level 2 → ×2; level 3 → ×4; etc.
  // Because TOTAL includes the milestone base, M.Old alone keeps blood flowing
  // even right after reincarnate (when accumulated is 0).
  const bloodQty = totalOld * mScale(S.mCoins.old);
  if(bloodQty > 0){
    const gained = bloodQty
      * (typeof masteryGainMult==='function' ? masteryGainMult('blood') : 1)
      * bloodGainMult();   // diminishing-gain throttle past the reference caps
    S.bloodPending = (S.bloodPending || 0) + gained;
    S.bloodLifetime = (S.bloodLifetime || 0) + gained;
  }
}

// Total M.Coins for a tier (milestone count + accumulated). Used by the UI.
function mCoinTotal(coin){
  const mc = (S.mCoins && S.mCoins[coin]) || 0;
  const ac = (S.mAccum && S.mAccum[coin]) || 0;
  return mc + ac;
}

// Next milestone threshold for display
function getNextMilestone(total){
  for(let i = 0; i < MILESTONE_THRESHOLDS.length; i++){
    if(total < MILESTONE_THRESHOLDS[i]) return MILESTONE_THRESHOLDS[i];
  }
  return null; // all maxed
}

// Called every frame from gameLoop
// Exists to catch newly-earned M.Coins and fire a toast notification.
// Blood Coin generation itself is handled by milestoneTick() every 30 frames.
let _prevMCoinTotal = 0;
function checkBloodMilestone(){
  if(!S.mCoins) return;
  const total = (S.mCoins.old||0)+(S.mCoins.bronze||0)+(S.mCoins.silver||0)+(S.mCoins.gold||0)+(S.mCoins.plat||0);
  if(total > _prevMCoinTotal){
    toast(`★ Milestone reached! Blood Coin flowing faster.`, 3000);
    _prevMCoinTotal = total;
  }
}