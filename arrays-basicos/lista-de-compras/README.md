# Exercício: “Lista de Compras”


## Objetivo

Entender e aplicar as funções auxiliares relacionadas ao array.


## Micro desafios

Crie um array que contenha nomes de produtos para compra.

Após isso, exiba no console os resultados das funções relacionadas aos arrays,
que são: Join, Pop, Push, Shift e Unshift.

Também se deve escrever com suas palavras, o que cada função realiza.

Seguem abaixo alguns exemplos.

console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN)


**Resposta**

```js
let listaDeCompras = ['arroz', 'feijão', 'leite'];

// Join
console.log("O método 'Join' junta os elementos de um array e retorna como string. Podemos indicar um separador (string) como parâmetro do método.")
console.log('Array antes do método Join: ' + listaDeCompras)
console.log(typeof listaDeCompras) // object
listaDeCompras.join()
console.log('Array depois do método Join: ' + listaDeCompras)
console.log(typeof listaDeCompras.join()) // string

// Pop
console.log("O método 'Pop' exclui o último elemento do array.")
console.log('Array antes do método Pop: ' + listaDeCompras)
listaDeCompras.pop()
console.log('Array depois do método Pop: ' + listaDeCompras)

// Push
console.log("O método 'Push' inclui um ou mais elementos no final do array.")
console.log('Array antes do método Push: ' + listaDeCompras)
listaDeCompras.push('água', 'orégano')
console.log('Array depois do método Push: ' + listaDeCompras)

// Shift
console.log("O método 'Shift' exclui o primeiro elemento array.")
console.log('Array antes do método Shift: ' + listaDeCompras)
listaDeCompras.shift()
console.log('Array depois do método Shift: ' + listaDeCompras)

// Unshift
console.log("O método 'Unshift' inclui um ou mais elementos no começo do array.")
console.log('Array antes do método Unshift: ' + listaDeCompras)
listaDeCompras.unshift('água de coco')
console.log('Array depois do método Unshift: ' + listaDeCompras)
```