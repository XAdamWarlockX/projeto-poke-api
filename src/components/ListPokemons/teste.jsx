// import { useQuery } from "react-query";
// import './ListPokemons.css'
import { useState, useEffect } from "react";
// import axios from "axios";

const getPokemons = async (page) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`)
    return await response.json()
}

const getPokemon = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

const Home = () => {

    const loadPokemons = 10
    const [offSet, setOffSet] = useState(0)
    const [pokemons, setPokemons] = useState([])

    const loadTenPokemons = async () => {
        setOffSet(offSet + loadPokemons)
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

    // const ListPokemons = async () => {
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
    //     return await response.json()
    // }

    // const { data } = useQuery("data", ListPokemons,{
    //     refetchOnWindowFocus: false
    // })

    // const urlPokemons = data.results.map((url) => {
    //     return url.url
    // })

    // console.log(urlPokemons)

    // const Pokemons = async () => {
    //    const response = await fetch(`${urlPokemons.map((pk) => {
    //     return pk
    //    })}`)
    //    console.log(response)
    // }

    // Pokemons()

    // console.log(data)

    // const Pokemons = async () => {
    //     const response = await fetch(`${data.results[0].url}`)
    //     console.log(response)
    //     return response.json()
    // }

    // Pokemons()

    return(
        <ul>
            {data.results.map((pokemon, index) => {
                return (
                    <li key={index}>
                        <p>{pokemon.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

// export { Home }