// Corre — sistemas: fama e seguidores, golpes de luta, fuga do flagrante e atividades extracurriculares.
// Carregado depois de jogo.js. Reaproveita os helpers globais do jogo (rs, carta, aplicar, acao, marca, escolher...).

// ===== Fama puxa seguidores =====
// Cada nível de fama tem um "público natural". Quem é famoso ganha seguidores todo ano sem postar nada.
const PESO_PLAT = { instagram: 1, tiktok: .85, x: .5, facebook: .35, twitch: .15 };

function publicoFama(f) { return f < 5 ? 0 : Math.round(Math.pow(10, 2 + .062 * f)) }

function puxarSeguidores(a, delta) { if (!a.redes || !a.redes.plat) return 0; let total = 0; for (const p in a.redes.plat) { const c = a.redes.plat[p],
      alvo = publicoFama(a.fama) * (PESO_PLAT[p] || .3); if (c.seg >= alvo) continue; const ganho = Math.round((alvo - c.seg) * (delta ? .3 : .25 + .25 * R()));
    c.seg += ganho, total += ganho } return somaRedes(a), total }
anoRedes = function(f) { return function(a, o) { f(a, o); if (!a.redes || !a.redes.plat || a.fama < 5) return; const g = puxarSeguidores(a);
    g >= 50 && o.push({ t: `Sua fama trouxe +${fmtNum(g)} seguidores.`, c: "bom" }) } }(anoRedes);

// ===== Leis do país (dados em perfis.js; aqui só os valores padrão) =====
const LEIS_PADRAO = { beber: 18, alcool: !0, dirigir: 18, casarGay: !1, gayCrime: !1, aborto: "restrito", penaMorte: !1, cassino: !0, maconha: "proibida", drogas: 2, alistamento: null, armas: "restrito", divorcio: !0, corrupcao: 50, aposentadoria: 65, salMin: 0, saude: "mista", meses: 12, ir: 15, monarquia: !1 };

function perfilDe(c) { return "undefined" != typeof PERFIS && PERFIS[c] || null }

function leis(a) { const p = perfilDe(a && a.pais || "BR"); return p && p.leis ? Object.assign({}, LEIS_PADRAO, p.leis) : LEIS_PADRAO }

// ===== Flagrante: a polícia chegou. Correr, se esconder, subornar, enfrentar ou se render =====
// c = { crime: objeto de CRIME } ou { tipo, pena, grave, interrogar: [anos, tipo] }
Object.assign(CRIME, {
  lesao: { id: "lesao", tipo: "lesão corporal", pena: [1, 3], g: [0, 4e4], calor: 3 },
  homicidio: { id: "homicidio", tipo: "homicídio", pena: [12, 25], g: [0, 4e5], calor: 9 },
  tentativa: { id: "tentativa", tipo: "tentativa de homicídio", pena: [5, 12], g: [0, 2e5], calor: 7 },
  assalto_banco: { id: "assalto_banco", tipo: "assalto a banco", pena: [8, 14], g: [0, 9e5], calor: 7 },
  vandalismo: { id: "vandalismo", tipo: "vandalismo", pena: [0, 1], g: [0, 2e4], calor: 1 },
  agressao_policial: { id: "agressao_policial", tipo: "resistência e agressão a policial", pena: [2, 5], g: [0, 6e4], calor: 5 }
});

function nomePolicia(a) { const p = perfilDe(a.pais); return p && p.trab ? p.trab.policia : "polícia" }

function cartaFlagrante(a, c) { const L = leis(a),
    crime = c.crime || null,
    grave = !!c.grave || !!crime && crime.calor >= 6,
    pena = crime ? Math.round((crime.pena[0] + crime.pena[1]) / 2) : c.interrogar ? c.interrogar[0] : 2,
    cap = (extra = 0) => crime ? "julgar:" + crime.id + ":" + extra : `interrogar:${c.interrogar[0]+extra}:${c.interrogar[1]}`,
    fuga = grave ? ["foragir:" + Math.max(pena, 4), "calor:3"] : ["calor:2"],
    fis = a.idade < 30 ? 10 : a.idade > 55 ? -18 : a.idade > 45 ? -8 : 0,
    correr = clamp(Math.round(32 + .5 * (a.st.saude - 50) + fis + (a.talento.futebol + a.talento.basquete) / 25 - (grave ? 12 : 0)), 6, 85),
    esconder = clamp(Math.round(26 + .35 * (a.st.cabeca - 50) + .3 * (a.sorte - 50) - (grave ? 12 : 0)), 6, 75),
    propina = Math.max(1500, 100 * Math.round(pena * (grave ? 6e3 : 2500) * Math.max(.5, PAISES[a.pais] ? PAISES[a.pais].mult : 1) / 100)),
    chProp = clamp(Math.round(6 + .75 * L.corrupcao - (grave ? 22 : 0)), 3, 80),
    briga = nivelBriga(a),
    golpe = (golpesAprendidos(a).sort((a, o) => o.d - a.d)[0] || { n: "um empurrão" }).n,
    enfrentar = clamp(Math.round(12 + .8 * (briga - 50)), 4, 72),
    armada = "comum" === L.armas,
    pol = nomePolicia(a),
    o = [
      { l: "Correr", ch: correr, ok: { t: pick(["Você correu como nunca. Pulou um muro, cortou por um beco e sumiu.", "Saiu em disparada. Quando olhou pra trás, não tinha mais ninguém."]) + (grave ? " Agora você é procurad" + oa(a) + "." : ""), fx: { saude: -1, a: fuga, m: "fugiu_policia" } }, no: { t: "Correu, mas te alcançaram no fim do quarteirão. Algemas.", fx: { saude: -3, a: cap(1) } } },
      { l: "Se esconder", ch: esconder, ok: { t: pick(["Se enfiou num depósito e prendeu a respiração. Passaram direto.", "Entrou numa loja lotada e se misturou na fila. Funcionou."]) + (grave ? " Mas seu rosto já está nos jornais." : ""), fx: { a: fuga, m: "fugiu_policia" } }, no: { t: "O cachorro da polícia te achou atrás das caixas.", fx: { a: cap(1) } } },
      { l: `Oferecer propina (${fmtR(propina)})`, req: ["grana>" + (propina - 1)], ch: chProp, ok: { t: "O policial olhou pros lados, guardou o dinheiro e foi embora.", fx: { grana: -propina, moral: -3, m: "subornou" } }, no: { t: "Tentativa de suborno. Agora são dois crimes.", fx: { grana: -propina, a: cap(2) } } }
    ];
  (briga >= 40 || golpesAprendidos(a).some(a => a.m)) && o.push({ l: `Enfrentar o policial (${golpe})`, ch: enfrentar, ok: { t: `Derrubou o policial com ${golpe.toLowerCase()} e sumiu antes do reforço chegar.`, fx: { moral: -4, a: ["foragir:" + Math.max(pena + 2, 4), "calor:4"], m: "agrediu_policial" } }, no: { t: armada && R() < .45 ? "O policial sacou a arma. O tiro pegou na perna." : "Te imobilizaram no chão em segundos.", fx: { saude: armada ? -22 : -8, a: cap(3) } } }), o.push({ l: "Se render", ok: { t: "Mãos na cabeça. A colaboração vai contar a seu favor.", fx: { moral: 1, a: crime ? "julgar:" + crime.id + ":-1" : `interrogar:${Math.max(0,c.interrogar[0]-1)}:${c.interrogar[1]}` } } }); return { id: "flagrante", adhoc: 1, rar: "u", t: c.t || "A polícia chegou. Você tem segundos pra decidir.", o }
}

