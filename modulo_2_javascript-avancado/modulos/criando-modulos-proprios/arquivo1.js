// Nesta primeira etapa, iremos criar nosso primeiro módulo localmente para acessá-lo entre nossos arquivos.


// 1. Em um arquivo.js, crie uma função (ou várias). Pode ser uma função que adicione dois parâmetros ou qualquer operação que você deseje.


const sayHello = (nome) => `Olá, ${nome}! Muito prazer!`;

const imc = function (peso, altura) {return peso / (altura**2)};


//2. Modifique seu arquivo para que seja um módulo que exporte a função criada na etapa anterior. Lembre-se de usar a palavra reservada correta.


module.exports.sayHello = (nome) => `Olá, ${nome}! Muito prazer!`;

module.exports.imc = (peso, altura) => peso / (altura**2);


