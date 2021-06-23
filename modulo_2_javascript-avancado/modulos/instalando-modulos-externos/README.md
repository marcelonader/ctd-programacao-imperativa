# Exercício: Instalando Módulos externos


## Objetivo

Vamos realizar uma série de práticas que nos ajudarão a entender a funcionalidade e praticidade que os módulos trazem aos nossos programas.


## Micro desafios

Agora que sabemos como criar, exportar e exigir nossos próprios módulos, vamos ver como poderíamos usar os módulos criados pela comunidade e quais as vantagens que eles têm:


1. Seguindo o que vimos na aula como exemplo, procure um módulo na internet que seja do seu interesse.


2. Depois de encontrá-lo, em uma nova pasta de trabalho, crie um arquivo.js e instale o módulo correspondente como vimos na aula (eles geralmente são instalados por npm install *NOME DO MÓDULO*, mas é uma boa prática sempre ler a própria documentação dos módulos que vamos usar).


**Resposta**

```js
//arquivo.js
//modulo externo escolhido: string
//documentação: https://www.npmjs.com/package/string
```


```powershell
PS D:\ctd-programacao-imperativa\modulo_2_javascript-avancado\modulos\instalando-modulos-externos> npm i string
npm WARN saveError ENOENT: no such file or directory, open 'D:\ctd-programacao-imperativa\modulo_2_javascript-avancado\modulos\instalando-modulos-externos\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN instalando-modulos-externos No description
npm WARN instalando-modulos-externos No repository field.
npm WARN instalando-modulos-externos No README data
npm WARN instalando-modulos-externos No license field.

+ string@3.3.3
added 1 package from 1 contributor and audited 1 package in 0.984s
found 1 high severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
```


3. Continuando com a boa prática de leitura da documentação, solicite o módulo selecionado conforme ele indica para você.


**Resposta**

```js
const S = require('string');
```


4. Verifique se funciona corretamente com alguns exemplos (nunca pararemos de insistir para que você leia a documentação).


**Resposta**

```js
console.log(S('#').times(3).s)
console.log(S('yes_we_can').titleCase().s)
console.log(S('string to float').underscore().s)
```


>Podemos ver que a comunidade JavaScript, e a Internet em geral, é um mundo de informações. Então vamos perceber que existem milhares de módulos Node.JS que podem nos ajudar a tornar nosso código melhor e mais poderoso.

>Como última prática, sugerimos que você faça um modelo no qual colocará os módulos Node.JS que encontrar e que função eles cumprem no código, ou seja, o que esses módulos fazem e para que servem. Em seguida, compartilhe com seus colegas para que você possa ver quais módulos eles acharam que faltam e vice-versa e, por fim, discuta sua praticidade e como são fáceis ou difíceis de usar. 



