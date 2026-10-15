// Corre — o jogo por país: só os 50 países com perfil completo (perfis.js), e cada um com
// suas leis, escola, universidades, polícia, política, realeza, ligas esportivas e cotidiano.
// Carregado depois de sistemas.js.

// ===== Países jogáveis =====
const JOGAVEIS = Object.keys(PERFIS);
for (const c of Object.keys(PAISES)) PERFIS[c] || delete PAISES[c];
// Monarquias da Commonwealth: o trono é britânico. Quem nasce lá não entra na linha de sucessão.
["CA", "AU", "NZ"].forEach(c => PERFIS[c] && (PERFIS[c].trab.realeza = null));
for (const c of JOGAVEIS) { const p = PERFIS[c],
    d = PAISES[c] || (PAISES[c] = {});
  d.gent = p.gent, "BR" !== c && (d.cid = p.cid.map(([a]) => `${a} (${MUNDO[c].n})`), p.cid.forEach(([a, o]) => CIDADE_INFO[`${a} (${MUNDO[c].n})`] = [o, p.cultura.flavor, "interior"])) }
Object.keys(REGIAO_PAIS).forEach(a => { REGIAO_PAIS[a] = REGIAO_PAIS[a].filter(a => PAISES[a]), REGIAO_PAIS[a].length || delete REGIAO_PAIS[a] });

function semMarca(a) { return String(a || "").replace(/⁠/g, "") }
const APELIDO_PAIS = { EUA: "Estados Unidos", Inglaterra: "Reino Unido", Holanda: "Países Baixos", "Emirados Árabes": "Emirados Árabes Unidos" };

function mesmoPais(a, o) { const e = semMarca(o); return (APELIDO_PAIS[e] || e) === semMarca(PAISES[a.pais || "BR"].n) }

// Saves antigos que moravam num país que saiu do jogo voltam pra casa.
vidaSalva = function(f) { return function(a) { const o = f(a); return o && (PAISES[o.pais] || (o.pais = PAISES[o.natal] ? o.natal : "BR", o.cidade = pick(cidadesDe(o.pais))), PAISES[natal(o)] || (o.natal = o.pais)), o } }(vidaSalva);

// ===== Sincronização por país: troca no lugar as tabelas que o jogo usa =====
const ORIG = { pol: ESPECIAIS.politica.et.map(a => a[0]), real: ESPECIAIS.realeza.et.map(a => a[0]), realD: ESPECIAIS.realeza.d, unisTier: UNIS_TIER.map(a => a.slice()), unis: JSON.parse(JSON.stringify(UNIS)), ligas: {}, comp: JSON.parse(JSON.stringify(COMPETICOES)), orgs: ORGS.map(a => a.n), car: {} };
["futebol", "basquete", "volei"].forEach(a => ORIG.ligas[a] = LIGAS[a].tiers.slice(0, 4).map(a => JSON.parse(JSON.stringify(a))));
["pm", "pf", "militar", "bombeiro"].forEach(a => CAR[a] && (ORIG.car[a] = CAR[a].niv.map(a => a[0])));
let PAIS_SYNC = null,
  N_TERMOS = 0;
const MODELO_CLUBE = { espanhol: ["Club Atlético {c}", "Deportivo {c}", "Real {c}", "Unión {c}", "Racing {c}", "Independiente {c}"], "português": ["Sporting {c}", "União {c}", "Atlético {c}", "Desportivo {c}", "{c} FC", "Académica de {c}"], "inglês": ["{c} United", "{c} City", "{c} Rovers", "{c} Athletic", "{c} Wanderers", "{c} FC"], "francês": ["Olympique {c}", "AS {c}", "Stade {c}", "Racing {c}", "FC {c}", "US {c}"], "alemão": ["FC {c}", "SV {c}", "Borussia {c}", "Eintracht {c}", "SC {c}", "Fortuna {c}"], italiano: ["AC {c}", "{c} Calcio", "US {c}", "Virtus {c}", "Sporting {c}", "Atletico {c}"], "holandês": ["FC {c}", "SC {c}", "{c} Boys", "VV {c}", "Go Ahead {c}", "Sparta {c}"], outro: ["{c} FC", "Atlético {c}", "{c} City", "Real {c}", "Estrela de {c}", "Unidos de {c}"] },
  FORCA_FUT = { UK: 2.4, ES: 2, DE: 1.9, IT: 1.9, FR: 1.6, SA: 1.8, PT: 1.2, NL: 1.2, TR: 1.3, US: 1.2, MX: 1.2, BR: 1, AR: .9, JP: 1.1, BE: 1.1 };

function nomeClube(c, i, sufixo) { const m = MODELO_CLUBE[PAISES[c].idioma] || MODELO_CLUBE.outro; return m[i % m.length].replace("{c}", c === "x" ? "" : sufixo) }