function cartaInterrogatorio(a, i, t) { return { id: "interrogatorio", adhoc: 1, rar: "c", t: "Você foi levad" + oa(a) + " pra delegacia. O interrogatório começou.", o: [{ l: "Ficar em silêncio e pedir advogado", ok: { t: "Seu direito. O delegado bufou.", fx: { a: `prender:${i}:${t}` } } }, { l: "Negar tudo", ch: 30, ok: { t: "Faltaram provas. Liberad" + oa(a) + ".", fx: { humor: 4 } }, no: { t: "Tinha câmera. A mentira pesou na pena.", fx: { a: `prender:${i+1}:${t}` } } }, { l: "Confessar e pedir desculpas", ok: { t: "A confissão reduziu a pena.", fx: { a: `prender:${Math.max(1,i-1)}:${t}`, moral: 2 } } }] } }
acao = function(f) { return function(a, o, e) { const [r, ...i] = o.split(":"); if ("julgar" === r) { const o = CRIME[i[0]]; if (!o) return; const r = +i[1] || 0,
        t = r ? Object.assign({}, o, { pena: [Math.max(0, o.pena[0] + r), Math.max(1, o.pena[1] + r)] }) : o; return void a.tmp.proximas.push(cartaJulgamento(a, t)) } if ("interrogar" === r) return void a.tmp.proximas.push(cartaInterrogatorio(a, Math.max(0, +i[0]), i[1])); if ("calor" === r) return void(a.crime.calor = (a.crime.calor || 0) + (+i[0] || 1)); if ("aprender" === r) { const o = aprenderGolpe(a, i[0]); return void(o && e.push({ k: "info", t: "Golpe novo: " + o })) } if ("ec" === r) return void ecAcao(a, i, e); if ("fama" === r) { const antes = a.fama;
      f(a, o, e); const t = a.fama - antes; if (t > 0) { const o = puxarSeguidores(a, !0);
        o >= 50 && e.push({ k: "info", t: `+${fmtNum(o)} seguidores` }) } return } return f(a, o, e) } }(acao);

// Crimes do jogo, agora com chance de fugir do flagrante.
cometer = function(a, o) { const e = CRIME[o],
    r = []; if (a.crime.feitos++, a.crime.ultimo = o, marca(a, "crime"), a.moral = clamp(a.moral - (e.calor + 1), -50, 50), roll(chancePego(a, e))) return a.crime.calor += e.calor, a.tmp.proximas.push(cartaFlagrante(a, { crime: e })), { txt: tpl(a, pick(["Sirene e luz azul na esquina. Te viram.", "Alguém gritou e apontou pra você. A viatura freou.", "Uma câmera pegou tudo e a polícia chegou rápido."])), chips: r, flagrante: !0, rotulo: "Flagrante" }; const i = 10 * Math.round(rnd(e.g[0], e.g[1]) / 10); return a.grana += i, a.crime.ganho += i, a.crime.calor += e.calor, "banco" === o && marca(a, "crime_banco"), r.push({ k: "grana", v: i }), r.push(...aplicar(a, { humor: rnd(-3, 4) })), { txt: tpl(a, pick(e.ok)), chips: r } };
crimeSimples = function(a, o, e, r, i, t) { return a.crime.feitos++, marca(a, "crime"), roll(e) ? (a.grana += r, a.crime.ganho += r, rs(a, `${o}: deu certo. Ninguém viu.`, { grana: 0, humor: 3, moral: -3, a: "loot:" + r })) : (a.tmp.proximas.push(cartaFlagrante(a, { interrogar: [i, t] })), Object.assign(rs(a, `${o}: deu errado. Te viram.`, { humor: -4 }), { rotulo: "Flagrante" })) };
crimeResultado = function(a, o, e, r, i, t) { return a.crime.feitos++, marca(a, "crime"), e ? (a.grana += r, a.crime.ganho += r, a.crime.calor = Math.min(10, (a.crime.calor || 0) + 1), rs(a, `${o}: deu certo. ${fmtR(r)} no bolso.`, { humor: 3, moral: -3, a: "loot:" + r })) : (a.tmp.proximas.push(cartaFlagrante(a, { interrogar: [i, t] })), Object.assign(rs(a, `${o}: deu errado. A polícia apareceu.`, { humor: -4 }), { rotulo: "Flagrante" })) };
assaltoBanco = function(a, o, e, r) { a.crime.feitos++, marca(a, "crime"); const i = clamp(20 + [10, 20, 0][o] + [15, 5, 10][e] + (r ? 30 : -10) + .2 * (a.st.cabeca - 50), 5, 80); if (roll(i)) { const o = 1e4 * rnd(15, 60); return a.grana += o, a.crime.ganho += o, marca(a, "assalto_banco"), { ok: !0, txt: `O cofre abriu. Vocês saíram com ${fmtR(o)} antes da polícia chegar.`, chips: [{ k: "grana", v: o }] } } return a.tmp.proximas.push(cartaFlagrante(a, { crime: CRIME.assalto_banco, t: "O alarme silencioso disparou. A polícia está cercando o banco." })), { ok: !1, txt: "O alarme silencioso disparou.", chips: [{ k: "info", t: "Flagrante" }] } };

