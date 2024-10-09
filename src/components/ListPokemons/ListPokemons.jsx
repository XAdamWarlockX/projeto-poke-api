import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ListPokemons.css'
// import axios from "axios";
// import { useQuery } from "react-query";

// Pegando as urls para fazer fetch dos pokemons
const getPokemons = async (page) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`)
    const a = await response.json() // nome da variável temporaria
    console.log(a) // console pra visualizar o que esta sendo retornado
    return a
}

getPokemons()

// Fazendo fetch de cada pokemon com as urls retornadas
const getPokemon = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

const ListPokemons = () => {

    // Definindo a quantida de pokemons para buscar clicando no botão
    const numberOfPokemons = 10

    // Essa variável serve para armazenar a quantidade atual de pokemons que estam na tela (se tiver 20 pokemons ele vai dizer para a função que os pokemons ate a numeração 20 ja foram adicionados, fazendo com que ele busque pelos pokemons que vem depois dessa numeração e assim por diante).
    const [offSet, setOffSet] = useState(0)

    // console.log(offSet)

    // Estado inicial da lista de pokemons
    const [pokemons, setPokemons] = useState([])

    console.log(pokemons)

    // Função que carrega os 10 pokemons
    const loadTenPokemons = async () => {
        setOffSet(offSet + numberOfPokemons)
    }

    useEffect(() => {
        const fetchPokemons = async () => {
            // Armazenando o retorno do "getPokemons"
            const pokes = await getPokemons(offSet);

            // Armazendo as urls dos pokemons retornadas
            const pokemonsUrls = pokes.results.map(pokemon => pokemon.url);

            // Fazendo fetch na url dos 10 pokemons de forma individual
            const pokemonsPromises = pokemonsUrls.map(async (pokemonUrl) => await getPokemon(pokemonUrl));

            // Armazenando o fetch de todos os pokemons
            const allPokemons = await Promise.all(pokemonsPromises);

            console.log(allPokemons)

            // Definindo o estado atual da lista de pokemons?
            // juntando todos os itens da variável pokemons com a variável allPokemons em um unico array.
            setPokemons([...pokemons, ...allPokemons])
            // Esse setPokemons esta definindo a união desse itens na variável pokemons original.
        }
        fetchPokemons();
    }, [offSet]) // estado inicial com valor de 0

    return (
        <>
            <ul>
                {pokemons.map((pokemon, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/pokemon/${pokemon.name}`}>
                                <img src={pokemon.sprites.front_default} alt="Pokemon" />
                                <p>{pokemon.name}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <button onClick={loadTenPokemons}>Carregar mais Pokemons</button>
        </>
    )
}

export { ListPokemons }

// let namePokemons = data.results.map((name) => {
//     return name.name
// })

// console.log(namePokemons)


// const getPokemons = async () => {
//     const names = await data.results[length].name
//     console.log(names)
// }

// getPokemons()


// {/* <li>
//     <p>{namePokemons[0]}</p>
// </li> */}
// <p>a</p>
//         <img src={data.sprites?.front_default} alt="Pokemon" />