function ligasDoPais(c) { const p = PERFIS[c],
    cid = p.cid.map(a => a[0]),
    nome = semMarca(PAISES[c].n),
    k = PAISES[c].mult * (FORCA_FUT[c] || 1),
    clube = (i, j) => C_(nomeClube(c, i + j, cid[j % cid.length]), `${cid[j%cid.length]} (${MUNDO[c].n})`, nome),
    fut = [{ liga: "Categoria de base", sal: Math.round(1500 * k), fama: 3, c: [0, 1, 2, 3].map(a => Object.assign(clube(0, a), { n: "Base do " + nomeClube(c, a, cid[a % cid.length]) })) }, { liga: p.esporte.liga3, sal: Math.round(9e3 * k), fama: 10, c: [0, 1, 2, 3].map(a => clube(3, a + 2)) }, { liga: p.esporte.liga2, sal: Math.round(38e3 * k), fama: 28, c: [0, 1, 2, 3].map(a => clube(4, a + 1)) }, { liga: p.esporte.liga1, sal: Math.round(19e4 * k), fama: 52, c: [0, 1, 2, 3, 4].map(a => clube(0, a)) }],
    bas = ORIG.ligas.basquete.map((a, o) => Object.assign({}, a, { sal: Math.round(a.sal * (o < 2 ? PAISES[c].mult : 1)) }));
  bas[0] = Object.assign({}, bas[0], { c: [0, 1].map(a => C_(`Base do ${cid[a]} Basquete`, `${cid[a]} (${MUNDO[c].n})`, nome)) }), bas[1] = Object.assign({}, bas[1], { liga: p.esporte.basquete, c: [0, 1, 2, 3].map(a => C_(`${cid[a%cid.length]} ${["Basket","Titãs","Falcões","Raios"][a]}`, `${cid[a%cid.length]} (${MUNDO[c].n})`, nome)) }); const vol = ORIG.ligas.volei.map((a, o) => Object.assign({}, a, { sal: Math.round(a.sal * (o < 2 ? PAISES[c].mult : 1)) }));
  vol[0] = Object.assign({}, vol[0], { c: [0, 1].map(a => C_(`Base do ${cid[a]} Vôlei`, `${cid[a]} (${MUNDO[c].n})`, nome)) }), vol[1] = Object.assign({}, vol[1], { liga: "Liga nacional de vôlei", c: [0, 1, 2, 3].map(a => C_(`${cid[a%cid.length]} Vôlei`, `${cid[a%cid.length]} (${MUNDO[c].n})`, nome)) }); return { futebol: fut, basquete: bas, volei: vol } }
const CONTINENTAL = { sul: "Libertadores", norte: "Liga dos Campeões da Concacaf", central: "Liga dos Campeões da Concacaf", europa: "Liga dos Campeões", oriente: "Liga dos Campeões da Ásia", asia: "Liga dos Campeões da Ásia", africa: "Liga dos Campeões da África", oceania: "Liga dos Campeões da Ásia" };

