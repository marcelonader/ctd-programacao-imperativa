// Crie um módulo que exporte uma função (em um arquivo separado). Após isso, importe o módulo no arquivo principal e execute a função importada.

const calculo = {
    somar: function (n1, n2) {return n1 + n2},
    subtrair: function (n1, n2) {return n1 - n2},
    dividir: function (n1, n2) {return n2 === 0 ? 'impossível dividir por zero' : n1 / n2},
    multiplicar: function (n1, n2) {return n1 * n2},
}

module.exports = calculo