// ===== Golpes: cada arte marcial tem técnicas que precisam ser aprendidas no treino =====
// [nome, dano, precisão, faixa mínima, tipo] — tipo: "" normal, "ko" pode nocautear, "fin" finalização (estrangula/torce), "letal" pode matar
Object.assign(MODALIDADES, {
  kravmaga: { n: "Krav maga", faixas: ["amarela", "laranja", "verde", "azul", "marrom", "preta"], golpes: [] },
  kungfu: { n: "Kung fu", faixas: ["branca", "amarela", "laranja", "verde", "azul", "marrom", "preta"], golpes: [] }
});
const GOLPES_ARTES = {
  jiujitsu: [["Raspagem", 10, 10, 0, ""], ["Chave de braço", 22, -5, 0, "fin"], ["Triângulo", 26, -8, 1, "fin"], ["Mata-leão", 30, -10, 1, "fin"], ["Kimura", 26, -6, 2, "fin"], ["Chave de calcanhar", 32, -14, 3, "fin"], ["Estrangulamento de lapela", 34, -12, 4, "fin"]],
  karate: [["Soco reto (tsuki)", 14, 10, 0, ""], ["Chute frontal (mae geri)", 18, 0, 1, ""], ["Chute circular (mawashi geri)", 22, -4, 2, "ko"], ["Golpe de mão em faca (shuto)", 20, 0, 3, ""], ["Chute giratório", 28, -12, 5, "ko"], ["Soco no ponto vital", 30, -15, 7, "letal"]],
  judo: [["Projeção de quadril", 18, 2, 0, ""], ["Imobilização", 12, 8, 1, "fin"], ["Ippon seoi nage", 28, -8, 3, "ko"], ["Estrangulamento (hadaka jime)", 28, -10, 5, "fin"], ["Chave de braço (juji gatame)", 26, -8, 6, "fin"], ["Uchi mata", 32, -12, 8, "ko"]],
  capoeira: [["Rasteira", 14, 5, 0, ""], ["Benção", 18, 0, 1, ""], ["Armada", 22, -6, 2, "ko"], ["Meia-lua de compasso", 26, -10, 3, "ko"], ["Martelo", 24, -4, 5, "ko"], ["Parafuso", 30, -14, 7, "ko"]],
  muaythai: [["Chute baixo", 16, 8, 0, ""], ["Jab e direto", 14, 10, 0, ""], ["Joelhada", 22, 0, 1, "ko"], ["Cotovelada", 24, -4, 2, "ko"], ["Chute alto", 28, -10, 4, "ko"], ["Joelhada voadora", 32, -14, 6, "letal"]],
  taekwondo: [["Chute lateral", 18, 2, 0, ""], ["Chute frontal", 16, 6, 0, ""], ["Chute alto", 24, -8, 2, "ko"], ["Chute giratório (dollyo)", 28, -12, 3, "ko"], ["Chute de machado", 30, -12, 4, "ko"], ["Chute voador", 34, -18, 5, "ko"]],
  boxe: [["Jab", 10, 15, 0, ""], ["Direto", 16, 8, 0, ""], ["Cruzado", 22, -2, 1, "ko"], ["Gancho", 26, -8, 2, "ko"], ["Uppercut", 28, -10, 3, "ko"], ["Combinação de nocaute", 32, -14, 4, "ko"]],
  kravmaga: [["Defesa e contra-ataque", 14, 10, 0, ""], ["Joelhada baixa", 20, 4, 1, ""], ["Golpe na garganta", 26, -6, 2, "letal"], ["Desarme de faca", 12, 0, 3, ""], ["Estrangulamento por trás", 30, -10, 4, "fin"], ["Quebra de pescoço", 40, -22, 5, "letal"]],
  kungfu: [["Soco de punho fechado", 14, 8, 0, ""], ["Chute da garça", 20, -2, 1, ""], ["Palma de ferro", 26, -6, 3, "ko"], ["Garra do tigre", 28, -8, 4, "letal"], ["Chute em espiral", 30, -12, 5, "ko"], ["Toque nos pontos vitais", 36, -20, 6, "letal"]]
};
for (const m in GOLPES_ARTES) MODALIDADES[m] && (MODALIDADES[m].golpes = GOLPES_ARTES[m]);
const TIPO_GOLPE = { ko: "nocaute", fin: "finalização", letal: "letal" };

// Golpes já aprendidos de uma arte. Saves antigos herdam os golpes abaixo da faixa atual.
function golpesDe(a, m) { a.golpes = a.golpes || {}; if (!a.golpes[m]) { const o = faixaDe(a, m);
    a.golpes[m] = MODALIDADES[m].golpes.filter((a, e) => 0 === e || a[3] < o).map(a => a[0]) } return a.golpes[m] }

function aprenderGolpe(a, m) { if (!MODALIDADES[m] || !a.artes || void 0 === a.artes[m]) return null; const o = golpesDe(a, m),
    e = MODALIDADES[m].golpes.find(e => !o.includes(e[0]) && e[3] <= faixaDe(a, m)); return e ? (o.push(e[0]), marca(a, "golpe_novo"), e[0]) : null }

function golpesAprendidos(a) { const o = GOLPES_BASE.map(([a, o, e]) => ({ n: a, d: o, p: e, t: "" })); for (const e in a.artes || {}) { if (!MODALIDADES[e]) continue; const r = golpesDe(a, e);
    MODALIDADES[e].golpes.forEach(([i, t, s, n, c]) => { r.includes(i) && o.push({ n: i, d: t, p: s, m: e, t: c || "" }) }) } return o }
golpesDisponiveis = golpesAprendidos;