function syncPais(c) { if (PAIS_SYNC === c || !PERFIS[c]) return; PAIS_SYNC = c; const p = PERFIS[c],
    br = "BR" === c;
  // Política e realeza
  ESPECIAIS.politica.et.forEach((a, o) => { a[0] = br || 0 === o ? ORIG.pol[o] : p.trab.politica[o - 1] || ORIG.pol[o] }), ESPECIAIS.politica.d = br ? "De vereador a presidente. Eleição a cada degrau." : `De ${titG({g:"m"},p.trab.politica[0]).toLowerCase()} a ${titG({g:"m"},p.trab.politica[5]).toLowerCase()}. Eleição a cada degrau.`; const r = p.trab.realeza;
  ESPECIAIS.realeza.et.forEach((a, o) => { a[0] = r ? r.et[o] : ORIG.real[o] }), ESPECIAIS.realeza.d = r ? `Nasceu na ${r.casa}. Cerimônias, escândalos e o trono.` : ORIG.realD;
  // Universidades: públicas (com nota de corte por prestígio) e privadas
  const pub = p.escola.unis.filter(a => "pub" === a[2]),
    priv = p.escola.unis.filter(a => "priv" === a[2]);
  UNIS_TIER.length = 0, (br ? ORIG.unisTier : pub.map(a => [a[0], { 3: 55, 2: 30, 1: 0 } [a[1]]]).concat([["Universidade pública da sua região", 0]])).forEach(a => UNIS_TIER.push(a.slice())), UNIS.federal = br ? ORIG.unis.federal : pub.map(a => a[0]), UNIS.fies = br ? ORIG.unis.fies : (priv.length ? priv : p.escola.unis).map(a => a[0]), UNIS.priv = UNIS.fies, UNIS.ead = br ? ORIG.unis.ead : ["Universidade Aberta", "Instituto de Ensino a Distância", "Universidade Virtual"];
  // Ligas, competições e eventos de luta
  const L = br ? null : ligasDoPais(c);
  ["futebol", "basquete", "volei"].forEach(a => { const o = br ? ORIG.ligas[a] : L[a]; for (let e = 0; e < 4 && e < o.length; e++) LIGAS[a].tiers[e] = JSON.parse(JSON.stringify(o[e])) }), COMPETICOES.futebol.splice(0, 4, ...br ? ORIG.comp.futebol.slice(0, 4) : [["Liga regional"], [p.esporte.liga3], [p.esporte.liga2, p.esporte.copa], [p.esporte.liga1, p.esporte.copa, CONTINENTAL[MUNDO[c].reg]]]), COMPETICOES.basquete[1] = br ? ORIG.comp.basquete[1] : [p.esporte.basquete], ORGS[1].n = br ? ORIG.orgs[1] : `${p.cid[1]?p.cid[1][0]:p.cid[0][0]} Fight Night`, ORGS[2].n = br ? ORIG.orgs[2] : `${semMarca(MUNDO[c].n)} Fight Championship`;
  // Polícia, polícia federal e forças armadas
  const t = p.trab,
    suf = (a, o) => a.split("|").map(a => `${a} (${o})`).join("|"),
    tit = { pm: ["Policial", "Sargento de polícia", "Tenente de polícia", "Capitão de polícia|Capitã de polícia"].map(a => suf(a, t.policia)), pf: [suf("Agente", t.policiaFed), suf("Delegado|Delegada", t.policiaFed)], militar: [suf("Soldado", t.exercito), suf("Cabo", t.exercito), suf("Sargento", t.exercito)], bombeiro: ["Bombeiro|Bombeira", "Sargento dos bombeiros", "Tenente dos bombeiros"] };
  for (const a in ORIG.car) CAR[a].niv.forEach((o, e) => { o[0] = br ? ORIG.car[a][e] : tit[a][e] || ORIG.car[a][e] });
  // Termos locais nos textos (o resto da adaptação genérica fica em localizar)
  const novos = br ? [] : [[/\bENEM\b|\bEnem\b/g, p.escola.exame], [/\bFIES\b/g, p.escola.emprestimo], [/\bPolícia Militar\b/g, t.policia], [/\bPolícia Federal\b/g, t.policiaFed], [/\bda PM\b/g, `da polícia`], [/\bPM\b/g, t.policia], [/\bnuma federal\b/g, "numa universidade pública"], [/\bpra federal\b/g, "pra universidade pública"], [/\buniversidade federal\b/gi, "universidade pública"], [/\bcarteira assinada\b/g, "contrato formal"], [/\bFGTS\b/g, "fundo de garantia"], [/\bcursinho\b/g, "curso preparatório"], [/\bboleto\b/g, "conta"], [/\bzap\b/g, "aplicativo de mensagens"], [/\bSAMU\b/g, "ambulância"], [/\bsupletivo\b/gi, "curso para adultos"]];
  TERMOS_FORA.splice(0, N_TERMOS, ...novos), N_TERMOS = novos.length }
usarNomes = function(f) { return function(a) { return f(a), syncPais(a) } }(usarNomes);
envelhecer = function(f) { return function(a) { return syncPais(a.pais || "BR"), f(a) } }(envelhecer);


// Eventos com cultura brasileira demais só acontecem no Brasil.
const SO_BRASIL = /Nordeste|nordestin|São João|festa junina|forró|sertanej|pagode|feijoada|pão de queijo|brigadeiro|caipirinha|guaraná|[Cc]arnaval|coxinha|baile funk|favela|novela das|Seleção Brasileira/;
EVENTS.forEach(a => { SO_BRASIL.test(JSON.stringify(a)) && !BR_SO.includes(a.id) && BR_SO.push(a.id) });

// ===== Escola por país =====
nomeSerie = function(f) { return function(a) { const o = S && PERFIS[S.pais]; if (!o || "BR" === S.pais || "eja" === a.etapa) return f(a); const e = o.escola; return "jardim" === a.etapa ? e.jardim : a.serie <= 5 ? `${e.fund1}, ${a.serie}º ano` : a.serie <= 9 ? `${e.fund2}, ${a.serie}º ano` : `${e.medio}, ${a.serie-9}º ano` } }(nomeSerie);

// ===== Universidade por país: pública (com ou sem mensalidade), privada, financiamento, EAD e bolsas =====
function anualLocal(c, v) { return Math.round(v / PAISES[c].moeda.taxa) }

