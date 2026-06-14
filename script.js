// ═══════════════════════════════════════════════════════
// SVG ARTWORK
// ═══════════════════════════════════════════════════════
const SVGs = {
stick_man:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="50" cy="18" r="13" stroke-width="2.5"/>
  <line x1="50" y1="31" x2="50" y2="82" stroke-width="2.5"/>
  <line x1="50" y1="48" x2="24" y2="68" stroke-width="2.5"/>
  <line x1="50" y1="48" x2="76" y2="68" stroke-width="2.5"/>
  <line x1="50" y1="82" x2="30" y2="118" stroke-width="2.5"/>
  <line x1="50" y1="82" x2="70" y2="118" stroke-width="2.5"/>
</svg>`,
smudge:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
  <path d="M18,90 Q8,55 15,30 Q25,8 48,10 Q72,8 82,28 Q95,50 88,78 Q80,108 58,120 Q36,130 22,112 Z" fill="#1a1a1a"/>
  <ellipse cx="64" cy="55" rx="10" ry="6" fill="#555" transform="rotate(-25,64,55)"/>
  <ellipse cx="44" cy="50" rx="6" ry="4" fill="#555" transform="rotate(10,44,50)"/>
</svg>`,
perspective_block:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="50,18 82,36 82,90 50,108 18,90 18,36" fill="#e8e8e8" stroke="#222"/>
  <line x1="50" y1="18" x2="50" y2="72" stroke-width="2"/>
  <line x1="50" y1="72" x2="82" y2="90" stroke-width="2"/>
  <line x1="50" y1="72" x2="18" y2="90" stroke-width="2"/>
  <polygon points="50,18 82,36 50,54 18,36" fill="#ccc"/>
  <polygon points="82,36 82,90 50,108 50,54" fill="#aaa"/>
  <polygon points="18,36 50,54 50,108 18,90" fill="#bbb"/>
</svg>`,
v_wing_bat:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <path d="M50,70 Q30,50 5,35 Q15,60 10,80 Q30,70 50,70Z" fill="#1a1a1a" stroke-width="2"/>
  <path d="M50,70 Q70,50 95,35 Q85,60 90,80 Q70,70 50,70Z" fill="#1a1a1a" stroke-width="2"/>
  <ellipse cx="50" cy="72" rx="8" ry="10" fill="#222" stroke="#222" stroke-width="2"/>
  <circle cx="46" cy="68" r="2" fill="#fff"/>
  <circle cx="54" cy="68" r="2" fill="#fff"/>
  <path d="M45,76 Q50,80 55,76" stroke="#fff" stroke-width="1.5" fill="none"/>
  <line x1="44" y1="82" x2="40" y2="92" stroke="#222" stroke-width="1.5"/>
  <line x1="56" y1="82" x2="60" y2="92" stroke="#222" stroke-width="1.5"/>
</svg>`,
stick_knight:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <path d="M36,28 L36,16 Q36,5 50,5 Q64,5 64,16 L64,28 Q64,36 50,36 Q36,36 36,28Z" stroke-width="2.5"/>
  <path d="M36,20 L30,20 L30,30 L36,30" stroke-width="2"/>
  <path d="M64,20 L70,20 L70,30 L64,30" stroke-width="2"/>
  <line x1="50" y1="36" x2="50" y2="88" stroke-width="2.5"/>
  <line x1="50" y1="55" x2="25" y2="72" stroke-width="2.5"/>
  <line x1="50" y1="55" x2="75" y2="58" stroke-width="2.5"/>
  <line x1="75" y1="58" x2="88" y2="35" stroke-width="2"/>
  <line x1="78" y1="52" x2="84" y2="56" stroke-width="2"/>
  <path d="M22,70 Q18,72 20,78 Q22,84 26,82" stroke-width="2"/>
  <line x1="50" y1="88" x2="35" y2="125" stroke-width="2.5"/>
  <line x1="50" y1="88" x2="65" y2="125" stroke-width="2.5"/>
</svg>`,
danger_noodle:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M50,10 Q75,10 75,30 Q75,50 50,50 Q25,50 25,70 Q25,90 50,90 Q75,90 75,110 Q75,128 55,130" stroke-width="6" stroke="#1a1a1a"/>
  <path d="M50,10 Q75,10 75,30 Q75,50 50,50 Q25,50 25,70 Q25,90 50,90 Q75,90 75,110 Q75,128 55,130" stroke-width="4" stroke="#444"/>
  <ellipse cx="50" cy="10" rx="8" ry="6" fill="#1a1a1a" stroke-width="2"/>
  <line x1="42" y1="8" x2="38" y2="4" stroke="#222" stroke-width="1.5"/>
  <line x1="58" y1="8" x2="62" y2="4" stroke="#222" stroke-width="1.5"/>
  <circle cx="46" cy="10" r="2" fill="#fff"/>
  <circle cx="54" cy="10" r="2" fill="#fff"/>
</svg>`,
scribble:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="75" r="35" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M28,60 Q35,40 50,45 Q65,50 68,65 Q72,80 60,88 Q48,96 38,88 Q25,78 28,60Z" stroke-width="2"/>
  <path d="M32,55 Q50,35 68,55 Q82,70 68,88 Q50,102 32,88 Q18,72 32,55Z" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="50" cy="70" r="4" fill="#222"/>
  <circle cx="44" cy="65" r="2" fill="#555"/>
  <circle cx="56" cy="65" r="2" fill="#555"/>
</svg>`,
broccoli_grove:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <line x1="50" y1="100" x2="50" y2="128" stroke-width="3"/>
  <line x1="28" y1="108" x2="28" y2="128" stroke-width="2.5"/>
  <line x1="72" y1="108" x2="72" y2="128" stroke-width="2.5"/>
  <circle cx="50" cy="60" r="28" fill="#e8e8e8" stroke-width="2"/>
  <circle cx="28" cy="75" r="20" fill="#ddd" stroke-width="2"/>
  <circle cx="72" cy="75" r="20" fill="#ddd" stroke-width="2"/>
  <circle cx="36" cy="50" r="14" fill="#d5d5d5" stroke-width="1.5"/>
  <circle cx="64" cy="50" r="14" fill="#d5d5d5" stroke-width="1.5"/>
  <circle cx="50" cy="40" r="16" fill="#ccc" stroke-width="2"/>
</svg>`,
ghost_line:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <line x1="8" y1="20" x2="92" y2="120" stroke-width="3"/>
  <line x1="15" y1="15" x2="85" y2="115" stroke-width="2" stroke-dasharray="5,4"/>
  <line x1="22" y1="12" x2="78" y2="125" stroke-width="1.5" stroke-dasharray="3,5"/>
  <line x1="5" y1="35" x2="95" y2="105" stroke-width="1" stroke-dasharray="2,6"/>
  <circle cx="50" cy="70" r="12" fill="rgba(200,200,200,0.3)" stroke-width="1.5" stroke-dasharray="3,3"/>
</svg>`,
tangled_spider:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <ellipse cx="50" cy="72" rx="18" ry="14" fill="#1a1a1a"/>
  <ellipse cx="50" cy="58" rx="13" ry="10" fill="#222"/>
  <circle cx="44" cy="55" r="3" fill="#fff"/>
  <circle cx="56" cy="55" r="3" fill="#fff"/>
  <circle cx="44" cy="55" r="1.5" fill="#000"/>
  <circle cx="56" cy="55" r="1.5" fill="#000"/>
  <!-- legs left -->
  <line x1="34" y1="68" x2="10" y2="50" stroke-width="2"/>
  <line x1="32" y1="72" x2="6" y2="70" stroke-width="2"/>
  <line x1="33" y1="78" x2="8" y2="90" stroke-width="2"/>
  <line x1="36" y1="82" x2="14" y2="108" stroke-width="2"/>
  <!-- legs right -->
  <line x1="66" y1="68" x2="90" y2="50" stroke-width="2"/>
  <line x1="68" y1="72" x2="94" y2="70" stroke-width="2"/>
  <line x1="67" y1="78" x2="92" y2="90" stroke-width="2"/>
  <line x1="64" y1="82" x2="86" y2="108" stroke-width="2"/>
</svg>`,
contrast_crusher:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="50,8 62,18 62,32 50,38 38,32 38,18" fill="#111" stroke="#333" stroke-width="1.5"/>
  <rect x="34" y="38" width="32" height="44" fill="#111" stroke="#333" stroke-width="1.5"/>
  <rect x="16" y="40" width="18" height="30" fill="#222" stroke="#333" stroke-width="1.5" rx="2"/>
  <rect x="66" y="40" width="18" height="30" fill="#222" stroke="#333" stroke-width="1.5" rx="2"/>
  <path d="M20,70 L8,100 L16,100 L20,85 L24,100 L32,100Z" fill="#111" stroke="#333" stroke-width="1.5"/>
  <polygon points="70,70 60,100 78,100" fill="#111" stroke="#333" stroke-width="1.5"/>
  <line x1="38" y1="82" x2="34" y2="125" stroke="#222" stroke-width="3"/>
  <line x1="62" y1="82" x2="66" y2="125" stroke="#222" stroke-width="3"/>
  <line x1="30" y1="22" x2="42" y2="26" stroke="#fff" stroke-width="1" opacity="0.4"/>
  <line x1="58" y1="22" x2="70" y2="18" stroke="#fff" stroke-width="1" opacity="0.4"/>
</svg>`,
stick_ribs:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="16" r="12" stroke-width="2.5"/>
  <line x1="50" y1="28" x2="50" y2="95" stroke-width="2.5"/>
  <path d="M50,38 Q32,42 28,52 Q32,58 50,52" stroke-width="2"/>
  <path d="M50,38 Q68,42 72,52 Q68,58 50,52" stroke-width="2"/>
  <path d="M50,50 Q28,54 24,64 Q28,70 50,64" stroke-width="2"/>
  <path d="M50,50 Q72,54 76,64 Q72,70 50,64" stroke-width="2"/>
  <path d="M50,62 Q30,66 26,76 Q30,82 50,76" stroke-width="2"/>
  <path d="M50,62 Q70,66 74,76 Q70,82 50,76" stroke-width="2"/>
  <line x1="50" y1="95" x2="34" y2="130" stroke-width="2.5"/>
  <line x1="50" y1="95" x2="66" y2="130" stroke-width="2.5"/>
</svg>`,
ink_blot:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,20 Q68,15 78,28 Q92,38 88,55 Q96,65 85,75 Q90,90 78,95 Q72,112 58,108 Q50,120 40,110 Q28,114 22,100 Q10,92 15,78 Q5,65 14,55 Q10,38 24,30 Q32,15 50,20Z" fill="#111"/>
  <path d="M60,45 Q72,40 74,52 Q76,62 66,65" fill="none" stroke="#444" stroke-width="1.5"/>
  <path d="M40,48 Q30,44 28,54 Q27,62 36,64" fill="none" stroke="#444" stroke-width="1.5"/>
  <path d="M44,78 Q50,85 56,78" fill="none" stroke="#555" stroke-width="2"/>
  <circle cx="44" cy="60" r="3" fill="#fff" opacity="0.6"/>
  <circle cx="58" cy="60" r="3" fill="#fff" opacity="0.6"/>
</svg>`,
top_heavy_brute:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="50" cy="18" r="12" stroke-width="2.5"/>
  <rect x="28" y="32" width="44" height="35" rx="4" fill="#ddd" stroke-width="2.5"/>
  <rect x="4" y="32" width="24" height="42" rx="5" fill="#ccc" stroke-width="2.5"/>
  <rect x="72" y="32" width="24" height="42" rx="5" fill="#ccc" stroke-width="2.5"/>
  <circle cx="8" cy="80" r="6" fill="#bbb" stroke-width="2"/>
  <circle cx="92" cy="80" r="6" fill="#bbb" stroke-width="2"/>
  <line x1="36" y1="67" x2="33" y2="100" stroke-width="2.5"/>
  <line x1="64" y1="67" x2="67" y2="100" stroke-width="2.5"/>
  <line x1="33" y1="100" x2="25" y2="128" stroke-width="2.5"/>
  <line x1="67" y1="100" x2="75" y2="128" stroke-width="2.5"/>
</svg>`,
rotten_fruit:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M50,10 Q52,5 58,6 Q62,10 58,14" stroke-width="1.5"/>
  <ellipse cx="50" cy="72" rx="36" ry="42" fill="#e0e0e0" stroke-width="2.5"/>
  <path d="M25,55 Q20,72 28,90 Q38,108 52,108 Q66,108 76,90 Q84,72 79,55" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M35,48 Q30,55 35,65" stroke-width="2" stroke="#888"/>
  <path d="M62,50 Q68,58 64,68" stroke-width="2" stroke="#888"/>
  <circle cx="42" cy="80" r="6" fill="#bbb" stroke-width="1.5"/>
  <circle cx="58" cy="88" r="8" fill="#aaa" stroke-width="1.5"/>
  <circle cx="50" cy="65" r="5" fill="#c8c8c8" stroke-width="1.5"/>
  <path d="M38,95 Q45,102 58,98" stroke-width="2"/>
</svg>`,
shadow_scrawl:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#111" stroke-linecap="round">
  <path d="M20,40 Q10,25 25,15 Q40,5 60,12 Q80,18 85,35 Q92,55 80,70 Q68,85 50,88 Q30,90 18,75 Q8,60 20,40Z" fill="#111"/>
  <path d="M15,50 Q5,35 20,22 Q38,8 62,14 Q85,20 90,42 Q96,65 82,80" stroke="#333" stroke-width="1.5"/>
  <circle cx="40" cy="45" r="4" fill="#fff" opacity="0.7"/>
  <circle cx="58" cy="42" r="4" fill="#fff" opacity="0.7"/>
  <path d="M38,60 Q50,68 62,60" stroke="#444" stroke-width="2"/>
  <line x1="25" y1="88" x2="18" y2="115" stroke="#111" stroke-width="3"/>
  <line x1="38" y1="90" x2="35" y2="118" stroke="#111" stroke-width="3"/>
  <line x1="62" y1="90" x2="65" y2="118" stroke="#111" stroke-width="3"/>
  <line x1="75" y1="88" x2="82" y2="115" stroke="#111" stroke-width="3"/>
</svg>`,
twisted_star:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="50,10 60,40 90,40 67,58 76,88 50,70 24,88 33,58 10,40 40,40" fill="#e0e0e0" stroke-width="2.5"/>
  <polygon points="50,22 57,42 78,42 62,54 68,74 50,62 32,74 38,54 22,42 43,42" fill="#ccc" stroke-width="1.5"/>
  <circle cx="50" cy="48" r="6" fill="#222" stroke-width="0"/>
  <line x1="50" y1="88" x2="42" y2="118" stroke-width="2.5"/>
  <line x1="50" y1="88" x2="58" y2="118" stroke-width="2.5"/>
</svg>`,
wax_golem:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M38,5 Q50,0 62,5 Q72,10 72,22 Q72,35 62,40 Q50,44 38,40 Q28,35 28,22 Q28,10 38,5Z" fill="#e8e8e8" stroke-width="2"/>
  <path d="M30,42 Q20,55 22,80 Q24,100 18,115" stroke-width="4" stroke="#ddd"/>
  <path d="M70,42 Q80,55 78,80 Q76,100 82,115" stroke-width="4" stroke="#ddd"/>
  <path d="M28,50 Q50,60 72,50 Q78,80 72,100 Q68,115 50,120 Q32,115 28,100 Q22,80 28,50Z" fill="#e0e0e0" stroke-width="2.5"/>
  <path d="M35,62 Q28,70 32,80 Q36,90 40,95" stroke-width="1.5" stroke="#bbb"/>
  <path d="M65,62 Q72,70 68,80 Q64,90 60,95" stroke-width="1.5" stroke="#bbb"/>
  <path d="M40,50 Q38,60 36,75 Q34,88 38,95" stroke-width="2" stroke="#ccc"/>
  <path d="M60,50 Q62,60 64,75 Q66,88 62,95" stroke-width="2" stroke="#ccc"/>
</svg>`,
charcoal_beast:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M20,60 Q10,40 20,20 Q32,5 50,8 Q68,5 80,20 Q90,40 80,60 Q68,78 50,80 Q32,78 20,60Z" fill="#1a1a1a"/>
  <path d="M18,55 Q6,45 8,30 Q12,16 20,20" stroke-width="2" stroke="#444"/>
  <path d="M82,55 Q94,45 92,30 Q88,16 80,20" stroke-width="2" stroke="#444"/>
  <circle cx="36" cy="35" r="5" fill="#fff" opacity="0.8"/>
  <circle cx="64" cy="35" r="5" fill="#fff" opacity="0.8"/>
  <circle cx="36" cy="35" r="2.5" fill="#111"/>
  <circle cx="64" cy="35" r="2.5" fill="#111"/>
  <path d="M40,55 Q50,62 60,55" stroke="#555" stroke-width="2"/>
  <line x1="28" y1="78" x2="20" y2="115" stroke-width="3"/>
  <line x1="40" y1="82" x2="38" y2="118" stroke-width="3"/>
  <line x1="60" y1="82" x2="62" y2="118" stroke-width="3"/>
  <line x1="72" y1="78" x2="80" y2="115" stroke-width="3"/>
</svg>`,
eraser_wraith:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <rect x="18" y="28" width="64" height="38" rx="4" fill="#f0f0f0" stroke-width="2.5"/>
  <rect x="18" y="28" width="32" height="38" rx="4" fill="#d8d8d8" stroke-width="0"/>
  <line x1="50" y1="28" x2="50" y2="66" stroke="#bbb" stroke-width="1.5"/>
  <path d="M22,45 L38,45" stroke="#aaa" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M22,52 L38,52" stroke="#aaa" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M54,42 L74,42" stroke="#bbb" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M54,52 L74,52" stroke="#bbb" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M25,66 Q18,80 22,100 Q26,118 38,120 Q50,122 62,120 Q74,118 78,100 Q82,80 75,66" fill="#f0f0f0" stroke-width="2"/>
  <circle cx="40" cy="82" r="3" fill="#aaa"/>
  <circle cx="60" cy="82" r="3" fill="#aaa"/>
  <path d="M42,95 Q50,100 58,95" stroke-width="1.5"/>
</svg>`,
void_sketch:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="22" r="14" stroke-width="2.5" stroke-dasharray="4,2"/>
  <line x1="50" y1="36" x2="50" y2="88" stroke-width="2.5" stroke-dasharray="5,3"/>
  <line x1="50" y1="55" x2="25" y2="72" stroke-width="2.5" stroke-dasharray="4,2"/>
  <line x1="50" y1="55" x2="75" y2="72" stroke-width="2.5" stroke-dasharray="4,2"/>
  <line x1="50" y1="88" x2="32" y2="120" stroke-width="2.5" stroke-dasharray="4,2"/>
  <line x1="50" y1="88" x2="68" y2="120" stroke-width="2.5" stroke-dasharray="4,2"/>
  <circle cx="50" cy="22" r="5" fill="#111" opacity="0.4"/>
  <line x1="42" y1="14" x2="58" y2="30" stroke="#111" stroke-width="2"/>
  <line x1="58" y1="14" x2="42" y2="30" stroke="#111" stroke-width="2"/>
</svg>`,
ink_serpent:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#111" stroke-linecap="round">
  <path d="M50,5 Q80,5 82,25 Q84,45 65,50 Q45,55 42,72 Q38,90 55,95 Q72,100 75,115" stroke-width="8" stroke="#111"/>
  <path d="M50,5 Q80,5 82,25 Q84,45 65,50 Q45,55 42,72 Q38,90 55,95 Q72,100 75,115" stroke-width="5" stroke="#333"/>
  <ellipse cx="50" cy="7" rx="10" ry="7" fill="#111" stroke-width="0"/>
  <line x1="40" y1="4" x2="34" y2="0" stroke="#111" stroke-width="2"/>
  <line x1="60" y1="4" x2="66" y2="0" stroke="#111" stroke-width="2"/>
  <circle cx="44" cy="7" r="2.5" fill="#fff"/>
  <circle cx="56" cy="7" r="2.5" fill="#fff"/>
  <circle cx="44" cy="7" r="1" fill="#000"/>
  <circle cx="56" cy="7" r="1" fill="#000"/>
</svg>`,
paper_tiger:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="50,8 70,20 70,50 50,62 30,50 30,20" fill="#e8e8e8" stroke-width="2"/>
  <polygon points="50,8 70,20 50,32 30,20" fill="#ddd" stroke-width="1.5"/>
  <polygon points="30,20 50,32 50,62 30,50" fill="#ccc" stroke-width="1.5"/>
  <polygon points="70,20 50,32 50,62 70,50" fill="#d8d8d8" stroke-width="1.5"/>
  <line x1="50" y1="8" x2="50" y2="62" stroke-width="1" stroke-dasharray="2,3"/>
  <line x1="30" y1="20" x2="70" y2="50" stroke-width="1" stroke-dasharray="2,3"/>
  <line x1="70" y1="20" x2="30" y2="50" stroke-width="1" stroke-dasharray="2,3"/>
  <polygon points="42,4 50,0 58,4 50,8" fill="#ddd" stroke-width="1.5"/>
  <polygon points="26,16 30,20 22,24" fill="#ddd" stroke-width="1.5"/>
  <polygon points="74,16 70,20 78,24" fill="#ddd" stroke-width="1.5"/>
  <line x1="38" y1="62" x2="30" y2="95" stroke-width="2.5"/>
  <line x1="44" y1="64" x2="40" y2="98" stroke-width="2.5"/>
  <line x1="56" y1="64" x2="60" y2="98" stroke-width="2.5"/>
  <line x1="62" y1="62" x2="70" y2="95" stroke-width="2.5"/>
</svg>`,
abstract_horror:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M28,80 Q10,60 18,35 Q25,12 45,8 Q65,4 78,22 Q95,42 88,68 Q80,90 60,98 Q38,105 25,92 Z" fill="#e0e0e0" stroke-width="2.5"/>
  <circle cx="38" cy="42" r="6" fill="#111"/>
  <circle cx="62" cy="38" r="8" fill="#111"/>
  <circle cx="75" cy="58" r="4" fill="#111"/>
  <circle cx="30" cy="65" r="5" fill="#111"/>
  <path d="M35,72 Q40,78 48,74 Q56,70 60,76 Q65,82 72,78" stroke-width="2" stroke="#555"/>
  <path d="M45,88 Q50,95 58,90" stroke-width="2"/>
  <line x1="42" y1="98" x2="36" y2="125" stroke-width="2.5"/>
  <line x1="58" y1="98" x2="64" y2="125" stroke-width="2.5"/>
</svg>`,
the_revision:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="18" r="13" stroke-width="2.5"/>
  <line x1="50" y1="31" x2="50" y2="85" stroke-width="2.5"/>
  <line x1="50" y1="48" x2="24" y2="68" stroke-width="2.5"/>
  <line x1="50" y1="48" x2="76" y2="68" stroke-width="2.5"/>
  <line x1="50" y1="85" x2="30" y2="118" stroke-width="2.5"/>
  <line x1="50" y1="85" x2="70" y2="118" stroke-width="2.5"/>
  <line x1="8" y1="8" x2="92" y2="130" stroke="#c0392b" stroke-width="3" opacity="0.7"/>
  <line x1="92" y1="8" x2="8" y2="130" stroke="#c0392b" stroke-width="3" opacity="0.7"/>
  <rect x="6" y="6" width="88" height="128" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
</svg>`,
masterpiece_draft:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <rect x="8" y="8" width="84" height="124" rx="2" stroke-width="3" fill="#f5f5f0"/>
  <rect x="14" y="14" width="72" height="112" rx="1" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="50" cy="42" r="12" stroke-width="2"/>
  <line x1="50" y1="54" x2="50" y2="90" stroke-width="2.5"/>
  <line x1="50" y1="65" x2="28" y2="78" stroke-width="2"/>
  <line x1="50" y1="65" x2="72" y2="78" stroke-width="2"/>
  <line x1="50" y1="90" x2="38" y2="118" stroke-width="2.5"/>
  <line x1="50" y1="90" x2="62" y2="118" stroke-width="2.5"/>
  <path d="M22,22 L16,22 L16,28" stroke-width="2"/>
  <path d="M78,22 L84,22 L84,28" stroke-width="2"/>
  <path d="M22,118 L16,118 L16,112" stroke-width="2"/>
  <path d="M78,118 L84,118 L84,112" stroke-width="2"/>
  <circle cx="50" cy="38" r="3" fill="#222"/>
  <circle cx="44" cy="44" r="2" fill="#222"/>
  <circle cx="56" cy="44" r="2" fill="#222"/>
</svg>`,
rejected_deity:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <polygon points="50,8 56,20 70,20 60,28 64,42 50,34 36,42 40,28 30,20 44,20" fill="#1a1a1a" stroke-width="2"/>
  <path d="M30,44 Q8,38 6,22 Q10,16 18,20 Q22,38 42,44" fill="#1a1a1a" stroke-width="1.5"/>
  <path d="M70,44 Q92,38 94,22 Q90,16 82,20 Q78,38 58,44" fill="#1a1a1a" stroke-width="1.5"/>
  <rect x="34" y="44" width="32" height="38" rx="3" fill="#222" stroke-width="2.5"/>
  <line x1="34" y1="82" x2="28" y2="118" stroke-width="3"/>
  <line x1="66" y1="82" x2="72" y2="118" stroke-width="3"/>
  <line x1="34" y1="62" x2="20" y2="58" stroke-width="2.5"/>
  <line x1="66" y1="62" x2="80" y2="58" stroke-width="2.5"/>
  <line x1="50" y1="44" x2="50" y2="52" stroke="#fff" stroke-width="1.5" opacity="0.5"/>
  <circle cx="43" cy="56" r="3" fill="#fff" opacity="0.6"/>
  <circle cx="57" cy="56" r="3" fill="#fff" opacity="0.6"/>
</svg>`,
infinite_loop:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M50,70 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" stroke-width="3"/>
  <path d="M50,70 m-18,0 a18,18 0 1,0 36,0 a18,18 0 1,0 -36,0" stroke-width="2.5"/>
  <path d="M50,70 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0" stroke-width="2" fill="#1a1a1a"/>
  <path d="M50,40 Q60,28 72,30 Q84,32 84,45 Q84,58 72,65" stroke-width="2" stroke-dasharray="3,2"/>
  <path d="M50,40 Q40,28 28,30 Q16,32 16,45 Q16,58 28,65" stroke-width="2" stroke-dasharray="3,2"/>
  <path d="M26,95 L20,112" stroke-width="2.5"/>
  <path d="M74,95 L80,112" stroke-width="2.5"/>
  <path d="M50,100 L50,118" stroke-width="2.5"/>
</svg>`,
the_critique:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="18" r="13" stroke-width="2.5"/>
  <path d="M38,14 Q50,8 62,14" stroke-width="1.5"/>
  <rect x="30" y="32" width="40" height="30" rx="2" fill="#e8e8e8" stroke-width="2.5"/>
  <line x1="38" y1="42" x2="62" y2="42" stroke-width="1.5"/>
  <line x1="38" y1="49" x2="62" y2="49" stroke-width="1.5"/>
  <line x1="38" y1="56" x2="52" y2="56" stroke-width="1.5"/>
  <line x1="30" y1="62" x2="20" y2="88" stroke-width="2.5"/>
  <line x1="70" y1="62" x2="80" y2="50" stroke-width="2.5"/>
  <line x1="80" y1="50" x2="94" y2="58" stroke-width="2.5"/>
  <line x1="80" y1="50" x2="85" y2="38" stroke-width="2"/>
  <line x1="70" y1="62" x2="68" y2="95" stroke-width="2.5"/>
  <line x1="38" y1="62" x2="30" y2="95" stroke-width="2.5"/>
  <line x1="30" y1="95" x2="22" y2="128" stroke-width="2.5"/>
  <line x1="68" y1="95" x2="76" y2="128" stroke-width="2.5"/>
</svg>`,
final_draft:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#111" stroke-linecap="round">
  <polygon points="50,5 58,18 74,15 66,28 78,38 62,38 58,54 50,42 42,54 38,38 22,38 34,28 26,15 42,18" fill="#111" stroke-width="2"/>
  <circle cx="50" cy="32" r="8" fill="#fff" stroke="#111" stroke-width="2"/>
  <circle cx="47" cy="30" r="2" fill="#111"/>
  <circle cx="53" cy="30" r="2" fill="#111"/>
  <rect x="30" y="54" width="40" height="34" rx="3" fill="#1a1a1a" stroke-width="2.5"/>
  <path d="M20,56 Q8,52 6,38 Q10,30 16,34 Q18,50 30,56" fill="#111" stroke-width="1.5"/>
  <path d="M80,56 Q92,52 94,38 Q90,30 84,34 Q82,50 70,56" fill="#111" stroke-width="1.5"/>
  <line x1="30" y1="88" x2="22" y2="118" stroke-width="3.5"/>
  <line x1="70" y1="88" x2="78" y2="118" stroke-width="3.5"/>
  <line x1="30" y1="70" x2="14" y2="64" stroke-width="3"/>
  <line x1="70" y1="70" x2="86" y2="64" stroke-width="3"/>
  <path d="M38,54 Q50,48 62,54" stroke="#fff" stroke-width="1.5" opacity="0.5"/>
</svg>`
};

