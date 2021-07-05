# Exercício: Aquecimento - Prática Guiada


## Objetivos

> Nesta aula, iremos aplicar nossos conhecimentos, em exercícios, como forma de aquecimento para a “Prática Guiada” que ocorrerá em nosso encontro ao vivo.

>Vamos imaginar um cenário de um e-commerce, onde há diversas operações existentes, como pesquisar por produtos, adicioná-los ao carrinho e realizar uma compra.

> No VS Code, resolva as seguintes situações em JavaScript.

> Os exercícios possuem soluções que vocês poderão consultar. A ideia é que essa atividade sirva como aquecimento para a Prática Guiada, por isso pratique bastante. Tente fazer todos os exercícios antes de analisar o código com as respostas:

1. Crie uma variável **produtos**, que contenha um array de objetos, com no
mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os
seguintes detalhes: **Nome do Produto**, **Valor do Produto**, **Qualidade do Produto** e **Status**.

> A informação **Qualidade do Produto** deve ser um número que irá de 0 a 10.
A informação **Status** deve ser um Booleano, indicando se o produto está
disponível em estoque.


**Resposta**

```js
let produtos = [
    {
        nome: 'fogão',
        valor: 759.90,
        qualidade: 7,
        status: true
    },
    {
        nome: 'conjunto de talheres',
        valor: 14.90,
        qualidade: 8,
        status: false
    },
    {
        nome: 'ar condicionado',
        valor: 699.99,
        qualidade: 9,
        status: true
    },
    {
        nome: 'geladeira',
        valor: 1119.90,
        qualidade: 7,
        status: true
    }
]
```


2. Em seguida, um usuário deseja filtrar os produtos, com base em alguns
critérios. Selecione todos os produtos que tenham:

**Valor** entre 482 e 1600;
**Qualidade** superior a 60;
**Status** como disponível.

> O resultado do filtro deve ser armazenado na variável **carrinho**.

3. Por fim, é necessário exibir todos os itens presentes no **carrinho**, com seus nomes e preços correspondentes, e no final um **valor total**, resultante da somatória de todos os produtos.

**Resposta**

```js
let carrinho;


function filtrar(arr, valorMinimo, valorMaximo, qualidadeMinima, status) {
    let resultado = 0;
    if (status === 'disponível' || status === true) {
        carrinho = arr.filter(elemento => {
            return elemento.valor >= valorMinimo && elemento.valor <= valorMaximo && (elemento.qualidade * 10) > qualidadeMinima && elemento.status === true
        })
        if (carrinho.length > 0) {
            for (elemento of carrinho) {
                console.log(`Produto: ${elemento.nome} - Preço: ${elemento.valor}`)
            }
            carrinho.forEach(elemento => {
                resultado += elemento.valor;
            })
            console.log(`O valor total de todos os produtos filtrados é de R$ ${resultado}`)
        } else {
            console.log('Nenhum produto localizado com os filtros selecionados')
        }
    } else if (status === 'indisponível' || status === false) {
        carrinho = arr.filter(elemento => {
            return elemento.valor >= valorMinimo && elemento.valor <= valorMaximo && (elemento.qualidade * 10) > qualidadeMinima && elemento.status === false
        })
        if (carrinho.length > 0) {
            for (elemento of carrinho) {
                console.log(`Produto: ${elemento.nome} - Preço: ${elemento.valor}`)
            }
            carrinho.forEach(elemento => {
                resultado += elemento.valor;
            })
            console.log(`O valor total de todos os produtos filtrados é de R$ ${resultado}`)
        } else {
            console.log('Nenhum produto localizado com os filtros selecionados')
        }
    }
}


filtrar(produtos, 482, 1600, 60, 'disponível');
```