function bolsaOferta(a) { const o = ecScore(a),
    e = ecMelhor(a),
    r = a.estudo ? a.estudo.nota : 60; if (o >= 40 && e) { const i = EXTRAS[e.id].tipo; return { pct: o >= 70 ? 100 : 50, tipo: "esporte" === i ? "esportiva" : "arte" === i ? "artística" : "lideranca" === i ? "de liderança" : "acadêmica", motivo: `${titG(a,EXTRAS[e.id].cargos[e.nivel]).toLowerCase()} (${EXTRAS[e.id].n.toLowerCase()})` } } return r >= 85 && a.st.cabeca >= 70 ? { pct: 50, tipo: "de mérito", motivo: "notas altas" } : null }
for (const x of ACTS) "faculdade_entrar" === x.id && (x.desc = a => { const o = PERFIS[a.pais]; return o ? `${o.escola.exame}, ${o.escola.pubGratis?"pública gratuita":"pública paga"}, privada ou ${o.escola.emprestimo}` : "ENEM, FIES ou EAD" }, x.run = a => { const o = PERFIS[a.pais].escola,
    e = a.pais,
    r = anualLocal(e, o.pubAnual),
    i = anualLocal(e, o.privAnual),
    t = bolsaOferta(a),
    s = [{ l: `Prestar ${o.exame} pra universidade pública${o.pubGratis?" (gratuita)":` (${fmtR(r)} por ano)`}`, ch: { b: -30, k: { cabeca: 1.1 }, classe: 1 }, ok: { t: `Aprovad{o} numa universidade pública!`, fx: { humor: 12, m: "passou_enem", a: ["faculdade:federal", "anuidade:" + (o.pubGratis ? 0 : r)] } }, no: { t: `Não passou no ${o.exame}. A concorrência subiu de novo.`, fx: { humor: -5 } } }];
  i > 0 && s.push({ l: `Universidade privada (${fmtR(i)} por ano)`, ch: 80, ok: { t: "Aprovad{o} na privada. Agora é pagar em dia.", fx: { humor: 6, a: ["faculdade:priv", "anuidade:" + i] } }, no: { t: "Não passou no processo seletivo da privada.", fx: { humor: -4 } } }), (i > 0 || r > 0) && s.push({ l: `Privada com ${o.emprestimo}`, ch: 70, ok: { t: `${o.emprestimo.charAt(0).toUpperCase()+o.emprestimo.slice(1)} aprovado. A dívida vem depois.`, fx: { humor: 6, a: ["faculdade:fies", "fiesanual:" + Math.max(i, r)] } }, no: { t: `${o.emprestimo.charAt(0).toUpperCase()+o.emprestimo.slice(1)} negado. Faltou um documento.`, fx: { humor: -4 } } }), t && i > 0 && s.unshift({ l: `Aceitar bolsa ${t.tipo} de ${t.pct}% numa privada top`, ok: { t: `Bolsa ${t.tipo} de ${t.pct}% garantida por causa de ${t.motivo}. Tudo que você fez na escola valeu.`, fx: { humor: 14, a: ["faculdade:priv", "anuidade:" + i, "bolsa:" + t.pct, "uni_top"], m: "bolsista" } } }), s.push({ l: `Ensino a distância (${fmtR(anualLocal(e,o.pubAnual?o.pubAnual/3:o.privAnual/6||3360))} por ano)`, ok: { t: "Matrícula feita. Aula pelo celular.", fx: { humor: 3, a: ["faculdade:ead", "anuidade:" + anualLocal(e, o.pubAnual ? o.pubAnual / 3 : o.privAnual / 6 || 3360)] } } }, { l: "Deixar pra depois", ok: { t: "Fica pro ano que vem.", fx: {} } }); return { carta: carta("Como você quer entrar na universidade?", s) } });
cartaCurso = function(f) { return function(a) { const o = a.faculdade; if (o && "priv" === o.tipo) { const e = f(Object.assign({}, a, { faculdade: Object.assign({}, o, { tipo: "fies" }) })); return o.uni || (o.uni = o.top ? UNIS.priv[0] : pick(UNIS.priv)), e.t = `Matrícula na ${o.uni}. Qual curso vai ser?`, e } return f(a) } }(cartaCurso);
acao = function(f) { return function(a, o, e) { const [r, ...i] = o.split(":"); if ("anuidade" === r) return void(a.faculdade && (a.faculdade.anual = Math.max(0, +i[0] || 0))); if ("bolsa" === r) return void(a.faculdade && (a.faculdade.bolsa = +i[0] / 100, e.push({ k: "info", t: `Bolsa de ${i[0]}%` }))); if ("uni_top" === r) return void(a.faculdade && (a.faculdade.top = 1)); if ("fiesanual" === r) return void(a.fiesAnual = +i[0] || 0); if ("interromper" === r) { const o = a.pessoas.filter(a => a.k.startsWith("filho") && 0 === a.idade).pop(); return void(o && (a.pessoas = a.pessoas.filter(a => a !== o), a.filhosN = Math.max(0, a.filhosN - 1), a.tmp.nomear = null, a.tmp.proximas = a.tmp.proximas.filter(a => !/^gravidez|^parto/.test(a.id)), delete a.marcas.gravida)) } if ("corredor" === r) { f(a, `prender:${i[0]}:homicidio`, e), a.prisao && (a.prisao.morte = a.idade + rnd(2, 7)), e.push({ k: "info", t: "Condenad" + oa(a) + " à morte" }); return } if ("aposentar" === r && "BR" !== a.pais) { const sal = a.emprego ? a.emprego.salario : 0; f(a, o, e); const t = Math.max(1500, anualLocal(a.pais, leis(a).salMin));
      a.emprego && (a.emprego.salario = clamp(Math.round(.6 * sal), t, 6 * t)); return } return f(a, o, e) } }(acao);
