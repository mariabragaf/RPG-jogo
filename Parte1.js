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

console.log(" 💫 O Manto da Estrela ");
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
let CLASSE = "Heroína Cósmica"; 
let vidaAtual = 140; 
let vidaMaxima = 300;
let manaAtual = 80;
let manaMaxima = 80;
let NIVEL = 20;
let experiencia = 65;
let OURO = 270;

let forca = 100;
let defesa = 40;
let agilidade = 200;
let combatesVencidos = 1;

let localAtual = "Galáxias Sombrias do Reino de Tamaran";
let missaoAtual = "Investigar os Sinais Cósmicos e Derrotar o Guardião";

console.log("🎇A Jornada Ultra Estrelar");
console.log("");
console.log(`Após ${nome} receber sinais Cósmicos em torno da galáxia, ela percebeu a presença de Vermes Eternos ao redor.`)
console.log(`Antes de mais nada, ${nome} usou a sua super Lâmina de Solarium, espada de alta tecnologia, capaz de concentrar a luz das estrelas e liberar poderosas lâminas de plasma.`);
console.log("A espada acertou de forma certeira todos os Vermes que a cercaram, transfromando-os em faíscas luminosas.");
console.log("Assim, a corajosa Estrela Rosa seguiu seu caminho com a missão de derrotar Aetherion, o Guardião dos Portais Celestes.");

console.log("");

console.log("🔮⚠️CAPÍTULO 1: Avisos Mágicos");
console.log("");

console.log(`No meio do caminho ${nome} acaba pousando no planeta Helion Prime, onde havia alguns Mestres Solariuns que a passaram alguns avisos importântes para a sua jornada!!!`);
console.log("");

if (nivel < 20) {
    console.log(`🧙‍♂️ Mestre Solarius a adverte: ${nome}, ainda não dominaste a luz para esta missão.`);
    console.log(`⚠️ Mas ${nome} sente que o destino não pode esperar...`);
}

if (ouro >= 270) {
    console.log(`💰 Suas moedas cósmicas brilham intensamente - mercadores das Rochas Rosas a aguardam anciosamente...`);

}

if (classe === `${classe}`) {
    console.log(`✨ A luz estelar corre em suas veias. Estelar está pronta para brilhar!`);
}

console.log("");

console.log("🌌CAPÍTULO 2: Convergência dos Astros");
console.log("");

console.log(`Após sair do planeta destinto, ${nome} seguiu o seu caminho até as Rochas Rosas, para que assim, fizesse algumas negociações! 🪨💗`);
console.log("");

if (ouro >= 270) {
    console.log(`💎 Com suas moedas estelares, ${nome} adquire novos aprimoramentos nas Rochas Rosas!`);
    forca += 150;
    defesa += 50;
    ouro -= 270;
    console.log(`🥊Força e defesa aumentaram! Ouro restante ${ouro}`);
} else {
    console.log(`💔 Sem recursos cósmicos suficientes, ${Estelar} confia em sua conexão com a luz para seguir adiante.`);
    console.log(`🌠 A adve4rsidade afia seus sentidos` - agilidade + 2);
    agilidade += 2;
}
if (experiencia >= 100) {
    console.log(`🌟 Um fluxo de sabedoria cósmica envolve ${nome}! Ela transcende para um novo nível de poder!`);
    nivel++;
    experiencia = 200;
    vidaAtual = vidaMaxima;
    console.log(`🧬 ${nome} alcançou o nível ${nivel} e sua energia vital foi restaurada!`); 
} else {
    console.log(`📚 ${nome} ainda absorve fragmentos de conhecimento das estrelas...`);
    console.log(`🔭 Sabedoria cósmica atual:`- experiencia / 100);
}

console.log("⚔️☄️Capítulo 3: O confronto Estelar");
console.log("");

console.log(`Assim que ${nome} saiu das Rochas Rosas, sobrevoou mais um pouco até chegar enfim na base do guardião dos portais celestes, o mais temido das galáxias!`);
console.log(`Antes que pudesse entrar na base, ${nome} se deparou com os guardas do caos!`);
console.log(`E então...usou da sua visão laser verde para derrotar cada um deles.`);
console.log(`Com todos os guardas mortos, ${nome} seguiu seu caminho entrando nas profundidades da base...`);
console.log(`Quando ${nome} finalmente chega no templo do guardião, ela o avista, e então..começa uma GRANDE batalha super estrelante entre eles!⚔️☄️🔥⚡!!!!!`);
console.log("");

let poderInimigo = 100;

if (vidaAtual <= 140) {
    console.log(`🔋 Com pouca energia vital, ${nome} ativa o núcleo estelar de emergência!`);
    console.log(`🔥 Um ataque de luz concentrada explode a partir de sua Pulseira Solar! `);
    poderInimigo -= (forca * 2);
} else if (manaAtual >= 80 && classe === "Heroí´na Cósmica") {
    console.log(`⚡ ${nome} canaliza energia solar pura em sua Lâmina de Solarium!`);
    console.log(`🌞 Uma rajada de plasma corta o inimigo com fúria estelar!`);
    poderInimigo -= (forca + 20);
    manaAtual -= 80;
} else if (agilidade >= 150) {
    console.log(`🌪️ Utilizando sua velocidade luminosa, ${nome} defere um ataque rápido e preciso!`);
   poderInimigo -= forca; 
} else {
    console.log(`🛡️ ${nome} assume uma postura defensiva, absorvendo a energia fdo ambiente...`);
    poderInimigo -= (forca / 2);
    vidaAtual += 10;
}
console.log(`🐉 Poder restante do inimigo:` + poderInimigo);