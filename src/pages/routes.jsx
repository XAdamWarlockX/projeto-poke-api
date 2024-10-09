import { BrowserRouter, Routes, Route  } from "react-router-dom"
import { Pokemons } from "./routeListPokemons"
import { Pokemon } from "./routeDetailsPokemons"

const AppRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Pokemons />} />
                <Route exact path="/pokemon/:name" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>    
    )
}

export { AppRoute }