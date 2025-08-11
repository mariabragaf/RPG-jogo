// Nível - 1
let nome = "Estelar";
let classe = "Heroína Cósmica";
let nivel = 20;
let vida = 100;
let ouro = 300;
let xp = 15;

// constantes fixas de equipamento
const NOME_ARMA = "Punho Estelar";
const DANO_BASE = 80;
const NOME_ARMADURA = "Armadura da Chama Estelar";
const DEFESA_BASE = 40;

// Ações iniciais que modificam os atributos
xp += 50;
ouro -= 30;
vida += 40;

// Cálculo dde ataque e defesa baseados em nível e equipamento
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);

// Verificação de status para decisão de combate
vidaSuficiente = vida > 70;
ataqueForte = ataqueTotal > 60;
nivelAvancado = nivel >= 10;
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

//Introdução narrativa com interpolação de variáveis
console.log("💫 O Manto da Estrela ");
console.log("");
console.log(`No Limiar o Cosmo antigo, onde estrelas morrem e renascem, nasceu uma lenda.`);
console.log(`Das cinzas de uma era esquecida, forjou-se uma guerreira destinada a mudar o curso das constelações.`);
console.log(`Essa estrelinha Rosa com poderes mágicos se chama ${nome} e carrega uma missão poderosa que mudará o seu destino!`)
console.log(`${nome}, a ${classe}, sobrevoa as galáxias sombrias do Reino de Tamaran.`);
console.log(`Carrega consigo, sua Pulseira de Análise Solar, que detecta Sinais cósmicos contra Vermes Eternos.`);
console.log(`Seu nivel está no ${nivel} e seu ataque total em ${ataqueTotal}, ela é muito temida pelos Guardas do Caos.`);
console.log(`Suas defesas, impulsionadas pela ${NOME_ARMADURA}, atingem ${DEFESA_BASE} de resistência.`);
console.log(`Após intensos treinamentos constantes, ${nome} acumulou ${xp} de XP e carrega ${ouro} moedas, pronta para negociações nas Rochas Rosas.`);
console.log(`Restaurada com o poder de seu mestre superior, adquiriu ${vida} pontos de vida, ${nome} é considerada a maior ${classe} das galáxias.`);
console.log(`Vida Suficiente? ${vidaSuficiente}, Ataque Forte? ${ataqueForte}, Nível Avançado? ${nivelAvancado}.`);
console.log(`Pode Enfrentar o Guardião? ${podeEnfrentarGuardiao} - a última guerra está à vista, e o destino se escreve nas estrelas! 🦸🏻‍♀️🩷✨`);

console.log("");

//Nível - 2
let nomePersonagem = "Estelar";
let classePersonagem = "Heroína Cósmica";
let vidaAtual = 100;
let vidaMaxima = 100;
let manaAtual = 50;
let manaMaxima = 50;
let nivelPersonagem = 20;
let experiencia = 15;
let moedasCosmicas = 270; //tinha 300, gastou no nível anterior

// Novos atributos introduzidos nesse nível
let forca = 30;
let defesa = 18;
let agilidade = 20;
let combatesVencidos = 0;

let localAtual = "Reino de Tamaran";
let missaoAtual = "Enfrentar o Guardião Artemin, dos portais celestes";

// Prólogo
console.log("📜 PRÓLOGO: Um brilho no horizonte");
console.log("");

console.log(`Após atravessar os portais estelares do Reino de Tamaran, Estelar sente seu destino se estreitar.`);
console.log(`Sua missão é clara: derrotar o temido Guardião Artemin, defensor dos Portais Celestiais, e restaurar a energia do Núcleo Cósmico.`);

// Condições baseadas na classe e no nível
if (classePersonagem === "Heroína Cósmica") {
    console.log("🔅 Seu corpo emite partículas solares enquanto o cosmo responde ao seu chamado.");
}

if (nivelPersonagem < 25) {
    console.log("⚠️ um espírito ancestral surge e sussurra: 'Estelar...ainda não és completa para o desafio final.'");
    console.log("Mas a coragem dela pulsa mais alto que qualquer aviso.");
}

console.log("");

// ATO I - O Despertar nas Rochas Rosas
console.log("ATO I: 🪨💗 O Despertar nas Rochas Rosas");
console.log("");
console.log("Nas Rochas Rosas, ponto de negociações e refúgio de viajantes, Estelar encontra um artefato flutuando diante dela.");
console.log("Um dispositivo antigo... mas funcional.");

//Checagem de moedas para liberar bônus (condição de compra)
if (moedasCosmicas >= 200) {
   console.log("🪙 Usando suas moedas cósmicas, Estelar ativa o artefato e desbloqueia a Armadura Solar!");
   defesa += 5;
   forca += 3;
   moedasCosmicas -= 80;
   console.log("🛡️ Defesa " + defesa + " | Força: " + forca + " | Moedas restantes: " + moedasCosmicas);
}

console.log("Ao longe, um mercador intergaláctico surge oferecendo upgrades raros...");
console.log("");

