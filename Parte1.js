// Nível - 1
let nome = "Estelar";
let classe = "Heroína Cósmica";
let nivel = 20;
let vida = 100;
let ouro = 300;
let xp = 15;

const NOME_ARMA = "Punho Estelar";
const DANO_BASE = 80;
const NOME_ARMADURA = "Armadura da Chama Estelar";
const DEFESA_BASE = 40;

xp += 50;

ouro -= 30;

vida += 40;

let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);

vidaSuficiente = vida > 70;
ataqueForte = ataqueTotal > 60;
nivelAvancado = nivel >= 10;
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log("💫 O Manto da Estrela ");
console.log("");
console.log(`No Limiar o Cosmo antigo, onde estrelas morrem e renascem, nasceu uma lenda.`);
console.log(`Das cinzas de uma era esquecida, forjou-se uma guerreira destinada a mudar o curso das contelações.`);
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

// Novos atributos
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

if (moedasCosmicas >= 100) {
    console.log("🧠 Estelar negocia com precisão e adquire o Chip Solar, ampliando seus poderes.");
    forca += 10;
    manaAtual += 10;
    moedasCosmicas -= 100;
    console.log("🔥 Força agora:" + forca + " | Mana:" + manaAtual + " | Moedas:" + moedasCosmicas);
} else {
    console.log("💔 Sem recursos suficientes, Estelar se afasta e reflete sua jornada.");
    agilidade += 5;
    console.log("💨 Agilidade aumentada para:" + agilidade);
}

console.log("");

// ATO III - Confronto com o Guardião Artemin
console.log("⚔️ ATO III: O Confronto Estelar");
console.log("");

let poderInimigo = 40;

console.log("O Guardião Artemin. senhor dos Portais Celestiais, desce em meio a um vótice de luz e gravidade invertida.");
console.log("Sua presença ameaça romper as fronteiras dimensionais entre as galáxias.");

if (vidaAtual <= 30) {
    console.log("🔴 Estelar está ferida, mas, com coragem, lança uma última investida poderosa!");
    poderInimigo -= (forca * 2);
} else if (manaAtual >= 30 && classePersonagem === "Heroína Cósmica") {
  console.log("🌟 Usando a onda Supernova, Estelar canaliza o poder das estrelas, derrubando Artemin e todo o seu poder!");
  poderInimigo -= (forca + 25);
  manaAtual -= 30;
} else if (agilidade >= 25) {
    console.log("⚡ Com agilidade suprema, ela executa um ataque certeiro nos pontos vulneráveis do inimigo!");
    poderInimigo -= forca;
} else {
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
    console.log("Estelar sente que esse é apenas o começo do novo ciclo estelar...");
} else {
    console.log("⚠️ A vitória escapou por pouco. Artemin e seus guardas  do caos recuam, e Estelar sobrevive para lutar outro dia.");
    console.log("Os Portais Celestiais seguem em risco, mas a esperança ainda brilha");
}

console.log("");
console.log("🚀FIM DO NÍVEL 2 - O próximo capítulo será escrito entre cometas e constelações!");