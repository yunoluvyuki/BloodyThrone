// ═══════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════
const FMT_SUFFIXES = ['','K','M','B','T','Qa','Qi','Sx','Sp','Oc','No','Dc',
  'UDc','DDc','TDc','QaDc','QiDc','SxDc','SpDc','OcDc','NoDc','Vg'];
function fmt(n){
  if(n===undefined||n===null||isNaN(n))return'0';
  if(!isFinite(n))return n>0?'∞':'-∞';
  const neg=n<0; n=Math.abs(n);
  if(n<1000) return (neg?'-':'')+(n%1===0?n.toFixed(0):n.toFixed(2));
  let tier=Math.floor(Math.log10(n)/3);
  if(tier<FMT_SUFFIXES.length){
    const scaled=n/Math.pow(10,tier*3);
    return (neg?'-':'')+scaled.toFixed(2)+FMT_SUFFIXES[tier];
  }
  // Beyond the named suffixes → scientific notation, e.g. 1.23e66
  return (neg?'-':'')+n.toExponential(2).replace('e+','e');
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
// Effective win cap for a creature = base vicReq + CONQUEST bonus.
function effVicReq(creature){return creature.vicReq + (typeof masteryVicReqBonus==='function' ? masteryVicReqBonus() : 0);}
function isMaxed(creature){return getVictories(creature.id)>=effVicReq(creature);}
function maxHP(){return S.stats.hp * (typeof masteryHpMult==='function' ? masteryHpMult() : 1);}


// formatStat — formats a stat value according to STAT_DEFS fmt type
function formatStat(key,val){
  const d=STAT_DEFS.find(x=>x.key===key);
  if(!d)return fmtStat(val);
  if(d.fmt==='pct')return(val*100).toFixed(1)+'%';
  if(d.fmt==='x')return 'x'+val.toFixed(2);
  if(key==='spd')return fmtStat(val); // SPD stays a plain number (no K/M prefix)
  return (val==null||isNaN(val))?'0':fmt(val);
}