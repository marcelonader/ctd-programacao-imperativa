let microondas = {
    menuDePratos: [
        {
            nome: 'pipoca', 
            tempoNecessarioPreparo: 10
        },
        {
            nome: 'macarrão', 
            tempoNecessarioPreparo: 8
        },
        {
            nome: 'carne', 
            tempoNecessarioPreparo: 15
        },
        {
            nome: 'feijão', 
            tempoNecessarioPreparo: 12
        },
        {
            nome: 'brigadeiro', 
            tempoNecessarioPreparo: 8
        }
    ],
    executar: function (prato, tempoEmSegundosOpcional){
        let tempoDefault = 0;
        switch (prato.toLowerCase()) {
            case 'pipoca':
                for(let i = 0; i < this.menuDePratos.length; i++){
                   if(this.menuDePratos[i].nome == prato.toLowerCase()){
                    tempoDefault = this.menuDePratos[i].tempoNecessarioPreparo
                   }
                }
                console.log(execMicroondas(tempoEmSegundosOpcional, tempoDefault, prato));
                break;
            case 'macarrão':
                for(let i = 0; i < this.menuDePratos.length; i++){
                    if(this.menuDePratos[i].nome == prato.toLowerCase()){
                     tempoDefault = this.menuDePratos[i].tempoNecessarioPreparo
                    }
                }
                console.log(execMicroondas(tempoEmSegundosOpcional, tempoDefault, prato));
                break;
            case 'carne':
                for(let i = 0; i < this.menuDePratos.length; i++){
                    if(this.menuDePratos[i].nome == prato.toLowerCase()){
                     tempoDefault = this.menuDePratos[i].tempoNecessarioPreparo
                    }
                }
                console.log(execMicroondas(tempoEmSegundosOpcional, tempoDefault, prato));
                break;
            case 'feijão':
                for(let i = 0; i < this.menuDePratos.length; i++){
                    if(this.menuDePratos[i].nome == prato.toLowerCase()){
                     tempoDefault = this.menuDePratos[i].tempoNecessarioPreparo
                    }
                }
                console.log(execMicroondas(tempoEmSegundosOpcional, tempoDefault, prato));
                break;
            case 'brigadeiro':
                for(let i = 0; i < this.menuDePratos.length; i++){
                    if(this.menuDePratos[i].nome == prato.toLowerCase()){
                     tempoDefault = this.menuDePratos[i].tempoNecessarioPreparo
                    }
                }
                console.log(execMicroondas(tempoEmSegundosOpcional, tempoDefault, prato));
                break;
            default:
                console.log(`Prato a ser preparado: ${prato[0].toUpperCase() + prato.substring(1)}`);
        }
    }
}


const execMicroondas = (tempoEmSegundosOpcional, tempoDefault, prato) => {
    //caso o usuário não estabeleça um tempo de preparo, será aplicado o tempo padrão pré-definido, aplicando-se as regras abaixo:
    if (tempoEmSegundosOpcional === null || tempoEmSegundosOpcional === undefined) {
        tempoEmSegundosOpcional = tempoDefault;
        console.log('Prato a ser preparado: ' + prato)
        console.log('Tempo pré-definido: ' + tempoEmSegundosOpcional)
        // for (let i = tempoSegundosOpcional; i >= 0; i--) {
        //     console.log(`Tempo restante para o preparo: ${i} segundos`)
        // }
        return 'Prato pronto, bom apetite!!! 😋 🍛' 
        
        //caso o usuário estabeleça um tempo de preparo, será aplicado o tempo definido por ele, aplicando-se as regras abaixo:
    } else {
        tempoEmSegundosOpcional = tempoEmSegundosOpcional
        console.log(`Prato a ser preparado: ${prato[0].toUpperCase() + prato.substring(1)}`)
        console.log('Tempo definido: ' + tempoEmSegundosOpcional)
        //Condição caso o tempo definido pelo usuário seja inferior ao tempo necessário de preparo.
        if (tempoEmSegundosOpcional < tempoDefault) {
            return 'Tempo insuficiente para o preparo do prato... 😐'
        //Condição caso o tempo definido pelo usuário seja maior ou igual ao tempo necessário de preparo, bem como não ultrapasse o dobro do tempo necessário ao preparo.
        } else if (tempoEmSegundosOpcional >= tempoDefault && tempoEmSegundosOpcional <= tempoDefault * 2) {
            return 'Prato pronto, bom apetite!!! 😋 🍛'
        //Condição caso o tempo definido pelo usuário ultrapasse o dobro do tempo necessário ao preparo e que não ultrapasse o triplo do tempo necessário ao preparo.
        } else if (tempoEmSegundosOpcional > tempoDefault * 2 && tempoEmSegundosOpcional <= tempoDefault * 3) {
            return 'A comida queimou 🙁'
        //Condição caso o tempo definido pelo usuário ultrapasse o triplo do tempo necessário de preparo.    
        } else if (tempoEmSegundosOpcional > tempoDefault * 3) {
            return 'Kabumm!!! 😫'
        }
    }
}

module.exports = {microondas}