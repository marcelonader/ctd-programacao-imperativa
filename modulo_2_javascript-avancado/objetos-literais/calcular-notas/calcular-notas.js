// Crie o objeto de aluno, que consistirá nas seguintes propriedades básicas:

// * Nome
// * Número do arquivo
// * Lista de notas

// Gostaríamos de calcular a média do aluno e se o aluno foi aprovado com base na nota de aprovação que será dada. Para este exercício, vamos deixar você pensar sobre todos os métodos e propriedades que podem ser necessários para que nosso programa funcione corretamente da maneira solicitada.


// Opção 1
let aluno = {
    nome: 'Marcelo',
    numeroArquivo: 123,
    listaNotas: [8, 7.5, 6, 5.5],
    situacao: function(){return this.media() >= 6 ? 'aprovado' : 'reprovado'},
    media: function(){
        return (this.listaNotas.reduce((prev, current) => prev + current)) / (this.listaNotas.length);
    },

}

console.log(aluno.situacao())

//Opção 2

let aluno = {
    nome: 'Marcelo',
    numeroArquivo: 123,
    listaNotas: [8, 7.5, 6, 5.5],
    media: function(){
        return (this.listaNotas.reduce((prev, current) => prev + current)) / (this.listaNotas.length);
    },

}

function situacaoFinal(aluno){
    return aluno.media() >= 6 ? 'aprovado' : 'reprovado'
}

console.log(situacaoFinal(aluno))

//Opção 3

let aluno = {
    nome: 'Marcelo',
    numeroArquivo: 123,
    listaNotas: [8, 7.5, 6, 5.5],
    media: function(){
        return (this.listaNotas.reduce((prev, current) => prev + current)) / (this.listaNotas.length);
    },

}

console.log(aluno.media() >= 6 ? 'aprovado' : 'reprovado')