// Treino: chance de subir de faixa e de aprender uma técnica nova.
for (let i = ACTS.length - 1; i >= 0; i--) "arte_marcial" === ACTS[i].id && ACTS.splice(i, 1);
ACTS.push({ id: "arte_marcial", g: "mente", nome: "Treinar arte marcial", ic: "🥋", desc: a => { const o = Object.keys(a.artes || {}).filter(a => MODALIDADES[a]); return o.length ? o.map(o => `${MODALIDADES[o].n}: faixa ${faixaNome(a,o)}, ${golpesDe(a,o).length}/${MODALIDADES[o].golpes.length} golpes`).join(" · ") : "Jiu-jitsu, karatê, judô, krav maga, kung fu..." }, vis: a => a.idade >= 5 && !a.prisao, run: a => ({ carta: carta("Qual arte marcial você vai treinar?", Object.keys(MODALIDADES).map(o => { const e = faixaDe(a, o),
      r = MODALIDADES[o].faixas,
      i = e >= r.length - 1,
      t = !!a.artes && void 0 !== a.artes[o],
      s = t ? MODALIDADES[o].golpes.find(e => !golpesDe(a, o).includes(e[0]) && e[3] <= faixaDe(a, o)) : MODALIDADES[o].golpes[0],
      n = t && roll(clamp(45 + .4 * (a.talento.luta - 40) + (a.idade < 25 ? 8 : 0), 15, 85)),
      c = t ? ["faixa:" + o, "talento:luta:2", "aprender:" + o] : ["faixa_ini:" + o, "talento:luta:1"],
      d = t ? n && s ? ["talento:luta:1", "aprender:" + o] : ["talento:luta:1"] : ["faixa_ini:" + o, "talento:luta:1"]; return { l: `${MODALIDADES[o].n}${t?` (faixa ${r[e]}, ${golpesDe(a,o).length}/${MODALIDADES[o].golpes.length} golpes)`:""}`, ch: i ? 100 : t ? clamp(50 - 5 * e + .4 * (a.talento.luta - 40), 12, 85) : 100, ok: { t: t ? i ? `Você já é faixa ${r[e]} de ${MODALIDADES[o].n.toLowerCase()}. Treinou as técnicas avançadas.` : `Passou no exame! Agora é faixa ${r[e+1]} de ${MODALIDADES[o].n.toLowerCase()}.` : `Primeira aula de ${MODALIDADES[o].n.toLowerCase()}. Aprendeu o básico: ${MODALIDADES[o].golpes[0][0].toLowerCase()}.`, fx: { saude: 3, humor: 4, a: i ? ["talento:luta:1", "aprender:" + o] : c } }, no: { t: n && s ? `Ainda não foi hora do exame, mas você dominou uma técnica nova: ${s[0].toLowerCase()}.` : `Treino duro de ${MODALIDADES[o].n.toLowerCase()}. O mestre disse que ainda não é hora do exame.`, fx: { saude: 2, a: d } } } })) }) });

// Briga com golpes: cada técnica tem dano, precisão e efeito próprio.
brigaUI = async function() { const g = S.tmp.briga; if (S.tmp.briga = null, !g) return; const alvo = g.alvo && S.pessoas ? P(S, g.alvo) : null,
    op = oponente(S, alvo || g.alvo),
    nv = nivelBriga(S); let vida = clamp(40 + .6 * S.st.saude, 30, 100),
    vidaOp = clamp(55 + .5 * op.nivel, 30, 100),
    msg = `${op.nome} está pront${alvo&&"f"===alvo.g?"a":"o"} pra briga.`,
    fim = null,
    rod = 0,
    preso = null; const barra = a => "█".repeat(Math.max(0, Math.round(a / 10))) + "░".repeat(Math.max(0, 10 - Math.round(a / 10)));
  for (; !fim && rod < 12;) { rod++; const lista = golpesAprendidos(S),
      ops = lista.map((a, o) => ({ l: `${a.n}${a.m?" ("+MODALIDADES[a.m].n+")":""}${a.t?" · "+TIPO_GOLPE[a.t]:""}`, v: String(o) })).concat([{ l: "Defender", v: "def" }, { l: "Fugir", v: "fug", cancela: !0 }]),
      v = await escolher(`Briga, rodada ${rod}`, `Você ${barra(vida)} ${Math.round(vida)}\n${op.curto} ${barra(vidaOp)} ${Math.round(vidaOp)}\n\n${msg}`, ops); if ("fug" === v || null === v) { if (R() < .7) { fim = "fugiu"; break } msg = "Tentou correr e foi alcançad" + oa(S) + "." } let def = 0; if ("def" === v) def = 25, msg = "Você fechou a guarda.";
    else if ("fug" !== v && null !== v) { const x = lista[+v],
        ac = clamp(55 + 1.1 * (nv - op.nivel) + x.p, 12, 93); if (100 * R() < ac) { const d = Math.round(x.d * (.8 + nv / 120) * (.8 + .4 * R()));
        vidaOp -= d, msg = `${x.n} acertou em cheio! (-${d})`, "ko" === x.t && vidaOp <= 45 && R() < .45 ? (vidaOp = 0, msg = `${x.n} acertou o queixo. ${op.curto} apagou.`, preso = "ko") : "fin" === x.t && vidaOp <= 50 && R() < .55 ? (vidaOp = 0, msg = `${x.n} encaixou. ${op.curto} está sem saída.`, preso = "fin") : "letal" === x.t && R() < .2 && (vidaOp = 0, msg = `${x.n} pegou num ponto que não devia. ${op.curto} desabou.`, preso = "letal") } else msg = `${x.n} passou no vento.` } if (vidaOp <= 0) break; const ch = clamp(50 + 1.1 * (op.nivel - nv) - def, 10, 90); if (100 * R() < ch) { const d = Math.round((8 + op.nivel / 8) * (.8 + .5 * R()) * (def ? .4 : 1));
      vida -= d, msg += ` ${op.curto} revidou. (-${d})` } else msg += " Você desviou do contra-ataque.";
    vida <= 0 && (fim = "perdeu") } if (!fim && vidaOp <= 0) { const txt = "fin" === preso ? `${op.nome} está preso na finalização, batendo no chão.` : "letal" === preso ? `${op.nome} caiu e não se mexe direito.` : `${op.nome} caiu e não consegue levantar.`,
      a = await escolher("Briga", txt, [{ l: "fin" === preso ? "Soltar" : "Parar aqui", v: "p" }, { l: "Ir embora rápido", v: "p" }, { l: "fin" === preso ? "Não soltar" : "Continuar batendo", v: "c" }]);
    fim = "c" === a && "c" === await escolher("Tem certeza?", "Isso pode matar. Não tem volta.", [{ l: "Ir até o fim", v: "c" }, { l: "Parar", v: "p", cancela: !0 }]) && R() < ("fin" === preso ? .75 : "letal" === preso ? .85 : .6) ? "matou" : "letal" === preso && R() < .25 ? "matou" : "venceu" } fim || (fim = "fugiu"); const r = fimBriga(S, op, fim, g.ctx);
  await mostrarResultado(r.txt, r.chips, { venceu: "Venceu a briga", perdeu: "Perdeu a briga", fugiu: "Fugiu", matou: "Sem volta" } [fim]), anotar(r.txt, "matou" === fim ? "ruim" : "venceu" === fim ? "bom" : "info", "Briga"), await drenar("Briga") };