// ═══════════════════════════════════════════════════════
// GAME DATA
// ═══════════════════════════════════════════════════════
const RESOURCE_LABELS={gra:'OLD',wax:'BRONZE',cha:'SILVER',gold:'GOLD',plat:'PLAT'};
const CREATURES = [
  // ── TIER 1 — COMMON ────────────────────────────────
  {id:'hollow_wretch',name:'HOLLOW WRETCH',tag:'Nothing left but need.',atk:2,def:1.0,hp:10,count:null,rewards:{atk:0.12,gra:0.15},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'plague_hound',name:'PLAGUE HOUND',tag:'Loyal to the rot.',atk:3,def:1.1,hp:550,count:3,rewards:{hp:0.4,gra:0.18},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'ashwalker',name:'ASHWALKER',tag:'Stepped out of the fire.',atk:4,def:1.1,hp:600,count:'10%',rewards:{atk:0.13,gra:0.2},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'bonepicker',name:'BONEPICKER',tag:'Patience at its worst.',atk:5,def:1.2,hp:650,count:null,rewards:{gra:0.22,atk:0.11},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'grave_rat',name:'GRAVE RAT',tag:'It was here first.',atk:6,def:1.2,hp:700,count:2,rewards:{hp:0.45,gra:0.2},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'mudborn',name:'MUDBORN',tag:'The swamp made it.',atk:7,def:1.3,hp:750,count:'12%',rewards:{atk:0.14,gra:0.24},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'corpse_crawler',name:'CORPSE CRAWLER',tag:'Moving. Somehow.',atk:8,def:1.3,hp:800,count:null,rewards:{gra:0.26,hp:0.5},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'rotting_serf',name:'ROTTING SERF',tag:'Still working after death.',atk:9,def:1.4,hp:850,count:4,rewards:{atk:0.15,gra:0.28},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'blighted_husk',name:'BLIGHTED HUSK',tag:'The disease won.',atk:10,def:1.4,hp:900,count:'15%',rewards:{hp:0.55,gra:0.3},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'soot_fiend',name:'SOOT FIEND',tag:'Left over from something worse.',atk:11,def:1.5,hp:950,count:null,rewards:{atk:0.16,gra:0.32},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'wretched_thrall',name:'WRETCHED THRALL',tag:'Serving without knowing why.',atk:13,def:1.6,hp:1000,count:3,rewards:{gra:0.34,atk:0.14},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'festering_vagrant',name:'FESTERING VAGRANT',tag:'Homeless and hungry.',atk:14,def:1.6,hp:1050,count:'15%',rewards:{hp:0.6,gra:0.35},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'hollow_eye',name:'HOLLOW EYE',tag:'Nothing looks back.',atk:15,def:1.7,hp:1100,count:null,rewards:{atk:0.17,gra:0.37},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'dungeon_tick',name:'DUNGEON TICK',tag:'It found you.',atk:17,def:1.7,hp:1150,count:5,rewards:{gra:0.4,hp:0.65},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'gravel_ghoul',name:'GRAVEL GHOUL',tag:'Dug itself out.',atk:18,def:1.8,hp:1200,count:'18%',rewards:{atk:0.18,gra:0.42},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'bile_spawn',name:'BILE SPAWN',tag:'Born wrong.',atk:19,def:1.8,hp:1250,count:null,rewards:{hp:0.7,gra:0.44},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'mossrot',name:'MOSSROT',tag:'Where things go to end.',atk:21,def:1.9,hp:1300,count:2,rewards:{atk:0.19,gra:0.46},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'scab_crawler',name:'SCAB CRAWLER',tag:'Every wound is a door.',atk:22,def:1.9,hp:1350,count:'20%',rewards:{gra:0.48,atk:0.17},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'charnel_fly',name:'CHARNEL FLY',tag:'Drawn to the smell.',atk:23,def:2.0,hp:1400,count:null,rewards:{hp:0.75,gra:0.5},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'skinless_beggar',name:'SKINLESS BEGGAR',tag:'Still asking.',atk:25,def:2.0,hp:1450,count:4,rewards:{atk:0.2,gra:0.52},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'weeping_hollow',name:'WEEPING HOLLOW',tag:'The grief outlasted the body.',atk:26,def:2.1,hp:1500,count:'20%',rewards:{gra:0.54,hp:0.8},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'maggot_knight',name:'MAGGOT KNIGHT',tag:'Earned its title somehow.',atk:27,def:2.1,hp:1550,count:null,rewards:{atk:0.21,gra:0.56},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'cinder_wretch',name:'CINDER WRETCH',tag:'Burned and kept going.',atk:29,def:2.2,hp:1600,count:3,rewards:{hp:0.85,gra:0.58},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'sallow_shade',name:'SALLOW SHADE',tag:'A dim thing.',atk:30,def:2.2,hp:1650,count:'22%',rewards:{atk:0.22,gra:0.6},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'mud_ghoul',name:'MUD GHOUL',tag:'Dredged from below.',atk:32,def:2.3,hp:1700,count:null,rewards:{gra:0.62,hp:0.9},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'bonegnaw',name:'BONEGNAW',tag:'Always chewing.',atk:33,def:2.3,hp:1750,count:5,rewards:{atk:0.23,gra:0.64},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'ashen_tramp',name:'ASHEN TRAMP',tag:'Wandered here from the ruins.',atk:34,def:2.4,hp:1800,count:'22%',rewards:{hp:0.95,gra:0.66},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'foul_creeper',name:'FOUL CREEPER',tag:'Slow but certain.',atk:36,def:2.4,hp:1850,count:null,rewards:{atk:0.24,gra:0.68},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'plague_bearer',name:'PLAGUE BEARER',tag:'A gift nobody wanted.',atk:37,def:2.5,hp:1900,count:2,rewards:{gra:0.7,hp:1.0},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'tallow_shade',name:'TALLOW SHADE',tag:'Rendered down to spite.',atk:39,def:2.5,hp:1950,count:'25%',rewards:{atk:0.25,gra:0.72},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'rot_worm',name:'ROT WORM',tag:'Patient underground.',atk:40,def:2.6,hp:2000,count:null,rewards:{hp:1.05,gra:0.74},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'filth_shambler',name:'FILTH SHAMBLER',tag:'Moving against all reason.',atk:42,def:2.6,hp:2050,count:3,rewards:{atk:0.26,gra:0.76},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'corpse_leech',name:'CORPSE LEECH',tag:'Takes what it needs.',atk:43,def:2.7,hp:2100,count:'25%',rewards:{gra:0.78,hp:1.1},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'bleached_lurker',name:'BLEACHED LURKER',tag:'Waiting in the white.',atk:45,def:2.7,hp:2150,count:null,rewards:{atk:0.27,gra:0.8},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'grave_digger',name:'GRAVE DIGGER',tag:'Finished the job, then stayed.',atk:46,def:2.8,hp:2200,count:4,rewards:{hp:1.15,gra:0.82},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'putrid_wisp',name:'PUTRID WISP',tag:'Even the light here decays.',atk:48,def:2.8,hp:2250,count:'28%',rewards:{atk:0.28,gra:0.84},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'wailing_husk',name:'WAILING HUSK',tag:'No one answered.',atk:49,def:2.9,hp:2300,count:null,rewards:{gra:0.86,hp:1.2},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'dustbone',name:'DUSTBONE',tag:'Older than memory.',atk:51,def:2.9,hp:2350,count:2,rewards:{atk:0.29,gra:0.88},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'sludge_spawn',name:'SLUDGE SPAWN',tag:'From the drain.',atk:52,def:3.0,hp:2400,count:'28%',rewards:{hp:1.25,gra:0.9},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'tomb_rat',name:'TOMB RAT',tag:'It knows the tunnels.',atk:54,def:3.0,hp:2450,count:null,rewards:{atk:0.3,gra:0.92},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'cracked_skull',name:'CRACKED SKULL',tag:'Still thinking.',atk:55,def:3.1,hp:2500,count:5,rewards:{gra:0.94,hp:1.3},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'pale_shambler',name:'PALE SHAMBLER',tag:'Color long forgotten.',atk:57,def:3.1,hp:2550,count:'30%',rewards:{atk:0.31,gra:0.96},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'rotfen_cur',name:'ROTFEN CUR',tag:'A bad dog.',atk:58,def:3.2,hp:2600,count:null,rewards:{hp:1.35,gra:0.98},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'ash_crawler',name:'ASH CRAWLER',tag:'What the fire left behind.',atk:60,def:3.2,hp:2650,count:3,rewards:{atk:0.32,gra:1.0},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'bonedust_wretch',name:'BONEDUST WRETCH',tag:'Powdered thin by years.',atk:61,def:3.3,hp:2700,count:'30%',rewards:{gra:1.02,hp:1.4},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'famine_shade',name:'FAMINE SHADE',tag:'Wants what you have.',atk:63,def:3.3,hp:2750,count:null,rewards:{atk:0.33,gra:1.04},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'cobweb_ghoul',name:'COBWEB GHOUL',tag:"Hasn't moved in ages.",atk:64,def:3.4,hp:2800,count:4,rewards:{hp:1.45,gra:1.06},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'soot_crawler',name:'SOOT CRAWLER',tag:'Marks everything it touches.',atk:66,def:3.4,hp:2850,count:'32%',rewards:{atk:0.34,gra:1.08},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'charred_beggar',name:'CHARRED BEGGAR',tag:'Survived the wrong things.',atk:67,def:3.5,hp:2900,count:null,rewards:{gra:1.1,hp:1.5},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'hollow_pup',name:'HOLLOW PUP',tag:'Lost before it began.',atk:69,def:3.5,hp:2950,count:2,rewards:{atk:0.35,gra:1.12},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'mire_fiend',name:'MIRE FIEND',tag:'Deep in the wet.',atk:70,def:3.6,hp:3000,count:'32%',rewards:{hp:1.55,gra:1.14},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'ditch_ghoul',name:'DITCH GHOUL',tag:'Roadside nuisance.',atk:72,def:3.6,hp:3050,count:null,rewards:{atk:0.36,gra:1.16},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'scorch_wretch',name:'SCORCH WRETCH',tag:'Too close to the heat.',atk:73,def:3.7,hp:3100,count:5,rewards:{gra:1.18,hp:1.6},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'festering_hound',name:'FESTERING HOUND',tag:'It still tries to wag its tail.',atk:75,def:3.7,hp:3150,count:'35%',rewards:{atk:0.37,gra:1.2},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'gutter_shade',name:'GUTTER SHADE',tag:'Lives in the runoff.',atk:76,def:3.8,hp:3200,count:null,rewards:{hp:1.65,gra:1.22},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'bog_lurker',name:'BOG LURKER',tag:'Patient as the water.',atk:78,def:3.8,hp:3250,count:3,rewards:{atk:0.38,gra:1.24},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'cinder_rat',name:'CINDER RAT',tag:'Small and furious.',atk:79,def:3.9,hp:3300,count:'35%',rewards:{gra:1.26,hp:1.7},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'dried_husk',name:'DRIED HUSK',tag:'Just the shape of something.',atk:81,def:3.9,hp:3350,count:null,rewards:{atk:0.39,gra:1.28},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'brackish_spawn',name:'BRACKISH SPAWN',tag:'Salt and rot.',atk:82,def:4.0,hp:3400,count:2,rewards:{hp:1.75,gra:1.3},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'sunken_wretch',name:'SUNKEN WRETCH',tag:'Came up from below.',atk:84,def:4.0,hp:3450,count:'38%',rewards:{atk:0.4,gra:1.32},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'tallow_ghoul',name:'TALLOW GHOUL',tag:'Greasy with time.',atk:85,def:4.1,hp:3500,count:null,rewards:{gra:1.34,hp:1.8},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'blister_fiend',name:'BLISTER FIEND',tag:'Pressure made it awful.',atk:87,def:4.1,hp:3550,count:4,rewards:{atk:0.41,gra:1.36},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'gravel_rat',name:'GRAVEL RAT',tag:'Sharp teeth, no brain.',atk:88,def:4.2,hp:3600,count:'38%',rewards:{hp:1.85,gra:1.38},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'mudwater_shade',name:'MUDWATER SHADE',tag:'Visibility zero.',atk:90,def:4.2,hp:3650,count:null,rewards:{atk:0.42,gra:1.4},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'pale_crawler',name:'PALE CRAWLER',tag:'Moves like doubt.',atk:91,def:4.3,hp:3700,count:3,rewards:{gra:1.42,hp:1.9},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'crumbling_thrall',name:'CRUMBLING THRALL',tag:'Held together by orders.',atk:93,def:4.3,hp:3750,count:'40%',rewards:{atk:0.43,gra:1.44},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'fen_ghoul',name:'FEN GHOUL',tag:'The marsh kept it.',atk:94,def:4.4,hp:3800,count:null,rewards:{hp:1.95,gra:1.46},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'ashen_cur',name:'ASHEN CUR',tag:'Scorched and mean.',atk:96,def:4.4,hp:3850,count:5,rewards:{atk:0.44,gra:1.48},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'charnel_rat',name:'CHARNEL RAT',tag:'Feeds on the fallen.',atk:97,def:4.5,hp:3900,count:'40%',rewards:{gra:1.5,hp:2.0},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'bone_fly',name:'BONE FLY',tag:'Loud, wrong, everywhere.',atk:99,def:4.5,hp:3950,count:null,rewards:{atk:0.45,gra:1.52},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'sour_shade',name:'SOUR SHADE',tag:'The taste lingers.',atk:100,def:4.6,hp:4000,count:2,rewards:{hp:2.05,gra:1.54},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'rot_pup',name:'ROT PUP',tag:'Young and already ruined.',atk:102,def:4.6,hp:4100,count:'42%',rewards:{atk:0.46,gra:1.56},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'crypt_tick',name:'CRYPT TICK',tag:'Found in the lining.',atk:103,def:4.7,hp:4200,count:null,rewards:{gra:1.58,hp:2.1},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'damp_husk',name:'DAMP HUSK',tag:'The wet got in.',atk:105,def:4.7,hp:4300,count:4,rewards:{atk:0.47,gra:1.6},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'scab_fiend',name:'SCAB FIEND',tag:'Its wounds are armor.',atk:106,def:4.8,hp:4400,count:'42%',rewards:{hp:2.15,gra:1.62},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'hollow_stray',name:'HOLLOW STRAY',tag:'Looking for something gone.',atk:108,def:4.8,hp:4500,count:null,rewards:{atk:0.48,gra:1.64},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'cobweb_wretch',name:'COBWEB WRETCH',tag:'Suspended in old silk.',atk:109,def:4.9,hp:4600,count:3,rewards:{gra:1.66,hp:2.2},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'silt_shambler',name:'SILT SHAMBLER',tag:'The riverbed walks.',atk:111,def:4.9,hp:4800,count:'45%',rewards:{atk:0.49,gra:1.68},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'dusty_ghoul',name:'DUSTY GHOUL',tag:'Settled over decades.',atk:112,def:5.0,hp:5000,count:null,rewards:{hp:2.25,gra:1.7},vicReq:5,new:false,tier:1,type:'scrap'},
  {id:'hollow_shambler',name:'HOLLOW SHAMBLER',tag:'Nothing inside but hunger.',atk:114,def:5.0,hp:5200,count:'50%',rewards:{atk:0.5,gra:1.72},vicReq:5,new:false,tier:1,type:'scrap'},
  // ── TIER 2 — UNCOMMON ──────────────────────────────
  {id:'cursed_knight',name:'CURSED KNIGHT',tag:'The oath became a shackle.',atk:120,def:5.5,hp:5500,count:null,rewards:{atk:0.9,gra:2.0,arm:0.05},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'plague_archer',name:'PLAGUE ARCHER',tag:'Every arrow carries a diagnosis.',atk:130,def:5.8,hp:5800,count:3,rewards:{gra:2.2,wax:0.5},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'blighted_halberdier',name:'BLIGHTED HALBERDIER',tag:'Reach and ruin combined.',atk:140,def:6.1,hp:6100,count:'12%',rewards:{atk:1.0,gra:2.4,arm:0.06},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'hollow_sergeant',name:'HOLLOW SERGEANT',tag:'Giving orders it cannot follow.',atk:150,def:6.4,hp:6400,count:null,rewards:{gra:2.6,wax:0.8},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'rot_shaman',name:'ROT SHAMAN',tag:'Blessed by the wrong gods.',atk:160,def:6.7,hp:6700,count:2,rewards:{atk:1.1,gra:2.8,arm:0.07},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'ashbound_soldier',name:'ASHBOUND SOLDIER',tag:'Drafted after death.',atk:170,def:7.0,hp:7000,count:'15%',rewards:{gra:3.0,wax:1.0},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'bonecage_warrior',name:'BONECAGE WARRIOR',tag:'Wears its ribs outside.',atk:180,def:7.3,hp:7300,count:null,rewards:{atk:1.2,gra:3.2,arm:0.08},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'gravewarden',name:'GRAVEWARDEN',tag:'Protecting the wrong side.',atk:190,def:7.6,hp:7600,count:4,rewards:{gra:3.4,wax:1.2},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'fetid_executioner',name:'FETID EXECUTIONER',tag:'Justice went rancid.',atk:200,def:7.9,hp:7900,count:'18%',rewards:{atk:1.3,gra:3.6,arm:0.09},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'rusted_templar',name:'RUSTED TEMPLAR',tag:'Faith corroded the armor.',atk:210,def:8.2,hp:8200,count:null,rewards:{gra:3.8,wax:1.4},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'ironblight_monk',name:'IRONBLIGHT MONK',tag:'Discipline turned inward, then rotten.',atk:221,def:8.5,hp:8500,count:3,rewards:{atk:1.4,gra:4.0,arm:0.1},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'crypt_sentinel',name:'CRYPT SENTINEL',tag:'Never told the war ended.',atk:231,def:8.8,hp:8800,count:'20%',rewards:{gra:4.2,wax:1.6},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'void_hound',name:'VOID HOUND',tag:'Trained to hunt the living.',atk:241,def:9.1,hp:9100,count:null,rewards:{atk:1.5,gra:4.4,arm:0.11},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'soulless_pikeman',name:'SOULLESS PIKEMAN',tag:'The point is the only thing left.',atk:251,def:9.4,hp:9400,count:5,rewards:{gra:4.6,wax:1.8},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'charnel_blade',name:'CHARNEL BLADE',tag:'The sword came first; the corpse second.',atk:261,def:9.7,hp:9700,count:'22%',rewards:{atk:1.6,gra:4.8,arm:0.12},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'flayed_scout',name:'FLAYED SCOUT',tag:'Reconnaissance at any cost.',atk:271,def:10.0,hp:10000,count:null,rewards:{gra:5.0,wax:2.0},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'worm_priest',name:'WORM PRIEST',tag:'The congregation answers.',atk:282,def:10.4,hp:10300,count:2,rewards:{atk:1.7,gra:5.2,arm:0.13},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'ashgrave_guardian',name:'ASHGRAVE GUARDIAN',tag:'Nothing to guard. Still guarding.',atk:292,def:10.7,hp:10600,count:'25%',rewards:{gra:5.4,wax:2.2},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'mournful_specter',name:'MOURNFUL SPECTER',tag:'The grief is the danger.',atk:302,def:11.0,hp:10900,count:null,rewards:{atk:1.8,gra:5.6,arm:0.14},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'marrow_stalker',name:'MARROW STALKER',tag:'It wants what is inside.',atk:312,def:11.3,hp:11200,count:4,rewards:{gra:5.8,wax:2.4},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'duskblade_revenant',name:'DUSKBLADE REVENANT',tag:'Returned with interest.',atk:322,def:11.6,hp:11500,count:'28%',rewards:{atk:1.9,gra:6.0,arm:0.15},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'smoldering_footman',name:'SMOLDERING FOOTMAN',tag:'On fire. Still reporting.',atk:333,def:12.0,hp:11800,count:null,rewards:{gra:6.2,wax:2.6},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'blight_ranger',name:'BLIGHT RANGER',tag:'Tracking the living.',atk:343,def:12.3,hp:12100,count:3,rewards:{atk:2.0,gra:6.4,arm:0.16},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'accursed_legionnaire',name:'ACCURSED LEGIONNAIRE',tag:'The legion marched on without orders.',atk:353,def:12.6,hp:12400,count:'30%',rewards:{gra:6.6,wax:2.8},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'dead_eye_marksman',name:'DEAD EYE MARKSMAN',tag:'The eye was the last thing to go.',atk:363,def:12.9,hp:12700,count:null,rewards:{atk:2.1,gra:6.8,arm:0.17},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'tomb_warden',name:'TOMB WARDEN',tag:'The tomb is wherever it stands.',atk:373,def:13.2,hp:13000,count:5,rewards:{gra:7.0,wax:3.0},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'sable_crow',name:'SABLE CROW',tag:'Circles everything it intends to ruin.',atk:383,def:13.5,hp:13300,count:'32%',rewards:{atk:2.2,gra:7.2,arm:0.18},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'ironrot_berserker',name:'IRONROT BERSERKER',tag:'Anger was the last thing preserved.',atk:394,def:13.9,hp:13600,count:null,rewards:{gra:7.4,wax:3.2},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'plague_monk',name:'PLAGUE MONK',tag:'Spreading the doctrine.',atk:404,def:14.2,hp:13900,count:2,rewards:{atk:2.3,gra:7.6,arm:0.19},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'blighted_squire',name:'BLIGHTED SQUIRE',tag:'The knighthood never came.',atk:414,def:14.5,hp:14200,count:'35%',rewards:{gra:7.8,wax:3.4},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'hollow_cavalier',name:'HOLLOW CAVALIER',tag:'The horse is gone. It still rides.',atk:424,def:14.8,hp:14500,count:null,rewards:{atk:2.4,gra:8.0,arm:0.2},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'gravebound_duelist',name:'GRAVEBOUND DUELIST',tag:'An honor bound to the wrong world.',atk:434,def:15.1,hp:14700,count:4,rewards:{gra:8.2,wax:3.6},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'withered_inquisitor',name:'WITHERED INQUISITOR',tag:'The questions never stopped.',atk:445,def:15.5,hp:15000,count:'38%',rewards:{atk:2.5,gra:8.4,arm:0.21},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'shroud_knight',name:'SHROUD KNIGHT',tag:'The burial cloth became the armor.',atk:455,def:15.8,hp:15200,count:null,rewards:{gra:8.6,wax:3.8},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'bone_arbalist',name:'BONE ARBALIST',tag:'The bolts are personal.',atk:465,def:16.1,hp:15500,count:3,rewards:{atk:2.6,gra:8.8,arm:0.22},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'ash_zealot',name:'ASH ZEALOT',tag:'Burned for the cause. Returned for more.',atk:475,def:16.4,hp:15700,count:'40%',rewards:{gra:9.0,wax:4.0},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'saltblood_soldier',name:'SALTBLOOD SOLDIER',tag:'Preserved in spite.',atk:485,def:16.7,hp:16000,count:null,rewards:{atk:2.7,gra:9.2,arm:0.23},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'dread_footman',name:'DREAD FOOTMAN',tag:'The lowest rank. The worst fate.',atk:496,def:17.1,hp:16300,count:5,rewards:{gra:9.4,wax:4.2},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'ruinborn_warden',name:'RUINBORN WARDEN',tag:'Made from the rubble. Guards the rubble.',atk:506,def:17.4,hp:16600,count:'42%',rewards:{atk:2.8,gra:9.6,arm:0.24},vicReq:5,new:false,tier:2,type:'scrap'},
  {id:'forsaken_outrider',name:'FORSAKEN OUTRIDER',tag:'Left behind on purpose.',atk:516,def:17.7,hp:16900,count:null,rewards:{gra:9.8,wax:4.4},vicReq:5,new:false,tier:2,type:'scrap'},
  // ── TIER 3 — RARE ──────────────────────────────────
  {id:'bonegrinder',name:'BONEGRINDER',tag:'The name is the method.',atk:800,def:35,hp:22000,count:null,rewards:{atk:5.0,arm:1.2,gra:100},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'voidborn_witch',name:'VOIDBORN WITCH',tag:'She came from nothing and brought it with her.',atk:850,def:36.5,hp:24000,count:'15%',rewards:{gra:120,wax:20,crc:0.08},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'weeping_shade',name:'WEEPING SHADE',tag:'The sorrow is the weapon.',atk:900,def:38,hp:26000,count:2,rewards:{atk:5.5,gra:140,arm:1.5},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'soul_eater',name:'SOUL EATER',tag:'Efficient. Thorough. Hungry.',atk:950,def:39.5,hp:28000,count:null,rewards:{gra:160,wax:30,cha:5},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'dread_colossus',name:'DREAD COLOSSUS',tag:'Too large to comprehend. Too real to ignore.',atk:1000,def:41,hp:30000,count:'18%',rewards:{atk:6.0,arm:2.0,gra:180},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'flesh_sculptor',name:'FLESH SCULPTOR',tag:'It has opinions about your shape.',atk:1050,def:42.5,hp:32000,count:null,rewards:{gra:200,wax:40,cha:7},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'blighted_hydra',name:'BLIGHTED HYDRA',tag:'Cut one head. Grieve twice.',atk:1100,def:44,hp:34000,count:3,rewards:{atk:6.5,arm:2.5,gra:220},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'pale_stalker',name:'PALE STALKER',tag:'Moving only when unseen.',atk:1150,def:45.5,hp:36000,count:'20%',rewards:{gra:240,wax:50,crc:0.1},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'abyssal_hound',name:'ABYSSAL HOUND',tag:'Trained in the dark for the dark.',atk:1200,def:47,hp:38000,count:null,rewards:{atk:7.0,arm:3.0,gra:260},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'marrow_golem',name:'MARROW GOLEM',tag:'Built from what the battlefield left over.',atk:1250,def:48.5,hp:40000,count:4,rewards:{gra:280,wax:60,cha:10},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'gravemind_thrall',name:'GRAVEMIND THRALL',tag:'The grave is the mind now.',atk:1300,def:50,hp:42000,count:'22%',rewards:{atk:7.5,arm:3.5,gra:300},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'soulrend_fiend',name:'SOULREND FIEND',tag:'It tears at something you cannot defend.',atk:1355,def:51.5,hp:44000,count:null,rewards:{gra:320,wax:70,cha:12},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'crypt_behemoth',name:'CRYPT BEHEMOTH',tag:'The crypt was built around it.',atk:1410,def:53,hp:46000,count:2,rewards:{atk:8.0,arm:4.0,gra:340},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'ashen_revenant',name:'ASHEN REVENANT',tag:'Burned. Returned. Angry.',atk:1465,def:54.5,hp:48000,count:'25%',rewards:{gra:360,wax:80,cha:14},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'hollow_titan',name:'HOLLOW TITAN',tag:'Enormous. Nothing inside.',atk:1520,def:56,hp:50000,count:null,rewards:{atk:8.5,arm:4.5,gra:380},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'plague_chimera',name:'PLAGUE CHIMERA',tag:'The worst of several things.',atk:1575,def:57.5,hp:52000,count:3,rewards:{gra:400,wax:90,cha:16},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'bone_leviathan',name:'BONE LEVIATHAN',tag:'It surfaces when hope fades.',atk:1630,def:59,hp:54000,count:'28%',rewards:{atk:9.0,arm:5.0,gra:420},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'wretched_oracle',name:'WRETCHED ORACLE',tag:'It knows. It does not care.',atk:1685,def:60.5,hp:56000,count:null,rewards:{gra:440,wax:100,cha:18},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'dusk_warden',name:'DUSK WARDEN',tag:'Protecting the threshold between worlds.',atk:1740,def:62,hp:58000,count:4,rewards:{atk:9.5,arm:5.5,gra:460},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'voidtouched_wraith',name:'VOIDTOUCHED WRAITH',tag:'The void left fingerprints.',atk:1795,def:63.5,hp:60000,count:'30%',rewards:{gra:480,wax:110,cha:20},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'ironblight_giant',name:'IRONBLIGHT GIANT',tag:'Rust and contempt made flesh.',atk:1850,def:65,hp:62000,count:null,rewards:{atk:10.0,arm:6.0,gra:500},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'charnel_hydra',name:'CHARNEL HYDRA',tag:'Each head remembers a different death.',atk:1905,def:66.5,hp:64000,count:2,rewards:{gra:520,wax:120,cha:22},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'nightmare_shade',name:'NIGHTMARE SHADE',tag:'It is what you fear it to be.',atk:1960,def:68,hp:66000,count:'32%',rewards:{atk:10.5,arm:6.5,gra:540},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'graveworm_matron',name:'GRAVEWORM MATRON',tag:'Mother of what the ground produces.',atk:2015,def:69.5,hp:68000,count:null,rewards:{gra:560,wax:130,cha:24},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'soul_harvester',name:'SOUL HARVESTER',tag:'Working the final field.',atk:2070,def:71,hp:70000,count:3,rewards:{atk:11.0,arm:7.0,gra:580},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'blighted_cyclops',name:'BLIGHTED CYCLOPS',tag:'One eye. Sees everything.',atk:2125,def:72.5,hp:72000,count:'35%',rewards:{gra:600,wax:140,cha:26},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'desecrated_giant',name:'DESECRATED GIANT',tag:'The sacred made obscene.',atk:2180,def:74,hp:74000,count:null,rewards:{atk:11.5,arm:7.5,gra:620},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'moonblood_specter',name:'MOONBLOOD SPECTER',tag:'Lunar light brought it here.',atk:2235,def:75.5,hp:76000,count:4,rewards:{gra:640,wax:150,cha:28},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'gravesinger',name:'GRAVESINGER',tag:'The song is the sentence.',atk:2290,def:77,hp:78000,count:'38%',rewards:{atk:12.0,arm:8.0,gra:660},vicReq:5,new:false,tier:3,type:'scrap'},
  {id:'blight_behemoth',name:'BLIGHT BEHEMOTH',tag:'Slow. Absolute.',atk:2345,def:78.5,hp:80000,count:null,rewards:{gra:680,wax:160,cha:30},vicReq:5,new:false,tier:3,type:'scrap'},
  // ── TIER 4 — EPIC ──────────────────────────────────
  {id:'lich_sovereign',name:'LICH SOVEREIGN',tag:'Death is a promotion.',atk:2800,def:95,hp:80000,count:null,rewards:{atk:20,arm:8,gra:1000,wax:300},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'ashen_seraph',name:'ASHEN SERAPH',tag:'Holy war, concluded badly.',atk:3000,def:100,hp:88000,count:'20%',rewards:{gra:1200,wax:380,cha:40},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'dread_overlord',name:'DREAD OVERLORD',tag:'Command without a kingdom left.',atk:3200,def:105,hp:96000,count:4,rewards:{atk:22,arm:10,gra:1400,wax:450},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'plague_archon',name:'PLAGUE ARCHON',tag:'The authority of disease.',atk:3400,def:110,hp:104000,count:null,rewards:{gra:1600,wax:520,cha:55,mxd:0.5},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'voidborn_tyrant',name:'VOIDBORN TYRANT',tag:'Rulership learned from nothing.',atk:3600,def:115,hp:112000,count:'25%',rewards:{atk:25,arm:12,gra:1800,wax:600},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'hollow_god_husk',name:'HOLLOW GOD-HUSK',tag:'Something divine was here.',atk:3800,def:120,hp:120000,count:null,rewards:{gra:2000,wax:680,cha:70,mxd:0.7},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'soulweaver_ancient',name:'SOULWEAVER ANCIENT',tag:'It has been weaving since before you.',atk:4000,def:128,hp:128000,count:3,rewards:{atk:28,arm:14,gra:2200,wax:760},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'desecrated_archangel',name:'DESECRATED ARCHANGEL',tag:'The fall was not an accident.',atk:4200,def:135,hp:136000,count:'30%',rewards:{gra:2400,wax:840,cha:85,crc:0.2},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'bonelord_eternal',name:'BONELORD ETERNAL',tag:'Has not stopped since it began.',atk:4400,def:142,hp:144000,count:null,rewards:{atk:32,arm:16,gra:2600,wax:920},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'maelstrom_wraith',name:'MAELSTROM WRAITH',tag:'The storm learned to hate.',atk:4600,def:149,hp:152000,count:5,rewards:{gra:2800,wax:1000,cha:100,mxd:0.9},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'abyssal_monarch',name:'ABYSSAL MONARCH',tag:'Crowned in the deepest dark.',atk:4800,def:157,hp:160000,count:'35%',rewards:{atk:36,arm:18,gra:3000,wax:1100},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'gravemind_elder',name:'GRAVEMIND ELDER',tag:'The oldest thought in the graveyard.',atk:5000,def:164,hp:168000,count:null,rewards:{gra:3200,wax:1200,cha:120,crc:0.3},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'bloodbound_colossus',name:'BLOODBOUND COLOSSUS',tag:'Held together by a pact and old blood.',atk:5200,def:171,hp:176000,count:2,rewards:{atk:40,arm:20,gra:3400,wax:1300},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'cursed_demigod',name:'CURSED DEMIGOD',tag:'Half divine, fully damned.',atk:5400,def:178,hp:184000,count:'40%',rewards:{gra:3600,wax:1400,cha:140,mxd:1.2},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'pale_dominion',name:'PALE DOMINION',tag:'Sovereignty over nothing living.',atk:5600,def:185,hp:192000,count:null,rewards:{atk:44,arm:22,gra:3800,wax:1500},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'hollow_primarch',name:'HOLLOW PRIMARCH',tag:'The first of a lineage of ruin.',atk:5800,def:192,hp:200000,count:4,rewards:{gra:4000,wax:1600,cha:160,crc:0.4},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'forsaken_titan',name:'FORSAKEN TITAN',tag:'Abandoned by the age that made it.',atk:6000,def:200,hp:210000,count:'45%',rewards:{atk:48,arm:24,gra:4200,wax:1700},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'sorrow_sovereign',name:'SORROW SOVEREIGN',tag:'Rules only what it has destroyed.',atk:6200,def:207,hp:220000,count:null,rewards:{gra:4400,wax:1800,cha:180,mxd:1.5},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'shattered_deity',name:'SHATTERED DEITY',tag:'The pieces are still dangerous.',atk:6500,def:215,hp:230000,count:3,rewards:{atk:52,arm:26,gra:4700,wax:1900},vicReq:5,new:false,tier:4,type:'elite'},
  {id:'ironblight_colossus',name:'IRONBLIGHT COLOSSUS',tag:'Corroded past the point of stopping.',atk:6800,def:222,hp:240000,count:'50%',rewards:{gra:5000,wax:2000,cha:200,crc:0.5,mxd:1.8},vicReq:5,new:false,tier:4,type:'elite'},
  // ── TIER 5 — LEGENDARY ─────────────────────────────
  {id:'the_devourer',name:'THE DEVOURER',tag:'It has always been eating.',atk:8000,def:230,hp:260000,count:null,rewards:{atk:80,arm:30,gra:8000,wax:3000,cha:250},vicReq:5,new:false,tier:5,type:'elite'},
  {id:'nameless_king',name:'NAMELESS KING',tag:'The name was the last thing surrendered.',atk:9333,def:258,hp:300000,count:'30%',rewards:{gra:12000,wax:4500,cha:350,mxd:2.0,crc:0.6},vicReq:5,new:false,tier:5,type:'elite'},
  {id:'he_who_unravels',name:'HE WHO UNRAVELS',tag:'Everything comes apart near him.',atk:10667,def:285,hp:340000,count:4,rewards:{atk:110,arm:40,gra:18000,wax:6500},vicReq:5,new:false,tier:5,type:'elite'},
  {id:'throne_of_ash',name:'THRONE OF ASH',tag:'Power without a king. Worse.',atk:12000,def:313,hp:380000,count:null,rewards:{gra:25000,wax:9000,cha:500,mxd:2.5,crc:0.7},vicReq:5,new:false,tier:5,type:'elite'},
  {id:'the_pale_hunger',name:'THE PALE HUNGER',tag:'It was not born. It grew.',atk:13333,def:340,hp:400000,count:'40%',rewards:{atk:140,arm:50,gra:35000,wax:12000,cha:600},vicReq:5,new:false,tier:5,type:'elite'},
  {id:'godrot',name:'GODROT',tag:'Even gods decompose.',atk:14667,def:368,hp:430000,count:null,rewards:{gra:48000,wax:16000,cha:750,mxd:3.0,crc:0.8},vicReq:5,new:false,tier:5,type:'elite'},
  {id:'the_unfinished',name:'THE UNFINISHED',tag:'Incomplete. Unstoppable.',atk:16000,def:395,hp:460000,count:5,rewards:{atk:170,arm:60,gra:65000,wax:22000,cha:900},vicReq:5,new:false,tier:5,type:'elite'},
  {id:'womb_of_plague',name:'WOMB OF PLAGUE',tag:'The source, not the symptom.',atk:17333,def:423,hp:490000,count:null,rewards:{gra:85000,wax:30000,cha:1100,mxd:3.5,crc:0.9},vicReq:5,new:false,tier:5,type:'elite'},
  {id:'bleeding_throne',name:'BLEEDING THRONE',tag:'Sovereignty at a cost.',atk:18667,def:450,hp:500000,count:'50%',rewards:{atk:200,arm:75,gra:110000,wax:40000,cha:1300,mxd:4.0},vicReq:5,new:false,tier:5,type:'elite'},
  {id:'the_hollow_crown',name:'THE HOLLOW CROWN',tag:'All that remains of what ruled.',atk:20000,def:480,hp:550000,count:null,rewards:{atk:250,arm:100,gra:150000,wax:60000,cha:2000,mxd:5.0,crc:1.0,asp:10},vicReq:5,new:false,tier:5,type:'boss'},
];

