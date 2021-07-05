// 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let numImpares = numPares.map(num => num + 1);
console.log(numImpares);

// 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['Marcelo', 'Rita', 'Maria', 'Silvia', 'Christopher', 'Maria'];
console.log(nomes.filter(elemento => elemento == 'Maria'));

//ou

// let nomes = ['Marcelo', 'Rita', 'Maria José', 'Silvia', 'Christopher', ' Ana Maria'];
// console.log(nomes.filter(elemento =>  elemento.includes('Maria')));


// 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let numeros = [10, 23, 7, 16, 48, 506];
console.log(numeros.reduce((acumulador, elemento) => {
    return `${acumulador} - ${elemento}`
}));

numeros.reduce()
// 4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ['onça', 'macaco', 'cachorro', 'gato'];
animais.forEach(animal => {
    console.log(`O animal é ${animal.toUpperCase()}`)
})