financas = function(f) { return function(a) { const o = f(a),
      e = a.faculdade; if (e && e.anual && !a.prisao) { const r = Math.round(e.anual * (1 - (e.bolsa || 0)));
      r > 0 && (o.saldo -= r, o.log.push({ t: `Anuidade da universidade: ${fmtR(r)}.`, c: "info" })) } a.fies > 0 && a.formado && a.fiesAnual && (o.saldo -= Math.max(0, Math.round(a.fiesAnual * 4 / 8) - 4200)); const r = leis(a); if (a.emprego && ("clt" === a.emprego.tipo || "servidor" === a.emprego.tipo) && "BR" !== a.pais) { const e = a.emprego.salario * (r.meses - 13);
      o.saldo += e } return o } }(financas);
custoSaudeMes = function(f) { return function(a) { return Math.round(f(a) * { universal: .35, mista: 1, privada: 2.2 } [leis(a).saude] || f(a)) } }(custoSaudeMes);

// ===== Leis =====
// Bebida, drogas: o risco depende do país.
function riscoLei(a, o, e) { e && a.tmp.proximas.push(cartaFlagrante(a, { crime: CRIME[o], t: e })) }
Object.assign(CRIME, { alcool: { id: "alcool", tipo: "consumo de álcool (proibido no país)", pena: [0, 1], g: [0, 3e4], calor: 2 }, drogas1: { id: "drogas1", tipo: "porte de drogas", pena: [0, 1], g: [0, 2e4], calor: 2 }, drogas2: { id: "drogas2", tipo: "porte de drogas", pena: [1, 3], g: [0, 4e4], calor: 3 }, drogas3: { id: "drogas3", tipo: "porte de drogas", pena: [3, 8], g: [0, 8e4], calor: 5 }, drogas4: { id: "drogas4", tipo: "porte de drogas", pena: [6, 15], g: [0, 15e4], calor: 7 }, jogo_ilegal: { id: "jogo_ilegal", tipo: "jogo de azar ilegal", pena: [0, 1], g: [0, 2e4], calor: 1 }, desercao: { id: "desercao", tipo: "fuga do serviço militar", pena: [1, 3], g: [0, 4e4], calor: 3 } });
acao = function(f) { return function(a, o, e) { const [r, i] = o.split(":"); if ("vicio" === r && !a.prisao) { const o = leis(a); if ("alcool" === i) !o.alcool && R() < .18 ? riscoLei(a, "alcool", "Você foi pego com bebida alcoólica, que é proibida aqui.") : a.idade < o.beber && R() < .15 && (e.push({ k: "info", t: "Menor de idade bebendo" }), a.tmp.proximas.push({ id: "pego_bebendo", adhoc: 1, rar: "c", t: `Aqui só pode beber a partir dos ${o.beber}. A polícia pegou você e ligou pros seus pais.`, o: [{ l: "Pedir desculpas", ok: { t: "Castigo de um mês e um sermão inesquecível.", fx: { humor: -4, p: { mae: -6, pai: -6 } } } }] }));
      else if ("maconha" === i) { const e = "legal" === o.maconha ? 0 : "descriminalizada" === o.maconha ? .04 : .05 + .04 * o.drogas;
        R() < e && ("descriminalizada" === o.maconha ? a.tmp.proximas.push({ id: "multa_maconha", adhoc: 1, rar: "c", t: "A polícia te parou com maconha. Aqui não dá cadeia, mas dá multa.", o: [{ l: "Pagar a multa", ok: { t: "Pagou e foi liberad{o}.", fx: { grana: -800, humor: -2 } } }] }) : riscoLei(a, "drogas" + o.drogas, "A polícia te parou e achou droga no seu bolso.")) } else ["cocaina", "remedios"].includes(i) && R() < .06 + .04 * o.drogas && riscoLei(a, "drogas" + o.drogas, "Blitz na saída da festa. Acharam droga com você.") } return f(a, o, e) } }(acao);