// ATO II - Escolha de Rota
console.log("🧭 ATO II: Itercâmbio Intergaláctico");
console.log("");

console.log("Você pode comprar um Chip de Energia Solar por 100 moedas... mas o tempo está se esgotando.");

// Alternativa de compra ou benefício indireto
if (moedasCosmicas >= 100) {
    console.log("🧠 Estelar negocia com precisão e adquire o Chip Solar, ampliando seus poderes.");
    forca += 10;
    manaAtual += 10;
    moedasCosmicas -= 100;
    console.log("🔥 Força agora:" + forca + " | Mana:" + manaAtual + " | Moedas:" + moedasCosmicas);
} else {
    console.log("💔 Sem recursos suficientes, Estelar se afasta e reflete sua jornada.");
    agilidade += 5; // Bônus compensatório caso não consiga comprar
    console.log("💨 Agilidade aumentada para:" + agilidade);
}

console.log("");

// ATO III - Confronto com o Guardião Artemin
console.log("⚔️ ATO III: O Confronto Estelar");
console.log("");

let poderInimigo = 40;

console.log("O Guardião Artemin. senhor dos Portais Celestiais, desce em meio a um vótice de luz e gravidade invertida.");
console.log("Sua presença ameaça romper as fronteiras dimensionais entre as galáxias.");

// Confronto com lógica condicional baseada em status
if (vidaAtual <= 30) {
    // Ataque desesperado com dano alto
    console.log("🔴 Estelar está ferida, mas, com coragem, lança uma última investida poderosa!");
    poderInimigo -= (forca * 2);
} else if (manaAtual >= 30 && classePersonagem === "Heroína Cósmica") {
    // Golpe especial consome mana
  console.log("🌟 Usando a onda Supernova, Estelar canaliza o poder das estrelas, derrubando Artemin e todo o seu poder!");
  poderInimigo -= (forca + 25);
  manaAtual -= 30;
} else if (agilidade >= 25) {
    // Ataque baseado em agilidade
    console.log("⚡ Com agilidade suprema, ela executa um ataque certeiro nos pontos vulneráveis do inimigo!");
    poderInimigo -= forca;
} else {
    // Defesa baseado em agilidade
    console.log("🪄 Estelar opta por uma defesa firme, preparando um contra-ataque calculado.");
    poderInimigo -= (forca / 2);
    vidaAtual += 15; //pequena recuperação estratégica
}

console.log("👹 Poder restante do Guardião Artemin:" + poderInimigo);
console.log("");

// EPÍLOGO - As Constelações Mudam
console.log("🌌EPÍLOGO: Mudanças na Galáxia");
console.log("");

if (poderInimigo <=0) {
    console.log("🏆VITÓRIA ÉPICA!!!" + nomePersonagem + " cresce entre as estrelas.");
    experiencia += 100;
    combatesVencidos++;
    console.log("✨ Experiência: " + experiencia);
    console.log("🪐 Combates Vencidos: " + combatesVencidos);
    console.log("Estelar sente que esse é apenas o começo do novo ciclo estelar...🤩");
} else {
    console.log("⚠️ A vitória escapou por pouco. Artemin e seus guardas  do caos recuam, e Estelar sobrevive para lutar outro dia.");
    console.log("Os Portais Celestiais seguem em risco, mas a esperança ainda brilha");
}

console.log("");
console.log("🚀FIM DO NÍVEL 2 - O próximo capítulo será escrito entre cometas e constelações!");

// nível 3

let personagem = "Estelar";
let arquetipo = "Heroína Cósmica";
let grau = 25;
let hpAtual = 120;
let hpMaxima =  120;
let progresso = 200;
let dinheiro = 150; 

// arrays usados para simular inventário, aliados e inimigos

let inventario = ["Pó Estelar" , "Centro Lunar" , "Capuz de Estrelas"];
let aliados = ["Oráculo Celeste", "Cavaleiro de Titânio", "Feiticeira Estelar"];
let inimigos = ["Spectro das Sombras", "Golem de Estrela", "Quimera Sinática"];
let salas = ["Câmara dos Ecos", "Corredor das Iterações", "Sala do Loop Infinito"];
let tesouros = [];

console.log("");

console.log(`🏰 Estelar atravessa os portões do lendário Castelo Mágico.`);
console.log(`Inventário inicial contém ${inventario.length} artefatos mágicos`);
console.log("");

//CAPÍTULO 1 - O INVENTÁRIO REBELDE
console.log("🎒 Capítulo I: O Inventário Rebelde");
console.log("");

console.log(`Itens atuais: ${inventario.join(",")}`);
// Manipulação de array: push e pop no inventário
inventario.push("Elixir de Recursão"); // Adiciona item ao inventário
console.log("Você obteve um novo item: 🆕 Elixir de Recursão!");
console.log(`Inventário agora: ${inventario.join(",")}`);
let descarte = inventario.pop(); // Remove o último item
console.log(`Uma brisa cósmica arranca: ${descarte} foi perdido no espaço.`);
console.log(`Itens restantes: ${inventario.length}`);
console.log("");

