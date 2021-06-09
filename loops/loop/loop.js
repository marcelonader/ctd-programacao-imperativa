// Execute essas ações simples e comumente usadas para trabalhar com loops e arrays.

// 1- Percorra o array abaixo e exiba seus elementos:


const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];


for(let i = 0; i < pontos.length; i++){
    console.log(pontos[i])
}

// 2- Crie um array com valores diversos, percorra-o, altere e mostre seus elementos:
 

let valoresDiversos = ['CTD', 'Digital House', 2021]

for(let i = 0; i < valoresDiversos.length; i++){ 
    if(i==0){
        valoresDiversos[i]= 'Marcelo'
    } else if (i==1){
        valoresDiversos[i]= 'Massayuki'
    } else if (i==2){
        valoresDiversos[i]= 'Nader'
    } else {
        valoresDiversos[i]= '*'
    }
}

console.log(valoresDiversos)


// 3- Crie outro array, percorra-o, altere, salve e exiba seus elementos:
// Obs: Neste exercício, utilize funções e domínios separados, ou seja, salvar é uma coisa e exibir é outra. Sendo assim, nem tudo deve ser feito junto.


function printElementoArray (elemento, indice) {
    console.log('item' + indice + ': ' + elemento)
}

function inverterArray(array){
    let novoArray = [];
    for (let i = 0; i < array.length; i++){
        novoArray.unshift(array[i])
    }
    return novoArray
}

let frutas = ['amora', 'framboesa', 'cereja']

for (let i = 0; i < frutas.length; i++){
    printElementoArray(frutas[i], i+1)
}

console.log(inverterArray(frutas))



// 4- Crie um último array, percorra-o, selecione os elementos, salve e mostre-os:


let nomes = ['José', 'Joaquim', 'Maria', 'João', 'Mario', 'Ricardo']

let novoArrayNomes = []

for (let i = 0; i < nomes.length; i = i+2){
    novoArrayNomes.push(nomes[i])
}

console.log(novoArrayNomes)



//Exercícios Extras:


// 1) Escrever um programa que imprime 25 termos da série 11 - 22 - 33 - 44, etc.

// 1ª opção
let termo = 11
for (let i = 1; i <= 25; i++){
    console.log(termo)
    termo += 11
}


//2ª opção
for (let i = 11; i <= 275; i+=11){
    console.log(i)
}


// 2) Mostrar os múltiplos de 8 até o valor 500. A tela deve mostrar 8 - 16 - 24;

for (let i = 8; i <= 500; i+=8){
    console.log(i)
}


// 3) Usando FOR, desenvolver um programa que mostre a tabuada de 5.

let numeroDaTabuada = 5

for (let i = 1; i <=10; i++){
    console.log(numeroDaTabuada * i)
}