// Cassino ilegal vira clandestino, com risco.
for (const x of ACTS) "cassino" === x.id && (x.desc = a => leis(a).cassino ? "Vinte-e-um, roleta e corrida de cavalos. Só maiores de 18" : "Aqui é proibido. Só existe o clandestino, com risco de batida policial", x.run = function(f) { return a => leis(a).cassino || R() >= .15 ? f(a) : (a.tmp.proximas.push(cartaFlagrante(a, { crime: CRIME.jogo_ilegal, t: "Batida policial no cassino clandestino. Todo mundo correndo pra porta dos fundos." })), rs(a, "Você mal tinha sentado na mesa quando a polícia entrou.", { humor: -3 })) }(x.run));
// Carteira de motorista na idade do país.
for (const x of ACTS) "cnh" === x.id && (x.vis = function(f) { return a => { const o = leis(a).dirigir; return a.idade >= 18 ? f(a) : a.idade >= o && !tem(a, "cnh") && !a.prisao && a.grana >= 3200 } }(x.vis));
// Casamento entre pessoas do mesmo sexo e divórcio dependem da lei.
for (const x of ACTS) "casar" === x.id && (x.run = function(f) { return a => { const o = parceiro(a); return o && o.g === a.g && !leis(a).casarGay ? rs(a, "Aqui o casamento entre pessoas do mesmo sexo não é reconhecido. Vocês seguem juntos, sem papel. Em outro país, daria.", { humor: -4, p: { parceiro: 3 } }) : f(a) } }(x.run)), "terminar" === x.id && (x.run = function(f) { return a => { if (!a.casado || leis(a).divorcio) return f(a); const o = Math.max(15e3, 100 * Math.round(PAISES[a.pais].mult * 3e4 / 100)); return { carta: carta("Aqui não existe divórcio. Só a anulação do casamento, cara e demorada.", [{ l: `Pedir a anulação (${fmtR(o)})`, req: ["grana>" + (o - 1)], ch: 60, ok: { t: "O tribunal anulou o casamento. Acabou, no papel e na vida.", fx: { grana: -o, humor: -6, a: "terminar" } }, no: { t: "Pedido negado. Vocês continuam casados no papel.", fx: { grana: -o, humor: -10 } } }, { l: "Separar e continuar casad{o} no papel", ok: { t: "Cada um na sua casa. O papel continua dizendo que são casados.", fx: { humor: -5, p: { parceiro: -20 } } } }, { l: "Tentar mais um pouco", ok: { t: "Respirou fundo e ficou.", fx: { p: { parceiro: 5 } } } }]) } } }(x.run)), "aposentar" === x.id && (x.vis = function(f) { return a => "BR" === a.pais ? f(a) : a.idade >= leis(a).aposentadoria - 3 && !!a.emprego && !["aposentado", "negocio", "atleta", "artista"].includes(a.emprego.tipo) }(x.vis));
// Aborto: só onde é legal a pedido.
cartasGravidez = function(f) { return function(a) { const o = f(a); return "legal" === leis(a).aborto && a.idade >= 16 && o[0] && o[0].o.push({ l: "Interromper a gravidez", ok: { t: "Foi uma decisão difícil e pensada. A vida seguiu.", fx: { humor: -6, a: "interromper" } } }), o } }(cartasGravidez);
// Corrupção: dá pra tentar subornar o juiz. Pena de morte: homicídio pode levar ao corredor da morte.
cartaJulgamento = function(f) { return function(a, o, e) { const r = f(a, o, e),
      i = leis(a); if (i.corrupcao >= 45 && !a.prisao && "julgamento" === r.id) { const e = Math.max(8e3, 100 * Math.round((o.pena[1] + 1) * 6e3 * PAISES[a.pais].mult / 100)),
        t = clamp(Math.round(.8 * i.corrupcao - 15), 5, 70);
      r.o.splice(r.o.length - 1, 0, { l: `Subornar o juiz (${fmtR(e)})`, req: ["grana>" + (e - 1)], ch: t, ok: { t: "O processo sumiu da pauta. Ninguém comenta.", fx: { grana: -e, moral: -4, m: "subornou" } }, no: { t: "O juiz denunciou a tentativa. Pena maior.", fx: { grana: -e, a: `prender:${o.pena[1]+2}:${o.id}` } } }) } if ("homicidio" === o.id && i.penaMorte) { const e = R() < .45; e && r.o.forEach(a => ["ok", "no"].forEach(o => { const r = a[o]; if (!r || !r.fx || !r.fx.a) return; const i = [].concat(r.fx.a).map(a => /^prender:/.test(a) && +a.split(":")[1] >= 12 ? "corredor:" + a.split(":")[1] : a);
          r.fx.a = i, i.some(a => /^corredor/.test(a)) && (r.t = r.t.replace(/Condenad\{o\} a \d+ anos? de prisão\./, "Condenad{o} à pena de morte.")) })) } return r } }(cartaJulgamento);
