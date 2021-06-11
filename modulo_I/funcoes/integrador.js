// 1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2).
// Em seguida, execute a função testando diferentes valores.


function calcularIMC(altura, peso){
    return `O IMC calculado é de: ${(peso / (altura **2)).toFixed(2)}`
}

console.log(calcularIMC(1.73, 77.5))
console.log(calcularIMC(1.57, 65.3))

// 2) Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:

// Soma;
// Subtração;
// Multiplicação;
// Divisão.

// As 4 funções deverão receber dois parâmetros e retornar o resultado da operação matemática correspondente.

const soma = function (n1, n2){
    return n1 + n2
};
const subtracao = function (n1, n2){
    return n1 - n2
};
const multiplicacao = function (n1, n2){
    return n1 * n2
};
const divisao = function (n1, n2){
    return n2 !== 0 ? n1 / n2 : 'Impossível realizar a divisão por zero'
};

console.log(divisao(45, 0))
// 3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. Depois, criar a função fazerGol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”. Além disso, incremente o valor do jogador em 10.000 dólares. Por conseguinte, teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador e o preço do jogador no mercado.


let nomeJogador = "Cristiano";
let golsJogador = 0;
let precoEmDolares = 0;
let jogadorRecebeuAumentoEsteAno = false;

const fazerGol = () => {
    golsJogador += 1;
    console.log("GOL!!!!!!!")
    precoEmDolares += 10000.00
}

fazerGol()
fazerGol()
fazerGol()
fazerGol()

console.log(`O jogador ${nomeJogador} tem, até o momento, um total de ${golsJogador} gols registrados em seu nome e ele está avaliado em $${(precoEmDolares).toFixed(2)}`)

// 4) Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida) que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual.


const hatTrick = () => {
    for(let i = 1; i <= 3; i++) {fazerGol()}
    jogadorRecebeuAumentoEsteAno === false ? precoEmDolares *= 1.1 : ''
}