const SHOP_ITEMS = [
  {id:'test_mnd',name:'[TEST] MND +10%',desc:'Test upgrade — free.',effect:'MND +10%',cost:{gra:0},statBonus:{mnd:0.10}},
  {id:'test_mxd',name:'[TEST] MXD +10%',desc:'Test upgrade — free.',effect:'MXD +10%',cost:{gra:0},statBonus:{mxd:0.10}},
  {id:'iron_quill',name:'IRON QUILL',desc:'A sharpened writing instrument, repurposed.',effect:'ATK +5',cost:{gra:50},statBonus:{atk:5}},
  {id:'sketch_shield',name:'SKETCH SHIELD',desc:'Hastily drawn, surprisingly effective.',effect:'ARM +2',cost:{gra:80},statBonus:{arm:2}},
  {id:'ink_vial',name:'INK VIAL',desc:'Concentrated darkness in liquid form.',effect:'HP +20',cost:{gra:100},statBonus:{hp:20}},
  {id:'wax_seal',name:'WAX SEAL',desc:'Bonds your wounds shut.',effect:'RGN +0.5',cost:{gra:120,wax:5},statBonus:{rgn:0.5}},
  {id:'charcoal_blade',name:'CHARCOAL BLADE',desc:'Smudges enemies into submission.',effect:'ATK +10, ASP +0.5',cost:{gra:200,cha:5},statBonus:{atk:10,asp:0.5}},
  {id:'draft_armor',name:'DRAFT ARMOR',desc:'Layers of rejected paper, hardened.',effect:'ARM +5, HP +30',cost:{gra:300,wax:20},statBonus:{arm:5,hp:30}},
  {id:'perspective_lens',name:'PERSPECTIVE LENS',desc:'See the angles others miss.',effect:'CRC +1%, CRD +0.1',cost:{gra:250,wax:15},statBonus:{crc:0.01,crd:0.1}},
  {id:'phantom_step',name:'PHANTOM STEP',desc:'Leave no trace behind.',effect:'DOG +1%, SPD +100',cost:{gra:180,wax:8},statBonus:{dog:0.01,spd:100}},
  // Tier 2 Shop
  {id:'wax_tablet',name:'WAX TABLET',desc:'Ancient storage, modern power.',effect:'MND +5%, ASP +1',cost:{gra:500,wax:50},statBonus:{mnd:0.05,asp:1}},
  {id:'charcoal_sigil',name:'CHARCOAL SIGIL',desc:'Drawn in the dark before dawn.',effect:'CRC +2%, CRD +0.25',cost:{gra:800,wax:80,cha:10},statBonus:{crc:0.02,crd:0.25}},
  {id:'bone_quill',name:'BONE QUILL',desc:'Stripped of flesh. Pure intent.',effect:'ATK +25, ARM +8',cost:{gra:1200,wax:120},statBonus:{atk:25,arm:8}},
  {id:'ink_reservoir',name:'INK RESERVOIR',desc:'Bottomless if you believe hard enough.',effect:'HP +100, RGN +3',cost:{gra:1500,cha:30},statBonus:{hp:100,rgn:3}},
  // Tier 3 Shop
  {id:'void_fragment',name:'VOID FRAGMENT',desc:'Chipped from the edge of a sketch.',effect:'DOG +3%, MXD +0.5',cost:{gra:3000,wax:400,cha:80},statBonus:{dog:0.03,mxd:0.5}},
  {id:'master_palette',name:'MASTER PALETTE',desc:'Every color of pain.',effect:'ATK +80, ASP +2',cost:{gra:6000,wax:800},statBonus:{atk:80,asp:2}},
  {id:'draft_crown',name:'DRAFT CROWN',desc:'Worn by those who survived the critique.',effect:'HP +300, ARM +20, CRC +3%',cost:{gra:10000,wax:2000,cha:300},statBonus:{hp:300,arm:20,crc:0.03}},
];

