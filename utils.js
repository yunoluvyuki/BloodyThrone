// ═══════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════
function fmt(n){
  if(n===undefined||n===null)return'0';
  if(n>=1e12)return(n/1e12).toFixed(2)+'T';
  if(n>=1e9)return(n/1e9).toFixed(2)+'B';
  if(n>=1e6)return(n/1e6).toFixed(2)+'M';
  if(n>=1e3)return(n/1e3).toFixed(2)+'K';
  if(n%1===0)return n.toFixed(0);
  return n.toFixed(2);
}
function fmtStat(n){if(n==null||isNaN(n))return'0';return n%1===0?n.toFixed(0):n.toFixed(2);}
function fmtTime(s){
  if(s<60)return Math.floor(s)+'s';
  if(s<3600)return Math.floor(s/60)+'m '+Math.floor(s%60)+'s';
  return Math.floor(s/3600)+'h '+Math.floor((s%3600)/60)+'m';
}
function toast(msg,dur=2500){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),dur);
}
function getCreature(id){return CREATURES.find(c=>c.id===id);}
function getVictories(id){return S.victories[id]||0;}
function isMaxed(creature){return getVictories(creature.id)>=creature.vicReq;}
function maxHP(){return S.stats.hp;}


// formatStat — formats a stat value according to STAT_DEFS fmt type
function formatStat(key,val){
  const d=STAT_DEFS.find(x=>x.key===key);
  if(!d)return fmtStat(val);
  if(d.fmt==='pct')return(val*100).toFixed(1)+'%';
  if(d.fmt==='x')return 'x'+val.toFixed(2);
  return fmtStat(val);
}