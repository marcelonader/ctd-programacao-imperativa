
//Solução:


const M = require('./modulos/microondas')

console.table(M.microondas.menuDePratos)


M.microondas.executar('macarrão') //tempo padrão
M.microondas.executar('macarrão', 5) //tempo insuficiente
M.microondas.executar('macarrão', 17) //tempo acima do dobro
M.microondas.executar('macarrão', 25) //tempo acima do triplo
M.microondas.executar('lasanha')