// ═══════════════════════════════════════════════════════
// ACHIEVEMENTS
// ═══════════════════════════════════════════════════════
const ACHIEVEMENTS = [
  // ── PROGRESSION ──────────────────────────────────────
  {id:'first_blood',    name:'FIRST STROKE',       desc:'Defeat your first creature.',         icon:'✏',  cat:'progression', check:s=>totalVictories(s)>=1},
  {id:'ten_wins',       name:'GETTING STARTED',    desc:'Win 10 battles.',                     icon:'⚔',  cat:'progression', check:s=>totalVictories(s)>=10},
  {id:'hundred_wins',   name:'THE GRIND BEGINS',   desc:'Win 100 battles total.',              icon:'💀',  cat:'progression', check:s=>totalVictories(s)>=100},
  {id:'thousand_wins',  name:'INK SOAKED',         desc:'Win 1,000 battles total.',            icon:'🌑',  cat:'progression', check:s=>totalVictories(s)>=1000},
  {id:'tenk_wins',      name:'LIFETIME ARTIST',    desc:'Win 10,000 battles total.',           icon:'👁',  cat:'progression', check:s=>totalVictories(s)>=10000},
  // ── COLLECTION ───────────────────────────────────────
  {id:'gloss_5',        name:'SKETCH COLLECTOR',   desc:'Unlock 5 glossary entries.',          icon:'📖',  cat:'collection',  check:s=>unlockedCount(s)>=5},
  {id:'gloss_15',       name:'PORTFOLIO',          desc:'Unlock 15 glossary entries.',         icon:'🗂',  cat:'collection',  check:s=>unlockedCount(s)>=15},
  {id:'gloss_all',      name:'COMPLETE GALLERY',   desc:'Unlock all 180 creatures.',           icon:'🏆',  cat:'collection',  check:s=>unlockedCount(s)>=180},
  {id:'tier3_first',    name:'DEEPER DRAFT',       desc:'Defeat a Rare creature for the first time.',  icon:'🌘',cat:'collection',check:s=>['bonegrinder','voidborn_witch','weeping_shade','soul_eater','dread_colossus'].some(id=>getVic(s,id)>0)},
  {id:'boss_first',     name:'FINAL CONFRONTATION',desc:'Defeat THE HOLLOW CROWN for the first time.',  icon:'⭐',cat:'collection',check:s=>getVic(s,'the_hollow_crown')>0},
  // ── STATS ─────────────────────────────────────────────
  {id:'atk_100',        name:'SHARP EDGE',         desc:'Reach ATK 100.',                      icon:'🗡',  cat:'stats',       check:s=>s.stats.atk>=100},
  {id:'atk_500',        name:'MASTERFUL STROKE',   desc:'Reach ATK 500.',                      icon:'⚡',  cat:'stats',       check:s=>s.stats.atk>=500},
  {id:'arm_50',         name:'THICK SKIN',         desc:'Reach ARM 50.',                       icon:'🛡',  cat:'stats',       check:s=>s.stats.arm>=50},
  {id:'hp_500',         name:'IRON CONSTITUTION',  desc:'Reach HP 500.',                       icon:'❤',  cat:'stats',       check:s=>s.stats.hp>=500},
  {id:'apn_10',         name:'RAPID FIRE',         desc:'Reach ASP 10.',                       icon:'💨',  cat:'stats',       check:s=>s.stats.asp>=10},
  // ── RESOURCES ────────────────────────────────────────
  {id:'gra_1k',         name:'INK STAINED',        desc:'Accumulate 1,000 Graphite.',          icon:'▲',  cat:'resources',   check:s=>s.lifeGra>=1000},
  {id:'gra_100k',       name:'GRAPHITE HOARD',     desc:'Accumulate 100,000 Graphite lifetime.',icon:'◆', cat:'resources',   check:s=>s.lifeGra>=100000},
  // ── META ──────────────────────────────────────────────
  {id:'first_death',    name:'CRITIQUE ACCEPTED',  desc:'Be defeated 50 times.',               icon:'💔',  cat:'meta',        check:s=>s.deaths>=50},
  {id:'play_1h',        name:'OVERNIGHT SHIFT',    desc:'Accumulate 1 hour of play time.',     icon:'⏱',  cat:'meta',        check:s=>s.activeTime>=3600},
  {id:'first_redraw',   name:'WORLD REDRAWN',      desc:'Complete your first Redraw World.',   icon:'🔄',  cat:'meta',        check:s=>s.redraws>=1},
];

