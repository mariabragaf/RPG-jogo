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
console.log(`${nome}, a ${classe}, sobrevoa as galáxias sombrias do Reino de Tamaran.`);
console.log(`Porém, sua Pulseira de Análise Solar, Detecta um Sinal cósmico contra Vermes Eternos.`);
console.log(`Tendo o nivel ${nivel} e um ataque total de ${ataqueTotal}, ela é muito temida pelos Guardas do Caos.`);
console.log(`Suas defesas, impulsionadas pela ${NOME_ARMADURA}, atingem ${DEFESA_BASE} de resistência.`);
console.log(`Após intensos treinamentos constantes, ${nome} acumulou ${xp} de XP e carrega ${ouro} moedas, pronta para negociações nas Rochas Rosas.`);
console.log(`Restaurada com ${vida} pontos de vida, ${nome} é considerada a maior ${classe} das galáxias.`);
console.log(`Vida Suficiente? ${vidaSuficiente}, Ataque Forte? ${ataqueForte}, Nível Avançado? ${nivelAvancado}.`);
console.log(`Pode Enfrentar o Guardião? ${podeEnfrentarGuardiao} - a última guerra está à vista, e o destino se escreve nas estrelas! ✨❤️🦸🏻‍♀️`);