import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import { ThemeTogglerButton, Button } from "../Theme/Theme-toggler-button";
import { Pokemon, Moves, Abilities, PokeResponse, AbiliResponse } from "./DetailsTypes"
import { Main, Section, Div, Title, Img, Li } from "./DetailsSyles"
import axios from "axios";

const getPokemon = async (name: string): Promise<Pokemon> => {
    const response: PokeResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return response.data
}

const abilitiesPokemon = async (url: string): Promise<Abilities> => {
    const response: AbiliResponse = await axios.get(`${url}`)
    return response.data
}

const DetailsPokemons = () => {
    const [pokemon, setPokemon] = useState<Pokemon>()

    const [moves, setMoves] = useState<Moves[]>([])
    
    const [abilities, setAbilities] = useState<Abilities[]>([])

    const { theme } = useContext(ThemeContext)

    const { name } = useParams<string>()

    useEffect(() => {
        async function fetchPokemon(): Promise<void> {
            const poke = await getPokemon(name)
            setPokemon(poke);

            const allMoves = poke.moves

            const fiveMoves = allMoves.slice(0, 5)
            setMoves(fiveMoves);

            const urlAbilities: string[] = poke.abilities.map(ability => ability.ability.url)

            const abils: Promise<Abilities>[] = urlAbilities.map(async (abilityUrl) => await abilitiesPokemon(abilityUrl))

            const abilitiesPokemons: Abilities[] = await Promise.all(abils)
            setAbilities(abilitiesPokemons);
        }
        fetchPokemon()
    }, [name])

    return (
        <Main style={{ backgroundColor: theme.background }}>

            <ThemeTogglerButton />

            <Section>
                <Div>
                    <Img src={pokemon?.sprites?.front_default} alt="Pokemon" />
                    <Title>{pokemon?.name}</Title>
                </Div>

                <Div>
                    <Title>Type(s)</Title>
                    <ul>
                        {
                            pokemon?.types.length > 1 ? pokemon?.types.map((type, index) =>
                                <Li key={index}>{type.type.name}</Li>) : <Li>{pokemon?.types[0].type.name}</Li>
                        }
                    </ul>
                </Div>

                <Div>
                    <Title>5 Movements</Title>
                    <ul>
                        {moves?.map((move, index) => {
                            return (
                                <Li key={index}>
                                    {move.move.name}
                                </Li>
                            )
                        })}
                    </ul>
                </Div>

                <Div>
                    <Title>Abilities</Title>
                    <ul>
                        {abilities?.map((ability, index) => {
                            return (
                                <Li key={index}>
                                    <h4>Ability: {ability.name}</h4>
                                    <p>{ability.effect_entries[1].effect
                                    }</p>
                                </Li>
                            )
                        })}
                    </ul>
                </Div>
            </Section>

            <Link to={"/"}>
                <Button>Back to Pokemon list</Button>
            </Link>
        </Main>
    )
}

export { DetailsPokemons }