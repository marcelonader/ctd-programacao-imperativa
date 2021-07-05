let produtos = [
    {
        nome: 'fogão',
        valor: 759.90,
        qualidade: 7,
        status: true
    },
    {
        nome: 'conjunto de talheres',
        valor: 14.90,
        qualidade: 8,
        status: false
    },
    {
        nome: 'ar condicionado',
        valor: 699.99,
        qualidade: 9,
        status: true
    },
    {
        nome: 'geladeira',
        valor: 1119.90,
        qualidade: 7,
        status: true
    }
]

let carrinho;


function filtrar(arr, valorMinimo, valorMaximo, qualidadeMinima, status) {
    let resultado = 0;
    if (status === 'disponível' || status === true) {
        carrinho = arr.filter(elemento => {
            return elemento.valor >= valorMinimo && elemento.valor <= valorMaximo && (elemento.qualidade * 10) > qualidadeMinima && elemento.status === true
        })
        if (carrinho.length > 0) {
            for (elemento of carrinho) {
                console.log(`Produto: ${elemento.nome} - Preço: ${elemento.valor}`)
            }
            carrinho.forEach(elemento => {
                resultado += elemento.valor;
            })
            console.log(`O valor total de todos os produtos filtrados é de R$ ${resultado}`)
        } else {
            console.log('Nenhum produto localizado com os filtros selecionados')
        }
    } else if (status === 'indisponível' || status === false) {
        carrinho = arr.filter(elemento => {
            return elemento.valor >= valorMinimo && elemento.valor <= valorMaximo && (elemento.qualidade * 10) > qualidadeMinima && elemento.status === false
        })
        if (carrinho.length > 0) {
            for (elemento of carrinho) {
                console.log(`Produto: ${elemento.nome} - Preço: ${elemento.valor}`)
            }
            carrinho.forEach(elemento => {
                resultado += elemento.valor;
            })
            console.log(`O valor total de todos os produtos filtrados é de R$ ${resultado}`)
        } else {
            console.log('Nenhum produto localizado com os filtros selecionados')
        }
    }
}


filtrar(produtos, 482, 1600, 60, 'disponível');