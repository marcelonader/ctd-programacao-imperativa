const listaAlunos = []

const Aluno = require('./funcao-construtora-alunos');

listaAlunos.push(new Aluno('José', 2, [10, 9, 7.5, 8]));
listaAlunos.push(new Aluno('Maria', 1, [6, 5, 7, 8]));
listaAlunos.push(new Aluno('João', 5, [8.5, 4, 0, 10]));
listaAlunos.push(new Aluno('Paulo', 3, [7.7, 7.7, 7.7, 7.7]));

console.log(listaAlunos);


module.exports = { listaAlunos };