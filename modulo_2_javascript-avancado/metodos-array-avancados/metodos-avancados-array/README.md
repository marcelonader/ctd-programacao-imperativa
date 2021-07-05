# Exercício: Métodos de arrays


## Objetivo

Vamos realizar uma série de exercícios que nos ajudarão a entender melhor alguns métodos de array e como usá-los corretamente.

## Micro desafios

#

1. Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

**Resposta**

```js
let numeros = [2, 6, 21, 45, 7];

let numSomados = numeros.reduce((acum, atual) => acum + atual);

function retornaArray(arr) {
    return arr.map(elemento => {
        return elemento / numSomados;
    })
};

console.log(retornaArray(numeros));
```

2. Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

**Resposta**

```js
let nomes = ['Marcelo', 'Eduardo', 'Gustavo', 'otorrinolaringologista'];

function comparaArray(arr, numero) {
    return arr.filter(elemento => {
        return elemento.length > numero;
    })
}

console.log(comparaArray(nomes, 7));
```

3. Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

**Resposta**

```js
let alunos = [
    {
        nome: 'Marcelo',
        nota: 8.5
    },
    {
        nome: 'Eduardo',
        nota: 7.5
    },
    {
        nome: 'Gustavo',
        nota: 9.5
    }
]

const ordenarAlunos = (arr) => {
    return arr.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
    });
};

const ordenarNotas = (arr) => {
    return arr.sort((a, b) => b.nota - a.nota);
};

console.log(ordenarAlunos(alunos));
console.log(ordenarNotas(alunos));
```

#

## Exercício Integrador

> Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 
> Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:

```js
let caderno = [
    {
        nome: 'Manga',
        preco: 10,
        quantidadeVendida: 2
    },
    {
        nome: 'Arroz',
        preco: 15,
        quantidadeVendida: 4
    },
    {
        nome: 'Tomate',
        preco: 2,
        quantidadeVendida: 12
    }
]
```

1. Calcular o lucro total de todos os produtos;

**Resposta**

```js
const sumProdutos = (arr) => {
    let somaUnitariaProdutosVendidos = arr.map(elemento => elemento.preco * elemento.quantidadeVendida);
    ;
    return `O lucro total de todos os produtos foi de R$${somaUnitariaProdutosVendidos.reduce((acum, atual) => acum + atual)}`;
}

console.log(sumProdutos(caderno));
```

2. Permitir pesquisar um produto pelo nome e calcular seu lucro total;

**Resposta**

```js
const pesquisarProduto = (arr, name) => {
    let produtoEncontrado = arr.filter(elemento => elemento.nome === name);
    return produtoEncontrado.map(elemento => `O lucro total do produto pesquisado foi de R$${elemento.preco * elemento.quantidadeVendida}`);
};

console.log(pesquisarProduto(caderno, 'Manga'));
```

3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;

**Resposta**

```js
const produtosMaisVendidos = (arr, valor) => {
    return arr.filter(elemento => {
        return (elemento.preco * elemento.quantidadeVendida) > valor;
    })
}

console.log(produtosMaisVendidos(caderno, 20));
```

4. Classifique todos os produtos pela quantidade de dinheiro que geraram.

**Resposta**

```js
const classicaProdutos = arr => {
    let classificacao = arr.sort((a, b) => (b.quantidadeVendida * b.preco) - (a.quantidadeVendida * a.preco));
    return classificacao.map(elemento => `O produto ${elemento.nome} teve a quantidade de R$${elemento.quantidadeVendida * elemento.preco}`);
}

console.log(classicaProdutos(caderno));
```

5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).

**Resposta**

```js
const pesquisaEAlteraProduto = (arr, name, novoPreco) => {
    let produtoEncontrado = arr.filter(elemento => elemento.nome === name);
    return produtoEncontrado.map(elemento => `O novo valor do produto ${elemento.nome} é ${elemento.preco = novoPreco}`);
};

console.log(caderno);
console.log(pesquisaEAlteraProduto(caderno, 'Manga', 15));
console.log(caderno);

```

6. Calcule o lucro total após pagar 45% do lucro em impostos.

**Resposta**

```js
console.log(sumProdutos(caderno)); //verifica o valor total antes do imposto

const calculaLucro = (arr, impostoPercentual) => {
    let somaUnitariaProdutosVendidos = arr.map(elemento => elemento.preco * elemento.quantidadeVendida);
    return `O lucro total de todos os produtos após descontado o imposto de ${impostoPercentual}% foi de R$${(somaUnitariaProdutosVendidos.reduce((acum, atual) => acum + atual)) - (impostoPercentual / 100 * somaUnitariaProdutosVendidos.reduce((acum, atual) => acum + atual)).toFixed(2)}`;
}

console.log(calculaLucro(caderno, 45));
```