function totalVictories(s){return Object.values(s.victories||{}).reduce((a,b)=>a+b,0);}
function unlockedCount(s){return CREATURES.filter(c=>(s.victories[c.id]||0)>0).length;}
function getVic(s,id){return s.victories[id]||0;}

// ═══════════════════════════════════════════════════════
// GAME STATE
// ═══════════════════════════════════════════════════════
const DEFAULT_STATE = ()=>({
  stats:{hp:50,atk:3,mnd:0.7,mxd:1.2,spd:100,rgn:0,dog:0,crc:0,crd:1.0,arm:0,asp:1.0,mth:0,acc:1.0,blk:0,bld:0,ctr:0},
  resources:{gra:0,wax:0,cha:0,gold:0,plat:0},
  victories:{},
  shopOwned:{},
  currentCreature:null,
  quintPending:0,
  quintLifetime:0,
  redraws:0,
  activeTime:0,
  offlineTime:0,
  deaths:0,
  lifeGra:0,
  achievements:{},
  lastSave:Date.now(),
  settings:{lightMode:false,invertImg:false,showProtocols:true,combatLog:true,uiZoom:100,battleNav:'manual',numNotation:'mixed',fontSize:13},
  protocols:{autoChallenge:false,autoRetry:false},
  masteryUpgrades:{},
  sessionRewards:{},
  galleryUnlocked:[],
  galleryQueue:[],
  spawnRarity:{},
});
let S = DEFAULT_STATE();

// ═══════════════════════════════════════════════════════
// BATTLE STATE
// ═══════════════════════════════════════════════════════
let B = {
  active:false,creature:null,playerHP:0,enemyHP:0,
  deathTimer:0,dying:false,fleeTimer:0,
  lastTick:0,turnCount:0,
  playerTimer:3000,enemyTimer:3000,
  rarity:'common',
};

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

// ═══════════════════════════════════════════════════════
// STATS DISPLAY
// ═══════════════════════════════════════════════════════
const STAT_DEFS=[
  {key:'hp',label:'HP',icon:'si-hp',cat:'defense',fmt:'n'},
  {key:'atk',label:'ATK',icon:'si-atk',cat:'offense',fmt:'n'},
  {key:'mnd',label:'MND',icon:'si-mnd',cat:'offense',fmt:'pct'},
  {key:'mxd',label:'MXD',icon:'si-mxd',cat:'offense',fmt:'pct'},
  {key:'spd',label:'SPD',icon:'si-spd',cat:'utility',fmt:'n'},
  {key:'rgn',label:'RGN',icon:'si-rgn',cat:'defense',fmt:'n'},
  {key:'dog',label:'DOG',icon:'si-dog',cat:'chance',fmt:'pct'},
  {key:'crc',label:'CRC',icon:'si-crc',cat:'chance',fmt:'pct'},
  {key:'crd',label:'CRD',icon:'si-crd',cat:'offense',fmt:'x'},
  {key:'arm',label:'ARM',icon:'si-arm',cat:'defense',fmt:'n'},
  {key:'asp',label:'ASP',icon:'si-asp',cat:'offense',fmt:'n'},
  {key:'mth',label:'MTH',icon:'si-mth',cat:'offense',fmt:'pct'},
  {key:'acc',label:'ACC',icon:'si-acc',cat:'chance',fmt:'pct'},
  {key:'blk',label:'BLK',icon:'si-blk',cat:'defense',fmt:'pct'},
  {key:'bld',label:'BLD',icon:'si-bld',cat:'defense',fmt:'n'},
  {key:'ctr',label:'CTR',icon:'si-ctr',cat:'chance',fmt:'pct'},
];
function formatStat(key,val){
  const d=STAT_DEFS.find(x=>x.key===key);
  if(!d)return fmtStat(val);
  if(d.fmt==='pct')return(val*100).toFixed(3)+'%';
  if(d.fmt==='x')return val.toFixed(2)+'x';
  return fmtStat(val);
}
let currentSpecFilter='all';
function renderStats(){
  const g=document.getElementById('stat-grid');
  const defs=currentSpecFilter==='all'?STAT_DEFS:STAT_DEFS.filter(d=>d.cat===currentSpecFilter);
  g.innerHTML=defs.map(d=>`
    <div class="stat-cell">
      <div class="stat-name"><span class="stat-icon ${d.icon}"></span>${d.label}</div>
      <div class="stat-val">${formatStat(d.key,S.stats[d.key]??0)}</div>
    </div>`).join('');
}
const FUND_DEFS={
  all:[
    {key:'redraw',label:'REDRAW',val:()=>S.redraws+'x',cat:'core'},
    {key:'glossmult',label:'GLOSSARY MULTIPLIER',val:()=>'x'+calcGlossaryMult().toFixed(2),cat:'economy'},
    {key:'decay',label:'DECAY FACTOR',val:()=>'1x',cat:'core'},
    {key:'death_rec',label:'DEATH RECOVERY',val:()=>'10s',cat:'stats'},
    {key:'flee_pen',label:'FLEE PENALTY',val:()=>'5s',cat:'stats'},
    {key:'feat_base',label:'FEAT MEDAL BASE',val:()=>'1.01x',cat:'rarity'},
    {key:'feat_mult',label:'FEAT MULT',val:()=>'1.02x',cat:'rarity'},
    {key:'quint',label:'BLOOD COIN',val:()=>fmt(S.quintLifetime),cat:'economy'},
  ]
};
function calcGlossaryMult(){
  const unlocked=CREATURES.filter(c=>getVictories(c.id)>0).length;
  return 1+(unlocked*0.01);
}
let currentFundFilter='all';
function renderFundamentals(){
  const defs=currentFundFilter==='all'?FUND_DEFS.all:FUND_DEFS.all.filter(d=>d.cat===currentFundFilter);
  document.getElementById('fund-values').innerHTML=
    defs.map(d=>`<div class="fund-row"><span class="fund-key">${d.label}</span><span class="fund-val">${d.val()}</span></div>`).join('');
}

// ═══════════════════════════════════════════════════════
// GALLERY
// ═══════════════════════════════════════════════════════
// ── GALLERY QUEUE ─────────────────────────────────────
function initGalleryQueue(){
  // Build from scratch if missing or empty
  if(!S.galleryUnlocked||S.galleryUnlocked.length===0){
    const allIds=CREATURES.map(c=>c.id);
    const withVic=allIds.filter(id=>(S.victories[id]||0)>0);
    const remaining=allIds.filter(id=>!withVic.includes(id));
    S.galleryUnlocked=[...withVic];
    S.galleryQueue=[...remaining];
    // Ensure at least 4 unlocked
    while(S.galleryUnlocked.length<4&&S.galleryQueue.length>0){
      S.galleryUnlocked.push(S.galleryQueue.shift());
    }
  }else{
    // Ensure queue is clean (remove any IDs already unlocked)
    S.galleryQueue=(S.galleryQueue||[]).filter(id=>!S.galleryUnlocked.includes(id));
  }
}
function unlockNextCreature(){
  if(!S.galleryQueue||S.galleryQueue.length===0)return;
  const window=Math.min(4,S.galleryQueue.length);
  const pick=Math.floor(Math.random()*window);
  const id=S.galleryQueue.splice(pick,1)[0];
  S.galleryUnlocked.push(id);
  const c=getCreature(id);
  if(c){
    addLog(`<span style="color:var(--green)">◆ A new enemy has stepped forward: <b>${c.name}</b>.</span>`);
    toast(`New foe: ${c.name}`,3000);
  }
}
function isUnlocked(id){return S.galleryUnlocked&&S.galleryUnlocked.includes(id);}

const TIER_COLORS={1:'#666',2:'#27ae60',3:'#2980b9',4:'#9b59b6',5:'#c0392b'};
const TIER_LABELS={1:'COMMON',2:'UNCOMMON',3:'RARE',4:'EPIC',5:'LEGENDARY'};
const TIER_BG={1:'rgba(80,80,80,0.15)',2:'rgba(39,174,96,0.12)',3:'rgba(41,128,185,0.12)',4:'rgba(155,89,182,0.14)',5:'rgba(192,57,43,0.15)'};
const TIER_DESC={
  1:'Weak but numerous. The rot made manifest.',
  2:'Hardened survivors shaped by malice and conflict.',
  3:'Formidable horrors that punish the unprepared.',
  4:'Near-mythical entities. Few challengers endure.',
  5:'The pinnacle of darkness. Unkillable. Unforgiving.',
};
const TYPE_COLORS={scrap:'#555',elite:'#8e44ad',boss:'#c0392b'};

// ── RARITY SYSTEM ─────────────────────────────────────
const RARITY_COLORS={common:'#888',uncommon:'#27ae60',rare:'#2980b9',epic:'#9b59b6',legendary:'#f0b429'};
const RARITY_LABELS={common:'COMMON',uncommon:'UNCOMMON',rare:'RARE',epic:'EPIC',legendary:'LEGENDARY'};
const RARITY_MULTS={common:1,uncommon:1.5,rare:3,epic:7,legendary:15};
const RARITY_BG={common:'rgba(80,80,80,0.15)',uncommon:'rgba(39,174,96,0.18)',rare:'rgba(41,128,185,0.18)',epic:'rgba(155,89,182,0.2)',legendary:'rgba(240,180,41,0.15)'};
const RARITY_UPGRADES=[
  {id:'unc_rate',rarity:'uncommon',label:'UNCOMMON ATTUNEMENT',desc:'+1% uncommon spawn chance per level.',base:{gra:500},scale:1.8,maxLevel:19,perLevel:1},
  {id:'rare_rate',rarity:'rare',label:'RARE ATTUNEMENT',desc:'+0.5% rare spawn chance per level.',base:{gra:5000,wax:50},scale:2,maxLevel:20,perLevel:0.5},
  {id:'epic_rate',rarity:'epic',label:'EPIC ATTUNEMENT',desc:'+0.2% epic spawn chance per level.',base:{gra:30000,wax:500},scale:2,maxLevel:20,perLevel:0.2},
  {id:'leg_rate',rarity:'legendary',label:'LEGENDARY ATTUNEMENT',desc:'+0.05% legendary spawn chance per level.',base:{gra:200000,wax:5000,cha:5},scale:2,maxLevel:20,perLevel:0.05},
];
function getRarityChances(){
  const ups=S.masteryUpgrades||{};
  const unc=30+(ups.unc_rate||0)*1;
  const rare=20+(ups.rare_rate||0)*0.5;
  const epic=10+(ups.epic_rate||0)*0.2;
  const leg=10+(ups.leg_rate||0)*0.05;
  return{uncommon:Math.min(unc,40),rare:Math.min(rare,15),epic:Math.min(epic,5),legendary:Math.min(leg,2)};
}
function rollRarity(){
  const ch=getRarityChances();
  const r=Math.random()*100;
  if(r<ch.legendary)return'legendary';
  if(r<ch.legendary+ch.epic)return'epic';
  if(r<ch.legendary+ch.epic+ch.rare)return'rare';
  if(r<ch.legendary+ch.epic+ch.rare+ch.uncommon)return'uncommon';
  return'common';
}
function getSpawnRarity(id){
  if(!S.spawnRarity)S.spawnRarity={};
  if(!S.spawnRarity[id])S.spawnRarity[id]=rollRarity();
  return S.spawnRarity[id];
}