// Resultado da briga. Matar ou machucar alguém na rua chama a polícia, e aí dá pra tentar fugir.
fimBriga = function(a, o, e, r) { const i = [],
    t = o.k ? P(a, o.k) : null; let s = ""; if ("venceu" === e && (a.talento.luta = clamp(a.talento.luta + 1, 0, 100), a.st.humor = clamp(a.st.humor + 3, 0, 100), s = `${o.nome} desistiu da briga. Você venceu.`, "prisao" === r && (marca(a, "respeito_cadeia"), s += " O pavilhão inteiro viu.")), "perdeu" === e && (a.st.saude = clamp(a.st.saude - rnd(6, 14), 0, 100), a.st.humor = clamp(a.st.humor - 6, 0, 100), s = `${o.nome} levou a melhor. Você saiu machucad${oa(a)}.`), "fugiu" === e && (a.st.humor = clamp(a.st.humor - 2, 0, 100), s = "Você correu antes que piorasse."), t && (t.afeto = clamp(t.afeto - ("matou" === e ? 100 : 35), 0, 100), "parceiro" === t.k && "matou" !== e && (acao(a, "terminar", i), s += " O relacionamento acabou ali.")), "matou" === e) { marca(a, "homicida"), a.moral = (a.moral || 0) - 15, a.st.humor = clamp(a.st.humor - 25, 0, 100), t && (t.vivo = !1, t.causa = "Morreu numa briga", a.pessoas.forEach(a => { a.vivo && ["mae", "pai", "irmao", "parceiro"].includes(a.k) && (a.afeto = clamp(a.afeto - 30, 0, 100)) })), s = `Você não parou. ${o.nome} não levantou mais.`; if ("prisao" === r) a.prisao.anos += rnd(10, 20), i.push({ k: "info", t: "Pena aumentada por homicídio" });
    else if (R() < .75) a.tmp.proximas.push(cartaFlagrante(a, { crime: CRIME.homicidio, t: "Alguém viu tudo e ligou pra polícia. A sirene está chegando." })), s += " Já dá pra ouvir a sirene.";
    else marca(a, "crime_oculto"), s += " Ninguém viu. Mas você vai lembrar pra sempre." } else "rua" === r && "venceu" === e && R() < .3 && (a.tmp.proximas.push(cartaFlagrante(a, { crime: CRIME.lesao, t: "Alguém chamou a polícia por causa da briga." })), s += " Alguém chamou a polícia."); return { txt: s, chips: i } };

// Interação: aplicar um golpe aprendido direto em alguém.
INTER.push({ id: "golpe", nome: "Aplicar um golpe", ic: "🥋", ok: (a, o) => a.idade >= 8 && o.idade >= 4 && !a.prisao && golpesAprendidos(a).some(a => a.m), run: (a, o) => (a.tmp.golpe = { alvo: o.k }, [`Você encarou ${o.nome}.`, {}]) }), ICO_INT.golpe = "swords";
async function golpeUI() { const g = S.tmp.golpe; if (S.tmp.golpe = null, !g) return; const p = P(S, g.alvo); if (!p) return; const lista = golpesAprendidos(S).filter(a => a.m),
    v = await escolher(`Golpe em ${p.nome}`, `Qual técnica? ${p.nome} tem ${anos(p.idade)}${p.ferido===S.idade?" e já está machucad"+("f"===p.g?"a":"o"):""}.`, lista.map((a, o) => ({ l: `${a.n} (${MODALIDADES[a.m].n})${a.t?" · "+TIPO_GOLPE[a.t]:""}`, v: String(o) })).concat([{ l: "Desistir", v: "", cancela: !0 }])); if (!v) return; const x = lista[+v],
    def = p.idade < 12 ? 8 : p.idade > 70 ? 12 : 32 + (p.k.startsWith("rival") ? 12 : 0),
    ac = clamp(Math.round(58 + x.p + .6 * (nivelBriga(S) - def)), 10, 95),
    oo = "f" === p.g ? "a" : "o"; let txt, morreu = !1,
    chips = [];
  if (marca(S, "agrediu"), S.moral = clamp((S.moral || 0) - 4, -50, 50), roll(ac)) { if (p.afeto = clamp(p.afeto - 40, 0, 100), p.ferido = S.idade, p.mem = p.mem || [], p.mem.push("levou um golpe seu"), txt = `${x.n} acertou ${p.nome} em cheio.`, x.t) { const a = "fin" === x.t ? `${p.nome} está preso no ${x.n.toLowerCase()} e perdendo o ar.` : "letal" === x.t ? `${p.nome} caiu sem reação.` : `${p.nome} caiu desacordad${oo}.`;
      "c" === await escolher(x.n, a, [{ l: "fin" === x.t ? "Soltar" : "Parar aqui", v: "p" }, { l: "fin" === x.t ? "Não soltar" : "Continuar", v: "c" }]) && "c" === await escolher("Tem certeza?", "Isso pode matar. Não tem volta.", [{ l: "Ir até o fim", v: "c" }, { l: "Parar", v: "p", cancela: !0 }]) ? morreu = R() < ("letal" === x.t ? .85 : "fin" === x.t ? .7 : .45) : "letal" === x.t && R() < .12 && (morreu = !0) } morreu ? (p.vivo = !1, p.causa = "Morreu depois de um golpe", p.rel = p.rel + " (faleceu)", "parceiro" === p.k && (S.casado = !1), marca(S, "homicida"), S.moral = clamp(S.moral - 15, -50, 50), S.st.humor = clamp(S.st.humor - 25, 0, 100), S.pessoas.forEach(a => { a.vivo && ["mae", "pai", "irmao", "parceiro"].includes(a.k) && (a.afeto = clamp(a.afeto - 30, 0, 100)) }), txt = `${txt} ${p.nome} não acordou mais.`, chips.push({ k: "humor", v: -25 })) : (txt += ` ${p.nome} vai lembrar disso por muito tempo.`, chips.push({ k: "afeto", nome: p.nome, v: -40 })) } else p.afeto = clamp(p.afeto - 25, 0, 100), txt = `${x.n} passou no vento. ${p.nome} se afastou assustad${oo}.`, chips.push({ k: "afeto", nome: p.nome, v: -25 });
  const fam = ["mae", "pai", "irmao", "avo", "tio", "primo", "filho", "neto"].some(a => p.k.startsWith(a));
  morreu ? R() < .7 ? S.tmp.proximas.push(cartaFlagrante(S, { crime: CRIME.homicidio, t: "Um vizinho ouviu tudo e chamou a polícia." })) : (marca(S, "crime_oculto"), S.assass = (S.assass || []).concat([{ nome: p.nome, idade: S.idade, inv: 40, pena: 18, matador: null }])) : p.ferido === S.idade && R() < (fam ? .3 : .55) && S.tmp.proximas.push(cartaFlagrante(S, { crime: CRIME.lesao, t: `${p.nome} chamou a polícia.` }));
  await mostrarResultado(txt, chips, morreu ? "Sem volta" : "Golpe"), anotar(txt, morreu ? "ruim" : "evento", "Golpe"), await drenar("Golpe") }
