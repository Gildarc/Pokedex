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
function exibirEletricos(){
    axios.get(url).then(response => {
        const pokemons = response.data
        if (pokemons.type == "eletric"){
            const pokemonsEletricos = pokemons
            console.log(pokemonsEletricos)
        }
    })
}

exibirEletricos()