import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import { ThemeTogglerButton, Button } from "../theme-toggler-button/theme-toggler-button";
import axios from "axios";
import styled from "styled-components"

const getPokemon = async (name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await response.data
}

const abilitiesPokemon = async (url) => {
    const response = await axios.get(`${url}`)
    return await response.data
}

const DetailsPokemons = () => {
    
    const [pokemon, setPokemon] = useState()
    
    const [moves, setMoves] = useState()
    
    const [abilities, setAbilities] = useState()

    const { theme } = useContext(ThemeContext)

    const { name } = useParams()

    useEffect(() => {
        async function fetchPokemon() {
            const poke = await getPokemon(name)
            setPokemon(poke);

            const allMoves = poke.moves

            const fiveMoves = allMoves.slice(0, 5)
            setMoves(fiveMoves);

            const urlAbilities = poke.abilities.map(ability => ability.ability.url)

            const abils = urlAbilities.map(async (abilityUrl) => await abilitiesPokemon(abilityUrl))

            const abilitiesPokemons = await Promise.all(abils)
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

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 80px 200px;
    padding: 50px 0;
    
    @media (max-width: 1025px){
        margin: 50px;
    }
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    padding-bottom: 30px;
    background-color: cornflowerblue;
    width: 80%;
    border: solid 2px black;
    border-radius: 20px;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 15px;
    border-radius: 20px;
`

const Title = styled.h2`
    text-align: center;
    font-size: 26px;
`

const Img = styled.img`
    width: 250px;
`

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 12px;
    border-radius: 10px;
    font-size: 20px;
`

export { DetailsPokemons }