momentos = function(f) { return async function(a) { return S && S.tmp && S.tmp.golpe && await golpeUI(), f(a) } }(momentos);

// ===== Atividades extracurriculares com progressão =====
// Cargos sobem com dedicação e talento. O topo (capitão, presidente...) pesa em bolsa de faculdade e na carreira.
const EXTRAS = {
  futebol: { n: "Time de futebol", tipo: "esporte", tal: "futebol", cargos: ["Reserva", "Titular", "Destaque do time", "Capitão do time|Capitã do time"] },
  basquete: { n: "Time de basquete", tipo: "esporte", tal: "basquete", cargos: ["Reserva", "Titular", "Cestinha do time", "Capitão do time|Capitã do time"] },
  volei: { n: "Time de vôlei", tipo: "esporte", tal: "volei", cargos: ["Reserva", "Titular", "Destaque do time", "Capitão do time|Capitã do time"] },
  hoquei: { n: "Time de hóquei", tipo: "esporte", tal: "hoquei", cargos: ["Reserva", "Titular", "Artilheiro do time|Artilheira do time", "Capitão do time|Capitã do time"] },
  luta: { n: "Equipe de luta", tipo: "esporte", tal: "luta", cargos: ["Iniciante", "Atleta da equipe", "Campeão da escola|Campeã da escola", "Capitão da equipe|Capitã da equipe"] },
  atletismo: { n: "Equipe de atletismo", tipo: "esporte", st: "saude", cargos: ["Iniciante", "Atleta da equipe", "Recordista da escola", "Capitão da equipe|Capitã da equipe"] },
  natacao: { n: "Equipe de natação", tipo: "esporte", st: "saude", cargos: ["Iniciante", "Nadador da equipe|Nadadora da equipe", "Recordista da escola", "Capitão da equipe|Capitã da equipe"] },
  teatro: { n: "Grupo de teatro", tipo: "arte", tal: "atuacao", cargos: ["Figurante", "Elenco", "Protagonista", "Diretor do grupo|Diretora do grupo"] },
  banda: { n: "Banda da escola", tipo: "arte", tal: "musica", cargos: ["Membro", "Solista", "Primeiro instrumento", "Líder da banda"] },
  danca: { n: "Grupo de dança", tipo: "arte", st: "aparencia", cargos: ["Iniciante", "Bailarino|Bailarina", "Solista", "Coreógrafo do grupo|Coreógrafa do grupo"] },
  olimpiada: { n: "Olimpíada de matemática", tipo: "academico", st: "cabeca", cargos: ["Participante", "Medalhista regional", "Medalhista nacional", "Seleção olímpica"] },
  robotica: { n: "Equipe de robótica", tipo: "academico", st: "cabeca", cargos: ["Membro", "Programador|Programadora", "Líder técnico|Líder técnica", "Capitão da equipe|Capitã da equipe"] },
  xadrez: { n: "Clube de xadrez", tipo: "academico", st: "cabeca", cargos: ["Membro", "Titular do time", "Campeão da escola|Campeã da escola", "Capitão do time|Capitã do time"] },
  debate: { n: "Time de debate", tipo: "lideranca", st: "labia", cargos: ["Membro", "Orador|Oradora", "Melhor orador|Melhor oradora", "Capitão do time|Capitã do time"] },
  gremio: { n: "Grêmio estudantil", tipo: "lideranca", st: "labia", cargos: ["Membro", "Secretário|Secretária", "Vice-presidente", "Presidente do grêmio"] },
  jornal: { n: "Jornal da escola", tipo: "lideranca", st: "cabeca", cargos: ["Repórter", "Colunista", "Editor|Editora", "Editor-chefe|Editora-chefe"] },
  games: { n: "Equipe de e-sports", tipo: "esporte", tal: "games", cargos: ["Reserva", "Titular", "Destaque da equipe", "Capitão da equipe|Capitã da equipe"] }
};
// O CLUBES do jogo continua sendo a lista de onde dá pra entrar; ganha os novos e herda os efeitos de stat.
for (const k in EXTRAS) CLUBES[k] = Object.assign({ n: EXTRAS[k].n, pop: 2 }, CLUBES[k] || {}, { n: EXTRAS[k].n }), "esporte" === EXTRAS[k].tipo && !EXTRAS[k].tal && (CLUBES[k].saude = 2), "academico" === EXTRAS[k].tipo && (CLUBES[k].cab = CLUBES[k].cab || 2), "lideranca" === EXTRAS[k].tipo && (CLUBES[k].lab = CLUBES[k].lab || 2);
const EC_PTS = [0, 22, 50, 80],
  EC_HAB = [0, 30, 45, 58],
  NIVEL_EC = ["regional", "estadual", "nacional"];