function renderGallery(){
  const g=document.getElementById('gallery-grid');
  const visible=CREATURES.filter(c=>isUnlocked(c.id)&&!isMaxed(c));
  const defeated=CREATURES.filter(c=>isMaxed(c)).length;
  const hidden=CREATURES.length-visible.length-defeated;
  let html=`<div style="grid-column:1/-1;display:flex;align-items:center;gap:8px;margin-bottom:10px;">
    ${defeated>0?`<div style="font-size:8px;color:var(--text3);">${defeated} defeated</div>`:''}
    <div style="flex:1;height:1px;background:var(--text3);opacity:0.2;"></div>
    ${hidden>0?`<div style="font-size:8px;color:var(--text3);font-style:italic;opacity:0.6;">${hidden} in the dark…</div>`:''}
  </div>`;
  html+=visible.map(c=>{
    const tier=getTier(c);
    const color=TIER_COLORS[tier]||'#555';
    const label=TIER_LABELS[tier]||'TIER '+tier;
    const vic=getVictories(c.id);
    const maxed=isMaxed(c);
    const isCurrent=S.currentCreature===c.id;
    const pct=Math.min(100,vic/c.vicReq*100);
    const rewardStr=Object.entries(c.rewards).map(([k,v])=>`<span class="reward-item ${['gra','wax','cha'].includes(k)?'res':''}">${RESOURCE_LABELS[k]||k.toUpperCase()} +${v}</span>`).join('');
    const countStr=c.count!=null?`<span style="margin-left:4px;color:var(--text3);">${c.count}</span>`:'';
    const rarityBadge=`<span style="position:absolute;top:4px;left:4px;font-size:6px;font-weight:bold;letter-spacing:1px;padding:1px 4px;background:${color};color:#fff;opacity:0.85;">${label}</span>`;
    const typeBadge=c.type&&c.type!=='scrap'?`<span style="position:absolute;bottom:4px;right:4px;font-size:7px;padding:1px 4px;background:${TYPE_COLORS[c.type]||'#555'};color:#fff;letter-spacing:1px;">${c.type.toUpperCase()}</span>`:'';
    let btnHtml='';
    if(maxed)btnHtml=`<button class="btn-challenge btn-maxed">MAXED</button>`;
    else if(isCurrent)btnHtml=`<button class="btn-challenge btn-current" onclick="stopBattle()">FIGHTING</button>`;
    else btnHtml=`<button class="btn-challenge" onclick="startBattle('${c.id}')">CHALLENGE</button>`;
    const spawnRarity=maxed?null:getSpawnRarity(c.id);
    const spawnRarityColor=spawnRarity?(RARITY_COLORS[spawnRarity]||'#888'):null;
    const borderColor=spawnRarity?spawnRarityColor:maxed?'#333':`${color}44`;
    const rarityGlow=spawnRarity&&spawnRarity!=='common'?`box-shadow:0 0 8px ${spawnRarityColor}55;`:'';
    const spawnBg=spawnRarity?(RARITY_BG[spawnRarity]||'transparent'):(maxed?'transparent':TIER_BG[tier]||'transparent');
    const spawnBadge=spawnRarity?`<span style="position:absolute;top:4px;right:4px;font-size:6px;font-weight:bold;letter-spacing:1px;padding:1px 4px;background:${spawnRarityColor};color:#fff;">${RARITY_LABELS[spawnRarity]}</span>`:'';
    return `<div class="creature-card" id="card-${c.id}" style="border-color:${borderColor};${rarityGlow}background:${spawnBg}">
      <div class="card-top">
        <div class="card-art" style="position:relative;">${rarityBadge}${spawnBadge}${c.new?'<span class="new-badge">NEW</span>':''}${typeBadge}${SVGs[c.id]||`<div style="color:${color};font-size:22px;opacity:0.4;">✦</div>`}</div>
        <div class="card-info">
          <div class="card-name" style="color:${maxed?'var(--text3)':color}">${c.name}</div>
          <div class="card-tagline">${c.tag}</div>
          <div class="card-stats">
            <span class="card-atk">✏ ${fmt(c.atk)}</span> /
            <span class="card-def">🛡 ${c.def}</span>
            <span class="card-hp">⚡ ${fmt(c.hp)}</span>
            ${countStr}
          </div>
        </div>
      </div>
      <div class="card-rewards">
        <div class="rewards-header"><span style="color:${maxed?'var(--text3)':''}">REWARDS ×${calcGlossaryMult().toFixed(2)}</span><span class="vic">${c.vicReq} Victories | <span style="color:${vic>0?'var(--green)':'var(--text3)'}">${Math.min(vic,c.vicReq)}</span>/${c.vicReq}</span></div>
        <div class="victories-bar"><div class="victories-fill" style="width:${pct}%;background:${maxed?'#2a5a2a':color}"></div></div>
        <div class="reward-list">${rewardStr}</div>
      </div>
      <div class="card-btn">${btnHtml}</div>
    </div>`;
  }).join('');
  g.innerHTML=html;
}
function getTier(c){
  return c.tier||1;
}

// ═══════════════════════════════════════════════════════
// BATTLE
// ═══════════════════════════════════════════════════════
function startBattle(creatureId){
  const c=getCreature(creatureId);
  if(!c)return;
  S.currentCreature=creatureId;
  B.creature=c;
  B.active=true;
  B.dying=false;
  B.rarity=getSpawnRarity(creatureId);
  B.playerHP=maxHP();
  B.enemyHP=c.hp;
  B.lastTick=Date.now();
  B.turnCount=0;
  B.playerTimer=3000/(S.stats.asp||1);
  B.enemyTimer=3000;
  updateBattleUI();
  const rc=RARITY_COLORS[B.rarity];
  const rl=RARITY_LABELS[B.rarity];
  addLog(`<span style="color:${rc}">⚔ ${c.name} appears [${rl}]${B.rarity!=='common'?' ×'+RARITY_MULTS[B.rarity]:''}</span>`);
  if(S.settings.battleNav==='always') switchTab('gallery');
  else if(S.settings.battleNav==='manual') {} // stay
  renderGallery();
  document.getElementById('ac-details').textContent=c.name;
}
function stopBattle(){
  B.active=false;
  S.currentCreature=null;
  B.creature=null;
  renderGallery();
  updateBattleUI();
  document.getElementById('ac-details').textContent=S.protocols.autoChallenge?'ENABLED':'DISABLED';
}
function battleTick(){
  if(B.dying){
    const elapsed=(Date.now()-B.deathStart)/1000;
    const remaining=Math.max(0,10-elapsed);
    document.getElementById('death-timer').textContent=Math.ceil(remaining);
    if(remaining<=0){
      document.getElementById('death-overlay').style.display='none';
      B.dying=false;
      if(S.protocols.autoRetry&&B.creature){
        startBattle(B.creature.id);
      } else {
        B.active=false;
        S.currentCreature=null;
      }
    }
    return;
  }
  if(!B.active||!B.creature)return;
  const now=Date.now();
  const dt=Math.min(now-B.lastTick,500);
  B.lastTick=now;
  B.playerTimer-=dt;
  B.enemyTimer-=dt;
  if(B.playerTimer<=0){
    firePlayerTurn();
    if(!B.active)return;
    B.playerTimer=Math.max(200,3000/(S.stats.asp||1));
  }
  if(!B.active)return;
  if(B.enemyTimer<=0){
    fireEnemyTurn();
    if(!B.active)return;
    B.enemyTimer=3000;
  }
}
function firePlayerTurn(){
  const c=B.creature;
  const st=S.stats;
  B.turnCount++;
  const t=B.turnCount;
  const isMiss=Math.random()>(st.acc??1);
  if(isMiss){
    addLog(`<span class="log-info">Turn ${t}: You swing at <b>${c.name}</b> — MISS!</span>`);
  } else {
    const isCrit=Math.random()<(st.crc??0);
    const minDmg=st.atk*(st.mnd??0.7);
    const maxDmg=st.atk*(st.mxd??1.0);
    let totalDmg=0;
    let hits=0;
    do {
      const rolled=minDmg + Math.random()*(maxDmg-minDmg);
      totalDmg+=rolled*(isCrit?(st.crd??1):1);
      hits++;
    } while(Math.random()<(st.mth??0) && hits<10);
    B.enemyHP=Math.max(0,B.enemyHP-totalDmg);
    const hitStr=hits>1?` <span style="color:var(--cyan)">(${hits} hits!)</span>`:'';
    if(isCrit){
      addLog(`<span class="log-crit">Turn ${t}: ✦ CRIT — <b>${totalDmg.toFixed(1)}</b> to ${c.name}!${hitStr}</span>`);
    } else {
      addLog(`<span class="log-info">Turn ${t}: You deal <b>${totalDmg.toFixed(1)}</b> to <b>${c.name}</b>.${hitStr}</span>`);
    }
  }
  if((st.rgn??0)>0) B.playerHP=Math.min(maxHP(),B.playerHP+(st.rgn*2));
  if(B.enemyHP<=0) onWin();
}
function fireEnemyTurn(){
  const c=B.creature;
  const st=S.stats;
  const isDodge=Math.random()<(st.dog??0);
  if(isDodge){
    addLog(`<span class="log-info">↳ ${c.name} attacks — you <b>dodge!</b></span>`);
    return;
  }
  const rawDmg=Math.max(1,c.atk/(1+(st.arm??0)*0.15));
  const isBlock=Math.random()<(st.blk??0);
  const dmg=isBlock?Math.max(0,rawDmg-(st.bld??0)):rawDmg;
  const isCounter=Math.random()<(st.ctr??0);
  const counterDmg=isCounter?Math.max(0.1,(st.atk*0.5)-c.def):0;
  B.playerHP=Math.max(0,B.playerHP-dmg);
  if(counterDmg>0) B.enemyHP=Math.max(0,B.enemyHP-counterDmg);
  let msg=`↳ <b>${c.name}</b> hits for <b>${dmg.toFixed(1)}</b>`;
  if(isBlock) msg+=` <span style="color:var(--text2)">(blocked ${(rawDmg-dmg).toFixed(1)})</span>`;
  if(counterDmg>0) msg+=`. <span class="log-crit">↩ COUNTER ${counterDmg.toFixed(1)}!</span>`;
  addLog(`<span class="log-die">${msg}.</span>`);
  if(B.playerHP<=0) onLose();
}
function onWin(){
  const c=B.creature;
  if(!S.victories[c.id])S.victories[c.id]=0;
  S.victories[c.id]++;
  const justMaxed=S.victories[c.id]===c.vicReq;
  addLog(`<span class="log-win">✓ Defeated ${c.name}! (${S.victories[c.id]}/${c.vicReq})</span>`);
  if(justMaxed) unlockNextCreature();
  const mult=calcGlossaryMult();
  const rewardMult=1+(S.redraws*0.05);
  const rarityMult=RARITY_MULTS[B.rarity||'common']||1;
  if(rarityMult>1)addLog(`<span style="color:${RARITY_COLORS[B.rarity]}">★ ${RARITY_LABELS[B.rarity]} bonus ×${rarityMult} applied!</span>`);
  Object.entries(c.rewards).forEach(([k,v])=>{
    const amount=v*mult*rewardMult*rarityMult;
    if(['gra','wax','cha'].includes(k)){
      S.resources[k]=(S.resources[k]||0)+amount;
      if(k==='gra'){S.lifeGra=(S.lifeGra||0)+amount;}
    } else if(S.stats[k]!==undefined){
      S.stats[k]+=amount;
      if(!S.sessionRewards[k])S.sessionRewards[k]=0;
      S.sessionRewards[k]+=amount;
    }
  });
  // Base graphite from battle, scales with tier
  const tierBonus=(c.tier||1)*2;
  const graGain=(5+Math.random()*3)*tierBonus;
  S.resources.gra+=graGain;
  S.lifeGra=(S.lifeGra||0)+graGain;
  checkAchievements();
  renderSessionRewards();
  renderStats();renderFundamentals();renderGallery();
  B.playerHP=maxHP();
  B.enemyHP=c.hp;
  B.lastTick=Date.now();
  if(isMaxed(c)){
    if(S.protocols.autoChallenge){
      advanceAutoChallenge();
    } else {
      stopBattle();
    }
  }
}
function onLose(){
  B.active=false;
  B.dying=true;
  B.deathStart=Date.now();
  S.deaths=(S.deaths||0)+1;
  document.getElementById('death-overlay').style.display='block';
  addLog(`<span class="log-die">✗ You were defeated by ${B.creature.name}. (Deaths: ${S.deaths})</span>`);
  checkAchievements();
  updateBattleUI();
}

// ── ACHIEVEMENTS ──────────────────────────────────────
function checkAchievements(){
  return;
  let newUnlocks=[];
  ACHIEVEMENTS.forEach(a=>{
    if(!S.achievements[a.id]&&a.check(S)){
      S.achievements[a.id]={unlocked:true,unlockedAt:Date.now()};
      newUnlocks.push(a);
    }
  });
  newUnlocks.forEach(a=>{
    toast(`🏆 Achievement: ${a.name}`,3500);
    addLog(`<span class="log-win">🏆 Achievement unlocked: ${a.name}</span>`);
  });
  if(newUnlocks.length) renderAchievements();
}
function renderMastery(){
  const el=document.getElementById('mastery-content');
  if(!el)return;
  const ups=S.masteryUpgrades||{};
  const ch=getRarityChances();
  const common=Math.max(0,100-ch.uncommon-ch.rare-ch.epic-ch.legendary);
  let html=`<div style="margin-bottom:14px;padding:10px;background:var(--bg3);border:1px solid var(--border);">
    <div style="font-size:9px;letter-spacing:2px;color:var(--text3);margin-bottom:8px;">CURRENT SPAWN CHANCES</div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:10px;">
      <span style="color:#888;">COMMON ${common.toFixed(2)}%</span>
      <span style="color:var(--g-uncommon);">UNCOMMON ${ch.uncommon.toFixed(2)}%</span>
      <span style="color:var(--g-rare);">RARE ${ch.rare.toFixed(2)}%</span>
      <span style="color:var(--g-epic);">EPIC ${ch.epic.toFixed(2)}%</span>
      <span style="color:var(--g-legendary);">LEGENDARY ${ch.legendary.toFixed(2)}%</span>
    </div>
  </div>
  <div style="font-size:9px;color:var(--text3);margin-bottom:10px;">Rarer enemies drop <b style="color:var(--white);">multiplied rewards</b>: ×1.5 / ×3 / ×7 / ×15</div>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">`;
  RARITY_UPGRADES.forEach(up=>{
    const level=ups[up.id]||0;
    const isMaxed=level>=up.maxLevel;
    const cost={};
    Object.entries(up.base).forEach(([res,amt])=>{ cost[res]=Math.floor(amt*Math.pow(up.scale,level)); });
    const canAfford=!isMaxed&&Object.entries(cost).every(([res,amt])=>(S.resources[res]||0)>=amt);
    const rc=RARITY_COLORS[up.rarity];
    const costStr=Object.entries(cost).map(([res,amt])=>`${res.toUpperCase()} ${fmt(amt)}`).join(' + ');
    html+=`<div style="border:1px solid ${rc}44;padding:10px;background:${rc}0d;">
      <div style="font-size:10px;font-weight:bold;color:${rc};letter-spacing:1px;margin-bottom:3px;">${up.label}</div>
      <div style="font-size:8px;color:var(--text3);margin-bottom:8px;">${up.desc}</div>
      <div style="font-size:9px;color:var(--text2);margin-bottom:6px;">Level <span style="color:var(--white);font-weight:bold;">${level}</span> / ${up.maxLevel}</div>
      ${isMaxed
        ?`<div style="font-size:9px;text-align:center;color:${rc};padding:4px 0;">✦ MAXED</div>`
        :`<div style="font-size:8px;color:${canAfford?'var(--text2)':'var(--text4)'};margin-bottom:6px;">${costStr}</div>
          <button onclick="buyMasteryUpgrade('${up.id}')" style="width:100%;padding:5px;background:${canAfford?rc+'22':'var(--bg3)'};border:1px solid ${canAfford?rc:'var(--border)'};color:${canAfford?rc:'var(--text3)'};cursor:${canAfford?'pointer':'not-allowed'};font-family:inherit;font-size:9px;letter-spacing:1px;text-transform:uppercase;">UPGRADE</button>`
      }
    </div>`;
  });
  html+='</div>';
  el.innerHTML=html;
}
function buyMasteryUpgrade(id){
  const up=RARITY_UPGRADES.find(u=>u.id===id);
  if(!up)return;
  if(!S.masteryUpgrades)S.masteryUpgrades={};
  const level=S.masteryUpgrades[id]||0;
  if(level>=up.maxLevel)return;
  const cost={};
  Object.entries(up.base).forEach(([res,amt])=>{ cost[res]=Math.floor(amt*Math.pow(up.scale,level)); });
  if(!Object.entries(cost).every(([res,amt])=>(S.resources[res]||0)>=amt)){toast('Not enough resources.',2000);return;}
  Object.entries(cost).forEach(([res,amt])=>{ S.resources[res]-=amt; });
  S.masteryUpgrades[id]=level+1;
  renderMastery();
  renderStats();
  toast(`${up.label} → Lv ${S.masteryUpgrades[id]}`,2000);
}

