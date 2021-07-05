// 1. Defina um novo objeto ‘conta’ que contenha as seguintes propriedades:
        // a. Número de conta
        // b. Saldo
        // c. Nome do Titular

// 2. Crie um método chamado ‘depósito’ que tem a quantidade de dinheiro como parâmetro de entrada. Ao fazer um depósito, a quantia em dinheiro deve ser adicionada ao saldo existente. O método também deve imprimir na tela o tipo de transação realizada e o novo saldo.

// 3. Crie um novo método chamado saque, como o método de depósito, deve consistir em um parâmetro numérico que será a quantia de dinheiro que queremos sacar. Esta quantia será subtraída do saldo existente. Caso o valor do saque seja superior ao saldo disponível, deve-se imprimir na tela a mensagem “Fundos Insuficientes”, caso contrário deve-se imprimir o tipo de transação realizada e o novo saldo.

let conta = {
    numeroConta: 123456,
    saldo: 0,
    nomeTitular: 'Marcelo',
    deposito: function(valor){
        console.log(`Saldo anterior: R$${this.saldo}`);
        this.saldo += valor;
        console.log(`Foi realizado um depósito no valor de R$${valor}. O saldo atual é de: R$${this.saldo}`);
    },
    saque: function(valorSaque){
        console.log(`Saldo anterior: R$${this.saldo}`);
        if(valorSaque > this.saldo){
            console.log("Fundos Insuficientes")
        } else {
            this.saldo -= valorSaque; console.log(`Foi realizado um saque no valor de R$${valorSaque}. O saldo atual é de: R$${this.saldo}`)
        }
    }
}

conta.deposito(100)
conta.saque(13.50)

// 4. Crie uma função construtora de nosso objeto de conta.

function Conta (numeroConta,saldo,nomeTitular){
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.nomeTitular = nomeTitular;
    this.deposito = function(valor){
        console.log(`Saldo anterior da conta nº ${this.numeroConta}: R$${this.saldo}`);
        this.saldo += valor;
        console.log(`Foi realizado um depósito na conta nº ${this.numeroConta} no valor de R$${valor}. O saldo atual é de: R$${this.saldo}`);
        };
    this.saque = function(valorSaque){
        console.log(`Saldo anterior da conta nº ${this.numeroConta}: R$${this.saldo}`);
        if(valorSaque > this.saldo){
            console.log("Fundos Insuficientes")
        } else {
            this.saldo -= valorSaque; console.log(`Foi realizado um saque na conta nº ${this.numeroConta} no valor de R$${valorSaque}. O saldo atual é de: R$${this.saldo}`)
        }
        }
}

// 5. Instancie os objetos com diferentes valores iniciais e teste os métodos.

let conta1 = new Conta (00001, 100.50, 'Marcelo');
let conta2 = new Conta (00002, 1200, 'Rita')

conta1.deposito(997.18)
conta2.saque(23.75)
