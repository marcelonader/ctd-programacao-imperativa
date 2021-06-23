# Exercício: Criando Módulos Próprios


## Objetivo

Vamos realizar uma série de práticas que nos ajudarão a entender a funcionalidade e praticidade que os módulos trazem aos nossos programas.


## Micro desafios

Nesta primeira etapa, iremos criar nosso primeiro módulo localmente para acessá-lo entre nossos arquivos.


1. Em um arquivo.js, crie uma função (ou várias). Pode ser uma função que adicione dois parâmetros ou qualquer operação que você deseje.


**Resposta**

```js
const sayHello = (nome) => `Olá, ${nome}! Muito prazer!`;

const imc = (peso, altura) => peso / (altura**2);
```


2. Modifique seu arquivo para que seja um módulo que exporte a função criada na etapa anterior. Lembre-se de usar a palavra reservada correta.


**Resposta**

```js
module.exports.sayHello = (nome) => `Olá, ${nome}! Muito prazer!`;

module.exports.imc = (peso, altura) => peso / (altura**2);
```


3. Em outro arquivo JavaScript (arquivo2.js), dentro da mesma pasta de trabalho, solicite o módulo que você exportou.


**Resposta**

```js
const diversos = require('./arquivo1')
```


4. Verifique se sua função funciona corretamente.


**Resposta**

```js
console.log(`${diversos.sayHello('Marcelo')} O seu índice de massa corporal é de: ${diversos.imc(77, 1.74)}`)
```


>Você pode imaginar em quais casos, ou programas, a criação de módulos poderia nos resolver e até mesmo nos salvar de grandes problemas?

>Se você pensou em programas grandes com muitas linhas de código, acertou! Conforme nossos programas crescem e começam a escalar, o número de linhas de código também aumenta, e isso pode resultar em um problema de leitura e compreensão para todos que interagem com o seu código. Os módulos vêm para dividir nossos arquivos de forma que, embora tenhamos um número maior de arquivos, eles seriam menos pesados ​​entre si e conteriam menos linhas de código, tornando mais fácil de entender.





