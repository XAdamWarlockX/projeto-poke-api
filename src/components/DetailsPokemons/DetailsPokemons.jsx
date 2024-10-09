import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const getPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.json()
    // console.log(a)
    return pokemon
}

const abilitiesPokemon = async (url) => {
    const response = await fetch(`${url}`)
    const abilities = await response.json()
    return abilities
}

const DetailsPokemons = () => {

    const [pokemon, setPokemon] = useState()

    const [moves, setMoves] = useState()

    const [abilities, setAbilities] = useState()

    console.log(pokemon)

    // console.log(moves)

    // console.log(abilities)

    const { name } = useParams()

    useEffect(() => {
        async function fetchPokemon() {
            const poke = await getPokemon(name)
            setPokemon(poke)
            
            const allMoves = poke.moves

            const fiveMoves = allMoves.slice(0, 5)
            // console.log(fiveMoves)
            setMoves(fiveMoves)

            const urlAbilities = poke.abilities.map(ability => ability.ability.url)

            // console.log(urlAbilities)

            const abils = urlAbilities.map(async (abilityUrl) => await abilitiesPokemon(abilityUrl))

            const abilitiesPokemons = await Promise.all(abils);
            setAbilities(abilitiesPokemons)
        }
        fetchPokemon()
    }, [name])

    return (
        <section>
            <div>
                <img src={pokemon.sprites.front_default} alt="Pokemon" />
                <h2>{pokemon.name}</h2>
            </div>

            <div>
                <h3>5 Movimentos</h3>
                <ul>
                    {moves.map((move, index) => {
                        return (
                            <li key={index}>
                                {move.move.name}
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div>
                <h3>Habilidades</h3>
                <ul>
                    {abilities.map((ability, index) => {
                        return (
                            <li key={index}>
                                <p>{ability.name}</p>
                                <p>{ability.effect_entries[1].effect
                                }</p>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div>
                <h3>Tipo</h3>
                <p>{pokemon.types[0].type.name}</p>
            </div>
        </section>
    )
}

export { DetailsPokemons }