# Exercício: Prática Arrow Functions e recursividade


## Objetivo

Vamos calcular o número fatorial de um valor inteiro.


## Micro desafios

O tech leader da equipe precisa criar um código onde seja calculado o número fatorial de um valor inteiro. Para isto, deveremos:

Criar uma função que calcula o fatorial usando loop (for);


**Resposta**

```js
function fatorialFor(n){
    let resultado = n
    for(let i = n-1; i>= 1; i--){
        resultado = resultado*i        
    }
    return n === 0 ? 1 : resultado
}
```


Recriar esta mesma função usando recursividade (sem o uso de for)


**Resposta**

```js
function fatorialRec(n){
    if(n < 0){
        return false
    } else if (n === 0){
        return 1
    } else {
        return n * fatorialRec(n - 1)
    }
}
```