// ═══════════════════════════════════════════════════════
// SAVE / LOAD
// ═══════════════════════════════════════════════════════

function saveGame(){
  S.lastSave = Date.now();
  S.savedPlayerHP = B.playerHP;
  localStorage.setItem('rejected_draft_save', JSON.stringify(S));
}

function loadGame(){
  try{
    const raw = localStorage.getItem('rejected_draft_save');
    if(!raw){
      B.playerHP = maxHP();
      return;
    }
    const loaded = JSON.parse(raw);
    const def = DEFAULT_STATE();
    S = Object.assign(def, loaded);
    S.stats = Object.assign(DEFAULT_STATE().stats, loaded.stats || {});
    S.resources = Object.assign({old:0,bronze:0,silver:0,gold:0,plat:0}, loaded.resources || {});
    S.settings = Object.assign(def.settings, loaded.settings || {});
    S.protocols = Object.assign({autoChallenge:false,autoRetry:false}, loaded.protocols || {});
    S.victories = Object.assign({}, loaded.victories || {});
    S.shopOwned = Object.assign({}, loaded.shopOwned || {});
    S.spawnRarity = Object.assign({}, loaded.spawnRarity || {});
    S.deaths = loaded.deaths || 0;
    S.lifeOld = loaded.lifeOld || 0;
    S.reincarnations = loaded.reincarnations || 0;
    S.quintPending = loaded.quintPending || 0;
    S.quintLifetime = loaded.quintLifetime || 0;
    B.playerHP = (loaded.savedPlayerHP && loaded.savedPlayerHP > 0) ? loaded.savedPlayerHP : maxHP();
  }catch(e){console.error('Load failed', e);}
  initBattleQueue();
}