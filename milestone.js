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

// Called every second from gameLoop
// Updates M.Coin counts and generates Blood Coin
function milestoneTick(){
  if(!S.lifetimeEarned) S.lifetimeEarned = {old:0};
  if(!S.sessionEarned) S.sessionEarned = {bronze:0,silver:0,gold:0,plat:0};
  if(!S.mCoins) S.mCoins = {old:0,bronze:0,silver:0,gold:0,plat:0};

  // Update M.Old from lifetime Old earned
  S.mCoins.old = getMilestoneCount(S.lifetimeEarned.old || 0);

  // Update session-based M.Coins
  S.mCoins.bronze = getMilestoneCount(S.sessionEarned.bronze || 0);
  S.mCoins.silver = getMilestoneCount(S.sessionEarned.silver || 0);
  S.mCoins.gold   = getMilestoneCount(S.sessionEarned.gold   || 0);
  S.mCoins.plat   = getMilestoneCount(S.sessionEarned.plat   || 0);

  // Production chain (per second):
  // M.Plat → M.Gold, M.Gold → M.Silver, M.Silver → M.Bronze, M.Bronze → M.Old
  // These are virtual — they boost production rates, not stored separately
  const effectiveMOld =
    S.mCoins.old +
    S.mCoins.bronze +          // each M.Bronze produces 1 M.Old/sec
    S.mCoins.silver +          // each M.Silver produces 1 M.Bronze/sec → flows to M.Old
    S.mCoins.gold +            // each M.Gold produces 1 M.Silver/sec → flows down
    S.mCoins.plat;             // each M.Plat produces 1 M.Gold/sec → flows down

  // Each effective M.Old generates 1 Blood Coin/sec
  if(effectiveMOld > 0){
    const gained = effectiveMOld;
    S.bloodPending = (S.bloodPending || 0) + gained;
    S.bloodLifetime = (S.bloodLifetime || 0) + gained;
  }
}

// Next milestone threshold for display
function getNextMilestone(total){
  for(let i = 0; i < MILESTONE_THRESHOLDS.length; i++){
    if(total < MILESTONE_THRESHOLDS[i]) return MILESTONE_THRESHOLDS[i];
  }
  return null; // all maxed
}