function habEC(a, k) { const o = EXTRAS[k]; return o ? o.tal ? a.talento[o.tal] || 0 : a.st[o.st] || 0 : 0 }

function cargoEC(a, k, n) { return titG(a, EXTRAS[k].cargos[clamp(n, 0, 3)]) }

function ecAtual(a) { const o = a.estudo && a.estudo.clube; if (!o || !EXTRAS[o]) return null; return a.extra && a.extra.id === o || (a.extra = { id: o, nivel: 0, pts: 0, anos: 0, trofeus: [], foco: 0 }), a.extra }

function ecScore(a) { const o = a.extraHist || {}; let e = 0; for (const a in o) e = Math.max(e, 18 * o[a].nivel + 7 * Math.min(4, o[a].trofeus || 0) + (o[a].nivel >= 3 ? 14 : 0)); return clamp(e, 0, 100) }

function ecMelhor(a) { const o = a.extraHist || {}; let e = null; for (const a in o) (!e || o[a].nivel > e.nivel || o[a].nivel === e.nivel && (o[a].trofeus || 0) > (e.trofeus || 0)) && (e = Object.assign({ id: a }, o[a])); return e }

function ecRegistrar(a) { const o = a.extra; if (!o) return; a.extraHist = a.extraHist || {}; const e = a.extraHist[o.id] || { nivel: 0, trofeus: 0, anos: 0 };
  a.extraHist[o.id] = { nivel: Math.max(e.nivel, o.nivel), trofeus: Math.max(e.trofeus, o.trofeus.length), anos: Math.max(e.anos, o.anos) } }

function ecAcao(a, o, e) { const r = ecAtual(a); if (!r) return; const [i, t] = o; "pts" === i && (r.pts = Math.max(0, r.pts + (+t || 0))), "foco" === i && (r.foco = (r.foco || 0) + 1), "sobe" === i && r.nivel < 3 && (r.nivel++, e.push({ k: "info", t: cargoEC(a, r.id, r.nivel) }), r.nivel >= 3 && marca(a, "ec_topo"), marca(a, "ec_" + r.nivel)), "trofeu" === i && (r.trofeus.push({ t: t || "torneio", ano: a.idade }), marca(a, "trofeu_escola")), ecRegistrar(a) }

// Um ano de atividade: pontos, promoção e campeonato.
function anoExtra(a, o, e) { const r = ecAtual(a); if (!r || a.prisao) return; const i = EXTRAS[r.id],
    t = habEC(a, r.id),
    s = Math.round(8 + (t - 45) / 4 + 10 * (r.foco || 0) + (a.estudo.pop - 50) / 12 + rnd(-4, 5));
  r.pts = clamp(r.pts + Math.max(1, s), 0, 120), r.anos++, r.foco = 0; const n = r.nivel + 1; if (n <= 2 && r.pts >= EC_PTS[n] && t >= EC_HAB[n]) r.nivel = n, marca(a, "ec_" + n), o.push({ t: `${i.n}: agora você é ${cargoEC(a,r.id,n).toLowerCase()}.`, c: "bom" });
  else if (3 === n && r.pts >= EC_PTS[3] && t >= EC_HAB[3] && R() < .55) { const c = "lideranca" === i.tipo ? `Eleição no ${i.n.toLowerCase()}. Você é candidat${oa(a)} a ${cargoEC(a,r.id,3).toLowerCase()}.` : `O ${"arte"===i.tipo?"professor":"técnico"} do ${i.n.toLowerCase()} quer você como ${cargoEC(a,r.id,3).toLowerCase()}.`;
    e.push({ id: "ec_topo", adhoc: 1, rar: "u", t: c, o: "lideranca" === i.tipo ? [{ l: "Fazer campanha", ch: { b: 45, k: { labia: .5 } }, ok: { t: "Ganhou a eleição. Discurso no pátio e tudo.", fx: { humor: 10, labia: 2, a: ["ec:sobe", "pop:8"] } }, no: { t: "Perdeu por poucos votos. Ano que vem tem mais.", fx: { humor: -5 } } }, { l: "Não se candidatar", ok: { t: "Preferiu ficar nos bastidores.", fx: {} } }] : [{ l: "Aceitar", ok: { t: "A responsabilidade é sua agora. O grupo te escuta.", fx: { humor: 10, labia: 2, a: ["ec:sobe", "pop:6"] } } }, { l: "Recusar", ok: { t: "Preferiu só fazer a sua parte.", fx: {} } }] }) } if (r.nivel >= 1 && R() < .45) { const c = clamp(r.nivel - 1 + (r.trofeus.length >= 2 ? 1 : 0), 0, 2),
      d = NIVEL_EC[c],
      u = "esporte" === i.tipo ? `Campeonato ${d} escolar` : "arte" === i.tipo ? `Festival ${d} de ${"teatro"===r.id?"teatro":"danca"===r.id?"dança":"música"}` : `Competição ${d} de ${i.n.toLowerCase()}`;
    e.push({ id: "ec_torneio", adhoc: 1, rar: 2 === c ? "r" : "c", t: `${u}. ${i.n} está na disputa e você é ${cargoEC(a,r.id,r.nivel).toLowerCase()}.`, o: [{ l: "Dar tudo de si", ch: { b: 22 + 6 * r.nivel - 10 * c, k: i.tal ? { ["t_" + i.tal]: .5 } : { [i.st]: .5 } }, ok: { t: 2 === c ? "Campeões nacionais! A escola fez faixa na entrada." : "Venceram! Troféu na estante da escola.", fx: { humor: 10, a: [`ec:trofeu:${u}`, "ec:pts:10", 2 === c ? "fama:3" : "fama:1", "pop:5"] } }, no: { t: "Ficaram em segundo. Doeu, mas foi bonito.", fx: { humor: -2, a: "ec:pts:4" } } }, { l: "Jogar seguro", ok: { t: "Fizeram uma campanha honesta. Sem troféu.", fx: { a: "ec:pts:3" } } }] }) } ecRegistrar(a) }