anoCadeia = function(f) { return function(a, o, e) { const r = a.prisao; if (r && r.morte && a.idade >= r.morte) return r.morte = null, void e.push({ id: "execucao", adhoc: 1, rar: "r", t: "Chegou a data da execução. Seu advogado tem um último recurso.", o: [{ l: "Apelar à suprema corte", ch: 22, ok: { t: "A pena foi convertida em prisão perpétua. Você vai viver, atrás das grades.", fx: { humor: 10, a: "pena:20" } }, no: { t: "Recurso negado.", fx: { a: "executar" } } }, { l: "Pedir clemência ao chefe de Estado", ch: 12, ok: { t: "Clemência concedida. Prisão perpétua.", fx: { humor: 8, a: "pena:20" } }, no: { t: "Clemência negada.", fx: { a: "executar" } } }] }); return f(a, o, e) } }(anoCadeia);
acao = function(f) { return function(a, o, e) { return "executar" === o ? (a.vivo = !1, a.causa = tpl(a, "Executad{o} pelo Estado."), void marca(a, "executado")) : f(a, o, e) } }(acao);
// Serviço militar obrigatório.
function anoAlistamento(a, o, e) { const r = leis(a).alistamento; if (!r || a.prisao || fora(a) || tem(a, "alistamento") || a.idade !== r.idade || "m" === r.sexo && "m" !== a.g) return; marca(a, "alistamento"), a.vistos.alistamento = 1; const i = PERFIS[a.pais].trab.exercito,
    t = r.anos,
    s = leis(a).corrupcao; e.push({ id: "convocacao", adhoc: 1, rar: "u", t: `Carta de convocação: serviço militar obrigatório no ${i}, ${anos(t)}.`, o: [{ l: "Servir", ok: { t: "Cabelo raspado, farda e alvorada às 5h. Você vai sair diferente.", fx: { saude: 4, humor: -4, labia: 2, a: ["carreira:militar:0", "servico:" + t], m: "serviu" } } }, { l: "Pedir dispensa", ch: a.faculdade || a.estudo ? 55 : 30, ok: { t: "Dispensad" + oa(a) + ". Voltou pra vida normal.", fx: { m: "dispensado" } }, no: { t: "Pedido negado. Você vai servir.", fx: { humor: -6, a: ["carreira:militar:0", "servico:" + t], m: "serviu" } } }, { l: "Fugir do alistamento", ch: clamp(20 + .4 * s, 15, 60), ok: { t: "Não apareceu. Ninguém veio te buscar. Ainda.", fx: { moral: -3, m: "desertor" } }, no: { t: "A polícia militar bateu na sua porta.", fx: { a: "julgar:desercao" } } }] }) }

function anoServico(a, o) { a.servicoAte && a.idade >= a.servicoAte && (a.servicoAte = null, a.emprego && "militar" === a.emprego.car && (a.emprego = null), marca(a, "reservista"), o.push({ t: "Fim do serviço militar. Recebeu a baixa e voltou pra vida civil.", c: "info" })) }
acao = function(f) { return function(a, o, e) { const [r, i] = o.split(":"); return "servico" === r ? void(a.servicoAte = a.idade + Math.max(1, Math.ceil(+i || 1))) : f(a, o, e) } }(acao);
// Relação proibida por lei: precisa ser escondida.
function anoLeisAno(a, o, e) { const r = leis(a),
    i = parceiro(a);
  i && i.g === a.g && r.gayCrime && !a.prisao && R() < .2 && o.push({ t: "Aqui a relação de vocês precisa ficar em segredo. Pesa.", c: "ruim" }) }
envelhecer = function(f) { return function(a) { const o = f(a); try { anoAlistamento(a, o.log, o.fila), anoServico(a, o.log), anoLeisAno(a, o.log, o.fila) } catch (e) { console.error("leis", e) } return o } }(envelhecer);
// Imposto de renda proporcional à alíquota do país.
anoIR = function(f) { return function(a, o, e) { const r = e.length;
    f(a, o, e); const i = e[r]; if (i && "declarar_ir" === i.id && "BR" !== a.pais) { const o = Math.round(a.emprego.salario * clamp(leis(a).ir / 15, .3, 3)),
        r = Math.round(a.emprego.salario * .96);
      i.t = i.t.replace(fmtR(r), fmtR(o)), i.o.forEach(a => ["ok", "no"].forEach(e => { const i = a[e]; i && i.fx && "number" == typeof i.fx.grana && (i.fx.grana = Math.round(i.fx.grana * o / r)) })) } } }(anoIR);

