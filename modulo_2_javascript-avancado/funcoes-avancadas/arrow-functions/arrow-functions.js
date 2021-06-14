// Neste exercício, você terá que criar uma função "FizzBuzz" que recebe dois parâmetros numéricos.

// A função deve atender aos seguintes requisitos:

// * Você deve imprimir os números de 1 a 100;
// * Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;
// * Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Buzz" em vez do número correspondente;
// * Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.

// Avançado: Como crédito extra, pense em como otimizar seu programa para que as palavras sejam passadas de forma dinâmica e seja você quem decide quais palavras ele deve dizer.


function fizzBuzz1(n1, n2){
    for(let i = 1; i <= 100; i++){
        if(i%n1 == 0 && i%n2 != 0){
           console.log('Fizz')  
        } else if (i%n2 == 0 && i%n1 != 0){
            console.log('Buzz')
        } else if (i%n1 == 0 && i%n2 == 0){
            console.log('FizzBuzz')
        } else {
            console.log(i)
        }   
    }
}

fizzBuzz1(10, 3)


function fizzBuzz(n1, n2, mensagemN1, mensagemN2, mensagemN3){
    for(let i = 1; i <= 100; i++){
        if(i%n1 == 0 && i%n2 != 0){
           console.log(mensagemN1)  
        } else if (i%n2 == 0 && i%n1 != 0){
            console.log(mensagemN2)
        } else if (i%n1 == 0 && i%n2 == 0){
            console.log(mensagemN3)
        } else {
            console.log(i)
        }   
    }
}

fizzBuzz(10, 3, 'ontem', 'hoje', 'amanhã')
