import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import { ThemeTogglerButton, Button } from "../theme-toggler-button/theme-toggler-button";
import axios from "axios";
import styled from "styled-components"

const getPokemons = async (page) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`)
    return await response.data
}

const getPokemon = async (url) => {
    const response = await axios.get(url)
    return await response.data
}

const ListPokemons = () => {

    const [offSet, setOffSet] = useState(0)

    const [pokemons, setPokemons] = useState([])

    const { theme } = useContext(ThemeContext)

    const numberOfPokemons = 10

    const loadTenPokemons = () => {
        setOffSet(offSet + numberOfPokemons)
    }

    useEffect(() => {
        const fetchPokemons = async () => {
        
            const pokes = await getPokemons(offSet);

            const pokemonsUrls = pokes.results.map(pokemon => pokemon.url);

            const pokemonsPromises = pokemonsUrls.map(async (pokemonUrl) => await getPokemon(pokemonUrl));

            const allPokemons = await Promise.all(pokemonsPromises);

            setPokemons([...pokemons, ...allPokemons])
        }
        fetchPokemons();
    }, [offSet])

    return (
        <Main style={{ backgroundColor:theme.background }}>
            
            <ThemeTogglerButton/>

            <Ul>
                {pokemons.map((pokemon, index) => {
                    return (
                        <Li key={index}>
                            <Link to={`/pokemon/${pokemon.name}`}>
                                <Img src={pokemon.sprites.front_default} alt="Pokemon" />
                                <p>{pokemon.name}</p>
                            </Link>
                        </Li> 
                    )
                })}
            </Ul>

            <Button onClick={loadTenPokemons}>Load more Pokemons</Button>
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
    padding: 50px;

    @media (max-width: 1025px){
        margin: 50px;
    }
`

const Ul = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0 50px;
    border-radius: 20px;
    width: 80%;
`

const Li = styled.li`
    text-align: center;
    font-size: 20px;
    border: solid 2px black;
    border-radius: 20px;
    margin: 10px;
    padding: 15px;
    background-color: cornflowerblue;
`

const Img = styled.img`
    width: 150px;
`

export { ListPokemons }