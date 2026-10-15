// Corre — perfis detalhados dos 50 países jogáveis: leis, escola, universidades, trabalho, esporte e cultura.
// Valores em moeda local. Gerado a partir de pesquisa; revise números que mudam todo ano (salário mínimo, mensalidades).

Object.assign(PERFIS, {
  US: {
    gent: ["americano", "americana"],
    cid: [["Nova York", 1.6], ["Los Angeles", 1.45], ["Chicago", 1.2], ["Houston", 1.0], ["Miami", 1.3], ["Atlanta", 1.05]],
    leis: {
      beber: 21,
      alcool: true,
      dirigir: 16,
      casarGay: true,
      gayCrime: false,
      aborto: "restrito",
      penaMorte: true,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 3,
      alistamento: null,
      armas: "comum",
      divorcio: true,
      corrupcao: 35,
      aposentadoria: 67,
      salMin: 1260,
      saude: "privada",
      meses: 12,
      ir: 22,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (Kindergarten)",
      fund1: "Elementary School",
      fund2: "Middle School",
      medio: "High School",
      exame: "SAT",
      pubGratis: false,
      pubAnual: 11000,
      privAnual: 45000,
      emprestimo: "empréstimo estudantil",
      bolsaEsporte: true,
      unis: [
        ["Universidade Harvard", 3, "priv"],
        ["MIT", 3, "priv"],
        ["Universidade da Califórnia em Berkeley", 3, "pub"],
        ["Universidade de Michigan", 2, "pub"],
        ["Universidade de Nova York", 2, "priv"],
        ["Universidade Estadual do Arizona", 1, "pub"],
        ["Faculdade comunitária local", 1, "pub"]
      ]
    },
    trab: {
      policia: "Departamento de Polícia",
      policiaFed: "FBI",
      exercito: "Exército dos EUA",
      concurso: "processo seletivo do serviço público",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado estadual|Deputada estadual", "Deputado federal|Deputada federal", "Governador|Governadora", "Presidente dos Estados Unidos"],
      realeza: null
    },
    esporte: {
      principal: "basquete",
      liga1: "MLS",
      liga2: "USL Championship",
      liga3: "USL League One",
      copa: "US Open Cup",
      basquete: "NBA"
    },
    cultura: {
      feriado: "Dia de Ação de Graças",
      comida: "hambúrguer",
      flavor: [
        "Ganhou um peru inteiro no Dia de Ação de Graças e comeu sobras por uma semana.",
        "Foi a um jogo de beisebol só pelo cachorro-quente.",
        "A conta do dentista chegou e você precisou sentar.",
        "Dirigiu duas horas pra ir a um outlet. Voltou sem comprar nada.",
        "Fogos de 4 de julho até as duas da manhã na vizinhança.",
        "Pediu um café pequeno e veio um balde."
      ]
    }
  },

  CA: {
    gent: ["canadense", "canadense"],
    cid: [["Toronto", 1.6], ["Vancouver", 1.6], ["Montreal", 1.2], ["Ottawa", 1.2], ["Calgary", 1.15], ["Winnipeg", 0.95]],
    leis: {
      beber: 19,
      alcool: true,
      dirigir: 16,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "legal",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 25,
      aposentadoria: 65,
      salMin: 3000,
      saude: "universal",
      meses: 12,
      ir: 20,
      monarquia: true
    },
    escola: {
      jardim: "Jardim de infância (Kindergarten)",
      fund1: "Elementary School",
      fund2: "Middle School (Junior High)",
      medio: "High School (Secondary School)",
      exame: "Notas do ensino médio (sem vestibular)",
      pubGratis: false,
      pubAnual: 7400,
      privAnual: 25000,
      emprestimo: "empréstimo estudantil (Canada Student Loans)",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Toronto", 3, "pub"],
        ["Universidade McGill", 3, "pub"],
        ["Universidade da Colúmbia Britânica", 3, "pub"],
        ["Universidade de Waterloo", 2, "pub"],
        ["Universidade McMaster", 2, "pub"],
        ["Universidade de Montreal", 2, "pub"],
        ["Universidade Brock", 1, "pub"],
        ["Universidade Trinity Western", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia municipal",
      policiaFed: "Real Polícia Montada do Canadá (RCMP)",
      exercito: "Forças Armadas Canadenses",
      concurso: "processo seletivo do serviço público federal",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado provincial|Deputada provincial", "Deputado federal|Deputada federal", "Premiê provincial|Premiê provincial", "Primeiro-ministro do Canadá|Primeira-ministra do Canadá"],
      realeza: { casa: "Casa de Windsor", et: ["Membro distante da família real", "Duque|Duquesa", "Príncipe herdeiro|Princesa herdeira", "Rei do Canadá|Rainha do Canadá"] }
    },
    esporte: {
      principal: "hoquei",
      liga1: "Canadian Premier League",
      liga2: "League1 Canada",
      liga3: "Liga regional",
      copa: "Canadian Championship",
      basquete: "CEBL"
    },
    cultura: {
      feriado: "Dia do Canadá",
      comida: "poutine",
      flavor: [
        "Tirou a neve da garagem às seis da manhã e ainda chegou atrasado.",
        "Pediu desculpas a uma porta depois de esbarrar nela.",
        "Gastou uma fortuna em xarope de bordo pra dar de presente.",
        "Viu hóquei num bar lotado e saiu rouco de tanto gritar.",
        "Pegou fila de 20 carros no drive-thru só por um café e um donut.",
        "O inverno durou seis meses. A primavera, uma tarde."
      ]
    }
  },

  MX: {
    gent: ["mexicano", "mexicana"],
    cid: [["Cidade do México", 1.5], ["Monterrey", 1.35], ["Guadalajara", 1.2], ["Cancún", 1.3], ["Mérida", 1.05], ["Puebla", 1.0]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 3,
      alistamento: { idade: 18, anos: 1, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 74,
      aposentadoria: 65,
      salMin: 9580,
      saude: "mista",
      meses: 13,
      ir: 15,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (Preescolar)",
      fund1: "Primaria",
      fund2: "Secundaria",
      medio: "Preparatoria (Bachillerato)",
      exame: "Exame de admissão (EXANI / UNAM)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 150000,
      emprestimo: "crédito educativo",
      bolsaEsporte: false,
      unis: [
        ["UNAM", 3, "pub"],
        ["Tecnológico de Monterrey", 3, "priv"],
        ["ITAM", 3, "priv"],
        ["Instituto Politécnico Nacional", 2, "pub"],
        ["Universidade Iberoamericana", 2, "priv"],
        ["Universidade de Guadalajara", 2, "pub"],
        ["Universidade Autônoma de Nuevo León", 1, "pub"],
        ["Universidade do Vale do México", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia municipal",
      policiaFed: "Fiscalía General de la República (FGR)",
      exercito: "Exército Mexicano",
      concurso: "concurso do Serviço Profissional de Carreira",
      politica: ["Regidor|Regidora", "Presidente municipal|Presidenta municipal", "Deputado local|Deputada local", "Deputado federal|Deputada federal", "Governador|Governadora", "Presidente do México|Presidenta do México"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Liga MX",
      liga2: "Liga de Expansión MX",
      liga3: "Liga Premier",
      copa: "Campeón de Campeones",
      basquete: "LNBP"
    },
    cultura: {
      feriado: "Dia dos Mortos",
      comida: "tacos",
      flavor: [
        "Montou um altar com velas e pão de morto para a família no Dia dos Mortos.",
        "Comeu tacos al pastor numa barraquinha às duas da manhã.",
        "O metrô estava tão cheio que você saiu com outro formato.",
        "Um grupo de mariachis apareceu na festa e ninguém sabe quem chamou.",
        "Colocou limão e pimenta até na fruta.",
        "O alerta sísmico tocou e o prédio inteiro desceu de pijama."
      ]
    }
  },

  BR: {
    gent: ["brasileiro", "brasileira"],
    cid: [["São Paulo", 1.6], ["Rio de Janeiro", 1.5], ["Brasília", 1.45], ["Belo Horizonte", 1.2], ["Porto Alegre", 1.15], ["Salvador", 1.05], ["Recife", 1.0]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "restrito",
      penaMorte: false,
      cassino: false,
      maconha: "descriminalizada",
      drogas: 3,
      alistamento: { idade: 18, anos: 1, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 66,
      aposentadoria: 65,
      salMin: 1621,
      saude: "universal",
      meses: 13,
      ir: 8,
      monarquia: false
    },
    escola: {
      jardim: "Educação infantil",
      fund1: "Ensino fundamental I",
      fund2: "Ensino fundamental II",
      medio: "Ensino médio",
      exame: "ENEM",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 24000,
      emprestimo: "FIES",
      bolsaEsporte: false,
      unis: [
        ["Universidade de São Paulo (USP)", 3, "pub"],
        ["Universidade Estadual de Campinas (Unicamp)", 3, "pub"],
        ["Universidade Federal do Rio de Janeiro (UFRJ)", 3, "pub"],
        ["Universidade Federal de Minas Gerais (UFMG)", 2, "pub"],
        ["PUC-Rio", 2, "priv"],
        ["Universidade Presbiteriana Mackenzie", 2, "priv"],
        ["Universidade Paulista (UNIP)", 1, "priv"],
        ["Faculdade particular do bairro", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia Militar",
      policiaFed: "Polícia Federal",
      exercito: "Exército Brasileiro",
      concurso: "concurso público",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado estadual|Deputada estadual", "Deputado federal|Deputada federal", "Governador|Governadora", "Presidente da República"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Brasileirão Série A",
      liga2: "Brasileirão Série B",
      liga3: "Brasileirão Série C",
      copa: "Copa do Brasil",
      basquete: "NBB"
    },
    cultura: {
      feriado: "Carnaval",
      comida: "feijoada",
      flavor: [
        "Pulou Carnaval por quatro dias e voltou sem voz.",
        "A feijoada de sábado virou soneca até domingo.",
        "Pagou o boleto no último dia, como manda a tradição.",
        "Perdeu o ônibus e esperou 40 minutos no ponto debaixo de sol.",
        "O grupo da família mandou bom-dia com flor animada às seis da manhã.",
        "Brigou com o vizinho por causa de futebol e fez as pazes no churrasco."
      ]
    }
  },

  AR: {
    gent: ["argentino", "argentina"],
    cid: [["Buenos Aires", 1.5], ["Córdoba", 1.15], ["Rosário", 1.1], ["Mendoza", 1.05], ["Mar del Plata", 1.0], ["San Miguel de Tucumán", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 17,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 63,
      aposentadoria: 65,
      salMin: 350000,
      saude: "mista",
      meses: 13,
      ir: 8,
      monarquia: false
    },
    escola: {
      jardim: "Jardim de infância (Jardín de infantes)",
      fund1: "Escola primária (Primaria)",
      fund2: "Secundária - ciclo básico",
      medio: "Secundária - ciclo orientado",
      exame: "Ingresso direto (CBC na UBA)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 6000000,
      emprestimo: "bolsa Progresar",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Buenos Aires (UBA)", 3, "pub"],
        ["Universidade Torcuato Di Tella", 3, "priv"],
        ["Universidade Nacional de La Plata", 2, "pub"],
        ["Universidade Nacional de Córdoba", 2, "pub"],
        ["Instituto Tecnológico de Buenos Aires (ITBA)", 2, "priv"],
        ["Universidade Austral", 2, "priv"],
        ["Universidade Nacional de La Matanza", 1, "pub"],
        ["Universidade de Palermo", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia provincial",
      policiaFed: "Polícia Federal Argentina",
      exercito: "Exército Argentino",
      concurso: "concurso público",
      politica: ["Vereador|Vereadora", "Intendente|Intendenta", "Deputado provincial|Deputada provincial", "Deputado nacional|Deputada nacional", "Governador|Governadora", "Presidente da Nação|Presidenta da Nação"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Liga Profesional",
      liga2: "Primera Nacional",
      liga3: "Primera B Metropolitana",
      copa: "Copa Argentina",
      basquete: "Liga Nacional de Básquet"
    },
    cultura: {
      feriado: "Revolução de Maio (25 de maio)",
      comida: "asado",
      flavor: [
        "O asado de domingo começou ao meio-dia e a carne só saiu às cinco.",
        "Dividiu o mate com a roda inteira sem nem trocar a bomba.",
        "Jantou à meia-noite e achou que estava cedo.",
        "Os preços do mercado mudaram entre a ida e a volta.",
        "Comeu medialunas com doce de leite no café da manhã.",
        "Gritou tanto no clássico de domingo que ficou sem voz até quarta."
      ]
    }
  },

  CO: {
    gent: ["colombiano", "colombiana"],
    cid: [["Bogotá", 1.5], ["Medellín", 1.4], ["Cartagena", 1.3], ["Cali", 1.15], ["Barranquilla", 1.1], ["Bucaramanga", 1.0]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 2,
      alistamento: { idade: 18, anos: 2, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 61,
      aposentadoria: 62,
      salMin: 1750905,
      saude: "mista",
      meses: 13,
      ir: 6,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (Transición)",
      fund1: "Básica primaria",
      fund2: "Básica secundaria",
      medio: "Educación media (Bachillerato)",
      exame: "Prova Saber 11 (ICFES)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 20000000,
      emprestimo: "crédito ICETEX",
      bolsaEsporte: false,
      unis: [
        ["Universidade Nacional da Colômbia", 3, "pub"],
        ["Universidade dos Andes", 3, "priv"],
        ["Pontifícia Universidade Javeriana", 2, "priv"],
        ["Universidade de Antioquia", 2, "pub"],
        ["Universidade do Rosário", 2, "priv"],
        ["Universidade do Valle", 2, "pub"],
        ["Universidade Distrital Francisco José de Caldas", 1, "pub"],
        ["Universidade Cooperativa da Colômbia", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia Nacional",
      policiaFed: "CTI da Fiscalía General de la Nación",
      exercito: "Exército Nacional da Colômbia",
      concurso: "concurso de mérito da CNSC",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado departamental|Deputada departamental", "Senador|Senadora", "Governador|Governadora", "Presidente da República"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Categoría Primera A",
      liga2: "Categoría Primera B",
      liga3: "Liga regional",
      copa: "Copa Colombia",
      basquete: "Liga Profesional de Baloncesto"
    },
    cultura: {
      feriado: "Carnaval de Barranquilla",
      comida: "bandeja paisa",
      flavor: [
        "Encarou uma bandeja paisa inteira e precisou de uma sesta.",
        "Tomou um tinto, o cafezinho local, a cada duas horas.",
        "Dançou salsa em Cali até o sol nascer.",
        "Pegou sol, chuva e frio no mesmo dia em Bogotá.",
        "Comeu arepa no café, no almoço e no lanche.",
        "No dia sem carro, pedalou 15 km e chegou suado na reunião."
      ]
    }
  },

  CL: {
    gent: ["chileno", "chilena"],
    cid: [["Santiago", 1.5], ["Antofagasta", 1.35], ["Valparaíso", 1.15], ["Concepción", 1.1], ["La Serena", 1.1], ["Temuco", 0.95]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "restrito",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 37,
      aposentadoria: 65,
      salMin: 539000,
      saude: "mista",
      meses: 12,
      ir: 5,
      monarquia: false
    },
    escola: {
      jardim: "Educação parvularia (Kínder)",
      fund1: "Educación básica (1º ao 6º)",
      fund2: "Educación básica (7º e 8º)",
      medio: "Enseñanza media",
      exame: "PAES",
      pubGratis: false,
      pubAnual: 5000000,
      privAnual: 6500000,
      emprestimo: "Crédito com Aval do Estado (CAE)",
      bolsaEsporte: false,
      unis: [
        ["Universidade do Chile", 3, "pub"],
        ["Pontifícia Universidade Católica do Chile", 3, "priv"],
        ["Universidade de Concepción", 2, "priv"],
        ["Universidade de Santiago do Chile (USACH)", 2, "pub"],
        ["Universidade Técnica Federico Santa María", 2, "priv"],
        ["Universidade Adolfo Ibáñez", 2, "priv"],
        ["Universidade de La Frontera", 1, "pub"],
        ["Universidade Andrés Bello", 1, "priv"]
      ]
    },
    trab: {
      policia: "Carabineros",
      policiaFed: "Polícia de Investigações (PDI)",
      exercito: "Exército do Chile",
      concurso: "concurso público",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado|Deputada", "Governador regional|Governadora regional", "Senador|Senadora", "Presidente da República"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Liga de Primera",
      liga2: "Liga de Ascenso",
      liga3: "Segunda División Profesional",
      copa: "Copa Chile",
      basquete: "Liga Nacional de Básquetbol"
    },
    cultura: {
      feriado: "Fiestas Patrias (18 de setembro)",
      comida: "empanada de pino",
      flavor: [
        "Comeu empanadas e dançou cueca nas Fiestas Patrias.",
        "Um tremor balançou a casa e ninguém nem levantou do sofá.",
        "Pegou o metrô de Santiago na hora do rush e virou sardinha.",
        "Subiu os morros coloridos de Valparaíso e chegou sem fôlego.",
        "Comeu um completo com abacate e maionese de sobra.",
        "Tomou 'once' às oito da noite e chamou aquilo de jantar."
      ]
    }
  },

  PE: {
    gent: ["peruano", "peruana"],
    cid: [["Lima", 1.5], ["Arequipa", 1.15], ["Cusco", 1.1], ["Trujillo", 1.0], ["Chiclayo", 0.95], ["Piura", 0.95]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "restrito",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 3,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 69,
      aposentadoria: 65,
      salMin: 1130,
      saude: "mista",
      meses: 14,
      ir: 8,
      monarquia: false
    },
    escola: {
      jardim: "Educação inicial",
      fund1: "Primaria",
      fund2: "Secundaria (1º ao 3º)",
      medio: "Secundaria (4º e 5º)",
      exame: "Exame de admissão",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 25000,
      emprestimo: "crédito educativo (Pronabec)",
      bolsaEsporte: false,
      unis: [
        ["Universidade Nacional Maior de San Marcos", 3, "pub"],
        ["Pontifícia Universidade Católica do Peru", 3, "priv"],
        ["Universidade Peruana Cayetano Heredia", 3, "priv"],
        ["Universidade do Pacífico", 2, "priv"],
        ["Universidade Nacional de Engenharia", 2, "pub"],
        ["Universidade de Lima", 2, "priv"],
        ["Universidade Nacional de San Agustín", 1, "pub"],
        ["Universidade César Vallejo", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia Nacional do Peru",
      policiaFed: "DIRINCRI (Polícia Nacional)",
      exercito: "Exército do Peru",
      concurso: "concurso público (SERVIR)",
      politica: ["Vereador|Vereadora", "Prefeito distrital|Prefeita distrital", "Prefeito provincial|Prefeita provincial", "Governador regional|Governadora regional", "Senador|Senadora", "Presidente da República"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Liga 1",
      liga2: "Liga 2",
      liga3: "Liga 3",
      copa: "Copa Perú",
      basquete: "Liga Nacional de basquete"
    },
    cultura: {
      feriado: "Fiestas Patrias (28 de julho)",
      comida: "ceviche",
      flavor: [
        "Comeu ceviche no almoço, como manda a regra: peixe fresco, só de dia.",
        "Ficou duas horas no trânsito de Lima pra andar dez quilômetros.",
        "Tomou uma Inca Kola gelada com frango assado.",
        "A garoa de Lima não molhou ninguém, mas também não foi embora.",
        "Subiu até Machu Picchu e sentiu a altitude no segundo degrau.",
        "Pegou uma combi e o cobrador gritou o trajeto inteiro."
      ]
    }
  },

  UK: {
    gent: ["britânico", "britânica"],
    cid: [["Londres", 1.7], ["Edimburgo", 1.25], ["Bristol", 1.25], ["Manchester", 1.2], ["Birmingham", 1.1], ["Glasgow", 1.05], ["Belfast", 0.95]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 17,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 29,
      aposentadoria: 66,
      salMin: 2150,
      saude: "universal",
      meses: 12,
      ir: 18,
      monarquia: true
    },
    escola: {
      jardim: "Nursery / Reception",
      fund1: "Primary School",
      fund2: "Secondary School (GCSEs)",
      medio: "Sixth Form (A-Levels)",
      exame: "A-Levels + UCAS",
      pubGratis: false,
      pubAnual: 9790,
      privAnual: 12000,
      emprestimo: "Student Finance (empréstimo estudantil)",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Oxford", 3, "pub"],
        ["Universidade de Cambridge", 3, "pub"],
        ["Imperial College London", 3, "pub"],
        ["University College London (UCL)", 2, "pub"],
        ["Universidade de Edimburgo", 2, "pub"],
        ["Universidade de Manchester", 2, "pub"],
        ["Universidade de Hull", 1, "pub"],
        ["Universidade de Buckingham", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia local",
      policiaFed: "National Crime Agency (NCA)",
      exercito: "Exército Britânico",
      concurso: "processo seletivo do Civil Service",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado (MP)|Deputada (MP)", "Ministro|Ministra", "Secretário de Estado|Secretária de Estado", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casa de Windsor", et: ["Membro distante da família real", "Duque|Duquesa", "Príncipe herdeiro|Princesa herdeira", "Rei|Rainha"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Premier League",
      liga2: "Championship",
      liga3: "League One",
      copa: "FA Cup",
      basquete: "Super League Basketball"
    },
    cultura: {
      feriado: "Natal",
      comida: "fish and chips",
      flavor: [
        "Levou guarda-chuva e não choveu. Esqueceu no dia seguinte e choveu.",
        "Pediu desculpas três vezes numa fila de cinco pessoas.",
        "Tomou chá com leite e comentou o tempo com um desconhecido.",
        "Comeu fish and chips na praia com uma gaivota te encarando.",
        "O metrô parou por problemas de sinalização. De novo.",
        "Ficou no pub até tocar o sino da última rodada."
      ]
    }
  },

  IE: {
    gent: ["irlandês", "irlandesa"],
    cid: [["Dublin", 1.6], ["Cork", 1.25], ["Galway", 1.2], ["Limerick", 1.05], ["Waterford", 0.95]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 17,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 23,
      aposentadoria: 66,
      salMin: 2390,
      saude: "mista",
      meses: 12,
      ir: 22,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (ECCE)",
      fund1: "Primary School (National School)",
      fund2: "Junior Cycle",
      medio: "Senior Cycle",
      exame: "Leaving Certificate (pontos CAO)",
      pubGratis: false,
      pubAnual: 2500,
      privAnual: 10000,
      emprestimo: "bolsa SUSI",
      bolsaEsporte: false,
      unis: [
        ["Trinity College Dublin", 3, "pub"],
        ["University College Dublin", 3, "pub"],
        ["University College Cork", 2, "pub"],
        ["Universidade de Galway", 2, "pub"],
        ["Dublin City University", 2, "pub"],
        ["Universidade de Limerick", 2, "pub"],
        ["Atlantic Technological University", 1, "pub"],
        ["Griffith College", 1, "priv"]
      ]
    },
    trab: {
      policia: "Garda Síochána",
      policiaFed: "Garda National Bureau of Criminal Investigation",
      exercito: "Forças de Defesa da Irlanda",
      concurso: "seleção do Public Appointments Service",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Senador|Senadora", "Deputado (TD)|Deputada (TD)", "Ministro|Ministra", "Taoiseach (chefe de governo)"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "League of Ireland Premier Division",
      liga2: "League of Ireland First Division",
      liga3: "Liga regional",
      copa: "FAI Cup",
      basquete: "Super League (Basketball Ireland)"
    },
    cultura: {
      feriado: "Dia de São Patrício",
      comida: "ensopado irlandês",
      flavor: [
        "Pegou sol, chuva e vento numa caminhada de dez minutos.",
        "Entrou no pub pra uma cerveja e saiu cantando com desconhecidos.",
        "Vestiu verde da cabeça aos pés no Dia de São Patrício.",
        "O aluguel em Dublin levou metade do salário.",
        "Tomou uma Guinness e ouviu que a de outro pub é melhor.",
        "Ofereceram chá oito vezes numa única visita."
      ]
    }
  },

  FR: {
    gent: ["francês", "francesa"],
    cid: [["Paris", 1.7], ["Nice", 1.3], ["Lyon", 1.25], ["Bordeaux", 1.2], ["Toulouse", 1.1], ["Marselha", 1.1], ["Lille", 1.05]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 17,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 33,
      aposentadoria: 63,
      salMin: 1823,
      saude: "universal",
      meses: 12,
      ir: 15,
      monarquia: false
    },
    escola: {
      jardim: "École maternelle",
      fund1: "École élémentaire",
      fund2: "Collège",
      medio: "Lycée",
      exame: "Baccalauréat + Parcoursup",
      pubGratis: false,
      pubAnual: 178,
      privAnual: 12000,
      emprestimo: "empréstimo estudantil garantido pelo Estado",
      bolsaEsporte: false,
      unis: [
        ["Universidade PSL", 3, "pub"],
        ["Escola Politécnica", 3, "pub"],
        ["Universidade Paris-Saclay", 3, "pub"],
        ["HEC Paris", 3, "priv"],
        ["Sorbonne Universidade", 2, "pub"],
        ["Universidade de Bordeaux", 2, "pub"],
        ["Universidade de Perpignan", 1, "pub"],
        ["EDC Paris Business School", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia Nacional",
      policiaFed: "Polícia Judiciária",
      exercito: "Exército Francês",
      concurso: "concours da função pública",
      politica: ["Conselheiro municipal|Conselheira municipal", "Prefeito|Prefeita", "Deputado|Deputada", "Senador|Senadora", "Ministro|Ministra", "Presidente da República"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Ligue 1",
      liga2: "Ligue 2",
      liga3: "National",
      copa: "Coupe de France",
      basquete: "Betclic Élite"
    },
    cultura: {
      feriado: "Dia da Bastilha (14 de julho)",
      comida: "croissant",
      flavor: [
        "Comprou uma baguete e comeu a ponta antes de chegar em casa.",
        "O metrô entrou em greve justo no dia da sua entrevista.",
        "Almoçou por duas horas e ninguém achou estranho.",
        "Cumprimentou com dois beijinhos alguém que acabou de conhecer.",
        "Tirou agosto inteiro de férias, igual à cidade toda.",
        "Ficou meia hora escolhendo queijo e levou o de sempre."
      ]
    }
  },

  DE: {
    gent: ["alemão", "alemã"],
    cid: [["Munique", 1.7], ["Frankfurt", 1.5], ["Hamburgo", 1.45], ["Berlim", 1.4], ["Colônia", 1.3], ["Leipzig", 1.0]],
    leis: {
      beber: 16,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "legal",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 25,
      aposentadoria: 67,
      salMin: 2410,
      saude: "universal",
      meses: 12,
      ir: 22,
      monarquia: false
    },
    escola: {
      jardim: "Kindergarten",
      fund1: "Grundschule",
      fund2: "Gymnasium / Realschule (Sekundarstufe I)",
      medio: "Oberstufe (Abitur)",
      exame: "Abitur (Numerus Clausus)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 12000,
      emprestimo: "BAföG",
      bolsaEsporte: false,
      unis: [
        ["Universidade Técnica de Munique", 3, "pub"],
        ["Universidade Ludwig Maximilian de Munique", 3, "pub"],
        ["Universidade de Heidelberg", 3, "pub"],
        ["Universidade Humboldt de Berlim", 2, "pub"],
        ["RWTH Aachen", 2, "pub"],
        ["Frankfurt School of Finance & Management", 2, "priv"],
        ["Universidade de Duisburg-Essen", 1, "pub"],
        ["IU Internationale Hochschule", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia estadual (Landespolizei)",
      policiaFed: "BKA (Polícia Criminal Federal)",
      exercito: "Bundeswehr",
      concurso: "seleção para servidor de carreira (Beamte)",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado estadual|Deputada estadual", "Deputado federal|Deputada federal", "Ministro-presidente|Ministra-presidente", "Chanceler federal|Chanceler federal"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Bundesliga",
      liga2: "2. Bundesliga",
      liga3: "3. Liga",
      copa: "DFB-Pokal",
      basquete: "BBL"
    },
    cultura: {
      feriado: "Mercados de Natal",
      comida: "currywurst",
      flavor: [
        "Separou o lixo em cinco lixeiras e ainda errou uma.",
        "O trem atrasou dez minutos e o vagão inteiro bufou.",
        "Domingo tudo fechado: jantou o que sobrou na geladeira.",
        "Encarou uma caneca de um litro na Oktoberfest e precisou sentar.",
        "Devolveu as garrafas no mercado e ganhou uns trocados.",
        "Atravessou no sinal vermelho e levou bronca de uma senhora."
      ]
    }
  },

  IT: {
    gent: ["italiano", "italiana"],
    cid: [["Milão", 1.7], ["Roma", 1.5], ["Florença", 1.35], ["Bolonha", 1.3], ["Turim", 1.15], ["Nápoles", 1.05], ["Palermo", 0.95]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 46,
      aposentadoria: 67,
      salMin: 1300,
      saude: "universal",
      meses: 13,
      ir: 25,
      monarquia: false
    },
    escola: {
      jardim: "Scuola dell'infanzia",
      fund1: "Scuola primaria",
      fund2: "Scuola media",
      medio: "Scuola superiore (Liceo)",
      exame: "Maturità + testes de admissão",
      pubGratis: false,
      pubAnual: 2000,
      privAnual: 15000,
      emprestimo: "empréstimo de honra (prestito d'onore)",
      bolsaEsporte: false,
      unis: [
        ["Politécnico de Milão", 3, "pub"],
        ["Universidade de Bolonha", 3, "pub"],
        ["Universidade Bocconi", 3, "priv"],
        ["Sapienza Universidade de Roma", 2, "pub"],
        ["Universidade de Pádua", 2, "pub"],
        ["Universidade Católica do Sagrado Coração", 2, "priv"],
        ["Universidade de Messina", 1, "pub"],
        ["Universidade eCampus", 1, "priv"]
      ]
    },
    trab: {
      policia: "Carabinieri",
      policiaFed: "Polizia di Stato",
      exercito: "Exército Italiano",
      concurso: "concorso pubblico",
      politica: ["Conselheiro municipal|Conselheira municipal", "Prefeito|Prefeita", "Conselheiro regional|Conselheira regional", "Deputado|Deputada", "Presidente da Região|Presidenta da Região", "Primeiro-ministro|Primeira-ministra"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Serie A",
      liga2: "Serie B",
      liga3: "Serie C",
      copa: "Coppa Italia",
      basquete: "Lega Basket Serie A"
    },
    cultura: {
      feriado: "Ferragosto",
      comida: "massa",
      flavor: [
        "Pediu cappuccino depois do almoço e o garçom fez cara feia.",
        "O almoço de domingo na casa da nonna durou cinco horas.",
        "Gesticulou tanto numa conversa que derrubou o copo.",
        "Cortou o trânsito de Roma de scooter por centímetros.",
        "Discutiu meia hora se abacaxi pode ir na pizza.",
        "Fez a passeggiata no fim da tarde só pra ver e ser visto."
      ]
    }
  }
});

Object.assign(PERFIS, {
  ES: {
    gent: ["espanhol", "espanhola"],
    cid: [["Madri", 1.6], ["Barcelona", 1.6], ["Valência", 1.1], ["Sevilha", 1.0], ["Bilbao", 1.2], ["Málaga", 1.15], ["Saragoça", 0.95]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 44,
      aposentadoria: 67,
      salMin: 1221,
      saude: "universal",
      meses: 14,
      ir: 18,
      monarquia: true
    },
    escola: {
      jardim: "Educação infantil (Educación Infantil)",
      fund1: "Primária (Educación Primaria)",
      fund2: "ESO (Educación Secundaria Obligatoria)",
      medio: "Bachillerato",
      exame: "PAU (Selectividad)",
      pubGratis: false,
      pubAnual: 1200,
      privAnual: 9000,
      emprestimo: "bolsa de estudos do governo (beca MEC)",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Barcelona", 3, "pub"],
        ["Universidade Complutense de Madri", 3, "pub"],
        ["Universidade Pompeu Fabra", 3, "pub"],
        ["Universidade de Navarra", 3, "priv"],
        ["Universidade Autônoma de Madri", 2, "pub"],
        ["Universidade Autônoma de Barcelona", 2, "pub"],
        ["IE University", 2, "priv"],
        ["Universidade de Sevilha", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Local",
      policiaFed: "Polícia Nacional",
      exercito: "Exército de Terra",
      concurso: "oposiciones (concurso público)",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado autonômico|Deputada autonômica", "Deputado do Congresso|Deputada do Congresso", "Presidente autonômico|Presidenta autonômica", "Presidente do Governo|Presidenta do Governo"],
      realeza: { casa: "Casa de Bourbon", et: ["Membro distante da família real", "Infante|Infanta", "Príncipe das Astúrias|Princesa das Astúrias", "Rei|Rainha"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "LaLiga",
      liga2: "LaLiga Hypermotion",
      liga3: "Primera Federación",
      copa: "Copa do Rei",
      basquete: "Liga ACB"
    },
    cultura: {
      feriado: "Semana Santa",
      comida: "paella",
      flavor: [
        "Jantou às dez da noite e ainda foi o primeiro a chegar no restaurante.",
        "Tirou uma siesta depois do almoço e acordou sem saber que dia era.",
        "Ficou rouco gritando gol num bar lotado durante o clássico.",
        "Comeu as doze uvas na virada do ano e engasgou na sétima.",
        "Pediu uma caña e ganhou uma tapa de cortesia.",
        "Levou tomatada na Tomatina e jogou a roupa fora."
      ]
    }
  },
  PT: {
    gent: ["português", "portuguesa"],
    cid: [["Lisboa", 1.6], ["Porto", 1.35], ["Braga", 1.0], ["Coimbra", 0.95], ["Faro", 1.15], ["Funchal", 1.1], ["Aveiro", 1.0]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 1,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 43,
      aposentadoria: 67,
      salMin: 920,
      saude: "universal",
      meses: 14,
      ir: 20,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escolar (jardim de infância)",
      fund1: "1º e 2º ciclos do Ensino Básico",
      fund2: "3º ciclo do Ensino Básico",
      medio: "Ensino Secundário",
      exame: "Exames Nacionais (Concurso Nacional de Acesso)",
      pubGratis: false,
      pubAnual: 697,
      privAnual: 4500,
      emprestimo: "empréstimo estudantil com garantia mútua",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Lisboa", 3, "pub"],
        ["Universidade do Porto", 3, "pub"],
        ["Universidade NOVA de Lisboa", 3, "pub"],
        ["Universidade de Coimbra", 3, "pub"],
        ["Universidade do Minho", 2, "pub"],
        ["Universidade de Aveiro", 2, "pub"],
        ["Universidade Católica Portuguesa", 2, "priv"],
        ["Universidade Lusófona", 1, "priv"]
      ]
    },
    trab: {
      policia: "PSP (Polícia de Segurança Pública)",
      policiaFed: "Polícia Judiciária",
      exercito: "Exército Português",
      concurso: "concurso público",
      politica: ["Deputado municipal|Deputada municipal", "Presidente da junta de freguesia", "Vereador|Vereadora", "Presidente da câmara municipal", "Deputado da Assembleia da República|Deputada da Assembleia da República", "Primeiro-ministro|Primeira-ministra"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Liga Portugal Betclic",
      liga2: "Liga Portugal 2",
      liga3: "Liga 3",
      copa: "Taça de Portugal",
      basquete: "Liga Portuguesa de Basquetebol"
    },
    cultura: {
      feriado: "Santos Populares",
      comida: "bacalhau",
      flavor: [
        "Pediu um café e veio um expresso minúsculo por menos de um euro.",
        "Subiu uma ladeira em Lisboa e precisou parar no meio pra respirar.",
        "Comeu sardinha assada nos Santos Populares até cheirar a carvão.",
        "Ouviu fado numa tasca e saiu com saudade de algo que nem sabia.",
        "Ganhou um pastel de nata ainda quente e queimou a língua feliz.",
        "Discutiu Benfica contra Porto com o taxista durante a corrida inteira."
      ]
    }
  },
  NL: {
    gent: ["holandês", "holandesa"],
    cid: [["Amsterdã", 1.7], ["Roterdã", 1.25], ["Haia", 1.3], ["Utrecht", 1.4], ["Eindhoven", 1.1], ["Groningen", 0.95], ["Maastricht", 1.0]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 1,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 22,
      aposentadoria: 67,
      salMin: 2290,
      saude: "mista",
      meses: 13,
      ir: 30,
      monarquia: true
    },
    escola: {
      jardim: "Kleuterschool (pré-escola)",
      fund1: "Basisschool (escola primária)",
      fund2: "Onderbouw (VMBO, HAVO ou VWO)",
      medio: "VWO / HAVO",
      exame: "Eindexamen (exame final do secundário)",
      pubGratis: false,
      pubAnual: 2601,
      privAnual: 12000,
      emprestimo: "empréstimo estudantil do DUO",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Amsterdã", 3, "pub"],
        ["Universidade de Tecnologia de Delft", 3, "pub"],
        ["Universidade de Leiden", 3, "pub"],
        ["Universidade de Utrecht", 3, "pub"],
        ["Universidade Erasmus de Roterdã", 2, "pub"],
        ["Universidade de Groningen", 2, "pub"],
        ["Universidade de Wageningen", 2, "pub"],
        ["Universidade de Negócios Nyenrode", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia Nacional (Politie)",
      policiaFed: "Unidade Nacional da Polícia (Landelijke Eenheid)",
      exercito: "Exército Real dos Países Baixos",
      concurso: "processo seletivo do governo (Rijksoverheid)",
      politica: ["Vereador|Vereadora", "Secretário municipal (wethouder)|Secretária municipal (wethouder)", "Deputado provincial|Deputada provincial", "Deputado da Câmara Baixa|Deputada da Câmara Baixa", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casa de Orange-Nassau", et: ["Membro distante da família real", "Príncipe|Princesa", "Príncipe de Orange|Princesa de Orange", "Rei|Rainha"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Eredivisie",
      liga2: "Eerste Divisie",
      liga3: "Tweede Divisie",
      copa: "Copa KNVB",
      basquete: "BNXT League"
    },
    cultura: {
      feriado: "Dia do Rei (Koningsdag)",
      comida: "stroopwafel",
      flavor: [
        "Pedalou contra o vento por meia hora e chegou ao trabalho encharcado.",
        "Teve a bicicleta roubada pela terceira vez no ano.",
        "Vestiu laranja da cabeça aos pés no Dia do Rei.",
        "O almoço da firma foi pão com queijo e um copo de leite.",
        "Dividiu a conta do café com os amigos até o último centavo.",
        "Equilibrou um stroopwafel em cima do café até ele amolecer."
      ]
    }
  },
  BE: {
    gent: ["belga", "belga"],
    cid: [["Bruxelas", 1.6], ["Antuérpia", 1.35], ["Gante", 1.25], ["Bruges", 1.15], ["Lovaina", 1.2], ["Liège", 1.0], ["Charleroi", 0.85]],
    leis: {
      beber: 16,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 31,
      aposentadoria: 66,
      salMin: 2110,
      saude: "universal",
      meses: 14,
      ir: 32,
      monarquia: true
    },
    escola: {
      jardim: "Escola maternal (école maternelle / kleuterschool)",
      fund1: "Escola primária (école primaire / lagere school)",
      fund2: "Secundário inferior (1º grau)",
      medio: "Secundário superior",
      exame: "Diploma do secundário (exame de admissão só em medicina)",
      pubGratis: false,
      pubAnual: 1000,
      privAnual: 6000,
      emprestimo: "bolsa de estudos da comunidade (allocation d'études)",
      bolsaEsporte: false,
      unis: [
        ["KU Leuven", 3, "pub"],
        ["Universidade de Gante", 3, "pub"],
        ["Universidade Católica de Lovaina", 2, "pub"],
        ["Universidade Livre de Bruxelas", 2, "pub"],
        ["Universidade de Antuérpia", 2, "pub"],
        ["Universidade de Liège", 2, "pub"],
        ["Vlerick Business School", 2, "priv"],
        ["Vrije Universiteit Brussel", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Local",
      policiaFed: "Polícia Federal",
      exercito: "Defesa Belga (Componente Terrestre)",
      concurso: "seleção do serviço público federal (concurso público)",
      politica: ["Vereador|Vereadora", "Vereador executivo (échevin)|Vereadora executiva (échevine)", "Burgomestre", "Deputado regional|Deputada regional", "Deputado federal|Deputada federal", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casa da Bélgica (Saxe-Coburgo-Gota)", et: ["Membro distante da família real", "Príncipe|Princesa", "Duque de Brabante|Duquesa de Brabante", "Rei dos Belgas|Rainha dos Belgas"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Jupiler Pro League",
      liga2: "Challenger Pro League",
      liga3: "Nationale 1",
      copa: "Copa da Bélgica",
      basquete: "BNXT League"
    },
    cultura: {
      feriado: "Dia Nacional (21 de julho)",
      comida: "mexilhões com fritas",
      flavor: [
        "Passou meia hora escolhendo entre cem cervejas no cardápio do bar.",
        "Comeu batata frita com maionese num cone de papel debaixo de chuva.",
        "Cumprimentou em francês, ouviu resposta em holandês e se despediu em inglês.",
        "Entrou numa chocolateria só pra olhar e saiu com uma caixa enorme.",
        "Achou um mural de quadrinhos gigante numa esquina qualquer.",
        "Pegou engarrafamento no anel viário e chegou atrasado de novo."
      ]
    }
  },
  CH: {
    gent: ["suíço", "suíça"],
    cid: [["Zurique", 1.7], ["Genebra", 1.7], ["Basileia", 1.45], ["Berna", 1.35], ["Lausanne", 1.5], ["Lucerna", 1.35], ["Lugano", 1.25]],
    leis: {
      beber: 16,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "descriminalizada",
      drogas: 1,
      alistamento: { idade: 19, anos: 1, sexo: "m" },
      armas: "comum",
      divorcio: true,
      corrupcao: 19,
      aposentadoria: 65,
      salMin: 4200,
      saude: "mista",
      meses: 13,
      ir: 15,
      monarquia: false
    },
    escola: {
      jardim: "Kindergarten (jardim de infância)",
      fund1: "Primarschule / école primaire",
      fund2: "Sekundarstufe I / cycle d'orientation",
      medio: "Gymnasium (Matura) ou aprendizagem profissional",
      exame: "Maturidade (Matura)",
      pubGratis: false,
      pubAnual: 1500,
      privAnual: 25000,
      emprestimo: "bolsa de estudos cantonal (Stipendium)",
      bolsaEsporte: false,
      unis: [
        ["ETH Zurique", 3, "pub"],
        ["EPFL (Escola Politécnica Federal de Lausanne)", 3, "pub"],
        ["Universidade de Zurique", 3, "pub"],
        ["Universidade de Genebra", 2, "pub"],
        ["Universidade de Basileia", 2, "pub"],
        ["Universidade de St. Gallen", 2, "pub"],
        ["Escola Hoteleira de Lausanne (EHL)", 2, "priv"],
        ["Universidade de Lucerna", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Cantonal",
      policiaFed: "fedpol (Polícia Federal)",
      exercito: "Exército Suíço",
      concurso: "processo seletivo da administração federal",
      politica: ["Vereador|Vereadora", "Deputado cantonal|Deputada cantonal", "Conselheiro de Estado cantonal|Conselheira de Estado cantonal", "Conselheiro nacional|Conselheira nacional", "Conselheiro federal|Conselheira federal", "Presidente da Confederação"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Super League",
      liga2: "Challenge League",
      liga3: "Promotion League",
      copa: "Copa da Suíça",
      basquete: "Swiss Basketball League"
    },
    cultura: {
      feriado: "Dia Nacional Suíço (1º de agosto)",
      comida: "fondue",
      flavor: [
        "O trem atrasou dois minutos e o vagão inteiro bufou.",
        "Levou bronca do vizinho por dar descarga depois das dez da noite.",
        "Separou o lixo em sete sacos diferentes e ainda errou um.",
        "Pagou sete francos num café e fingiu que era normal.",
        "Votou num referendo pela quarta vez no ano.",
        "Deixou o pão cair no fondue e teve que pagar a rodada."
      ]
    }
  },
  AT: {
    gent: ["austríaco", "austríaca"],
    cid: [["Viena", 1.6], ["Salzburgo", 1.4], ["Innsbruck", 1.4], ["Graz", 1.15], ["Linz", 1.1], ["Klagenfurt", 0.95]],
    leis: {
      beber: 16,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: { idade: 18, anos: 1, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 33,
      aposentadoria: 65,
      salMin: 2000,
      saude: "universal",
      meses: 14,
      ir: 24,
      monarquia: false
    },
    escola: {
      jardim: "Kindergarten (jardim de infância)",
      fund1: "Volksschule (escola primária)",
      fund2: "Mittelschule ou Gymnasium (ciclo inferior)",
      medio: "Gymnasium (AHS) ou escola técnica (BHS)",
      exame: "Matura",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 15000,
      emprestimo: "bolsa de estudos do Estado (Studienbeihilfe)",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Viena", 3, "pub"],
        ["Universidade Técnica de Viena", 3, "pub"],
        ["Universidade de Economia de Viena", 2, "pub"],
        ["Universidade de Innsbruck", 2, "pub"],
        ["Universidade de Graz", 2, "pub"],
        ["Universidade Técnica de Graz", 2, "pub"],
        ["Universidade Johannes Kepler de Linz", 1, "pub"],
        ["Universidade Webster de Viena", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia Federal (Bundespolizei)",
      policiaFed: "Departamento Federal de Investigação Criminal (Bundeskriminalamt)",
      exercito: "Forças Armadas Austríacas (Bundesheer)",
      concurso: "processo seletivo do serviço público federal",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado estadual|Deputada estadual", "Deputado do Conselho Nacional|Deputada do Conselho Nacional", "Governador estadual|Governadora estadual", "Chanceler Federal"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Bundesliga Austríaca",
      liga2: "2. Liga",
      liga3: "Regionalliga",
      copa: "Copa da Áustria",
      basquete: "Basketball Superliga"
    },
    cultura: {
      feriado: "Natal (mercados natalinos)",
      comida: "schnitzel à vienense",
      flavor: [
        "Passou a tarde num café vienense com uma fatia de torta e um jornal.",
        "Tomou um vinho quente no mercado de Natal e esqueceu o frio.",
        "Desceu a pista de esqui inteira sentado.",
        "Pediu um schnitzel e ele era maior que o prato.",
        "Ouviu valsa no Ano-Novo e tentou dançar no meio da sala.",
        "Subiu os Alpes no fim de semana e voltou com um queijo na mochila."
      ]
    }
  },
  SE: {
    gent: ["sueco", "sueca"],
    cid: [["Estocolmo", 1.6], ["Gotemburgo", 1.3], ["Malmö", 1.2], ["Uppsala", 1.2], ["Linköping", 1.0], ["Umeå", 0.95], ["Kiruna", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 3,
      alistamento: { idade: 18, anos: 1, sexo: "ambos" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 20,
      aposentadoria: 67,
      salMin: 24000,
      saude: "universal",
      meses: 12,
      ir: 30,
      monarquia: true
    },
    escola: {
      jardim: "Förskola (pré-escola)",
      fund1: "Grundskola (anos iniciais)",
      fund2: "Grundskola (anos finais)",
      medio: "Gymnasium",
      exame: "Högskoleprovet e notas do gymnasium",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 0,
      emprestimo: "CSN (bolsa e empréstimo estudantil)",
      bolsaEsporte: false,
      unis: [
        ["Instituto Karolinska", 3, "pub"],
        ["Universidade de Lund", 3, "pub"],
        ["Universidade de Uppsala", 3, "pub"],
        ["KTH Instituto Real de Tecnologia", 3, "pub"],
        ["Universidade de Estocolmo", 2, "pub"],
        ["Universidade de Tecnologia Chalmers", 2, "priv"],
        ["Escola de Economia de Estocolmo", 2, "priv"],
        ["Universidade de Umeå", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Sueca (Polisen)",
      policiaFed: "NOA (Departamento Nacional de Operações)",
      exercito: "Forças Armadas Suecas",
      concurso: "candidatura aberta a vagas do setor público",
      politica: ["Vereador|Vereadora", "Presidente do conselho municipal", "Conselheiro regional|Conselheira regional", "Deputado do Riksdag|Deputada do Riksdag", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casa de Bernadotte", et: ["Membro distante da família real", "Príncipe|Princesa", "Príncipe herdeiro|Princesa herdeira", "Rei|Rainha"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Allsvenskan",
      liga2: "Superettan",
      liga3: "Ettan",
      copa: "Copa da Suécia",
      basquete: "Basketligan"
    },
    cultura: {
      feriado: "Midsommar (solstício de verão)",
      comida: "almôndegas suecas",
      flavor: [
        "Parou tudo às três da tarde para o fika com café e pão de canela.",
        "Dançou imitando um sapinho em volta do mastro no Midsommar.",
        "Viu o sol se pôr antes das três da tarde em dezembro.",
        "Montou um móvel inteiro sozinho e sobrou um parafuso.",
        "Pegou fila na loja estatal de bebidas numa sexta à tarde.",
        "Tirou os sapatos na porta da casa do colega sem ninguém pedir."
      ]
    }
  },
  NO: {
    gent: ["norueguês", "norueguesa"],
    cid: [["Oslo", 1.6], ["Bergen", 1.3], ["Stavanger", 1.35], ["Trondheim", 1.25], ["Tromsø", 1.2], ["Kristiansand", 1.05]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: false,
      maconha: "proibida",
      drogas: 2,
      alistamento: { idade: 19, anos: 1, sexo: "ambos" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 19,
      aposentadoria: 67,
      salMin: 32000,
      saude: "universal",
      meses: 12,
      ir: 26,
      monarquia: true
    },
    escola: {
      jardim: "Barnehage (jardim de infância)",
      fund1: "Barneskole (escola primária)",
      fund2: "Ungdomsskole",
      medio: "Videregående skole",
      exame: "Seleção por notas (Samordna opptak)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 70000,
      emprestimo: "Lånekassen (crédito estudantil)",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Oslo", 3, "pub"],
        ["Universidade Norueguesa de Ciência e Tecnologia (NTNU)", 3, "pub"],
        ["Escola Norueguesa de Economia (NHH)", 3, "pub"],
        ["Universidade de Bergen", 2, "pub"],
        ["Universidade Ártica da Noruega", 2, "pub"],
        ["BI Escola Norueguesa de Negócios", 2, "priv"],
        ["Universidade de Stavanger", 1, "pub"],
        ["Universidade Metropolitana de Oslo", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia da Noruega (Politiet)",
      policiaFed: "Kripos (Polícia Criminal Nacional)",
      exercito: "Exército Norueguês",
      concurso: "candidatura aberta a vagas do Estado",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Conselheiro do condado|Conselheira do condado", "Deputado do Storting|Deputada do Storting", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casa de Glücksburg", et: ["Membro distante da família real", "Príncipe|Princesa", "Príncipe herdeiro|Princesa herdeira", "Rei|Rainha"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Eliteserien",
      liga2: "OBOS-ligaen",
      liga3: "2. divisjon",
      copa: "Copa da Noruega",
      basquete: "BLNO"
    },
    cultura: {
      feriado: "Dia da Constituição (17 de maio)",
      comida: "salmão",
      flavor: [
        "Comeu waffle com queijo marrom no meio de uma trilha de esqui.",
        "Viu a aurora boreal da janela e nem se deu ao trabalho de fotografar.",
        "Pediu uma cerveja no bar e o preço doeu no bolso.",
        "Passou o fim de semana numa cabana sem luz e voltou novo em folha.",
        "Desfilou com bandeirinha no 17 de maio às oito da manhã.",
        "Saiu pra correr na chuva porque tempo ruim é desculpa de roupa errada."
      ]
    }
  },
  DK: {
    gent: ["dinamarquês", "dinamarquesa"],
    cid: [["Copenhague", 1.6], ["Aarhus", 1.25], ["Odense", 1.05], ["Aalborg", 1.0], ["Roskilde", 1.1], ["Esbjerg", 0.9]],
    leis: {
      beber: 16,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: { idade: 18, anos: 1, sexo: "ambos" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 10,
      aposentadoria: 67,
      salMin: 22000,
      saude: "universal",
      meses: 12,
      ir: 36,
      monarquia: true
    },
    escola: {
      jardim: "Børnehave (jardim de infância)",
      fund1: "Folkeskole (anos iniciais)",
      fund2: "Folkeskole (anos finais)",
      medio: "Gymnasium (STX)",
      exame: "Studentereksamen",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 0,
      emprestimo: "SU (bolsa e empréstimo estudantil)",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Copenhague", 3, "pub"],
        ["Universidade de Aarhus", 3, "pub"],
        ["Universidade Técnica da Dinamarca (DTU)", 3, "pub"],
        ["Escola de Negócios de Copenhague (CBS)", 2, "pub"],
        ["Universidade do Sul da Dinamarca", 2, "pub"],
        ["Universidade de Aalborg", 2, "pub"],
        ["Universidade de Roskilde", 1, "pub"],
        ["Universidade de TI de Copenhague", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Dinamarquesa (Politi)",
      policiaFed: "NSK (Unidade Nacional de Crimes Graves)",
      exercito: "Exército Dinamarquês",
      concurso: "candidatura aberta a vagas do setor público",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Conselheiro regional|Conselheira regional", "Deputado do Folketing|Deputada do Folketing", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casa de Glücksburg", et: ["Membro distante da família real", "Conde de Monpezat|Condessa de Monpezat", "Príncipe herdeiro|Princesa herdeira", "Rei|Rainha"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Superliga Dinamarquesa",
      liga2: "1. division",
      liga3: "2. division",
      copa: "Copa da Dinamarca",
      basquete: "Basketligaen"
    },
    cultura: {
      feriado: "Natal",
      comida: "smørrebrød",
      flavor: [
        "Pedalou até o trabalho na neve sem pensar duas vezes.",
        "Acendeu dez velas na sala e chamou aquilo de hygge.",
        "Comeu um smørrebrød tão caprichado que precisou de garfo e faca.",
        "Exagerou no julefrokost da empresa e cantou abraçado com o chefe.",
        "Deixou o bebê dormindo no carrinho do lado de fora do café.",
        "Mergulhou no mar gelado em pleno inverno e saiu gritando."
      ]
    }
  },
  FI: {
    gent: ["finlandês", "finlandesa"],
    cid: [["Helsinque", 1.6], ["Espoo", 1.45], ["Tampere", 1.15], ["Turku", 1.1], ["Oulu", 1.0], ["Rovaniemi", 0.95]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: { idade: 18, anos: 1, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 12,
      aposentadoria: 65,
      salMin: 2000,
      saude: "universal",
      meses: 12,
      ir: 28,
      monarquia: false
    },
    escola: {
      jardim: "Esiopetus (pré-escola)",
      fund1: "Peruskoulu (anos 1 a 6)",
      fund2: "Peruskoulu (anos 7 a 9)",
      medio: "Lukio",
      exame: "Ylioppilastutkinto (exame de matrícula)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 0,
      emprestimo: "auxílio estudantil da Kela (bolsa e empréstimo)",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Helsinque", 3, "pub"],
        ["Universidade Aalto", 3, "pub"],
        ["Universidade de Turku", 2, "pub"],
        ["Universidade de Tampere", 2, "pub"],
        ["Universidade de Oulu", 2, "pub"],
        ["Universidade de Jyväskylä", 1, "pub"],
        ["Universidade Åbo Akademi", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia da Finlândia (Poliisi)",
      policiaFed: "KRP (Departamento Nacional de Investigação)",
      exercito: "Forças de Defesa Finlandesas",
      concurso: "candidatura aberta a vagas do Estado",
      politica: ["Vereador|Vereadora", "Conselheiro regional|Conselheira regional", "Deputado do Eduskunta|Deputada do Eduskunta", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra", "Presidente da República"],
      realeza: null
    },
    esporte: {
      principal: "hoquei",
      liga1: "Veikkausliiga",
      liga2: "Ykkösliiga",
      liga3: "Ykkönen",
      copa: "Copa da Finlândia",
      basquete: "Korisliiga"
    },
    cultura: {
      feriado: "Juhannus (solstício de verão)",
      comida: "torta da Carélia",
      flavor: [
        "Saiu da sauna fervendo e pulou num lago congelado.",
        "Passou a viagem de ônibus inteira em silêncio e ninguém achou estranho.",
        "Comemorou o Juhannus numa cabana à beira do lago com mosquitos.",
        "Tomou o sexto café do dia antes do almoço.",
        "Esperou o ônibus a dois metros da pessoa mais próxima da fila.",
        "Gritou feito louco no hóquei e depois voltou a ficar quieto."
      ]
    }
  },
  PL: {
    gent: ["polonês", "polonesa"],
    cid: [["Varsóvia", 1.6], ["Cracóvia", 1.35], ["Wrocław", 1.25], ["Gdańsk", 1.3], ["Poznań", 1.15], ["Lodz", 0.95], ["Lublin", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "restrito",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 3,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 47,
      aposentadoria: 65,
      salMin: 4806,
      saude: "universal",
      meses: 12,
      ir: 15,
      monarquia: false
    },
    escola: {
      jardim: "Przedszkole (pré-escola)",
      fund1: "Szkoła podstawowa (anos 1 a 4)",
      fund2: "Szkoła podstawowa (anos 5 a 8)",
      medio: "Liceum",
      exame: "Matura",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 15000,
      emprestimo: "crédito estudantil (kredyt studencki)",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Varsóvia", 3, "pub"],
        ["Universidade Jaguelônica", 3, "pub"],
        ["Universidade Politécnica de Varsóvia", 2, "pub"],
        ["Escola de Economia de Varsóvia (SGH)", 2, "pub"],
        ["Universidade Adam Mickiewicz de Poznań", 2, "pub"],
        ["Universidade de Wrocław", 2, "pub"],
        ["Universidade Kozminski", 2, "priv"],
        ["Universidade SWPS", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia (Policja)",
      policiaFed: "CBŚP (Escritório Central de Investigação)",
      exercito: "Forças Armadas Polonesas",
      concurso: "processo seletivo do serviço civil",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado regional|Deputada regional", "Deputado do Sejm|Deputada do Sejm", "Senador|Senadora", "Primeiro-ministro|Primeira-ministra"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Ekstraklasa",
      liga2: "I Liga",
      liga3: "II Liga",
      copa: "Copa da Polônia",
      basquete: "PLK (Orlen Basket Liga)"
    },
    cultura: {
      feriado: "Wigilia (véspera de Natal)",
      comida: "pierogi",
      flavor: [
        "Comeu pierogi da avó até não conseguir levantar da mesa.",
        "Deixou um prato extra na ceia de Natal para um visitante inesperado.",
        "Acendeu velas no túmulo da família no Dia de Todos os Santos.",
        "Levou um balde de água na cabeça na segunda-feira de Páscoa.",
        "Pegou fila na padaria por pączki na Quinta-feira Gorda.",
        "Foi à praia no Báltico em agosto e a água estava gelada."
      ]
    }
  },
  GR: {
    gent: ["grego", "grega"],
    cid: [["Atenas", 1.6], ["Tessalônica", 1.2], ["Heraclião", 1.05], ["Rodes", 1.15], ["Patras", 0.95], ["Larissa", 0.85]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: { idade: 19, anos: 1, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 51,
      aposentadoria: 67,
      salMin: 880,
      saude: "universal",
      meses: 14,
      ir: 18,
      monarquia: false
    },
    escola: {
      jardim: "Nipiagogeio (jardim de infância)",
      fund1: "Dimotiko (escola primária)",
      fund2: "Gymnasio",
      medio: "Lykeio",
      exame: "Panelínicas (exames nacionais)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 9000,
      emprestimo: "bolsa de estudos do IKY",
      bolsaEsporte: false,
      unis: [
        ["Universidade Nacional e Kapodistriana de Atenas", 3, "pub"],
        ["Universidade Técnica Nacional de Atenas", 3, "pub"],
        ["Universidade Aristóteles de Tessalônica", 2, "pub"],
        ["Universidade de Creta", 2, "pub"],
        ["Universidade de Economia e Negócios de Atenas", 2, "pub"],
        ["Universidade de Patras", 2, "pub"],
        ["Universidade de Ioannina", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Helênica",
      policiaFed: "Direção de Investigação Criminal da Polícia Helênica",
      exercito: "Exército Helênico",
      concurso: "concurso público do ASEP",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Conselheiro regional|Conselheira regional", "Governador regional|Governadora regional", "Deputado do Parlamento Helênico|Deputada do Parlamento Helênico", "Primeiro-ministro|Primeira-ministra"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Super League Grécia",
      liga2: "Super League 2",
      liga3: "Gamma Ethniki",
      copa: "Copa da Grécia",
      basquete: "Greek Basket League"
    },
    cultura: {
      feriado: "Páscoa ortodoxa",
      comida: "souvlaki",
      flavor: [
        "Jantou à meia-noite numa taverna e ainda pediu sobremesa.",
        "Passou duas horas tomando um único freddo espresso com os amigos.",
        "Quebrou pratos numa festa e ninguém achou ruim.",
        "A balsa pra ilha atrasou três horas e ninguém se abalou.",
        "Bateu ovos vermelhos com a família na Páscoa e ganhou a rodada.",
        "A vizinha ofereceu comida pela janela pela quinta vez na semana."
      ]
    }
  }
});

Object.assign(PERFIS, {
  RU: {
    gent: ["russo", "russa"],
    cid: [["Moscou", 1.7], ["São Petersburgo", 1.45], ["Novosibirsk", 1.0], ["Ecaterimburgo", 1.05], ["Kazan", 1.0], ["Sochi", 1.2], ["Vladivostok", 1.1]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 3,
      alistamento: { idade: 18, anos: 1, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 78,
      aposentadoria: 65,
      salMin: 27093,
      saude: "universal",
      meses: 12,
      ir: 13,
      monarquia: false
    },
    escola: {
      jardim: "Jardim de infância (detski sad)",
      fund1: "Escola primária (natchalnaia chkola)",
      fund2: "Escola básica (osnovnaia chkola)",
      medio: "Escola secundária (10ª e 11ª séries)",
      exame: "EGE (Exame Estatal Unificado)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 300000,
      emprestimo: "crédito educacional",
      bolsaEsporte: false,
      unis: [
        ["Universidade Estatal de Moscou", 3, "pub"],
        ["Universidade Estatal de São Petersburgo", 3, "pub"],
        ["Instituto de Física e Tecnologia de Moscou", 3, "pub"],
        ["Escola Superior de Economia", 2, "pub"],
        ["Universidade Federal de Kazan", 2, "pub"],
        ["Universidade Estatal de Novosibirsk", 2, "pub"],
        ["Universidade Europeia de São Petersburgo", 2, "priv"],
        ["Universidade Federal dos Urais", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia (Politsiya)",
      policiaFed: "Comitê de Investigação",
      exercito: "Forças Armadas da Rússia",
      concurso: "concurso para o serviço público estatal",
      politica: ["Deputado municipal|Deputada municipal", "Prefeito|Prefeita", "Deputado regional|Deputada regional", "Deputado da Duma|Deputada da Duma", "Governador|Governadora", "Presidente da Rússia"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Premier League Russa",
      liga2: "Primeira Liga (FNL)",
      liga3: "Segunda Liga",
      copa: "Copa da Rússia",
      basquete: "VTB United League"
    },
    cultura: {
      feriado: "Ano Novo",
      comida: "borscht",
      flavor: [
        "Passou o fim de semana na dacha colhendo batata.",
        "Fez trinta graus negativos e a aula continuou normalmente.",
        "Comeu salada Olivier do Ano Novo até o dia 3.",
        "Saiu da banya direto pra neve e se sentiu renovado.",
        "Pegou o metrô e ficou admirando os lustres da estação.",
        "A avó insistiu no terceiro prato de pelmeni."
      ]
    }
  },

  UA: {
    gent: ["ucraniano", "ucraniana"],
    cid: [["Kiev", 1.6], ["Lviv", 1.25], ["Odessa", 1.15], ["Kharkiv", 1.0], ["Dnipro", 1.0], ["Vinnytsia", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 65,
      aposentadoria: 60,
      salMin: 8647,
      saude: "mista",
      meses: 12,
      ir: 23,
      monarquia: false
    },
    escola: {
      jardim: "Jardim de infância (dytiatchyi sadok)",
      fund1: "Escola primária",
      fund2: "Escola básica",
      medio: "Escola de perfil (liceu)",
      exame: "NMT (Teste Multidisciplinar Nacional)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 60000,
      emprestimo: "crédito educacional",
      bolsaEsporte: false,
      unis: [
        ["Universidade Nacional Taras Shevchenko de Kiev", 3, "pub"],
        ["Instituto Politécnico de Kiev (KPI)", 3, "pub"],
        ["Academia Kyiv-Mohyla", 3, "pub"],
        ["Universidade Nacional Ivan Franko de Lviv", 2, "pub"],
        ["Universidade Nacional de Kharkiv", 2, "pub"],
        ["Universidade Católica Ucraniana", 2, "priv"],
        ["Universidade Nacional de Odessa", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Nacional",
      policiaFed: "Escritório Estatal de Investigação",
      exercito: "Forças Armadas da Ucrânia",
      concurso: "concurso para o serviço público",
      politica: ["Deputado municipal|Deputada municipal", "Prefeito|Prefeita", "Deputado regional|Deputada regional", "Deputado da Rada|Deputada da Rada", "Primeiro-ministro|Primeira-ministra", "Presidente da Ucrânia"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Premier League Ucraniana",
      liga2: "Persha Liha",
      liga3: "Druha Liha",
      copa: "Copa da Ucrânia",
      basquete: "Superliga Ucraniana de Basquete"
    },
    cultura: {
      feriado: "Natal",
      comida: "borscht",
      flavor: [
        "Fez varenyky com a família e perdeu a conta de quantos comeu.",
        "A encomenda da Nova Poshta chegou antes do previsto.",
        "Pegou uma marshrutka lotada e viajou em pé o caminho todo.",
        "Tomou café numa cafeteria escondida no centro de Lviv.",
        "Passou o fim de semana fazendo trilha nos Cárpatos.",
        "A avó mandou um pote de salo pra garantir que você coma."
      ]
    }
  },

  TR: {
    gent: ["turco", "turca"],
    cid: [["Istambul", 1.7], ["Ancara", 1.25], ["Esmirna", 1.3], ["Antália", 1.2], ["Bursa", 1.0], ["Konya", 0.85], ["Trebizonda", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: false,
      maconha: "proibida",
      drogas: 3,
      alistamento: { idade: 20, anos: 1, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 66,
      aposentadoria: 60,
      salMin: 28076,
      saude: "mista",
      meses: 12,
      ir: 20,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (anaokulu)",
      fund1: "Escola primária (ilkokul)",
      fund2: "Escola intermediária (ortaokul)",
      medio: "Liceu (lise)",
      exame: "YKS",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 500000,
      emprestimo: "crédito estudantil do KYK",
      bolsaEsporte: false,
      unis: [
        ["Universidade Técnica do Oriente Médio (ODTÜ)", 3, "pub"],
        ["Universidade Boğaziçi", 3, "pub"],
        ["Universidade Koç", 3, "priv"],
        ["Universidade Sabancı", 3, "priv"],
        ["Universidade Técnica de Istambul", 2, "pub"],
        ["Universidade Bilkent", 2, "priv"],
        ["Universidade de Ancara", 2, "pub"],
        ["Universidade Atatürk", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia (Emniyet)",
      policiaFed: "Jandarma",
      exercito: "Forças Armadas Turcas",
      concurso: "KPSS (exame do serviço público)",
      politica: ["Vereador|Vereadora", "Prefeito distrital|Prefeita distrital", "Prefeito metropolitano|Prefeita metropolitana", "Deputado|Deputada", "Ministro|Ministra", "Presidente da Turquia"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Süper Lig",
      liga2: "1. Lig",
      liga3: "2. Lig",
      copa: "Copa da Turquia",
      basquete: "Basketbol Süper Ligi"
    },
    cultura: {
      feriado: "Şeker Bayramı (Festa do Açúcar)",
      comida: "döner",
      flavor: [
        "Tomou o quinto copinho de çay antes do meio-dia.",
        "Comprou um simit quentinho na barraca da esquina.",
        "Atravessou o Bósforo de balsa só pra ver o pôr do sol.",
        "Um gato de rua adotou a sua varanda sem pedir licença.",
        "Pechinchou meia hora no bazar e saiu com um tapete.",
        "Saiu do hamam mais leve do que entrou."
      ]
    }
  },

  IL: {
    gent: ["israelense", "israelense"],
    cid: [["Tel Aviv", 1.7], ["Jerusalém", 1.4], ["Haifa", 1.15], ["Netanya", 1.2], ["Be'er Sheva", 0.9], ["Eilat", 1.0]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 17,
      casarGay: false,
      gayCrime: false,
      aborto: "restrito",
      penaMorte: false,
      cassino: false,
      maconha: "descriminalizada",
      drogas: 2,
      alistamento: { idade: 18, anos: 3, sexo: "ambos" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 36,
      aposentadoria: 67,
      salMin: 6248,
      saude: "universal",
      meses: 12,
      ir: 15,
      monarquia: false
    },
    escola: {
      jardim: "Jardim de infância (gan)",
      fund1: "Escola primária (beit sefer yesodi)",
      fund2: "Ensino intermediário (chativat beinaim)",
      medio: "Ensino médio (tichon)",
      exame: "Bagrut e Psicométrico",
      pubGratis: false,
      pubAnual: 11000,
      privAnual: 40000,
      emprestimo: "empréstimo estudantil",
      bolsaEsporte: false,
      unis: [
        ["Universidade Hebraica de Jerusalém", 3, "pub"],
        ["Technion", 3, "pub"],
        ["Universidade de Tel Aviv", 3, "pub"],
        ["Instituto Weizmann de Ciência", 3, "pub"],
        ["Universidade Ben-Gurion do Negev", 2, "pub"],
        ["Universidade Bar-Ilan", 2, "pub"],
        ["Universidade de Haifa", 2, "pub"],
        ["Universidade Reichman", 2, "priv"]
      ]
    },
    trab: {
      policia: "Polícia de Israel",
      policiaFed: "Lahav 433 (unidade nacional de investigação)",
      exercito: "Forças de Defesa de Israel",
      concurso: "processo seletivo da Comissão do Serviço Público",
      politica: ["Vereador|Vereadora", "Vice-prefeito|Vice-prefeita", "Prefeito|Prefeita", "Deputado do Knesset|Deputada do Knesset", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Ligat Ha'Al",
      liga2: "Liga Leumit",
      liga3: "Liga Alef",
      copa: "Copa do Estado de Israel",
      basquete: "Ligat Winner"
    },
    cultura: {
      feriado: "Pessach",
      comida: "falafel",
      flavor: [
        "Esqueceu de fazer compras na sexta e o Shabat chegou com a geladeira vazia.",
        "Discutiu meia hora sobre qual lugar tem o melhor homus.",
        "Boiou no Mar Morto e leu o jornal sem afundar.",
        "Jogou matkot na praia até o sol se pôr.",
        "Comeu shakshuka direto da frigideira no café da manhã.",
        "Os vizinhos opinaram sobre a sua vida no grupo do prédio."
      ]
    }
  },

  SA: {
    gent: ["saudita", "saudita"],
    cid: [["Riad", 1.6], ["Jidá", 1.4], ["Meca", 1.3], ["Medina", 1.1], ["Damã", 1.2], ["Abha", 0.85], ["Tabuk", 0.85]],
    leis: {
      beber: 0,
      alcool: false,
      dirigir: 18,
      casarGay: false,
      gayCrime: true,
      aborto: "restrito",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 4,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 41,
      aposentadoria: 65,
      salMin: 4000,
      saude: "universal",
      meses: 12,
      ir: 0,
      monarquia: true
    },
    escola: {
      jardim: "Pré-escola (rawda)",
      fund1: "Escola primária (ibtidaiya)",
      fund2: "Escola intermediária (mutawassita)",
      medio: "Escola secundária (thanawiya)",
      exame: "Qudrat e Tahsili",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 60000,
      emprestimo: "bolsa do governo",
      bolsaEsporte: false,
      unis: [
        ["Universidade Rei Saud", 3, "pub"],
        ["Universidade Rei Abdulaziz", 3, "pub"],
        ["Universidade Rei Fahd de Petróleo e Minerais", 3, "pub"],
        ["KAUST", 3, "priv"],
        ["Universidade Princesa Nourah", 2, "pub"],
        ["Universidade Alfaisal", 2, "priv"],
        ["Universidade Rei Khalid", 1, "pub"],
        ["Universidade Effat", 1, "priv"]
      ]
    },
    trab: {
      policia: "Segurança Pública (polícia)",
      policiaFed: "Presidência de Segurança do Estado",
      exercito: "Exército Real Saudita",
      concurso: "seleção pela plataforma Jadarat",
      politica: ["Membro do conselho municipal|Membra do conselho municipal", "Membro do Conselho Shura|Membra do Conselho Shura", "Embaixador|Embaixadora", "Vice-ministro|Vice-ministra", "Governador de região|Governadora de região", "Ministro|Ministra"],
      realeza: { casa: "Casa de Saud", et: ["Membro distante da família real", "Príncipe|Princesa", "Príncipe herdeiro|Princesa herdeira", "Rei|Rainha"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Saudi Pro League",
      liga2: "Primeira Divisão Saudita",
      liga3: "Segunda Divisão Saudita",
      copa: "Copa do Rei",
      basquete: "Liga Saudita de Basquete"
    },
    cultura: {
      feriado: "Eid al-Fitr",
      comida: "kabsa",
      flavor: [
        "Recebeu as visitas com café árabe e uma tigela de tâmaras.",
        "Fez 48 graus lá fora e você morou no shopping o dia todo.",
        "Acampou no deserto e viu mais estrelas do que conseguia contar.",
        "Foi a um show na Riyadh Season e voltou rouco.",
        "Jantou kabsa sentado no chão com a família inteira.",
        "Saiu pra caminhar só depois das dez da noite, como todo mundo."
      ]
    }
  },

  AE: {
    gent: ["emiradense", "emiradense"],
    cid: [["Dubai", 1.7], ["Abu Dhabi", 1.6], ["Sharjah", 1.1], ["Ajman", 0.95], ["Al Ain", 1.0], ["Ras al-Khaimah", 0.9], ["Fujairah", 0.85]],
    leis: {
      beber: 21,
      alcool: true,
      dirigir: 17,
      casarGay: false,
      gayCrime: true,
      aborto: "restrito",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 4,
      alistamento: { idade: 18, anos: 1, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 32,
      aposentadoria: 60,
      salMin: 3000,
      saude: "mista",
      meses: 12,
      ir: 0,
      monarquia: true
    },
    escola: {
      jardim: "Jardim de infância (KG)",
      fund1: "Ciclo 1",
      fund2: "Ciclo 2",
      medio: "Ciclo 3 (ensino médio)",
      exame: "EmSAT e testes de admissão",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 70000,
      emprestimo: "bolsa do governo",
      bolsaEsporte: false,
      unis: [
        ["Universidade Khalifa", 3, "pub"],
        ["Universidade dos Emirados Árabes Unidos", 3, "pub"],
        ["NYU Abu Dhabi", 3, "priv"],
        ["Universidade Americana de Sharjah", 2, "priv"],
        ["Universidade Zayed", 2, "pub"],
        ["Universidade de Sharjah", 2, "pub"],
        ["Universidade Americana em Dubai", 1, "priv"],
        ["Faculdades Superiores de Tecnologia", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia do emirado",
      policiaFed: "Departamento de Investigação Criminal",
      exercito: "Forças Armadas dos Emirados",
      concurso: "seleção do governo para cidadãos emiradenses",
      politica: ["Membro de conselho consultivo|Membra de conselho consultivo", "Membro do Conselho Nacional Federal|Membra do Conselho Nacional Federal", "Diretor-geral de órgão público|Diretora-geral de órgão público", "Embaixador|Embaixadora", "Ministro de Estado|Ministra de Estado", "Ministro|Ministra"],
      realeza: { casa: "Casa de Al Nahyan", et: ["Membro distante da família governante", "Sheik|Sheika", "Príncipe herdeiro|Princesa herdeira", "Emir|Emira"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "UAE Pro League",
      liga2: "Primeira Divisão dos Emirados",
      liga3: "Segunda Divisão dos Emirados",
      copa: "Copa do Presidente",
      basquete: "Liga dos Emirados de Basquete"
    },
    cultura: {
      feriado: "Dia da União (Eid Al Etihad)",
      comida: "machboos",
      flavor: [
        "Esquiou dentro de um shopping enquanto fazia 45 graus lá fora.",
        "Choveu dez minutos e virou o assunto da semana.",
        "Desceu as dunas num safári e o estômago ficou lá em cima.",
        "Pegou o metrô sem motorista e sentou na janela da frente.",
        "Foi à praia em dezembro e achou a água perfeita.",
        "O brunch de sexta durou até o fim da tarde."
      ]
    }
  },

  IR: {
    gent: ["iraniano", "iraniana"],
    cid: [["Teerã", 1.6], ["Mashhad", 1.0], ["Isfahan", 1.05], ["Shiraz", 1.0], ["Tabriz", 0.95], ["Caraj", 1.1]],
    leis: {
      beber: 0,
      alcool: false,
      dirigir: 18,
      casarGay: false,
      gayCrime: true,
      aborto: "restrito",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 4,
      alistamento: { idade: 18, anos: 2, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 77,
      aposentadoria: 62,
      salMin: 104000000,
      saude: "mista",
      meses: 13,
      ir: 10,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (pish-dabestan)",
      fund1: "Escola primária (dabestan)",
      fund2: "Primeiro ciclo secundário (motevassete aval)",
      medio: "Segundo ciclo secundário (motevassete dovom)",
      exame: "Konkur",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 400000000,
      emprestimo: "empréstimo do fundo de bem-estar estudantil",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Teerã", 3, "pub"],
        ["Universidade de Tecnologia Sharif", 3, "pub"],
        ["Universidade de Tecnologia Amirkabir", 2, "pub"],
        ["Universidade de Ciência e Tecnologia do Irã", 2, "pub"],
        ["Universidade de Isfahan", 2, "pub"],
        ["Universidade de Shiraz", 2, "pub"],
        ["Universidade Ferdowsi de Mashhad", 2, "pub"],
        ["Universidade Islâmica Azad", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia (FARAJA)",
      policiaFed: "Polícia de Investigação Criminal (Agahi)",
      exercito: "Exército do Irã (Artesh)",
      concurso: "exame nacional de emprego público",
      politica: ["Membro do conselho municipal|Membra do conselho municipal", "Prefeito|Prefeita", "Governador de província|Governadora de província", "Deputado do Majlis|Deputada do Majlis", "Ministro|Ministra", "Presidente do Irã"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Persian Gulf Pro League",
      liga2: "Liga Azadegan",
      liga3: "Liga 2",
      copa: "Copa Hazfi",
      basquete: "Superliga Iraniana de Basquete"
    },
    cultura: {
      feriado: "Nowruz",
      comida: "chelo kebab",
      flavor: [
        "Montou a mesa do haft-sin e a avó corrigiu a posição de tudo.",
        "Recusou o doce três vezes por educação e aceitou na quarta.",
        "Brigou com o primo pelo último pedaço de tahdig.",
        "Fez piquenique no Sizdah Bedar e jogou o broto verde no rio.",
        "Tomou chá segurando o cubo de açúcar entre os dentes.",
        "Ficou uma hora no trânsito de Teerã e decorou um poema de Hafez."
      ]
    }
  },

  EG: {
    gent: ["egípcio", "egípcia"],
    cid: [["Cairo", 1.5], ["Gizé", 1.3], ["Alexandria", 1.25], ["Port Said", 1.0], ["Luxor", 0.9], ["Assuã", 0.85], ["Sharm el-Sheikh", 1.2]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: true,
      aborto: "proibido",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 4,
      alistamento: { idade: 18, anos: 2, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 70,
      aposentadoria: 60,
      salMin: 7000,
      saude: "mista",
      meses: 12,
      ir: 15,
      monarquia: false
    },
    escola: {
      jardim: "Jardim de infância (riad atfal)",
      fund1: "Escola primária (ibtidai)",
      fund2: "Escola preparatória (idadi)",
      medio: "Ensino secundário (thanawiya)",
      exame: "Thanawiya Amma",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 150000,
      emprestimo: "crédito educacional",
      bolsaEsporte: false,
      unis: [
        ["Universidade do Cairo", 3, "pub"],
        ["Universidade Americana do Cairo", 3, "priv"],
        ["Universidade Ain Shams", 2, "pub"],
        ["Universidade de Alexandria", 2, "pub"],
        ["Universidade Al-Azhar", 2, "pub"],
        ["Universidade Alemã no Cairo", 2, "priv"],
        ["Universidade de Mansoura", 1, "pub"],
        ["Universidade de Assiut", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Nacional",
      policiaFed: "Departamento de Investigação Criminal",
      exercito: "Forças Armadas do Egito",
      concurso: "concurso do serviço público",
      politica: ["Membro do conselho local|Membra do conselho local", "Deputado|Deputada", "Senador|Senadora", "Governador|Governadora", "Ministro|Ministra", "Presidente do Egito"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Premier League Egípcia",
      liga2: "Segunda Divisão Egípcia",
      liga3: "Terceira Divisão Egípcia",
      copa: "Copa do Egito",
      basquete: "Superliga Egípcia de Basquete"
    },
    cultura: {
      feriado: "Sham el-Nessim",
      comida: "koshari",
      flavor: [
        "Comeu ful com pão baladi antes de sair pro trabalho.",
        "Contou dezessete buzinas no caminho até a padaria.",
        "Passeou de felucca no Nilo no fim da tarde.",
        "Pediu koshari e a porção dava pra dois.",
        "Pegou um micro-ônibus que só parou quando você gritou.",
        "Viu as pirâmides da janela do ônibus e nem se impressionou mais."
      ]
    }
  },

  NG: {
    gent: ["nigeriano", "nigeriana"],
    cid: [["Lagos", 1.7], ["Abuja", 1.6], ["Port Harcourt", 1.3], ["Ibadan", 0.95], ["Kano", 0.85], ["Enugu", 1.0], ["Benin City", 0.95]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: true,
      aborto: "restrito",
      penaMorte: true,
      cassino: true,
      maconha: "proibida",
      drogas: 3,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 74,
      aposentadoria: 60,
      salMin: 70000,
      saude: "privada",
      meses: 12,
      ir: 12,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (nursery)",
      fund1: "Primary School",
      fund2: "Junior Secondary School",
      medio: "Senior Secondary School",
      exame: "UTME (JAMB) e WAEC",
      pubGratis: false,
      pubAnual: 150000,
      privAnual: 1500000,
      emprestimo: "empréstimo estudantil do NELFUND",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Ibadan", 3, "pub"],
        ["Universidade de Lagos", 3, "pub"],
        ["Universidade Obafemi Awolowo", 2, "pub"],
        ["Universidade Ahmadu Bello", 2, "pub"],
        ["Universidade da Nigéria (Nsukka)", 2, "pub"],
        ["Universidade Covenant", 2, "priv"],
        ["Universidade Americana da Nigéria", 2, "priv"],
        ["Universidade Estadual de Lagos", 1, "pub"]
      ]
    },
    trab: {
      policia: "Força Policial da Nigéria",
      policiaFed: "EFCC (Comissão de Crimes Econômicos e Financeiros)",
      exercito: "Exército da Nigéria",
      concurso: "processo seletivo da Comissão do Serviço Federal",
      politica: ["Conselheiro|Conselheira", "Presidente de governo local|Presidenta de governo local", "Deputado estadual|Deputada estadual", "Senador|Senadora", "Governador|Governadora", "Presidente da Nigéria"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "NPFL",
      liga2: "Nigeria National League",
      liga3: "Nationwide League One",
      copa: "Copa da Federação",
      basquete: "Premier League de Basquete da Nigéria"
    },
    cultura: {
      feriado: "Dia da Independência",
      comida: "arroz jollof",
      flavor: [
        "Foi a uma festa owambe e voltou com três sacolas de lembrancinha.",
        "A luz caiu e o bairro inteiro ligou o gerador ao mesmo tempo.",
        "Pegou um danfo amarelo e o cobrador gritou o trajeto todo.",
        "Comprou suya na rua e pediu pimenta extra.",
        "Maratonou filmes de Nollywood a noite toda.",
        "Ficou duas horas no engarrafamento de Lagos e fez amizade no carro ao lado."
      ]
    }
  },

  ZA: {
    gent: ["sul-africano", "sul-africana"],
    cid: [["Joanesburgo", 1.4], ["Cidade do Cabo", 1.6], ["Durban", 1.2], ["Pretória", 1.3], ["Gqeberha", 1.0], ["Bloemfontein", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "legal",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 59,
      aposentadoria: 65,
      salMin: 5600,
      saude: "mista",
      meses: 12,
      ir: 18,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (Grade R)",
      fund1: "Foundation e Intermediate Phase",
      fund2: "Senior Phase",
      medio: "FET Phase (Grades 10 a 12)",
      exame: "Matric (NSC)",
      pubGratis: false,
      pubAnual: 65000,
      privAnual: 90000,
      emprestimo: "NSFAS",
      bolsaEsporte: true,
      unis: [
        ["Universidade da Cidade do Cabo", 3, "pub"],
        ["Universidade do Witwatersrand", 3, "pub"],
        ["Universidade de Stellenbosch", 3, "pub"],
        ["Universidade de Pretória", 2, "pub"],
        ["Universidade de Joanesburgo", 2, "pub"],
        ["Universidade de KwaZulu-Natal", 2, "pub"],
        ["Universidade Rhodes", 2, "pub"],
        ["Varsity College", 1, "priv"]
      ]
    },
    trab: {
      policia: "SAPS (Serviço de Polícia Sul-Africano)",
      policiaFed: "Hawks (DPCI)",
      exercito: "Força Nacional de Defesa da África do Sul",
      concurso: "processo seletivo do serviço público",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado provincial|Deputada provincial", "Deputado nacional|Deputada nacional", "Premiê provincial|Premiê provincial", "Presidente da África do Sul"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Betway Premiership",
      liga2: "Motsepe Foundation Championship",
      liga3: "ABC Motsepe League",
      copa: "Nedbank Cup",
      basquete: "Basketball National League"
    },
    cultura: {
      feriado: "Dia da Herança (Braai Day)",
      comida: "boerewors",
      flavor: [
        "O braai de domingo começou ao meio-dia e a carne saiu às cinco.",
        "Alguém disse que fazia aquilo now now e sumiu por duas horas.",
        "Subiu a Table Mountain e as nuvens taparam a vista toda.",
        "Comprou biltong pra viagem e acabou antes de sair da cidade.",
        "O minibus táxi buzinou duas vezes e você entendeu o recado.",
        "Viu um babuíno roubar o lanche de um turista na praia."
      ]
    }
  },

  KE: {
    gent: ["queniano", "queniana"],
    cid: [["Nairóbi", 1.6], ["Mombaça", 1.2], ["Kisumu", 0.95], ["Nakuru", 0.9], ["Eldoret", 0.85], ["Malindi", 1.0]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: true,
      aborto: "restrito",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 3,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 68,
      aposentadoria: 60,
      salMin: 16114,
      saude: "mista",
      meses: 12,
      ir: 20,
      monarquia: false
    },
    escola: {
      jardim: "Pré-primário (PP1 e PP2)",
      fund1: "Primary School (Grades 1 a 6)",
      fund2: "Junior School (Grades 7 a 9)",
      medio: "Senior School (Grades 10 a 12)",
      exame: "KCSE e seleção pelo KUCCPS",
      pubGratis: false,
      pubAnual: 60000,
      privAnual: 250000,
      emprestimo: "empréstimo do HELB",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Nairóbi", 3, "pub"],
        ["Universidade Strathmore", 3, "priv"],
        ["Universidade Kenyatta", 2, "pub"],
        ["Universidade Moi", 2, "pub"],
        ["Universidade Jomo Kenyatta de Agricultura e Tecnologia", 2, "pub"],
        ["USIU-Africa", 2, "priv"],
        ["Universidade Egerton", 1, "pub"],
        ["Universidade Maseno", 1, "pub"]
      ]
    },
    trab: {
      policia: "Serviço Nacional de Polícia",
      policiaFed: "DCI (Diretoria de Investigações Criminais)",
      exercito: "Forças de Defesa do Quênia",
      concurso: "seleção da Comissão do Serviço Público",
      politica: ["Deputado de condado|Deputada de condado", "Deputado|Deputada", "Senador|Senadora", "Governador|Governadora", "Vice-presidente|Vice-presidente", "Presidente do Quênia"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Premier League do Quênia",
      liga2: "National Super League",
      liga3: "Division One",
      copa: "Copa FKF",
      basquete: "Premier League de Basquete do Quênia"
    },
    cultura: {
      feriado: "Jamhuri Day",
      comida: "ugali",
      flavor: [
        "Pegou um matatu grafitado com o som no último volume.",
        "Pagou o almoço, o aluguel e a passagem pelo celular.",
        "Comeu nyama choma com os amigos até escurecer.",
        "Saiu pra correr de manhã e foi ultrapassado por uma criança.",
        "Viu uma girafa na beira da estrada a caminho do trabalho.",
        "Tomou chai com leite e açúcar e repetiu duas vezes."
      ]
    }
  },

  MA: {
    gent: ["marroquino", "marroquina"],
    cid: [["Casablanca", 1.5], ["Rabat", 1.4], ["Marrakech", 1.3], ["Tânger", 1.2], ["Fez", 1.0], ["Agadir", 1.05], ["Mequinez", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: true,
      aborto: "restrito",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 3,
      alistamento: { idade: 19, anos: 1, sexo: "ambos" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 63,
      aposentadoria: 63,
      salMin: 3420,
      saude: "mista",
      meses: 12,
      ir: 20,
      monarquia: true
    },
    escola: {
      jardim: "Pré-escolar",
      fund1: "Ensino primário",
      fund2: "Ensino secundário colegial (collège)",
      medio: "Ensino secundário qualificante (lycée)",
      exame: "Baccalauréat (Bac)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 70000,
      emprestimo: "bolsa Minhaty",
      bolsaEsporte: false,
      unis: [
        ["Universidade Al Akhawayn", 3, "priv"],
        ["Universidade Politécnica Mohammed VI", 3, "priv"],
        ["Universidade Mohammed V de Rabat", 2, "pub"],
        ["Universidade Hassan II de Casablanca", 2, "pub"],
        ["Universidade Cadi Ayyad", 2, "pub"],
        ["Universidade Internacional de Rabat", 2, "priv"],
        ["Universidade Ibn Zohr", 1, "pub"],
        ["Universidade Sidi Mohamed Ben Abdellah", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Nacional (DGSN)",
      policiaFed: "BNPJ (Brigada Nacional de Polícia Judiciária)",
      exercito: "Forças Armadas Reais",
      concurso: "concurso público",
      politica: ["Vereador|Vereadora", "Presidente da câmara municipal|Presidenta da câmara municipal", "Presidente de região|Presidenta de região", "Deputado|Deputada", "Ministro|Ministra", "Chefe de Governo|Chefe de Governo"],
      realeza: { casa: "Dinastia Alauíta", et: ["Membro distante da família real", "Príncipe|Princesa", "Príncipe herdeiro|Princesa herdeira", "Rei|Rainha"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Botola Pro",
      liga2: "Botola 2",
      liga3: "Liga Nacional Amadora",
      copa: "Copa do Trono",
      basquete: "Divisão Excelência de Basquete"
    },
    cultura: {
      feriado: "Eid al-Adha (Festa do Sacrifício)",
      comida: "tajine",
      flavor: [
        "Recebeu chá de menta servido do alto, sem derramar uma gota.",
        "Se perdeu na medina e um menino te guiou por cinco dirhams.",
        "O cuscuz de sexta-feira juntou a família inteira.",
        "Pechinchou no souk até o vendedor rir e aceitar.",
        "Passou a tarde no hammam e saiu com a pele nova.",
        "Comeu msemen quentinho com mel no café da manhã."
      ]
    }
  },
});

Object.assign(PERFIS, {
  CN: {
    gent: ["chinês", "chinesa"],
    cid: [["Xangai", 1.6], ["Pequim", 1.6], ["Shenzhen", 1.5], ["Cantão", 1.35], ["Chengdu", 1.0], ["Wuhan", 0.95], ["Xi'an", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 4,
      alistamento: null,
      armas: "proibido",
      divorcio: true,
      corrupcao: 57,
      aposentadoria: 60,
      salMin: 2400,
      saude: "mista",
      meses: 12,
      ir: 10,
      monarquia: false
    },
    escola: {
      jardim: "Jardim de infância (Youeryuan)",
      fund1: "Escola primária (Xiaoxue)",
      fund2: "Ensino médio inicial (Chuzhong)",
      medio: "Ensino médio superior (Gaozhong)",
      exame: "Gaokao",
      pubGratis: false,
      pubAnual: 5500,
      privAnual: 25000,
      emprestimo: "empréstimo estudantil estatal",
      bolsaEsporte: false,
      unis: [
        ["Universidade Tsinghua", 3, "pub"],
        ["Universidade de Pequim", 3, "pub"],
        ["Universidade Fudan", 3, "pub"],
        ["Universidade Jiao Tong de Xangai", 2, "pub"],
        ["Universidade de Zhejiang", 2, "pub"],
        ["Universidade de Wuhan", 2, "pub"],
        ["Universidade Westlake", 2, "priv"],
        ["Universidade de Zhengzhou", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia de Segurança Pública (Gong'an)",
      policiaFed: "Ministério da Segurança Pública",
      exercito: "Exército de Libertação Popular",
      concurso: "concurso nacional do funcionalismo (Guokao)",
      politica: ["Chefe de aldeia", "Prefeito de condado|Prefeita de condado", "Prefeito|Prefeita", "Governador provincial|Governadora provincial", "Membro do Politburo", "Presidente da China"],
      realeza: null
    },
    esporte: {
      principal: "basquete",
      liga1: "Super Liga Chinesa",
      liga2: "China League One",
      liga3: "China League Two",
      copa: "Copa da China",
      basquete: "CBA"
    },
    cultura: {
      feriado: "Ano-Novo Chinês (Festa da Primavera)",
      comida: "jiaozi",
      flavor: [
        "Pegou trem-bala lotado pra passar o Ano-Novo com a família. Valeu cada minuto em pé.",
        "Recebeu um envelope vermelho digital no celular e ficou feliz com os 8 iuanes.",
        "Pagou tudo do dia com QR code. A carteira ficou esquecida na gaveta.",
        "Encontrou um grupo de dança na praça às oito da noite e entrou no ritmo.",
        "Pediu delivery e chegou antes de você terminar de lavar as mãos.",
        "A família inteira opinou sobre sua nota no Gaokao, até o tio que mora longe."
      ]
    }
  },

  JP: {
    gent: ["japonês", "japonesa"],
    cid: [["Tóquio", 1.6], ["Yokohama", 1.35], ["Osaka", 1.25], ["Kyoto", 1.2], ["Nagoya", 1.1], ["Fukuoka", 1.0], ["Sapporo", 0.95]],
    leis: {
      beber: 20,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 3,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 29,
      aposentadoria: 65,
      salMin: 190000,
      saude: "universal",
      meses: 14,
      ir: 15,
      monarquia: true
    },
    escola: {
      jardim: "Jardim de infância (Yōchien)",
      fund1: "Escola primária (Shōgakkō)",
      fund2: "Ginásio (Chūgakkō)",
      medio: "Colegial (Kōkō)",
      exame: "Exame Comum de Admissão Universitária",
      pubGratis: false,
      pubAnual: 535800,
      privAnual: 960000,
      emprestimo: "bolsa-empréstimo da JASSO",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Tóquio", 3, "pub"],
        ["Universidade de Kyoto", 3, "pub"],
        ["Universidade Keio", 3, "priv"],
        ["Universidade Waseda", 3, "priv"],
        ["Universidade de Osaka", 2, "pub"],
        ["Universidade Tohoku", 2, "pub"],
        ["Universidade Meiji", 2, "priv"],
        ["Universidade Nihon", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia da Província (Kōban)",
      policiaFed: "Agência Nacional de Polícia",
      exercito: "Forças de Autodefesa do Japão",
      concurso: "exame do funcionalismo público",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado provincial|Deputada provincial", "Governador provincial|Governadora provincial", "Deputado da Dieta|Deputada da Dieta", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casa Imperial do Japão", et: ["Membro distante da família imperial", "Príncipe|Princesa", "Príncipe herdeiro|Princesa herdeira", "Imperador|Imperatriz"] }
    },
    esporte: {
      principal: "beisebol",
      liga1: "J1 League",
      liga2: "J2 League",
      liga3: "J3 League",
      copa: "Copa do Imperador",
      basquete: "B.League"
    },
    cultura: {
      feriado: "Ano-Novo (Shōgatsu)",
      comida: "ramen",
      flavor: [
        "O trem atrasou um minuto e a empresa ferroviária pediu desculpas oficialmente.",
        "Comprou o almoço, um guarda-chuva e um ingresso de show na mesma loja de conveniência.",
        "Fez piquenique debaixo das cerejeiras e guardou lugar desde as seis da manhã.",
        "Ficou até tarde no escritório e perdeu o último trem. Dormiu num café de mangá.",
        "Separou o lixo em cinco categorias e ainda errou a do isopor.",
        "Cantou no karaokê com os colegas até a voz sumir."
      ]
    }
  },

  KR: {
    gent: ["sul-coreano", "sul-coreana"],
    cid: [["Seul", 1.6], ["Busan", 1.15], ["Incheon", 1.15], ["Daegu", 1.0], ["Daejeon", 0.95], ["Gwangju", 0.9]],
    leis: {
      beber: 19,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 3,
      alistamento: { idade: 18, anos: 2, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 36,
      aposentadoria: 60,
      salMin: 2156880,
      saude: "universal",
      meses: 12,
      ir: 10,
      monarquia: false
    },
    escola: {
      jardim: "Jardim de infância (Yuchiwon)",
      fund1: "Escola primária (Chodeung hakgyo)",
      fund2: "Escola média (Jung hakgyo)",
      medio: "Ensino médio (Godeung hakgyo)",
      exame: "Suneung",
      pubGratis: false,
      pubAnual: 4200000,
      privAnual: 7600000,
      emprestimo: "empréstimo estudantil da KOSAF",
      bolsaEsporte: false,
      unis: [
        ["Universidade Nacional de Seul", 3, "pub"],
        ["KAIST", 3, "pub"],
        ["Universidade Yonsei", 3, "priv"],
        ["Universidade da Coreia", 3, "priv"],
        ["POSTECH", 2, "priv"],
        ["Universidade Sungkyunkwan", 2, "priv"],
        ["Universidade Hanyang", 2, "priv"],
        ["Universidade Nacional de Pusan", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Metropolitana",
      policiaFed: "Agência Nacional de Polícia da Coreia",
      exercito: "Exército da República da Coreia",
      concurso: "exame do funcionalismo público (Gongmuwon)",
      politica: ["Vereador|Vereadora", "Deputado provincial|Deputada provincial", "Prefeito|Prefeita", "Deputado da Assembleia Nacional|Deputada da Assembleia Nacional", "Governador|Governadora", "Presidente da Coreia do Sul"],
      realeza: null
    },
    esporte: {
      principal: "beisebol",
      liga1: "K League 1",
      liga2: "K League 2",
      liga3: "K3 League",
      copa: "Copa da Coreia",
      basquete: "KBL"
    },
    cultura: {
      feriado: "Chuseok",
      comida: "kimchi",
      flavor: [
        "Comeu frango frito com cerveja às duas da manhã e chamou isso de jantar.",
        "Passou a madrugada num hagwon estudando pra prova de inglês.",
        "Fez kimchi com a família inteira e as mãos ficaram vermelhas por dois dias.",
        "Foi ao jjimjilbang, suou na sauna e dormiu no chão quentinho.",
        "Gastou o salário num photocard raro do seu grupo favorito.",
        "O chefe chamou a equipe pro jantar da firma e ninguém pôde recusar."
      ]
    }
  },

  IN: {
    gent: ["indiano", "indiana"],
    cid: [["Mumbai", 1.65], ["Nova Délhi", 1.5], ["Bangalore", 1.45], ["Hyderabad", 1.2], ["Chennai", 1.15], ["Calcutá", 1.0], ["Jaipur", 0.85]],
    leis: {
      beber: 21,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 3,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 62,
      aposentadoria: 60,
      salMin: 12000,
      saude: "mista",
      meses: 12,
      ir: 5,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (LKG e UKG)",
      fund1: "Escola primária (Classes 1–5)",
      fund2: "Escola média (Classes 6–8)",
      medio: "Ensino secundário (Classes 9–12)",
      exame: "JEE, NEET e CUET",
      pubGratis: false,
      pubAnual: 60000,
      privAnual: 300000,
      emprestimo: "empréstimo educacional",
      bolsaEsporte: false,
      unis: [
        ["Instituto Indiano de Tecnologia de Bombaim (IIT Bombay)", 3, "pub"],
        ["Instituto Indiano de Tecnologia de Délhi (IIT Delhi)", 3, "pub"],
        ["Instituto Indiano de Ciência", 3, "pub"],
        ["Universidade de Délhi", 2, "pub"],
        ["Universidade Jawaharlal Nehru", 2, "pub"],
        ["BITS Pilani", 2, "priv"],
        ["Academia Manipal de Ensino Superior", 2, "priv"],
        ["Universidade de Mumbai", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Estadual",
      policiaFed: "CBI (Escritório Central de Investigação)",
      exercito: "Exército Indiano",
      concurso: "exame de serviço civil da UPSC",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado estadual|Deputada estadual", "Deputado federal|Deputada federal", "Ministro-chefe|Ministra-chefe", "Primeiro-ministro|Primeira-ministra"],
      realeza: null
    },
    esporte: {
      principal: "criquete",
      liga1: "Indian Super League",
      liga2: "I-League",
      liga3: "I-League 2",
      copa: "Super Cup",
      basquete: "Liga nacional de basquete"
    },
    cultura: {
      feriado: "Diwali",
      comida: "biryani",
      flavor: [
        "Acendeu lamparinas no Diwali e a rua inteira brilhou até de madrugada.",
        "Parou tudo pra ver a final de críquete com os vizinhos na frente da TV.",
        "Tomou chai de barraquinha num copinho de barro e quis mais três.",
        "Foi a um casamento de cinco dias e dançou em todos eles.",
        "O riquixá desviou de uma vaca, dois ônibus e um casamento no meio da rua.",
        "Saiu coberto de pó colorido da festa do Holi. A roupa nunca mais foi a mesma."
      ]
    }
  },

  ID: {
    gent: ["indonésio", "indonésia"],
    cid: [["Jacarta", 1.6], ["Denpasar", 1.25], ["Surabaya", 1.2], ["Bandung", 1.1], ["Medan", 1.0], ["Yogyakarta", 0.9]],
    leis: {
      beber: 21,
      alcool: true,
      dirigir: 17,
      casarGay: false,
      gayCrime: false,
      aborto: "restrito",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 4,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 63,
      aposentadoria: 59,
      salMin: 3500000,
      saude: "mista",
      meses: 13,
      ir: 5,
      monarquia: false
    },
    escola: {
      jardim: "Jardim de infância (TK)",
      fund1: "Escola primária (SD)",
      fund2: "Escola média (SMP)",
      medio: "Ensino médio (SMA)",
      exame: "SNBT (UTBK)",
      pubGratis: false,
      pubAnual: 10000000,
      privAnual: 25000000,
      emprestimo: "empréstimo estudantil",
      bolsaEsporte: false,
      unis: [
        ["Universidade da Indonésia", 3, "pub"],
        ["Instituto de Tecnologia de Bandung", 3, "pub"],
        ["Universidade Gadjah Mada", 3, "pub"],
        ["Universidade Agrícola de Bogor (IPB)", 2, "pub"],
        ["Universidade Airlangga", 2, "pub"],
        ["Universidade Bina Nusantara", 2, "priv"],
        ["Universidade Trisakti", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia Nacional (Polri)",
      policiaFed: "Bareskrim (Polícia de Investigação Criminal)",
      exercito: "Exército Nacional da Indonésia (TNI)",
      concurso: "seleção do funcionalismo público (CPNS)",
      politica: ["Chefe de vila", "Deputado regional|Deputada regional", "Prefeito|Prefeita", "Deputado nacional|Deputada nacional", "Governador|Governadora", "Presidente da Indonésia"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Super League",
      liga2: "Championship",
      liga3: "Liga Nusantara",
      copa: "Copa da Indonésia (Piala Indonesia)",
      basquete: "IBL"
    },
    cultura: {
      feriado: "Lebaran (Eid al-Fitr)",
      comida: "nasi goreng",
      flavor: [
        "Enfrentou doze horas de estrada no mudik pra passar a Lebaran com a família.",
        "Pediu um mototáxi pelo aplicativo e chegou antes do carro que saiu na frente.",
        "Comeu nasi goreng de carrinho às onze da noite e foi a melhor refeição da semana.",
        "Caiu uma chuva tropical de vinte minutos e a rua virou rio.",
        "Ficou acordado até tarde vendo a seleção na final de badminton.",
        "Recebeu o THR e já sabia exatamente em que gastar."
      ]
    }
  },

  PH: {
    gent: ["filipino", "filipina"],
    cid: [["Makati", 1.65], ["Manila", 1.5], ["Quezon City", 1.35], ["Cebu", 1.1], ["Baguio", 0.95], ["Davao", 0.95], ["Iloilo", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 17,
      casarGay: false,
      gayCrime: false,
      aborto: "proibido",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 3,
      alistamento: null,
      armas: "restrito",
      divorcio: false,
      corrupcao: 67,
      aposentadoria: 60,
      salMin: 15000,
      saude: "mista",
      meses: 13,
      ir: 10,
      monarquia: false
    },
    escola: {
      jardim: "Kindergarten",
      fund1: "Elementary School (Grades 1–6)",
      fund2: "Junior High School (Grades 7–10)",
      medio: "Senior High School (Grades 11–12)",
      exame: "College Entrance Test (como o UPCAT)",
      pubGratis: true,
      pubAnual: 0,
      privAnual: 100000,
      emprestimo: "empréstimo estudantil (CHED)",
      bolsaEsporte: true,
      unis: [
        ["Universidade das Filipinas Diliman", 3, "pub"],
        ["Universidade Ateneo de Manila", 3, "priv"],
        ["Universidade De La Salle", 3, "priv"],
        ["Universidade de Santo Tomás", 2, "priv"],
        ["Universidade de San Carlos", 2, "priv"],
        ["Universidade do Extremo Oriente", 1, "priv"],
        ["Universidade Politécnica das Filipinas", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Nacional das Filipinas (PNP)",
      policiaFed: "NBI (Escritório Nacional de Investigação)",
      exercito: "Exército das Filipinas",
      concurso: "exame do Serviço Civil",
      politica: ["Capitão de barangay|Capitã de barangay", "Vereador|Vereadora", "Prefeito|Prefeita", "Governador|Governadora", "Senador|Senadora", "Presidente das Filipinas"],
      realeza: null
    },
    esporte: {
      principal: "basquete",
      liga1: "Philippines Football League",
      liga2: "Liga regional",
      liga3: "Liga regional",
      copa: "Copa Paulino Alcantara",
      basquete: "PBA"
    },
    cultura: {
      feriado: "Natal",
      comida: "adobo",
      flavor: [
        "As músicas de Natal começaram a tocar em setembro e ninguém achou estranho.",
        "Pegou um jeepney colorido e passou o dinheiro da passagem de mão em mão até o motorista.",
        "Cantou no videoke do vizinho até a meia-noite. A nota foi 98.",
        "Recebeu uma caixa balikbayan cheia de chocolate de um parente que mora fora.",
        "Um tufão passou e a vizinhança toda se juntou pra limpar a rua.",
        "Fez uma festa de aniversário com lechon e metade do barangay apareceu."
      ]
    }
  },

  VN: {
    gent: ["vietnamita", "vietnamita"],
    cid: [["Cidade de Ho Chi Minh", 1.55], ["Hanói", 1.5], ["Da Nang", 1.15], ["Haiphong", 1.0], ["Cần Thơ", 0.9], ["Huế", 0.85]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 4,
      alistamento: { idade: 18, anos: 2, sexo: "m" },
      armas: "proibido",
      divorcio: true,
      corrupcao: 60,
      aposentadoria: 61,
      salMin: 4500000,
      saude: "mista",
      meses: 13,
      ir: 5,
      monarquia: false
    },
    escola: {
      jardim: "Jardim de infância (Mầm non)",
      fund1: "Escola primária (Tiểu học)",
      fund2: "Escola média (Trung học cơ sở)",
      medio: "Ensino médio (Trung học phổ thông)",
      exame: "Exame Nacional de Conclusão do Ensino Médio",
      pubGratis: false,
      pubAnual: 15000000,
      privAnual: 40000000,
      emprestimo: "crédito estudantil do Banco de Políticas Sociais",
      bolsaEsporte: false,
      unis: [
        ["Universidade Nacional do Vietnã em Hanói", 3, "pub"],
        ["Universidade Nacional do Vietnã na Cidade de Ho Chi Minh", 3, "pub"],
        ["Universidade de Ciência e Tecnologia de Hanói", 3, "pub"],
        ["Universidade Nacional de Economia", 2, "pub"],
        ["Universidade Tôn Đức Thắng", 2, "pub"],
        ["Universidade RMIT Vietnã", 2, "priv"],
        ["Universidade FPT", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia do Povo (Công an)",
      policiaFed: "Ministério da Segurança Pública",
      exercito: "Exército Popular do Vietnã",
      concurso: "concurso do funcionalismo público",
      politica: ["Chefe de bairro", "Membro do Conselho Popular", "Presidente do Comitê Popular", "Deputado da Assembleia Nacional|Deputada da Assembleia Nacional", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "V.League 1",
      liga2: "V.League 2",
      liga3: "Segunda Divisão Nacional",
      copa: "Copa Nacional do Vietnã",
      basquete: "VBA"
    },
    cultura: {
      feriado: "Tết (Ano-Novo Lunar)",
      comida: "phở",
      flavor: [
        "Atravessou a rua no meio de mil motos sem parar de andar. Deu certo.",
        "Tomou café com leite condensado num banquinho de plástico na calçada.",
        "Levou a família inteira numa moto só pra ir ao mercado.",
        "Ganhou envelopes vermelhos no Tết e gastou tudo em fogos de artifício.",
        "Comeu phở no café da manhã, no almoço e cogitou no jantar.",
        "A seleção venceu e a cidade inteira saiu buzinando com bandeiras na rua."
      ]
    }
  },

  TH: {
    gent: ["tailandês", "tailandesa"],
    cid: [["Bangcoc", 1.6], ["Phuket", 1.4], ["Pattaya", 1.2], ["Chiang Mai", 1.05], ["Hat Yai", 0.9], ["Khon Kaen", 0.85]],
    leis: {
      beber: 20,
      alcool: true,
      dirigir: 18,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: true,
      cassino: false,
      maconha: "descriminalizada",
      drogas: 4,
      alistamento: { idade: 21, anos: 2, sexo: "m" },
      armas: "restrito",
      divorcio: true,
      corrupcao: 66,
      aposentadoria: 60,
      salMin: 10000,
      saude: "universal",
      meses: 12,
      ir: 5,
      monarquia: true
    },
    escola: {
      jardim: "Educação infantil (Anuban)",
      fund1: "Escola primária (Prathom)",
      fund2: "Ensino secundário inicial (Mathayom 1–3)",
      medio: "Ensino secundário superior (Mathayom 4–6)",
      exame: "TCAS",
      pubGratis: false,
      pubAnual: 40000,
      privAnual: 100000,
      emprestimo: "Fundo de Empréstimo Estudantil",
      bolsaEsporte: false,
      unis: [
        ["Universidade Chulalongkorn", 3, "pub"],
        ["Universidade Mahidol", 3, "pub"],
        ["Universidade Thammasat", 2, "pub"],
        ["Universidade Kasetsart", 2, "pub"],
        ["Universidade de Chiang Mai", 2, "pub"],
        ["Universidade da Assunção", 2, "priv"],
        ["Universidade Ramkhamhaeng", 1, "pub"],
        ["Universidade de Bangcoc", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia Real Tailandesa",
      policiaFed: "Departamento de Investigação Especial (DSI)",
      exercito: "Exército Real Tailandês",
      concurso: "exame do funcionalismo público",
      politica: ["Chefe de vila", "Vereador|Vereadora", "Prefeito|Prefeita", "Deputado|Deputada", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Dinastia Chakri", et: ["Membro distante da família real", "Príncipe|Princesa", "Príncipe herdeiro|Princesa herdeira", "Rei|Rainha"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Thai League 1",
      liga2: "Thai League 2",
      liga3: "Thai League 3",
      copa: "Copa FA da Tailândia",
      basquete: "Liga Tailandesa de Basquete"
    },
    cultura: {
      feriado: "Songkran",
      comida: "pad thai",
      flavor: [
        "Saiu de casa no Songkran e levou baldada d'água antes de chegar à esquina.",
        "Comeu manga com arroz doce na barraca de rua e pediu a segunda porção.",
        "Pegou um tuk-tuk e o motorista fez a curva como se fosse corrida.",
        "Soltou um krathong no rio e fez um pedido em silêncio.",
        "Treinou muay thai de manhã e não conseguiu subir a escada à tarde.",
        "Pediu o prato pouco apimentado e mesmo assim chorou."
      ]
    }
  },

  SG: {
    gent: ["singapurense", "singapurense"],
    cid: [["Marina Bay", 1.7], ["Orchard", 1.6], ["Bishan", 1.15], ["Tampines", 1.0], ["Punggol", 0.95], ["Jurong", 0.95], ["Woodlands", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 18,
      casarGay: false,
      gayCrime: false,
      aborto: "legal",
      penaMorte: true,
      cassino: true,
      maconha: "proibida",
      drogas: 4,
      alistamento: { idade: 18, anos: 2, sexo: "m" },
      armas: "proibido",
      divorcio: true,
      corrupcao: 16,
      aposentadoria: 64,
      salMin: 2000,
      saude: "mista",
      meses: 13,
      ir: 5,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (Kindergarten)",
      fund1: "Escola primária (Primary 1–6)",
      fund2: "Escola secundária (Secondary 1–4)",
      medio: "Junior College ou Politécnico",
      exame: "GCE A-Level",
      pubGratis: false,
      pubAnual: 8250,
      privAnual: 25000,
      emprestimo: "empréstimo de mensalidade do MOE",
      bolsaEsporte: false,
      unis: [
        ["Universidade Nacional de Singapura", 3, "pub"],
        ["Universidade Tecnológica de Nanyang", 3, "pub"],
        ["Universidade de Gestão de Singapura", 2, "pub"],
        ["Universidade de Tecnologia e Design de Singapura", 2, "pub"],
        ["Instituto de Tecnologia de Singapura", 1, "pub"],
        ["Universidade de Ciências Sociais de Singapura", 1, "pub"],
        ["Instituto de Gestão de Singapura (SIM)", 1, "priv"]
      ]
    },
    trab: {
      policia: "Força Policial de Singapura",
      policiaFed: "Departamento de Investigação Criminal (CID)",
      exercito: "Exército de Singapura",
      concurso: "processo seletivo do serviço público",
      politica: ["Líder comunitário|Líder comunitária", "Deputado|Deputada", "Ministro de Estado|Ministra de Estado", "Ministro|Ministra", "Vice-primeiro-ministro|Vice-primeira-ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: null
    },
    esporte: {
      principal: "futebol",
      liga1: "Singapore Premier League",
      liga2: "Liga regional",
      liga3: "Liga regional",
      copa: "Singapore Cup",
      basquete: "Liga nacional de basquete"
    },
    cultura: {
      feriado: "Dia Nacional",
      comida: "arroz de frango hainanês",
      flavor: [
        "Guardou a mesa no hawker centre com um pacotinho de lenço. Ninguém mexeu.",
        "Pegou o metrô às oito e ele chegou exatamente às oito.",
        "Esqueceu o guarda-chuva e a chuva da tarde caiu em cinco minutos de pontualidade.",
        "Jogou o chiclete fora antes de entrar no país. Melhor não arriscar.",
        "Encarou uma fila de quarenta minutos por um prato que custava cinco dólares.",
        "Viu os fogos do Dia Nacional da varanda do vizinho, de graça."
      ]
    }
  },

  MY: {
    gent: ["malaio", "malaia"],
    cid: [["Kuala Lumpur", 1.6], ["George Town", 1.3], ["Johor Bahru", 1.15], ["Kota Kinabalu", 1.0], ["Kuching", 0.95], ["Malaca", 0.95], ["Ipoh", 0.9]],
    leis: {
      beber: 21,
      alcool: true,
      dirigir: 17,
      casarGay: false,
      gayCrime: true,
      aborto: "restrito",
      penaMorte: true,
      cassino: true,
      maconha: "proibida",
      drogas: 4,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 50,
      aposentadoria: 60,
      salMin: 1700,
      saude: "mista",
      meses: 12,
      ir: 8,
      monarquia: true
    },
    escola: {
      jardim: "Pré-escola (Tadika)",
      fund1: "Escola primária (Sekolah Rendah)",
      fund2: "Ensino secundário inicial (Tingkatan 1–3)",
      medio: "Ensino secundário superior (Tingkatan 4–5)",
      exame: "SPM e STPM",
      pubGratis: false,
      pubAnual: 3000,
      privAnual: 30000,
      emprestimo: "empréstimo do PTPTN",
      bolsaEsporte: false,
      unis: [
        ["Universidade da Malaia", 3, "pub"],
        ["Universidade Nacional da Malásia (UKM)", 2, "pub"],
        ["Universidade Putra Malaysia", 2, "pub"],
        ["Universidade Sains Malaysia", 2, "pub"],
        ["Universidade de Tecnologia da Malásia", 2, "pub"],
        ["Universidade Taylor's", 2, "priv"],
        ["Universidade Monash Malásia", 2, "priv"],
        ["Universidade Tunku Abdul Rahman", 1, "priv"]
      ]
    },
    trab: {
      policia: "Polícia Real da Malásia (PDRM)",
      policiaFed: "Departamento de Investigação Criminal da PDRM",
      exercito: "Exército Malaio",
      concurso: "processo seletivo da Comissão do Serviço Público",
      politica: ["Conselheiro municipal|Conselheira municipal", "Deputado estadual|Deputada estadual", "Ministro-chefe|Ministra-chefe", "Deputado federal|Deputada federal", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casas reais malaias", et: ["Membro da família real (Tunku)", "Príncipe herdeiro|Princesa herdeira", "Sultão|Sultana", "Rei (Yang di-Pertuan Agong)|Rainha (Raja Permaisuri Agong)"] }
    },
    esporte: {
      principal: "futebol",
      liga1: "Super Liga Malaia",
      liga2: "Liga A1 Semiprofissional",
      liga3: "Liga A2 Amadora",
      copa: "Copa FA da Malásia",
      basquete: "Liga nacional de basquete"
    },
    cultura: {
      feriado: "Hari Raya Aidilfitri",
      comida: "nasi lemak",
      flavor: [
        "Fez open house no Hari Raya e recebeu vizinhos de todas as religiões.",
        "Comeu nasi lemak no café da manhã enrolado na folha de bananeira.",
        "Ficou no mamak até as três da manhã vendo futebol com teh tarik.",
        "Viu o pai torcer pelo badminton como se fosse final de Copa.",
        "Pegou trânsito de duas horas pra voltar à cidade natal no feriado.",
        "Achou durian na feira e o carro ficou cheirando por uma semana."
      ]
    }
  },

  PK: {
    gent: ["paquistanês", "paquistanesa"],
    cid: [["Islamabad", 1.5], ["Karachi", 1.3], ["Lahore", 1.25], ["Rawalpindi", 1.1], ["Faisalabad", 0.95], ["Peshawar", 0.9], ["Multan", 0.85]],
    leis: {
      beber: 0,
      alcool: false,
      dirigir: 18,
      casarGay: false,
      gayCrime: true,
      aborto: "restrito",
      penaMorte: true,
      cassino: false,
      maconha: "proibida",
      drogas: 4,
      alistamento: null,
      armas: "comum",
      divorcio: true,
      corrupcao: 73,
      aposentadoria: 60,
      salMin: 37000,
      saude: "mista",
      meses: 12,
      ir: 5,
      monarquia: false
    },
    escola: {
      jardim: "Pré-escola (Kachi)",
      fund1: "Escola primária (Classes 1–5)",
      fund2: "Escola média (Classes 6–8)",
      medio: "Matric e Intermediate (Classes 9–12)",
      exame: "MDCAT, ECAT e testes de admissão",
      pubGratis: false,
      pubAnual: 100000,
      privAnual: 600000,
      emprestimo: "empréstimo estudantil do HEC",
      bolsaEsporte: false,
      unis: [
        ["Universidade Quaid-i-Azam", 3, "pub"],
        ["Universidade Nacional de Ciências e Tecnologia (NUST)", 3, "pub"],
        ["Universidade de Ciências da Gestão de Lahore (LUMS)", 3, "priv"],
        ["Universidade Aga Khan", 3, "priv"],
        ["Universidade do Punjab", 2, "pub"],
        ["Instituto de Administração de Empresas (IBA Karachi)", 2, "pub"],
        ["Universidade de Karachi", 2, "pub"],
        ["Universidade de Peshawar", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Provincial",
      policiaFed: "FIA (Agência Federal de Investigação)",
      exercito: "Exército do Paquistão",
      concurso: "exame CSS do serviço público",
      politica: ["Conselheiro distrital|Conselheira distrital", "Prefeito|Prefeita", "Deputado provincial|Deputada provincial", "Ministro-chefe|Ministra-chefe", "Deputado da Assembleia Nacional|Deputada da Assembleia Nacional", "Primeiro-ministro|Primeira-ministra"],
      realeza: null
    },
    esporte: {
      principal: "criquete",
      liga1: "Pakistan Premier League",
      liga2: "Liga regional",
      liga3: "Liga regional",
      copa: "PFF National Challenge Cup",
      basquete: "Liga nacional de basquete"
    },
    cultura: {
      feriado: "Eid al-Fitr",
      comida: "karahi",
      flavor: [
        "Jogou críquete na rua com um taco remendado e uma bola de fita.",
        "Ganhou eidi dos tios no Eid e contou as notas três vezes.",
        "Pegou um ônibus todo decorado com pinturas e luzes coloridas.",
        "Tomou chai com os amigos na barraca até a conversa virar madrugada.",
        "Foi a um casamento com mil convidados e só conhecia dez.",
        "A luz caiu no meio do jogo e a vizinhança inteira suspirou junto."
      ]
    }
  },

  AU: {
    gent: ["australiano", "australiana"],
    cid: [["Sydney", 1.65], ["Melbourne", 1.45], ["Canberra", 1.35], ["Brisbane", 1.3], ["Perth", 1.25], ["Adelaide", 1.1], ["Hobart", 1.0]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 17,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 23,
      aposentadoria: 67,
      salMin: 4100,
      saude: "universal",
      meses: 12,
      ir: 20,
      monarquia: true
    },
    escola: {
      jardim: "Pré-escola (Kindy)",
      fund1: "Primary School",
      fund2: "Secondary School (Years 7–10)",
      medio: "Senior Secondary (Years 11–12)",
      exame: "ATAR",
      pubGratis: false,
      pubAnual: 9000,
      privAnual: 40000,
      emprestimo: "HECS-HELP",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Melbourne", 3, "pub"],
        ["Universidade de Sydney", 3, "pub"],
        ["Universidade Nacional Australiana", 3, "pub"],
        ["Universidade de Nova Gales do Sul", 3, "pub"],
        ["Universidade de Queensland", 2, "pub"],
        ["Universidade Monash", 2, "pub"],
        ["Universidade Bond", 2, "priv"],
        ["Universidade Charles Sturt", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia Estadual",
      policiaFed: "Polícia Federal Australiana (AFP)",
      exercito: "Exército Australiano",
      concurso: "processo seletivo do Serviço Público Australiano",
      politica: ["Vereador|Vereadora", "Prefeito|Prefeita", "Deputado estadual|Deputada estadual", "Premiê estadual", "Deputado federal|Deputada federal", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casa de Windsor", et: ["Membro distante da família real", "Duque|Duquesa", "Príncipe herdeiro|Princesa herdeira", "Rei|Rainha"] }
    },
    esporte: {
      principal: "criquete",
      liga1: "A-League",
      liga2: "National Premier Leagues",
      liga3: "Ligas estaduais",
      copa: "Australia Cup",
      basquete: "NBL"
    },
    cultura: {
      feriado: "Dia da Austrália",
      comida: "torta de carne",
      flavor: [
        "Passou o Natal na praia com camarão na churrasqueira e protetor solar no nariz.",
        "Encontrou uma aranha do tamanho da mão no banheiro e decidiu tomar banho depois.",
        "Comprou um sausage sizzle na porta da eleição só pelo cheiro.",
        "Um canguru atravessou a estrada e você freou com o coração na boca.",
        "Pegou onda às seis da manhã e chegou ao trabalho com sal no cabelo.",
        "Passou vegemite demais na torrada e aprendeu a lição."
      ]
    }
  },

  NZ: {
    gent: ["neozelandês", "neozelandesa"],
    cid: [["Auckland", 1.5], ["Queenstown", 1.45], ["Wellington", 1.35], ["Christchurch", 1.1], ["Tauranga", 1.1], ["Hamilton", 1.0], ["Dunedin", 0.9]],
    leis: {
      beber: 18,
      alcool: true,
      dirigir: 17,
      casarGay: true,
      gayCrime: false,
      aborto: "legal",
      penaMorte: false,
      cassino: true,
      maconha: "proibida",
      drogas: 2,
      alistamento: null,
      armas: "restrito",
      divorcio: true,
      corrupcao: 17,
      aposentadoria: 65,
      salMin: 4150,
      saude: "universal",
      meses: 12,
      ir: 20,
      monarquia: true
    },
    escola: {
      jardim: "Kindy (Kindergarten)",
      fund1: "Primary School",
      fund2: "Intermediate School",
      medio: "Secondary School (College)",
      exame: "NCEA",
      pubGratis: false,
      pubAnual: 8000,
      privAnual: 20000,
      emprestimo: "empréstimo estudantil do StudyLink",
      bolsaEsporte: false,
      unis: [
        ["Universidade de Auckland", 3, "pub"],
        ["Universidade de Otago", 3, "pub"],
        ["Universidade Victoria de Wellington", 2, "pub"],
        ["Universidade de Canterbury", 2, "pub"],
        ["Universidade de Waikato", 2, "pub"],
        ["Universidade Massey", 1, "pub"],
        ["Universidade de Tecnologia de Auckland", 1, "pub"],
        ["Universidade Lincoln", 1, "pub"]
      ]
    },
    trab: {
      policia: "Polícia da Nova Zelândia",
      policiaFed: "Departamento de Investigação Criminal (CIB)",
      exercito: "Exército da Nova Zelândia",
      concurso: "processo seletivo do serviço público",
      politica: ["Conselheiro comunitário|Conselheira comunitária", "Vereador|Vereadora", "Prefeito|Prefeita", "Deputado|Deputada", "Ministro|Ministra", "Primeiro-ministro|Primeira-ministra"],
      realeza: { casa: "Casa de Windsor", et: ["Membro distante da família real", "Duque|Duquesa", "Príncipe herdeiro|Princesa herdeira", "Rei|Rainha"] }
    },
    esporte: {
      principal: "rugbi",
      liga1: "National League",
      liga2: "Ligas regionais (Northern League)",
      liga3: "Liga regional",
      copa: "Chatham Cup",
      basquete: "NBL"
    },
    cultura: {
      feriado: "Matariki (Ano-Novo maori)",
      comida: "pavlova",
      flavor: [
        "Viu os All Blacks fazerem o haka e ficou arrepiado na frente da TV.",
        "Saiu de casa com sol, pegou chuva, vento e sol de novo antes do almoço.",
        "Andou descalço no supermercado e ninguém nem olhou.",
        "Viu mais ovelhas do que pessoas na estrada até a casa dos avós.",
        "Fez trilha num fim de semana e voltou com lama até os joelhos.",
        "Comprou fish and chips na praia e dividiu com uma gaivota atrevida."
      ]
    }
  },
});

