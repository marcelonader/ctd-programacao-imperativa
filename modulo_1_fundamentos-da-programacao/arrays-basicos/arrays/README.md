# Exercício: Arrays


## Objetivo

Vamos fixar nosso conhecimento sobre Arrays explorando diferentes comandos sobre ele. Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.


Em primeiro lugar, vamos praticar os comandos mais comuns e necessários:

1- Acesse elementos específicos de um array.
2- Percorra um Array  e modifique cada um de seus elementos.
3- Adicione elementos a um array.
4- Exclua elementos de um array.
5- Compare elementos de um array com elementos de outro array. 

## Micro desafios

O líder técnico da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:

1- Criar um arquivo arrays.js que contenha o código:

```js
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"]
```

Verificamos se tudo funciona bem se solicitarmos o segundo elemento do array e for "clube da luta".

**Resposta**

```js
let filmes = ["star wars", "clube da luta", "o poderoso chefão", "top gun", "interestelar"];

console.log(filmes[1])
```

2- No mesmo arquivo, coloque todos os elementos em letras MAIÚSCULAS utilizando  .toUpperCase() para cada elemento.

**Resposta**

```js

for(let i = 0; i < filmes.length; i++)
    console.log(filmes[i].toUpperCase())
```

3- Enquanto trabalhava no exercício 2, descobrimos que também há outro array no código, mas com filmes animados. 

```js
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]
```

4- No mesmo arquivo, crie este array e uma função que adiciona cada elemento do array de desenhos animados (cartoons) ao array de filmes. 

**Resposta**

```js
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]

function adicionaFilme (){
    for (let i = 0; i < cartoons.length; i++){
        filmes.push(cartoons[i])
    }
}
```

5- Um dos desenvolvedores avisou que a última animação é na verdade um jogo, então remova esse último elemento do array de desenhos animados (cartoons) antes de passá-los para os filmes.

**Resposta**

```js
cartoons.pop()

```

6- Por fim, eles nos enviam dois arrays com as avaliações feitas por diferentes usuários do mundo desses filmes, da seguinte forma:

```js
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 
```

Eles nos pedem para criar uma função que compare as notas e nos diga se elas são iguais ou diferentes. Eles confirmam que estão na respectiva ordem e que trazem apenas valores numéricos de 1 a 10.

**Resposta**

```js
function compararNotas(array1, array2){
    for(let i = 0; i < array1.length; i++){
        if(array1[i] == array2[i]){
            console.log("igual")
        } else if (array1[i] != array2[i]) {
            console.log("diferente")
        }
    }
}
```

Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções e testar seu funcionamento correto.

**Resposta**

```js
adicionaFilme()

compararNotas(asiaScores, euroScores)
```

Se chegarmos a este ponto e tudo estiver bem, o líder técnico da equipe deve estar extremamente feliz com nosso trabalho e desempenho. Bom trabalho!