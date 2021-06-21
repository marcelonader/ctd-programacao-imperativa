# Exercício: Importações


## Objetivo

Entender a implementação e funcionamento das importações e exportações de módulos.


## Micro desafios

Crie um módulo que exporte uma função (em um arquivo separado). Após isso, importe o módulo no arquivo principal e execute a função importada.


**Resposta**

```js
//Arquivo 2 - módulo que exporta uma função
const calculo = {
    somar: function (n1, n2) {return n1 + n2},
    subtrair: function (n1, n2) {return n1 - n2},
    dividir: function (n1, n2) {return n2 === 0 ? 'impossível dividir por zero' : n1 / n2},
    multiplicar: function (n1, n2) {return n1 * n2},
}

module.exports = calculo
```


```js
//Arquivo 1 - arquivo principal
const calculo = require('./importacoes-arquivo2');

console.log(calculo.dividir(45, 23))
console.log(calculo.dividir(45, 0))
```