//CAPÍTULO II - AS SALAS CODIFICADAS
console.log("🔐 Capítulo II: As Salas Codificadas");
console.log("");

// Estrutura de repetição para percorrer todas as salas mágicas
for (let i = 0; i < salas.length; i++) {
    console.log(`~ Porta ${i+1}: ${salas[i]}`);
    // Se for a segunda sala ( Índice 1), ativa recompensas
    if (i === 1) {
        console.log("🗣️ Ecos antigos sussurram segredos da compilação do universo: XP +30")
        progresso += 30; // Adiciona Experiência
        console.log("🧶 Linhas de código formam um caminho de cristais do universo: Tesouro ganho!");
        tesouros.push("Cristal de Loop"); // Adiciona item ao Array de tesouros
    } else {
        // Qualquer outra sala ativa penalidade de vida
        console.log("🌀 Você sente que está preso em um ciclo eterno...Vida: 15");
        hpAtual -= 15; // Reduz a vida atual
    }
}

console.log("");

//CAPÍTULO 3 - ALIANÇA ESTELAR
console.log("Capítulo III: 💍 Aliança Estelar");
console.log("");
// Iteração com índice para aplicar bônus dos aliados
for (const [i, ali] of aliados.entries()) {
    console.log(`👾 Aliado convocado: ${ali}`);
    if (i === 0) {
        console.log(`${ali} prolonga a vida cósmica de Estelar! 💓 Vida Máxima: +20`);
        hpMaxima += 20;
    } else if (i === 1) {
        console.log(`${ali} increase o poder dourado! 🪙 Ouro: +40`);
        dinheiro += 40;
    } else {
        console.log(`${ali} fortalece a mente de batalha! 🧠 Experiência +50`);
        progresso += 50;
    }
}

console.log("");

//CAPÍTULO 4 - CONFRONTO DOS INIMIGOS ETERNOS
console.log("☄️ Capítulo IV: Confronto dos Inimigos Eternos");
console.log("");
let danos = [];

// Inimigos com efeitos diferentes dependendo do nome
for (let i = 0; i < inimigos.length; i++) {
    let inimigo = inimigos[i];
    let golpe = Math.floor(Math.random() * 20) + 20; // Dano aleatório entre 20 e 39

    console.log(`🗡️ Estelar ataca ${inimigo} causando ${golpe} de dano.`);
    danos.push(golpe);
 // Acumula dano causado
    if (inimigo === "Spectro das Sombras") {
        console.log("🕸️ O Spectro se desfaz em partículas - você ganha o Éter Sombrio!");
        tesouros.push("💎 Fragmento de Sombra!");
    } else if (inimigo === "Golem de Estrela") {
        hpAtual -= 20;
        console.log("🪨 O Golem contra-ataca! Vida: -20");
    } else if (inimigo === "Quimera Sinática") {
        progresso += 70;
        console.log("🙌 A Quimera cede - Experiência: + 70");
    }
}

console.log("");
// Soma final de danos causados
let somaDanos = 0;
for (let d of danos) {
    somaDanos += d;
}
console.log(`❤️‍🩹 Total de dano da odisseia: ${somaDanos}`);
console.log(`💰 Tesouros adquiridos: ${tesouros.join(", ") || "❌ Nenhum ainda"}`);

console.log("");

//EPÍLOGO - A LENDA GANHA VIDA (Exibição final do status da personagem e seu legado narrativo)
console.log("💫 Epílogo: A Lenda Continua");
console.log("");
console.log(`📈 Nível: ${inventario.length} artefatos | Vida: ${hpAtual}/${hpMaxima} | ouro: ${dinheiro}`);
console.log(`🎒 Inventário: ${inventario.length} artefatos | Aliados: ${aliados.length} | Tesouros: ${tesouros.length}`);
console.log("");
console.log("Estelar olha além das muralhas do castelo - sente que cada mágia contida ali pulsa como uma galáxia.");
console.log("Cada laço for foi um passo na estrutura do cosmo, cada push um fragmento de poder gravitacional.");
console.log("Seus aliados tornaram-se constelações leais, tecendo forças em sinfonia com sua vontade.");
console.log("O inventário vive, respira - um código vivo de artefatos místicos.");
console.log("A cada índice, Estelar lê o tecido da realidade e molda o destino com sabedoria.");
console.log("Ela se ergue, não apenas como heroína, mas como Arquiteta dos Cosmos.");
console.log("Nas suas Veias corre uma recursão ancestral, pronta para desvendar funções e objetos lendários.");
console.log("A lenda de Estelar, a Heroína Cósmica, transcende histórias - agora é programa eterno.");
console.log("Prepare-se: a próxima etapa é o Reino das Funções e os Enigmas dos Objetos Misteriosos entre as galáxias!");
console.log("Pois Estelar não termina sua jornada - ela apenas ativa a próxima rotina da saga estelar 💫");
console.log("");

console.log("📌 FIM DO NÍVEL 3 - Um novo programa se ativa e o destino está e sempre estará escrito nas estrelas! 🌠");