# Exercício: Transformando Funções


## Objetivo

Entender e aplicar transformações de funções comuns para arrow functions.

## Micro desafios

Transforme as seguintes funções em arrow functions:

```js
function print(mensagem){
  console.log(mensagem)
}
print("Olá, bom dia")
function soma(n1, n2){
  return n1 + n2
}
console.log(soma(10, 10))
```

**Resposta**

```js
const print = mensagem => console.log(mensagem)

print("Olá, bom dia")

const soma = (n1, n2) => n1 + n2

console.log(soma(10, 10))
```