envelhecer = function(f) { return function(a) { const o = f(a); try { anoExtra(a, o.log, o.fila) } catch (e) { console.error("extracurricular", e) } return o } }(envelhecer);
ACTS.push({ id: "e_ec_treino", g: "escola", nome: "Se dedicar ao extracurricular", ic: "🏅", desc: a => { const o = ecAtual(a); return o ? `${cargoEC(a,o.id,o.nivel)} · ${o.pts} pontos${o.nivel<3?" · próximo cargo: "+cargoEC(a,o.id,o.nivel+1).toLowerCase():""}` : "" }, vis: a => !!ecAtual(a) && !a.prisao, run: a => { const o = ecAtual(a),
      e = EXTRAS[o.id]; return rs(a, pick(e.tipo === "esporte" ? ["Treinou até depois do horário. O técnico notou.", "Chegou primeiro e saiu por último do treino."] : e.tipo === "arte" ? ["Ensaiou o fim de semana inteiro.", "Decorou tudo e ainda ajudou os outros."] : ["Ficou até tarde preparando tudo.", "Estudou os adversários e chegou preparad{o}."]), Object.assign({ humor: -1, a: ["ec:foco", "ec:pts:6"] }, e.tal ? { a: ["ec:foco", "ec:pts:6", `talento:${e.tal}:2`] } : { [e.st]: 2 })) } });

// Escolha da atividade mostra o cargo atual e o que cada uma desenvolve.
for (const x of ACTS) "e_clube" === x.id && (x.desc = a => { const o = ecAtual(a); return o ? `${EXTRAS[o.id].n}: ${cargoEC(a,o.id,o.nivel).toLowerCase()}` : "Times, teatro, banda, debate, robótica..." }, x.run = a => ({ carta: carta("Em qual atividade você quer entrar? Quanto mais você se dedica, mais alto chega: até capitão ou presidente.", Object.keys(EXTRAS).filter(o => o !== a.estudo.clube).map(o => ({ l: `${EXTRAS[o].n} (${EXTRAS[o].tal?TALENTOS[EXTRAS[o].tal]:NOMES_STATS[EXTRAS[o].st]})`, ok: { t: `Entrou pr${["equipe","banda","olimp"].some(a=>EXTRAS[o].n.toLowerCase().startsWith(a))?"a":"o"} ${EXTRAS[o].n.toLowerCase()}. Começa como ${cargoEC(a,o,0).toLowerCase()}.`, fx: { humor: 3, a: "clube:" + o } } })).concat(a.estudo.clube ? [{ l: "Sair da atividade atual", ok: { t: "Agora sobra mais tempo livre.", fx: { a: "clube:nenhum" } } }] : [])) }));

// O draft profissional só chama quem é titular, e capitão começa mais alto.
anoDraft = function(f) { return function(a, o) { const e = a.estudo; if (e && "medio" === e.etapa && DRAFT_MODS.includes(e.clube) && !tem(a, "draft") && !tem(a, "draft_adiado")) { const r = ecAtual(a); if (!r || r.nivel < 1) return } return f(a, o) } }(anoDraft);
tierDraft = function(f) { return function(a, o) { const e = S && S.extra && S.extra.id === a ? S.extra.nivel : 0; return f(a, o) + (e >= 3 ? 1 : 0) } }(tierDraft);

// Extracurricular conta na carreira: cada atividade combina com algumas profissões.
const EC_CARREIRA = { futebol: ["futebol", "tecnico", "personal", "comentarista"], basquete: ["basquete", "tecnico", "personal"], volei: ["volei", "tecnico", "personal"], hoquei: ["hoquei", "tecnico"], luta: ["mma", "personal", "pm", "bombeiro", "militar"], atletismo: ["personal", "bombeiro", "pm", "militar"], natacao: ["personal", "bombeiro"], teatro: ["ator", "humorista", "modelo", "publicitario"], banda: ["ator", "professor"], danca: ["modelo", "ator", "personal"], olimpiada: ["engenheiro", "dev", "profuni", "contador", "auditor"], robotica: ["dev", "engenheiro", "inovacao"], xadrez: ["dev", "engenheiro", "advogado", "auditor"], debate: ["advogado", "juiz", "jornalista", "publicitario", "administrador"], gremio: ["administrador", "advogado", "professor", "publicitario"], jornal: ["jornalista", "publicitario", "professor"], games: ["esports", "dev"] };

function bonusEC(a, c) { const o = a.extraHist || {}; let e = 0; for (const r in o)(EC_CARREIRA[r] || []).includes(c) && (e = Math.max(e, 4 * o[r].nivel + (o[r].nivel >= 3 ? 6 : 0) + 2 * Math.min(3, o[r].trofeus || 0))); return e }
chanceCarreira = function(f) { return function(a, o) { return clamp(f(a, o) + bonusEC(a, o.id), 3, 97) } }(chanceCarreira);

// Ao sair da escola, o histórico fica guardado (pra bolsa e currículo).
concluirMedio = function(f) { return function(a, o) { ecRegistrar(a); const e = ecMelhor(a); return f(a, o), e && e.nivel >= 2 && o && o.push({ t: `Saiu da escola como ${cargoEC(a,e.id,e.nivel).toLowerCase()} (${EXTRAS[e.id].n.toLowerCase()}). Isso pesa no currículo.`, c: "bom" }), a.extra = null, void 0 } }(concluirMedio);

// ===== Perfil: golpes que você domina e atividades da escola =====
telaPerfil = function(f) { return function() { const a = f(); if (!a || !S) return a; const o = golpesAprendidos(S).filter(a => a.m),
      e = Object.keys(S.extraHist || {}).map(a => { const o = S.extraHist[a]; return [EXTRAS[a] ? EXTRAS[a].n : a, `${cargoEC(S,a,o.nivel)}${o.trofeus?`, ${o.trofeus} ${1===o.trofeus?"troféu":"troféus"}`:""}`] }),
      r = a => `<div class="lista">${a.map(([a,o])=>`<div class="linha"><span>${esc(a)}</span><span>${esc(o)}</span></div>`).join("")}</div>`; return o.length && (a.html += `<div class="grupo"><p class="g-tit">Golpes que você domina</p>${r(o.map(a=>[a.n,`${MODALIDADES[a.m].n}${a.t?" · "+TIPO_GOLPE[a.t]:""}`]))}</div>`), e.length && (a.html += `<div class="grupo"><p class="g-tit">Atividades na escola</p>${r(e)}</div>`), a } }(telaPerfil);