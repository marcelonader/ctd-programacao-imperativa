function Aluno (nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    this.calcularMedia = function(){
        return this.notas.reduce((a, b) => a + b) / this.notas.length;
    };
    this.faltas = function (){
        this.quantidadeFaltas++;
    }
}

module.exports = Aluno;

