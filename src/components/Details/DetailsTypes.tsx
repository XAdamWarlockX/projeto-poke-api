interface Pokemon {
    abilities: AbilitiesUrl[]
    moves: Moves[]
    name: string
    sprites: {
        front_default: string
    }
    types: Types[]
}

interface AbilitiesUrl {
    ability: {
        url: string
    }
}

interface Moves {
    move: {
        name: string
    }
}

interface Types {
    type: {
        name: string
    }
}

interface Abilities {
    name: string
    effect_entries: {
        effect: string
    }
}

interface PokeResponse {
    data: Pokemon
}

interface AbiliResponse {
    data: Abilities
}

export { Pokemon, Moves, Abilities, PokeResponse, AbiliResponse }