// ===== Nascimento: sem país padrão =====
// Primeira vida: país sorteado entre os 50. Depois, o último escolhido. Vida do dia: país sorteado pela semente do dia.
telaNascimento = function(f) { return function(a) { SAVE.paisNasc && PAISES[SAVE.paisNasc] || (SAVE.paisNasc = pick(JOGAVEIS), salvar()); const o = f(a); return S && (a ? trocarPaisNasc(pick(JOGAVEIS)) : S.pais !== SAVE.paisNasc && trocarPaisNasc(SAVE.paisNasc)), o } }(telaNascimento);
Object.assign(CENARIOS, { sertao: ["Do interior pro mundo", "Família pobre numa cidade pequena. O mundo é grande.", a => { a.classe = "baixa"; const o = PERFIS[a.pais]; if (o && "BR" !== a.pais) { const e = o.cid.slice().sort((a, o) => a[1] - o[1])[0][0];
      a.cidade = `${e} (${MUNDO[a.pais].n})` } else a.cidade = pick(["Juazeiro do Norte (CE)", "Petrolina (PE)", "Caicó (RN)"]);
    a.hist[0].itens[0].t = `Você nasceu em ${a.cidade}.` }], exterior: ["Filho de imigrantes", "Seus pais vieram de outro país antes de você nascer.", a => { const o = pick(JOGAVEIS.filter(o => o !== a.pais)),
      e = a.pais;
    usarNomes(o); const r = pick(SOBRENOMES);
    usarNomes(e), a.sobrenome = r, a.pessoas.filter(a => ["mae", "pai", "avo1", "avo2", "tio1"].includes(a.k)).forEach(a => { const e = MUNDO_NOMES[PAISES[o].nomes] || MUNDO_NOMES.br;
      a.nome = pick(e["m" === a.g ? 0 : 1].split(",")) }), a.origemFamilia = o, a.hist[0].itens[0].t = `Você nasceu em ${a.cidade}, filh${"f"===a.g?"a":"o"} de pais que vieram ${dePais(o)}.` }] });

// ===== Viagens: destinos do próprio país e de outros países, com o cotidiano de cada lugar =====
for (const x of ACTS) "viagem_destino" === x.id && (x.vis = a => a.idade >= 18 && !a.prisao && a.grana >= 1500, x.run = a => { const o = a.pais,
    e = PERFIS[o],
    r = PAISES[o].mult,
    i = e.cid.map(a => a[0]).filter(o => !a.cidade.startsWith(o + " ")).slice().sort(() => R() - .5).slice(0, 2).map(a => [a, Math.round(18 * Math.sqrt(r)) * 100, ["Bate e volta que virou fim de semana.", "Conheceu o centro histórico e comeu a comida local."]]),
    t = JOGAVEIS.filter(a => a !== o).sort(() => R() - .5).slice(0, 4).map(a => { const e = MUNDO[a].reg === MUNDO[o].reg; return [semMarca(PAISES[a].n), 1e3 * Math.round((e ? 6 : 14) * Math.sqrt(r) * (.6 + .4 * PAISES[a].mult)), PERFIS[a].cultura.flavor.slice(0, 3), a] }),
    s = i.concat(t); return { carta: carta("Pra onde vai ser a viagem?", s.map(([o, e, r, i]) => ({ l: `${o} (${fmtR(e)})`, req: ["grana>" + (e - 1)], ok: { t: `${o}! ${pick(r)}`, fx: { grana: -e, humor: 6 + Math.round(e / 8e3), saude: 2, m: i ? "viajou_fora" : "viajou" } } })).concat([{ l: "Ficar em casa", ok: { t: "Férias no sofá também contam.", fx: { humor: 2 } } }])) } });
TERMOS_FORA.push([/\bbrigadeiros?\b/g, "doces caseiros"], [/\bbolo de pote\b/g, "bolo caseiro"], [/\bpão de queijo\b/g, "pão quentinho"]);
// Família real só existe em monarquia: o cenário leva a vida pra um reino.
CENARIOS.realeza && (CENARIOS.realeza[2] = function(f) { return a => { const o = JOGAVEIS.filter(a => PERFIS[a].trab.realeza);
    PERFIS[a.pais] && PERFIS[a.pais].trab.realeza || !o.length || trocarPaisNasc(pick(o)), f(S) } }(CENARIOS.realeza[2]), CENARIOS.realeza[1] = "Nasceu numa casa real. Cerimônias, escândalos e o trono.");
// Pra onde fugir: países da mesma região (ou qualquer outro, se a região só tiver esse).
function vizinhos(a) { const o = JOGAVEIS.filter(o => o !== a.pais && MUNDO[o].reg === MUNDO[a.pais].reg); return o.length ? o : JOGAVEIS.filter(o => o !== a.pais) }