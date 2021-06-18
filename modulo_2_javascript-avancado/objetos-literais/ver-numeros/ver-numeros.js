// 1. Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.

let numerosPrimos = [2, 3, 5, 7, 11];
let numeros = [...numerosPrimos, 1, -25, 32, 6];

// 2. Crie uma função menorNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.

const menorNumero = (args) => Math.min(...args);

console.log(menorNumero(numeros))