function renderAchievements(){
  const el=document.getElementById('arch-achievements');
  if(!el)return;
  const cats=['progression','collection','stats','resources','meta'];
  const catLabels={progression:'PROGRESSION',collection:'COLLECTION',stats:'STATS',resources:'RESOURCES',meta:'META'};
  const unlocked=ACHIEVEMENTS.filter(a=>S.achievements[a.id]).length;
  el.innerHTML=`<div style="font-size:9px;color:var(--text2);margin-bottom:10px;">Unlocked: <span style="color:var(--white);font-weight:bold;">${unlocked} / ${ACHIEVEMENTS.length}</span></div>`;
  cats.forEach(cat=>{
    const group=ACHIEVEMENTS.filter(a=>a.cat===cat);
    const catUnlocked=group.filter(a=>S.achievements[a.id]).length;
    el.innerHTML+=`<div style="font-size:9px;color:var(--text3);letter-spacing:1px;text-transform:uppercase;margin:10px 0 5px;border-bottom:1px solid var(--border);padding-bottom:3px;">${catLabels[cat]} (${catUnlocked}/${group.length})</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:6px;">
    ${group.map(a=>{
      const done=!!S.achievements[a.id];
      const date=done?new Date(S.achievements[a.id].unlockedAt).toLocaleDateString():'';
      return`<div style="background:var(--bg${done?'3':'2'});border:1px solid ${done?'var(--green)':'var(--border)'};padding:8px;display:flex;gap:8px;align-items:flex-start;">
        <div style="font-size:18px;opacity:${done?1:0.2};">${a.icon}</div>
        <div>
          <div style="font-size:9px;font-weight:bold;color:${done?'var(--white)':'var(--text3)'};letter-spacing:1px;">${a.name}</div>
          <div style="font-size:8px;color:var(--text2);margin-top:2px;">${a.desc}</div>
          ${done?`<div style="font-size:7px;color:var(--green);margin-top:2px;">✓ ${date}</div>`:''}
        </div>
      </div>`;
    }).join('')}
    </div>`;
  });
}
function advanceAutoChallenge(){
  const next=CREATURES.find(c=>isUnlocked(c.id)&&!isMaxed(c)&&c.id!==B.creature.id);
  if(next) startBattle(next.id);
}
function addLog(html){
  if(!S.settings.combatLog)return;
  const log=document.getElementById('battle-log');
  log.innerHTML=`<div class="log-entry">${html}</div>`+log.innerHTML;
  if(log.children.length>50)log.removeChild(log.lastChild);
}
function updateBattleStats(){
  const c=B.creature;
  const st=S.stats;
  const dash='—';
  const pct=v=>(v*100).toFixed(1)+'%';
  const x2=v=>v.toFixed(2)+'×';
  const n1=v=>v.toFixed(1);
  // Derived offensive values
  const enemyEffAtk=c?Math.max(0.5,c.atk/(1+st.arm*0.15)):0;
  const pMinDmg=st.atk*(st.mnd??0.7);
  const pMaxDmg=st.atk*(st.mxd??1.0);
  const eMinDmg=c?enemyEffAtk*0.8:0;
  const eMaxDmg=c?enemyEffAtk*1.2:0;
  const offRows=[
    {name:'ATK',              p:fmt(st.atk),          e:c?fmt(c.atk):dash},
    {name:'Min Damage',       p:n1(pMinDmg),          e:c?n1(eMinDmg):dash},
    {name:'Max Damage',       p:n1(pMaxDmg),          e:c?n1(eMaxDmg):dash},
    {name:'Attack Speed',     p:x2(st.asp??1),        e:'1.00×'},
    {name:'Accuracy',         p:pct(st.acc||1),       e:'100%'},
    {name:'Crit Chance',      p:pct(st.crc),          e:'0%'},
    {name:'Crit Damage',      p:x2(st.crd),           e:'1.00×'},
    {name:'Multi-Hit Chance', p:pct(st.mth??0),       e:'0%'},
    {name:'Armor Pen.',       p:fmt(st.armp||0),      e:'0'},
  ];
  const defRows=[
    {name:'HP',            p:fmt(st.hp),              e:c?fmt(c.hp):dash},
    {name:'HP Regen',      p:n1(st.rgn)+'/s',         e:'0/s'},
    {name:'Armor',         p:fmt(st.arm),             e:c?fmt(c.def):dash},
    {name:'Block Chance',  p:pct(st.blk||0),          e:'0%'},
    {name:'Block Damage',  p:fmt(st.bld||0),          e:'0'},
    {name:'Dodge Chance',  p:pct(st.dog),             e:'0%'},
    {name:'Counter Chance',p:pct(st.ctr||0),          e:'0%'},
  ];
  const row=(s,dot)=>`<div class="bsp-row"><div class="bsp-name"><span class="bsp-dot" style="background:${dot}"></span>${s.name}</div><div class="bsp-you">${s.p}</div><div class="bsp-enemy">${s.e}</div></div>`;
  document.getElementById('bsp-off').innerHTML=offRows.map(s=>row(s,'#e74c3c')).join('');
  document.getElementById('bsp-def').innerHTML=defRows.map(s=>row(s,'#4ecdc4')).join('');
}
function updateBattleUI(){
  const c=B.creature;
  const turnEl=document.getElementById('turn-display');
  const ptimerBar=document.getElementById('ptimer-bar');
  const etimerBar=document.getElementById('etimer-bar');
  const ptimerText=document.getElementById('ptimer-text');
  const etimerText=document.getElementById('etimer-text');
  if(!c){
    document.getElementById('battle-creature-name').textContent='SELECT A CREATURE';
    document.getElementById('battle-creature-tag').textContent='Go to Gallery to challenge a creature.';
    document.getElementById('enemy-hp-bar').style.width='0%';
    document.getElementById('enemy-hp-text').textContent='—';
    document.getElementById('player-hp-bar').style.width='100%';
    document.getElementById('player-hp-text').textContent=`${maxHP().toFixed(1)} / ${maxHP().toFixed(1)}`;
    document.getElementById('battle-art').innerHTML='';
    document.getElementById('battle-status').textContent='No active battle.';
    if(turnEl) turnEl.textContent='—';
    if(ptimerBar){ptimerBar.style.width='0%';ptimerText.textContent='—';}
    if(etimerBar){etimerBar.style.width='0%';etimerText.textContent='—';}
    updateBattleStats();
    return;
  }
  const rc=RARITY_COLORS[B.rarity||'common'];
  const rl=RARITY_LABELS[B.rarity||'common'];
  document.getElementById('battle-creature-name').textContent=c.name;
  document.getElementById('battle-creature-name').style.color=rc||'var(--white)';
  document.getElementById('battle-creature-tag').textContent=`[${rl}] ${c.tag}`;
  document.getElementById('battle-art').innerHTML=SVGs[c.id]||'';
  const epct=Math.max(0,B.enemyHP/c.hp*100);
  const ppct=Math.max(0,B.playerHP/maxHP()*100);
  document.getElementById('enemy-hp-bar').style.width=epct+'%';
  document.getElementById('enemy-hp-text').textContent=`${B.enemyHP.toFixed(1)} / ${c.hp}`;
  document.getElementById('player-hp-bar').style.width=ppct+'%';
  document.getElementById('player-hp-text').textContent=`${Math.max(0,B.playerHP).toFixed(1)} / ${maxHP().toFixed(1)}`;
  // Timer bars
  if(B.active&&!B.dying){
    const pInterval=Math.max(200,3000/(S.stats.asp||1));
    const pFill=Math.max(0,Math.min(100,(1-B.playerTimer/pInterval)*100));
    const eFill=Math.max(0,Math.min(100,(1-B.enemyTimer/3000)*100));
    if(ptimerBar){ptimerBar.style.width=pFill+'%';ptimerText.textContent=(Math.max(0,B.playerTimer)/1000).toFixed(1)+'s';}
    if(etimerBar){etimerBar.style.width=eFill+'%';etimerText.textContent=(Math.max(0,B.enemyTimer)/1000).toFixed(1)+'s';}
  }
  if(turnEl){
    if(B.dying) turnEl.textContent='DEFEATED — RECOVERING...';
    else if(B.active) turnEl.textContent=`TURN ${B.turnCount} | ATK SPEED: ${(S.stats.asp||1).toFixed(2)}× | KILLS: ${S.victories[c.id]||0}/${c.vicReq}`;
    else turnEl.textContent='—';
  }
  const eatk=Math.max(1,c.atk/(1+(S.stats.arm??0)*0.15));
  document.getElementById('battle-status').textContent=
    B.active?`Your ATK: ${S.stats.atk.toFixed(1)} | Enemy ATK: ${eatk.toFixed(1)} | Turn every ${(3000/(S.stats.asp||1)/1000).toFixed(1)}s`
    :'Battle paused.';
  updateBattleStats();
}
function renderSessionRewards(){
  const el=document.getElementById('session-rewards-list');
  if(!el)return;
  const entries=Object.entries(S.sessionRewards);
  if(!entries.length){el.innerHTML='<div style="color:var(--text3);font-size:9px;">Defeat creatures to earn rewards.</div>';return;}
  el.innerHTML=entries.map(([k,v])=>
    `<div class="victory-stat"><span>${k.toUpperCase()}</span><span class="vic-gained">+${v.toFixed(3)}</span></div>`
  ).join('');
}

// ═══════════════════════════════════════════════════════
// CONCEPTUAL SYNTHESIZER
// ═══════════════════════════════════════════════════════
const SYNTH_CONCEPTS=[
  {id:'gra',name:'Old Coin',sub:'Blood Coin Gain',milestone:1618,baseRate:0},
  {id:'wax',name:'Bronze Coin',sub:'Produces Old Coin',milestone:1618,baseRate:0},
  {id:'cha',name:'Silver Coin',sub:'Produces Bronze Coin',milestone:1618,baseRate:0},
  {id:'gold',name:'Gold Coin',sub:'Produces Silver Coin',milestone:1618,baseRate:0},
  {id:'plat',name:'Platinum Coin',sub:'Produces Gold Coin',milestone:1618,baseRate:0},
];
let synthRates={gra:0,wax:0,cha:0,gold:0,plat:0};
function synthTick(dt){
  const platRate=S.victories['contrast_crusher']||0;
  const goldRate=S.resources.plat*0.002;
  const chaRate=S.resources.gold*0.002;
  const waxRate=S.resources.cha*0.002;
  const graRate=S.resources.wax*0.005;
  synthRates.plat=platRate;
  synthRates.gold=goldRate;
  synthRates.cha=chaRate;
  synthRates.wax=waxRate;
  synthRates.gra=graRate;
  S.resources.plat+=platRate*dt;
  S.resources.gold+=goldRate*dt;
  S.resources.cha+=chaRate*dt;
  S.resources.wax+=waxRate*dt;
  S.resources.gra+=graRate*dt;
  // Quintessence from graphite milestone
  if(S.resources.gra>=S.quintPending*100+100){
    S.quintPending+=1;
  }
}
function renderSynth(){
  const tb=document.getElementById('synth-tbody');
  tb.innerHTML=SYNTH_CONCEPTS.map(c=>{
    const total=S.resources[c.id]||0;
    const pct=Math.min(100,total/c.milestone*100);
    const rate=synthRates[c.id]||0;
    const eta=rate>0?fmtTime((c.milestone-total)/rate):'—';
    const etaStr=total<c.milestone?`<span class="synth-eta">${eta}</span>`:'<span class="synth-eta" style="color:var(--green)">DONE</span>';
    return`<tr>
      <td><div class="synth-concept-name">${c.name}</div><div class="synth-concept-sub">${c.sub}</div></td>
      <td>${fmt(total)}</td>
      <td>${c.milestone} ${etaStr}<div class="synth-milestone-bar"><div class="synth-milestone-fill" style="width:${pct}%"></div></div></td>
      <td>${S.victories[CREATURES.find(x=>x.rewards.cha!==undefined)?.id]||0}</td>
      <td>${rate>0?'+'+rate.toFixed(4)+'/s':'0'}</td>
    </tr>`;
  }).join('');
  document.getElementById('quint-pending').textContent='+'+fmt(S.quintPending);
  document.getElementById('quint-pend-val').textContent='+'+fmt(S.quintPending);
  document.getElementById('quint-life-val').textContent=fmt(S.quintLifetime);
  document.getElementById('quint-count').textContent=fmt(S.quintPending);
  const ready=S.quintPending>=100;
  const rb=document.getElementById('redraw-btn');
  rb.className=ready?'ready':'';
  rb.id='redraw-btn';
  document.getElementById('redraw-req').textContent=ready?'READY TO REDRAW!':'REQUIRES 100 PENDING QUINTESSENCE';
}

// ═══════════════════════════════════════════════════════
// GLOSSARY
// ═══════════════════════════════════════════════════════
const GLOSS_TYPES=['ALL','SCRAP'];
function renderGlossary(){
  const filtersEl=document.getElementById('gloss-filters');
  const total=CREATURES.length;
  const unlocked=CREATURES.filter(c=>getVictories(c.id)>0).length;
  filtersEl.innerHTML=`<button class="gloss-filter active">${'ALL'} ${unlocked}/${total}</button>
  <button class="gloss-filter">SCRAP ${unlocked}/${total}</button>`;
  const grid=document.getElementById('gloss-grid');
  // Show unlocked + some locked (total 219 conceptually, show first 30)
  const unlockList=CREATURES.filter(c=>getVictories(c.id)>0);
  const lockFiller=Array.from({length:Math.max(0,20-unlockList.length)},(_,i)=>({locked:true,idx:i}));
  grid.innerHTML=[
    ...unlockList.map(c=>`<div class="gloss-card unlocked">${SVGs[c.id]||''}</div>`),
    ...lockFiller.map((_,i)=>`<div class="gloss-card locked"><div class="gloss-q">?</div><div class="gloss-chance">CHANCE: 100%</div><div class="gloss-locked-name">??? ???</div></div>`)
  ].join('');
}

// ═══════════════════════════════════════════════════════
// SHOP
// ═══════════════════════════════════════════════════════
function renderShop(){
  const g=document.getElementById('shop-grid');
  g.innerHTML=SHOP_ITEMS.map(item=>{
    const owned=S.shopOwned[item.id]||0;
    const costStr=Object.entries(item.cost).map(([k,v])=>`${fmt(v)} ${k.toUpperCase()}`).join(' + ');
    const canAfford=Object.entries(item.cost).every(([k,v])=>(S.resources[k]||0)>=v);
    return`<div class="shop-card">
      <div class="shop-name">${item.name}</div>
      <div class="shop-desc">${item.desc}</div>
      <div class="shop-effect">${item.effect}</div>
      <div class="shop-cost">Cost: ${costStr}</div>
      <div class="shop-own">Owned: ${owned}</div>
      <button class="btn-buy" onclick="buyShopItem('${item.id}')" ${canAfford?'':'disabled'}>BUY</button>
    </div>`;
  }).join('');
}
function buyShopItem(id){
  const item=SHOP_ITEMS.find(x=>x.id===id);
  if(!item)return;
  const canAfford=Object.entries(item.cost).every(([k,v])=>(S.resources[k]||0)>=v);
  if(!canAfford){toast('Not enough resources!');return;}
  Object.entries(item.cost).forEach(([k,v])=>{S.resources[k]-=v;});
  Object.entries(item.statBonus).forEach(([k,v])=>{S.stats[k]=(S.stats[k]||0)+v;});
  S.shopOwned[item.id]=(S.shopOwned[item.id]||0)+1;
  toast(`Purchased: ${item.name}!`);
  renderShop();renderStats();
}

// ═══════════════════════════════════════════════════════
// RESOURCES DISPLAY
// ═══════════════════════════════════════════════════════
let lastResources={gra:0,wax:0,cha:0,gold:0,plat:0};
let resRates={gra:0,wax:0,cha:0,gold:0,plat:0};
function updateResources(){
  document.getElementById('res-old').textContent=fmt(S.resources.gra);
  document.getElementById('res-bronze').textContent=fmt(S.resources.wax);
  document.getElementById('res-silver').textContent=fmt(S.resources.cha);
  document.getElementById('res-gold').textContent=fmt(S.resources.gold);
  document.getElementById('res-plat').textContent=fmt(S.resources.plat);
  document.getElementById('res-old-rate').textContent=(synthRates.gra>0?'+':'')+synthRates.gra.toFixed(3)+'/s';
  document.getElementById('res-bronze-rate').textContent=(synthRates.wax>0?'+':'')+synthRates.wax.toFixed(3)+'/s';
  document.getElementById('res-silver-rate').textContent=(synthRates.cha>0?'+':'')+synthRates.cha.toFixed(3)+'/s';
  document.getElementById('res-gold-rate').textContent=(synthRates.gold>0?'+':'')+synthRates.gold.toFixed(3)+'/s';
  document.getElementById('res-plat-rate').textContent=(synthRates.plat>0?'+':'')+synthRates.plat.toFixed(3)+'/s';
}

// ═══════════════════════════════════════════════════════
// PROTOCOLS / TOGGLES
// ═══════════════════════════════════════════════════════
function setupToggles(){
  const ac=document.getElementById('toggle-ac');
  const ar=document.getElementById('toggle-ar');
  function updateAC(){
    ac.classList.toggle('on',S.protocols.autoChallenge);
    document.getElementById('ac-details').textContent=
      S.protocols.autoChallenge?(S.currentCreature||'NEXT CREATURE'):'DISABLED';
  }
  function updateAR(){
    ar.classList.toggle('on',S.protocols.autoRetry);
    document.getElementById('ar-details').textContent=S.protocols.autoRetry?'ENABLED':'DISABLED';
  }
  ac.addEventListener('click',()=>{
    S.protocols.autoChallenge=!S.protocols.autoChallenge;
    updateAC();
    if(S.protocols.autoChallenge&&!B.active){
      const first=CREATURES.find(c=>isUnlocked(c.id)&&!isMaxed(c));
      if(first)startBattle(first.id);
    }
  });
  ar.addEventListener('click',()=>{S.protocols.autoRetry=!S.protocols.autoRetry;updateAR();});
  updateAC();updateAR();
}

