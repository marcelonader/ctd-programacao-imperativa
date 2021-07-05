const estudantes = require('./modulos/estudantes');
const Aluno = require('./modulos/funcao-construtora-alunos');

const curso = {
    nomeCurso: 'CTD',
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes.listaAlunos,
    adicionarAluno: function (aluno) {
        this.listaEstudantes.push(aluno);
    },
    verificaAprovacao: function (aluno) {
        let indice;
        this.listaEstudantes.forEach((elemento, i) => {
            if (elemento.nome == aluno) {
                indice = i
            }
        })
        if (this.listaEstudantes[indice].calcularMedia() >= this.notaAprovacao && this.listaEstudantes[indice].quantidadeFaltas < this.faltasMaximas) {
            return true
        } else if (this.listaEstudantes[indice].calcularMedia() >= (this.notaAprovacao *= 0.1) && this.listaEstudantes[indice].quantidadeFaltas == this.faltasMaximas) {
            return true;
        } else {
            return false;
        }
    },
    verificaAlunosAprovados: function () {
        return this.listaEstudantes.map(elemento => {
            return this.verificaAprovacao(elemento.nome)
        })
    }
}

// console.log(curso.listaEstudantes)
// curso.adicionarAluno(new Aluno('Rodrigo', 9, [10, 8, 7, 2]))
// console.log(curso.listaEstudantes)

// console.log(curso.verificaAprovacao('Rodrigo'))

// console.log(curso.verificaAlunosAprovados())