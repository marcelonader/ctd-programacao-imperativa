// Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).

// Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.



// Opção1:

function Restaurante(nome, cardapio=[]){
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada = function (){
        console.log(`Olá, seja bem-vindo(a) ao ${this.nome}. Esse é o nosso cardápio: ${this.cardapio}`)
    }
}

let mcDonalds = new Restaurante ('Mc Donalds', ['big mac', 'chedar mc melt', 'quarterão', 'guaraná', 'coca cola']);

console.log(mcDonalds.entrada())


// Opção2:

function Restaurante(nome, ...cardapio){
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada = function (){
        console.log(`Olá, seja bem-vindo(a) ao ${this.nome}. Esse é o nosso cardápio: ${this.cardapio}`)
    }
}

let mcDonalds = new Restaurante ('Mc Donalds', {lanches: ['big mac', 'chedar mc melt', 'quarterão']}, {bebidas: ['guaraná', 'coca cola']});
//ou
// let mcDonalds = new Restaurante ('Mc Donalds', 'big mac', 'chedar mc melt', 'quarterão', 'guaraná', 'coca cola');

console.log(mcDonalds.entrada())