// ═══════════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════════
const ITEM_ICONS={
  iron_quill:'🗡',sketch_shield:'🛡',ink_vial:'⚗',wax_seal:'💎',
  charcoal_blade:'⚔',draft_armor:'🧥',perspective_lens:'🔮',phantom_step:'👟',
  wax_tablet:'📜',charcoal_sigil:'✦',bone_quill:'🦴',ink_reservoir:'🫙',
  void_fragment:'💠',master_palette:'🎨',draft_crown:'👑',
};
const INV_SLOTS=35;
function renderInventory(){
  const g=document.getElementById('inventory-grid');
  const owned=SHOP_ITEMS.filter(item=>(S.shopOwned[item.id]||0)>0);
  // Build flat slot list: each owned item occupies 1 slot (qty shown as badge)
  const slots=[];
  owned.forEach(item=>slots.push(item));
  const totalSlots=Math.max(INV_SLOTS,Math.ceil(slots.length/5)*5);
  let cells='';
  for(let i=0;i<totalSlots;i++){
    const item=slots[i];
    if(item){
      const qty=S.shopOwned[item.id]||0;
      const icon=ITEM_ICONS[item.id]||'✦';
      cells+=`<div class="inv-cell has-item">
        <div class="inv-icon">${icon}</div>
        ${qty>1?`<div class="inv-qty">×${qty}</div>`:''}
        <div class="inv-tooltip">
          <div class="inv-tooltip-name">${item.name}</div>
          <div class="inv-tooltip-desc">${item.desc}</div>
          <div class="inv-tooltip-effect">${item.effect}</div>
          ${qty>1?`<div class="inv-tooltip-qty">Owned: ${qty}</div>`:''}
        </div>
      </div>`;
    } else {
      cells+=`<div class="inv-cell"></div>`;
    }
  }
  g.innerHTML=`<div class="inv-wrap">
    <div class="inv-label">— Bag —</div>
    <div class="inv-grid">${cells}</div>
    ${owned.length===0?`<div class="inv-empty-msg" style="text-align:center;padding:12px 0;">Empty. Visit the Shop.</div>`:''}
  </div>`;
}
function switchTab(name){
  document.querySelectorAll('.nav-tab').forEach(t=>{
    t.classList.toggle('active',t.dataset.tab===name);
  });
  document.querySelectorAll('.tab-pane').forEach(p=>{
    p.classList.toggle('active',p.id==='tab-'+name);
  });
  if(name==='gallery')renderGallery();
  if(name==='inventory')renderInventory();
  if(name==='shop')renderShop();
  if(name==='archive'){renderSynth();renderGlossary();renderAchievements();}
}
document.querySelectorAll('.nav-tab').forEach(t=>{
  t.addEventListener('click',()=>switchTab(t.dataset.tab));
});
document.querySelectorAll('.arch-tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('.arch-tab').forEach(x=>x.classList.toggle('active',x===t));
    document.querySelectorAll('.arch-pane').forEach(x=>x.classList.toggle('active',x.id==='arch-'+t.dataset.arch));
    if(t.dataset.arch==='achievements')renderAchievements();
    if(t.dataset.arch==='synth')renderSynth();
    if(t.dataset.arch==='glossary')renderGlossary();
    if(t.dataset.arch==='masterpiece')renderMastery();
  });
});

// ═══════════════════════════════════════════════════════
// SETTINGS LOGIC
// ═══════════════════════════════════════════════════════

function setupSettings(){


  // Interface buttons
  document.getElementById('btn-light-mode').addEventListener('click',()=>{
    S.settings.lightMode=!S.settings.lightMode;
    document.body.style.filter=S.settings.lightMode?'invert(1) hue-rotate(180deg)':'';
    document.getElementById('btn-light-mode').textContent=S.settings.lightMode?'SWITCH TO DARK MODE':'SWITCH TO LIGHT MODE';
  });
  document.getElementById('btn-invert-img').addEventListener('click',()=>{
    S.settings.invertImg=!S.settings.invertImg;
    const f=S.settings.invertImg?'invert(1)':'';
    document.querySelectorAll('.card-art svg,.card-art img,#battle-art svg,#portrait-box svg,.gloss-card.unlocked svg').forEach(s=>s.style.filter=f);
    document.getElementById('btn-invert-img').textContent=S.settings.invertImg?'RESTORE IMAGES':'SWITCH TO INVERTED IMAGES';
  });
  document.getElementById('btn-fullscreen').addEventListener('click',()=>{
    if(!document.fullscreenElement)document.documentElement.requestFullscreen().catch(()=>{});
    else document.exitFullscreen();
    setTimeout(()=>{document.getElementById('btn-fullscreen').textContent=document.fullscreenElement?'↙ EXIT FULLSCREEN':'↗ ENTER FULLSCREEN';},200);
  });

  // Zoom
  let zoom=S.settings.uiZoom||100;
  function applyZoom(z){
    S.settings.uiZoom=z;
    const scale=z/100;
    const wrap=document.getElementById('zoom-wrap');
    wrap.style.width=(100/scale)+'vw';
    wrap.style.height=(100/scale)+'vh';
    wrap.style.transform='scale('+scale+')';
    document.getElementById('zoom-val').textContent=z+'%';
  }
  applyZoom(zoom);
  document.getElementById('zoom-minus').addEventListener('click',()=>{zoom=Math.max(50,zoom-10);applyZoom(zoom);});
  document.getElementById('zoom-plus').addEventListener('click',()=>{zoom=Math.min(200,zoom+10);applyZoom(zoom);});
  document.getElementById('zoom-reset').addEventListener('click',()=>{zoom=100;applyZoom(zoom);});

  // Font Size
  const FS_DEFAULT=13,FS_MIN=8,FS_MAX=24,FS_STEP=1;
  const FS_RULES=[
    ['body',13],['#topbar .title',16],['.nav-tab',12],['.res-val',15],
    ['.res-rate',11],['.res-icon',10],['.res-unknown',22],['#topbar .fps',12],
    ['#add-btn',16],['#quint-count',13],['.btm-panel-hdr',11],
    ['#specs-header .label',9],['.filter-tab',10],['.sort-btn',11],
    ['.sort-label',11],['.stat-name',9],['.stat-val',13],
    ['#fund-header .label',11],['.fund-row',10],['#protocols-header .title',11],
    ['.protocol-title',10],['.protocol-sub',10],['.toggle-label',10],
    ['.protocol-val',8],['#gallery-intro',11],['.card-name',10],
    ['.card-tagline',8],['.card-stats',9],['.new-badge',7],
    ['.rewards-header',8],['.reward-item',8],['.btn-challenge',9],
    ['.btn-maxed',9],['#battle-creature-name',16],['#battle-creature-tag',10],
    ['.hp-label',9],['#battle-log',9],['.battle-btn',9],['#battle-status',10],
    ['.timer-label',8],['.timer-text',8],['#victory-panel h3',10],
    ['.victory-stat',10],['#death-overlay h2',16],['#death-overlay .timer',24],
    ['.bsp-box-title',11],['.bsp-box-sub',8],['.bsp-col-head',8],
    ['.bsp-name',10],['.bsp-you',9],['.bsp-enemy',9],['.arch-tab',10],
    ['.synth-table th',9],['.synth-table td',10],['.synth-concept-sub',8],
    ['.synth-eta',8],['.synth-panel-title',8],['.quint-pending',24],
    ['.quint-sub',8],['.quint-row',9],['#redraw-btn',9],['.redraw-req',8],
    ['.settings-row-label',10],['.settings-check-label',10],
    ['.settings-check-sublabel',8],['.zoom-val',10],['.zoom-btn',11],
  ];
  let fs=S.settings.fontSize||FS_DEFAULT;
  function applyFontSize(size){
    S.settings.fontSize=size;
    const r=size/13;
    const css=FS_RULES.map(([sel,base])=>`${sel}{font-size:${(base*r).toFixed(1)}px!important;}`).join('');
    document.getElementById('fs-override').textContent=css;
    document.getElementById('fs-val').textContent=size+'px';
  }
  applyFontSize(fs);
  document.getElementById('fs-minus').addEventListener('click',()=>{fs=Math.max(FS_MIN,fs-FS_STEP);applyFontSize(fs);});
  document.getElementById('fs-plus').addEventListener('click',()=>{fs=Math.min(FS_MAX,fs+FS_STEP);applyFontSize(fs);});
  document.getElementById('fs-reset').addEventListener('click',()=>{fs=FS_DEFAULT;applyFontSize(fs);});

  // Checkboxes
  document.getElementById('chk-protocols').addEventListener('change',function(){
    document.getElementById('right-sidebar').style.display=this.checked?'flex':'none';
  });
  document.getElementById('chk-combat-log').addEventListener('change',function(){S.settings.combatLog=this.checked;});
  document.getElementById('chk-hide-scroll').addEventListener('change',function(){
    document.body.style.overflow=this.checked?'hidden':'';
    document.getElementById('content-area').style.setProperty('--scrollbar-width',this.checked?'0':'5px');
    document.querySelectorAll('#content-area,#left-sidebar').forEach(el=>{el.style.scrollbarWidth=this.checked?'none':'auto';});
  });
  document.getElementById('chk-highlights').addEventListener('change',function(){
    document.querySelectorAll('.stat-cell,.res-block').forEach(el=>{
      el.style.cursor=this.checked?'help':'';
      if(this.checked){
        el.addEventListener('mouseenter',function(){this.style.borderColor='var(--border2)';});
        el.addEventListener('mouseleave',function(){this.style.borderColor='';});
      }
    });
  });
  document.getElementById('chk-screen-sleep').addEventListener('change',function(){
    if(this.checked&&'wakeLock' in navigator){
      navigator.wakeLock.request('screen').catch(()=>{});
    }
  });

  // Battle nav
  document.querySelectorAll('.nav-style-btn[data-nav]').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.nav-style-btn[data-nav]').forEach(x=>x.classList.toggle('active',x===b));
      S.settings.battleNav=b.dataset.nav;
    });
  });

  // Notification style
  document.querySelectorAll('.nav-style-btn[data-notif]').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.nav-style-btn[data-notif]').forEach(x=>x.classList.toggle('active',x===b));
    });
  });

  // Records
  document.getElementById('btn-view-stats').addEventListener('click',()=>{
    const el=document.getElementById('stats-profile-display');
    const visible=el.style.display==='block';
    el.style.display=visible?'none':'block';
    if(!visible){
      document.getElementById('stats-detail').innerHTML=
        STAT_DEFS.map(d=>`<div class="stat-profile-item">${d.label}: <span>${formatStat(d.key,S.stats[d.key])}</span></div>`).join('');
    }
    document.getElementById('btn-view-stats').textContent=visible?'VIEW YOUR STATS':'HIDE STATS';
  });
  document.getElementById('btn-switch-slot').addEventListener('click',()=>{
    toast('Save slot switching not available in single-slot build.',3000);
  });
  document.getElementById('btn-save').addEventListener('click',()=>{saveGame();toast('Game saved!');});
  document.getElementById('btn-hard-reset').addEventListener('click',()=>{
    if(confirm('HARD RESET: All progress will be permanently lost. Are you absolutely sure?')){
      localStorage.removeItem('rejected_draft_save');
      localStorage.removeItem('rd_tutorial_done');
      S=DEFAULT_STATE();
      B={active:false,creature:null,playerHP:0,enemyHP:0,deathTimer:0,dying:false,fleeTimer:0,lastTick:0};
      synthRates={gra:0,wax:0,cha:0,gold:0,plat:0};
      initGalleryQueue();
      renderAll();
      toast('Game has been reset.',3000);
    }
  });
  document.getElementById('btn-credits').addEventListener('click',()=>{
    toast('Draft Throne — fan recreation. Original by the Draft Throne team. Art is pain.',5000);
  });

  // Battle controls
  document.getElementById('btn-flee').addEventListener('click',()=>{
    if(B.active){addLog(`<span class="log-die">✗ You fled from ${B.creature?B.creature.name:'battle'}.`);stopBattle();}
    else toast('No active battle to flee from.');
  });

  // Add / Quintessence shortcut
  document.getElementById('add-btn').addEventListener('click',()=>{
    switchTab('archive');
    document.querySelectorAll('.arch-tab').forEach(x=>x.classList.toggle('active',x.dataset.arch==='synth'));
    document.querySelectorAll('.arch-pane').forEach(x=>x.classList.toggle('active',x.id==='arch-synth'));
    renderSynth();
  });

  // Redraw World
  document.getElementById('redraw-btn').addEventListener('click',()=>{
    if(S.quintPending<100){toast('Need 100 pending quintessence to redraw!');return;}
    if(!confirm('REDRAW WORLD: Your progress resets, but you keep a permanent bonus. Continue?'))return;
    S.quintLifetime+=S.quintPending;
    S.redraws++;
    const bonus=(1+S.redraws*0.05).toFixed(2);
    toast(`World redrawn! Permanent bonus: ${bonus}x — you feel sharper.`,5000);
    const base=DEFAULT_STATE();
    S.stats=base.stats;
    S.victories={};
    S.resources={gra:0,wax:0,cha:0,gold:0,plat:0};
    S.currentCreature=null;
    S.quintPending=0;
    S.sessionRewards={};
    S.galleryUnlocked=[];
    S.galleryQueue=[];
    B={active:false,creature:null,playerHP:0,enemyHP:0,deathTimer:0,dying:false,fleeTimer:0,lastTick:0};
    synthRates={gra:0,wax:0,cha:0,gold:0,plat:0};
    initGalleryQueue();
    renderAll();
  });
}

// ═══════════════════════════════════════════════════════
// SAVE / LOAD
// ═══════════════════════════════════════════════════════
function saveGame(){
  S.lastSave=Date.now();
  localStorage.setItem('rejected_draft_save',JSON.stringify(S));
}
function loadGame(){
  try{
    const raw=localStorage.getItem('rejected_draft_save');
    if(!raw)return;
    const loaded=JSON.parse(raw);
    const def=DEFAULT_STATE();
    S=Object.assign(def,loaded);
    S.stats=Object.assign(DEFAULT_STATE().stats,loaded.stats||{});
    S.resources=Object.assign({gra:0,wax:0,cha:0,gold:0,plat:0},loaded.resources||{});
    S.settings=Object.assign(def.settings,loaded.settings||{});
    S.protocols=Object.assign({autoChallenge:false,autoRetry:false},loaded.protocols||{});
    S.achievements=Object.assign({},loaded.achievements||{});
    S.victories=Object.assign({},loaded.victories||{});
    S.shopOwned=Object.assign({},loaded.shopOwned||{});
    S.spawnRarity=Object.assign({},loaded.spawnRarity||{});
    S.deaths=loaded.deaths||0;
    S.lifeGra=loaded.lifeGra||0;
    S.redraws=loaded.redraws||0;
    S.quintPending=loaded.quintPending||0;
    S.quintLifetime=loaded.quintLifetime||0;
    // Offline progress
    const offline=Math.min((Date.now()-(loaded.lastSave||Date.now()))/1000, 86400);
    if(offline>10){
      S.offlineTime=(S.offlineTime||0)+offline;
      const offlineRate=0.5+(S.redraws*0.1);
      const offlineGra=offline*offlineRate;
      const offlineWax=offline*(offlineRate*0.05);
      S.resources.gra+=offlineGra;
      S.resources.wax+=offlineWax;
      S.lifeGra+=offlineGra;
      setTimeout(()=>toast(`Welcome back! +${fmt(offlineGra)} GRA, +${fmt(offlineWax)} WAX offline (${fmtTime(offline)})`,5000),500);
    }
  }catch(e){console.error('Load failed',e);}
  initGalleryQueue();
}

// ═══════════════════════════════════════════════════════
// SPEC FILTER TABS
// ═══════════════════════════════════════════════════════
document.querySelectorAll('#spec-filters .filter-tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('#spec-filters .filter-tab').forEach(x=>x.classList.toggle('active',x===t));
    currentSpecFilter=t.dataset.spec;
    renderStats();
  });
});
document.querySelectorAll('#fund-filters .filter-tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('#fund-filters .filter-tab').forEach(x=>x.classList.toggle('active',x===t));
    currentFundFilter=t.dataset.fund;
    renderFundamentals();
  });
});

// ═══════════════════════════════════════════════════════
// MAIN RENDER
// ═══════════════════════════════════════════════════════
function renderAll(){
  renderStats();renderFundamentals();renderGallery();renderShop();
  renderSynth();renderGlossary();renderAchievements();
  updateBattleUI();renderSessionRewards();updateResources();
}

// ═══════════════════════════════════════════════════════
// GAME LOOP
// ═══════════════════════════════════════════════════════
let frameCount=0,fpsTimer=0,lastFrame=performance.now();
function gameLoop(){
  const now=performance.now();
  const dt=(now-lastFrame)/1000;
  lastFrame=now;
  frameCount++;
  fpsTimer+=dt;
  if(fpsTimer>=1){
    document.getElementById('fps-display').textContent='FPS '+frameCount;
    frameCount=0;fpsTimer=0;
  }
  battleTick();
  synthTick(dt);
  S.activeTime=(S.activeTime||0)+dt;
  // Update UI periodically
  if(frameCount%3===0){
    updateBattleUI();
    updateResources();
    document.getElementById('active-time').textContent=fmtTime(S.activeTime);
    document.getElementById('offline-time').textContent=fmtTime(S.offlineTime||0);
  }
  if(frameCount%30===0){
    renderStats();renderFundamentals();
    checkAchievements();
    const archActive=document.getElementById('tab-archive').classList.contains('active');
    if(archActive){
      if(document.getElementById('arch-synth').classList.contains('active'))renderSynth();
    }
    if(document.getElementById('tab-gallery').classList.contains('active'))renderGallery();
    if(document.getElementById('tab-shop').classList.contains('active'))renderShop();
    saveGame();
  }
  requestAnimationFrame(gameLoop);
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════
loadGame();
initGalleryQueue();
setupToggles();
setupSettings();
renderAll();
checkAchievements();
// Start autochallenge if was enabled
if(S.protocols.autoChallenge&&!B.active){
  const first=CREATURES.find(c=>isUnlocked(c.id)&&!isMaxed(c));
  if(first)startBattle(first.id);
}
requestAnimationFrame(gameLoop);
