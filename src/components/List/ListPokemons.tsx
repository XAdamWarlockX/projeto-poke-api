import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import { ThemeTogglerButton, Button } from "../Theme/Theme-toggler-button";
import { PokesResponse, PokeResponse, Pokemons, Pokemon } from "./ListTypes"
import { Main, Ul, Li, Img } from "./ListStyles"; 
import axios from "axios";

const getPokemons = async (page: number): Promise<Pokemons> => {
    const response: PokesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`)
    return response.data
}

const getPokemon = async (url: string): Promise<Pokemon> => {
    const response: PokeResponse = await axios.get(url)
    return response.data
}

const ListPokemons = () => {
    const [offSet, setOffSet] = useState<number>(0)

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    const { theme } = useContext(ThemeContext)

    const numberOfPokemons: number = 10

    const loadTenPokemons = (): void => {
        setOffSet(offSet + numberOfPokemons)
    }

    useEffect(() => {
        const fetchPokemons = async (): Promise<void> => {
            const pokes = await getPokemons(offSet);

            const pokemonsUrls: string[] = pokes.results.map(pokemon => pokemon.url);

            const pokemonsPromises: Promise<Pokemon>[] = pokemonsUrls.map(async (pokemonUrl) => await getPokemon(pokemonUrl));

            const allPokemons: Pokemon[] = await Promise.all(pokemonsPromises);

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

export { ListPokemons }