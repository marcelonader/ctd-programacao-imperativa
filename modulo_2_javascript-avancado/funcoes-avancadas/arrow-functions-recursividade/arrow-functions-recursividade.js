// O tech leader da equipe precisa criar um código onde seja calculado o número fatorial de um valor inteiro. Para isto, deveremos:

// Criar uma função que calcula o fatorial usando loop (for);


function fatorialFor(n){
    let resultado = n
    for(let i = n-1; i>= 1; i--){
        resultado = resultado*i        
    }
    return n === 0 ? 1 : resultado
}

console.log(fatorialFor(6))


// Recriar esta mesma função usando recursividade (sem o uso de for)

function fatorialRec(n){
    if(n < 0){
        return false
    } else if (n === 0){
        return 1
    } else {
        return n * fatorialRec(n - 1)
    }
}
    
console.log(fatorialRec(0))