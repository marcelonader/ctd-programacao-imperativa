# Exercício: Arrays


## Objetivo

Praticar o uso de operadores aritméticos

## Micro desafios

Um nutricionista enviou a seguinte tabela com os dados de seus clientes e, você será responsável por calcular o Índice de Massa Corporal de cada registro:

nome   sobrenome idade peso altura plano
José   da Silva  27    83.5 1.70   Ouro
Carlos de Souza  28    80.1 1.76   Diamante
Aline  Ferreira  33    63.7 1.53   Não Possui
Ana    Paula     26    55.0 1.62   Prata

Quais são as variáveis? Quais são as constantes? De que tipo são? Qual variável poderia armazenar o valor null segundo estes dados?

O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura2  (a altura deve estar em metros e o peso em quilogramas). Por exemplo, no caso de Carlos de Souza, a altura ao quadrado é 3,09. 

Você deverá criar 6 variáveis:

Nome
Idade
Peso
Altura
Plano (só nos interessa saber se TEM ou NÃO TEM)
Índice de Massa Corporal (IMC)

O programa deverá apresentar em tela o valor do IMC de um paciente da tabela com uma mensagem. Por exemplo: “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.


**Resposta**



```js
//Solução 1 - Exercício resolvido com base nos dados de uma das pessoas da tabela

const nome = "José da Silva"; // string
let idade = 27; // integer. Pode ser NULL (não é necessário para o cálculo do IMC)
let peso = 83.5; // float
let altura = 1.70; //float
let plano = true //plano Ouro - boolean
const imc = ((peso / (altura**2)).toFixed(2)).replace('.', ',')

console.log(`${nome} tem ${idade} anos e seu índice de massa corporal é de ${imc}.`)
```


```js
//Solução 2 - Array de objetos
let pessoas = [
    {
        nome: 'José da Silva', 
        idade: 27, 
        peso: 83.5, 
        altura: 1.70, 
        plano: true
    }, 
    {
        nome: 'Carlos de Souza', 
        idade: 28, 
        peso: 80.1, 
        altura: 1.76, 
        plano: true
    }, 
    {
        nome: 'Aline Ferreira', 
        idade: 33, 
        peso: 63.7, 
        altura: 1.53, 
        plano: false
    },
    {
        nome: 'Ana Paula', 
        idade: 26, 
        peso: 55.0, 
        altura: 1.62, 
        plano: true
    }
]

console.table(pessoas)

for(let i = 0; i < pessoas.length; i++){
    let imc = ((pessoas[i].peso / (pessoas[i].altura**2)).toFixed(2)).replace('.', ',')
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos e seu índice de massa corporal é de ${imc}.`)
}
```