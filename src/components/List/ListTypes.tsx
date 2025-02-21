interface Pokemons {
    results: InfosPokemon[]
}

interface PokesResponse {
    data: Pokemons
}

interface PokeResponse {
    data: Pokemon
}

interface InfosPokemon {  
    name: string
    url: string
}

interface Pokemon {
    name: string
    sprites: {
        front_default: string
    }
}

export { PokesResponse, PokeResponse, Pokemons, Pokemon }