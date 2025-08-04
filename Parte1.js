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

console.log("🔮⚠️CAPÍTULO 1: Avisos Mágicos");

if (nivel < 20) {
    console.log("📍")
}