# Corre: o que mudou

## Arquivos

| Arquivo | O que tem |
|---|---|
| `index.html` | Marcação e estilos (paleta própria) |
| `js/eventos.js` | As cartas de evento |
| `js/paises.js` | Base de países: moedas, câmbio, nomes por cultura |
| `js/perfis.js` | Os 50 países jogáveis: leis, escola, universidades, polícia, política, realeza, ligas e cotidiano |
| `js/jogo.js` | Motor e interface |
| `js/sistemas.js` | Fama, golpes, fuga do flagrante, extracurriculares |
| `js/mundo.js` | Liga cada país ao jogo: leis, escola, universidade, carreiras, esportes, viagens |

É um site estático, sem build. O `vercel.json` continua igual.

## 50 países, cada um com regras próprias
- **Escolha no nascimento.** O jogador escolhe país e cidade, agrupados por região, ou sorteia. Não existe país padrão: a primeira vida sorteia um dos 50, e depois o jogo lembra o último escolhido.
- **Os 50 países:** EUA, Canadá, México, Brasil, Argentina, Colômbia, Chile, Peru, Reino Unido, Irlanda, França, Alemanha, Itália, Espanha, Portugal, Países Baixos, Bélgica, Suíça, Áustria, Suécia, Noruega, Dinamarca, Finlândia, Polônia, Grécia, Rússia, Ucrânia, Turquia, Israel, Arábia Saudita, Emirados, Irã, Egito, Nigéria, África do Sul, Quênia, Marrocos, China, Japão, Coreia do Sul, Índia, Indonésia, Filipinas, Vietnã, Tailândia, Singapura, Malásia, Paquistão, Austrália e Nova Zelândia.
- **Leis que mudam o jogo:**
  - Idade para beber e álcool proibido.
  - Maconha legal, descriminalizada ou proibida, e a dureza da lei de drogas.
  - Cassino legal ou clandestino.
  - Idade da carteira de motorista.
  - Casamento entre pessoas do mesmo sexo.
  - Aborto: a opção só aparece onde é legal.
  - Divórcio: onde não existe, só anulação.
  - Pena de morte, com corredor da morte e recurso.
  - Serviço militar obrigatório: servir, pedir dispensa ou fugir.
  - Corrupção: subornar policial ou juiz.
  - Idade de aposentadoria e piso da aposentadoria.
  - Saúde pública ou privada, que muda o custo do tratamento.
  - 13º e 14º salário.
  - Alíquota do imposto de renda.
- **Escola.** As séries têm o nome local (Elementary/Middle/High School, École/Collège/Lycée, Grundschule/Gymnasium...).
- **Universidade:**
  - Exame de entrada local (SAT, A-levels, Abitur, Gaokao, Suneung, ENEM...).
  - Universidades reais do país, com nota de corte por prestígio.
  - Pública gratuita ou paga, privada, financiamento estudantil local, ensino a distância e bolsas.
- **Carreiras.**
  - Polícia, polícia federal e forças armadas com nomes locais.
  - Política com a escada de cargos do país (de vereador a presidente, primeiro-ministro, chanceler...).
  - Realeza só em monarquias, com títulos e casa real do país.
  - Concurso público só pra cidadãos ou residentes.
- **Esporte.** Ligas de futebol, basquete e vôlei do próprio país: 1ª, 2ª e 3ª divisão, copa nacional e torneio continental.
- **Cotidiano.**
  - Moeda local em todo o jogo.
  - Frases do dia a dia de cada país.
  - Viagens com destinos do próprio país e de outros.
  - Fora do Brasil, termos brasileiros (Pix, ENEM, SUS, INSS, Serasa, Mega-Sena, PM...) viram os equivalentes locais. Eventos de cultura brasileira só acontecem no Brasil.

## Sistemas novos
- **A fama puxa seguidores.** Cada nível de fama tem um público natural nas redes. Quem é famoso ganha seguidores todo ano sem postar, e cada salto de fama traz um salto de seguidores.
- **Atividades extracurriculares com carreira dentro da escola.** São 17 atividades: futebol, basquete, vôlei, hóquei, luta, atletismo, natação, teatro, banda, dança, olimpíada de matemática, robótica, xadrez, debate, grêmio, jornal e e-sports.
  - **Progressão.** Os cargos sobem com talento e dedicação, até o topo: capitão, presidente do grêmio, editor-chefe, protagonista...
  - **Competições.** Há campeonatos regionais, estaduais e nacionais, que rendem troféus.
  - **Bolsa.** O histórico vira bolsa de universidade (esportiva, artística, de liderança ou acadêmica, de 50% ou 100%).
  - **Carreira.** Também dá bônus nas carreiras ligadas a cada atividade.
  - **Draft.** O draft esportivo só chama titulares, e capitão começa mais alto.
- **Golpes de luta aprendidos.**
  - São 9 artes marciais, incluindo krav maga e kung fu, com 6 ou 7 técnicas cada.
  - Cada técnica tem dano, precisão e efeito: nocaute, finalização ou letal.
  - As técnicas são aprendidas no treino, não vêm só com a faixa.
  - Elas aparecem nas brigas e na nova interação "Aplicar um golpe" com qualquer pessoa, e podem ferir ou matar.
  - O perfil mostra os golpes que você domina.
- **Fuga do flagrante.** Ao ser pego cometendo um crime (furto, roubo, briga, homicídio...), você escolhe:
  - Correr: depende da saúde e da idade.
  - Se esconder: depende da inteligência e da sorte.
  - Subornar: depende da corrupção do país.
  - Enfrentar o policial com seu melhor golpe: onde há armas, pode levar um tiro.
  - Se render: pena menor.

  Crimes graves viram vida de foragido.

## Bugs corrigidos nesta versão
- O símbolo do peso argentino (AR$) contém "R$". Por isso os valores eram convertidos de novo em cascata e apareciam como "AAR$ 149 bi".
- A fuga do país mandava sempre pra Paraguai, Bolívia ou Argentina. Agora vai pra um país da mesma região.
- O suborno do juiz aparecia duas vezes no julgamento.
- Nomes de cargos de polícia sem flexão de gênero.

As versões anteriores já tinham corrigido:
- A barba que quebrava a tela.
- O tamanho dos retratos da tela inicial.
- O objetivo da fase escrito todo em minúsculas.
- A concordância de "1 anos".

## Sobre os dados
Leis, salários mínimos, mensalidades e universidades vêm de pesquisa até 2026. Números que mudam todo ano, como o salário mínimo da Argentina, o do Irã e as anuidades, são aproximados e ficam em `js/perfis.js`, em moeda local, fáceis de ajustar.

Duas escolhas de jogabilidade:
- Canadá, Austrália e Nova Zelândia não têm realeza jogável, porque o trono é britânico.
- No Paquistão, o álcool é tratado como proibido.

## Testes
- **Robô de motor.** Simulou centenas de vidas nos 50 países, com emigração e todas as telas abertas. Em cada vida ele conferiu:
  - erros;
  - textos com R$, ENEM, `undefined`, `NaN` ou marcadores não preenchidos;
  - atributos fora do intervalo.
- **Robô de interface.** Jogou pela interface real com cartas, menus, atividades, morte e nova vida.
- **Testes manuais.** Os cartões de flagrante e de golpe, a bolsa por extracurricular e a pena de morte foram conferidos à mão.
