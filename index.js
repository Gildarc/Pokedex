const url = 'https://itinhuz.vercel.app/server/pokedex.json'
const axios = require('axios')

//Esse endpoint exibe todos os pokemons
function exibirtodos() {
    axios.get(url).then(response => {
        const pokemons = response.data

        console.log(pokemons)
    })
}
// ainda nao está pronto: Esse endpoint exibe todos os pokemons do tipo Eletrico
// Dica: usar um FOR para percorrer o array pokemons.
function exibirEletricos(){
    axios.get(url).then(response => {
        const pokemons = response.data
        if (pokemons.type == "eletric"){
            const pokemonsEletricos = pokemons
            console.log(pokemonsEletricos)
        }
    })
}

function exibirVelocidade(velocidade){
    axios.get(url).then(response => {
       const pokemons = response.data
       let velocidadeAcima = []
       for(let indice = 0; indice < pokemons.length; indice++){
            if(pokemons[indice].base.Speed >= velocidade){
                velocidadeAcima.push(pokemons[indice])
                console.log(velocidadeAcima)
            }
       }
    })   
}

exibirVelocidade(150)