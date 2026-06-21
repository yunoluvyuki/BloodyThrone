// ═══════════════════════════════════════════════════════
// SAVE / LOAD
// ═══════════════════════════════════════════════════════

function saveGame(){
  S.lastSave = Date.now();
  S.savedPlayerHP = B.playerHP;
  localStorage.setItem('bloody_throne_save', JSON.stringify(S));
}

function loadGame(){
  try{
    const raw = localStorage.getItem('bloody_throne_save');
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
    // Spawn rarities persist across page loads; they only re-roll on reincarnate.
    S.spawnRarity = Object.assign({}, loaded.spawnRarity || {});
    S.deaths = loaded.deaths || 0;
    S.reincarnations = loaded.reincarnations || 0;
    S.blood = loaded.blood || 0;
    S.bloodPending = loaded.bloodPending || loaded.quintPending || 0;
    S.bloodLifetime = loaded.bloodLifetime || loaded.quintLifetime || 0;
    S.bloodBankedLifetime = loaded.bloodBankedLifetime || 0;
    S.bloodRef = loaded.bloodRef || 0;
    S.lifetimeEarned = Object.assign({old: loaded.lifeOld || 0}, loaded.lifetimeEarned || {});
    S.sessionEarned = Object.assign({old:0,bronze:0,silver:0,gold:0,plat:0}, loaded.sessionEarned || {});
    S.mCoins = Object.assign({old:0,bronze:0,silver:0,gold:0,plat:0}, loaded.mCoins || {});
    S.mAccum = Object.assign({old:0,bronze:0,silver:0,gold:0,plat:0}, loaded.mAccum || {});
    S.mOldBest = loaded.mOldBest || 0;
    B.playerHP = (loaded.savedPlayerHP && loaded.savedPlayerHP > 0) ? loaded.savedPlayerHP : maxHP();
    S.codexBonusApplied = loaded.codexBonusApplied || 0;
    // codexUnlocked: persistent set of creatures that have granted the codex bonus.
    // Old saves without it: seed from any creature that currently has victories>0,
    // so the bonus isn't re-granted on first kill after this update.
    if(loaded.codexUnlocked){
      S.codexUnlocked = Object.assign({}, loaded.codexUnlocked);
    }else{
      S.codexUnlocked = {};
      Object.keys(S.victories || {}).forEach(id => { if(S.victories[id] > 0) S.codexUnlocked[id] = true; });
    }
    // Equipment
    S.equipNextId = loaded.equipNextId || 0;
    S.baseStats = loaded.baseStats || null;
    S.equipment = {
      equipped: Object.assign(
        { weapon:null, helmet:null, armor:null, gloves:null, boots:null, ring:null },
        loaded.equipment ? loaded.equipment.equipped : {}
      ),
      inventory: (loaded.equipment && loaded.equipment.inventory) ? loaded.equipment.inventory : [],
    };
  }catch(e){console.error('Load failed', e);}
  initBattleQueue();
}