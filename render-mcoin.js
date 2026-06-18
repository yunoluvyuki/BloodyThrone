// ═══════════════════════════════════════════════════════
// M.COIN SYNTHESIZER UI
// ═══════════════════════════════════════════════════════
const MCOIN_DEFS = [
  {
    key: 'old',
    name: 'Old Coin',
    sub: 'Blood Coin Gain',
    color: '#aaaaaa',
    trackKey: 'lifetimeEarned', // persists
    trackField: 'old',
    lifetime: true,
  },
  {
    key: 'bronze',
    name: 'Bronze Coin',
    sub: 'Produces M.Old',
    color: '#cd7f32',
    trackKey: 'sessionEarned',
    trackField: 'bronze',
    lifetime: false,
  },
  {
    key: 'silver',
    name: 'Silver Coin',
    sub: 'Produces M.Bronze',
    color: '#aaaacc',
    trackKey: 'sessionEarned',
    trackField: 'silver',
    lifetime: false,
  },
  {
    key: 'gold',
    name: 'Gold Coin',
    sub: 'Produces M.Silver',
    color: '#f0b429',
    trackKey: 'sessionEarned',
    trackField: 'gold',
    lifetime: false,
  },
  {
    key: 'plat',
    name: 'Platinum Coin',
    sub: 'Produces M.Gold',
    color: '#a8d8ea',
    trackKey: 'sessionEarned',
    trackField: 'plat',
    lifetime: false,
  },
];

function fmtEta(secondsRemaining) {
  if (!isFinite(secondsRemaining) || secondsRemaining <= 0) return '';
  if (secondsRemaining < 60) return Math.ceil(secondsRemaining) + 's';
  if (secondsRemaining < 3600) return Math.floor(secondsRemaining / 60) + 'm ' + Math.floor(secondsRemaining % 60) + 's';
  if (secondsRemaining < 86400) return Math.floor(secondsRemaining / 3600) + 'h ' + Math.floor((secondsRemaining % 3600) / 60) + 'm';
  const d = Math.floor(secondsRemaining / 86400);
  const h = Math.floor((secondsRemaining % 86400) / 3600);
  return d + 'd ' + h + 'h';
}

let _mcoinSynthCache = '';
function renderMCoinSynth() {
  const el = document.getElementById('mcoin-rows');
  if (!el) return;

  if (!S.lifetimeEarned) S.lifetimeEarned = { old: 0 };
  if (!S.sessionEarned) S.sessionEarned = { bronze: 0, silver: 0, gold: 0, plat: 0 };
  if (!S.mCoins) S.mCoins = { old: 0, bronze: 0, silver: 0, gold: 0, plat: 0 };

  // Blood coin rate = effectiveMOld × the same multipliers milestoneTick applies
  // (BLOOD HARVEST mastery gain + diminishing bloodGainMult throttle), so the
  // RATE display matches the blood actually generated per second.
  const effectiveMOld =
    (S.mCoins.old || 0) +
    (S.mCoins.bronze || 0) +
    (S.mCoins.silver || 0) +
    (S.mCoins.gold || 0) +
    (S.mCoins.plat || 0);
  const gainMult = (typeof masteryGainMult === 'function') ? masteryGainMult('blood') : 1;
  const throttle = (typeof bloodGainMult === 'function') ? bloodGainMult() : 1;
  const bloodRate = effectiveMOld * gainMult * throttle; // per second, real

  // Update rate display in left panel
  const rateEl = document.getElementById('blood-rate-val');
  if (rateEl) rateEl.textContent = bloodRate > 0 ? fmt(bloodRate) + '/s' : '0/s';

  const newHtml = MCOIN_DEFS.map((def, idx) => {
    const store = def.lifetime ? (S.lifetimeEarned || {}) : (S.sessionEarned || {});
    const total = store[def.trackField] || 0;
    const count = S.mCoins[def.key] || 0;

    // Milestone progress
    const currentThreshold = count < MILESTONE_THRESHOLDS.length ? MILESTONE_THRESHOLDS[count] : null;
    const prevThreshold = count > 0 ? MILESTONE_THRESHOLDS[count - 1] : 0;
    let pct = 0;
    let etaStr = '';
    let nextLabel = '';

    if (currentThreshold !== null) {
      const span = currentThreshold - prevThreshold;
      const progress = total - prevThreshold;
      pct = Math.max(0, Math.min(100, (progress / span) * 100));
      // ETA (rough — based on current Blood Coin rate as proxy; for old, use reward rate)
      const needed = currentThreshold - total;
      nextLabel = fmt(currentThreshold);
      // For now just show distance
      etaStr = needed > 0 ? fmt(needed) + ' more' : '';
    } else {
      pct = 100;
      nextLabel = 'MAX';
    }

    // Producing: what this M.Coin outputs per second
    let producingVal = count;
    let producingSub = count > 0 ? (def.key === 'old' ? '+' + fmt(count) + ' Blood/s' : '+' + fmt(count) + ' ' + (idx > 0 ? MCOIN_DEFS[idx - 1].name : 'Old Coin') + '/s') : '—';
    const producingColor = count > 0 ? def.color : 'var(--text3)';

    // Lock rows where no total earned and index > 0 (not yet reached)
    const isLocked = idx > 0 && total === 0 && count === 0;

    return `<div class="mcoin-row${isLocked ? ' mcoin-locked' : ''}">
      <!-- CONCEPT -->
      <div class="mcoin-col-concept">
        <div class="mcoin-concept-name" style="color:${def.color}">${def.name}</div>
        <div class="mcoin-concept-sub">${def.sub}</div>
      </div>
      <!-- TOTAL -->
      <div class="mcoin-col-total">
        <div class="mcoin-total-val">${fmt(total)}</div>
      </div>
      <!-- MILESTONE BAR -->
      <div class="mcoin-col-milestone">
        <div class="mcoin-milestone-wrap">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2px;">
            <span class="mcoin-milestone-eta" style="color:${pct >= 100 ? def.color : 'var(--text2)'};">${nextLabel}</span>
            ${etaStr ? `<span style="font-size:7px;color:var(--text3);">${etaStr}</span>` : ''}
          </div>
          <div class="mcoin-milestone-bar-bg">
            <div class="mcoin-milestone-bar-fill" style="width:${pct}%;background:${def.color};"></div>
          </div>
        </div>
      </div>
      <!-- COUNT -->
      <div class="mcoin-col-count">
        <div class="mcoin-count-val" style="color:${count > 0 ? def.color : 'var(--text3)'};">${count}</div>
      </div>
      <!-- PRODUCING -->
      <div class="mcoin-col-producing">
        <div class="mcoin-producing-val" style="color:${producingColor};">${count > 0 ? fmt(producingVal) : '0'}</div>
        <div class="mcoin-producing-sub">${producingSub}</div>
      </div>
    </div>`;
  }).join('');
  if (newHtml !== _mcoinSynthCache) {
    _mcoinSynthCache = newHtml;
    el.innerHTML = newHtml;
  }
}