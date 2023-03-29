import PokemonCard from "./PokemonCard.jsx";
import { pokemonList } from "../App.jsx";




function NavBar({count, setCount, pokeName, index}){

    const goTo = () => {
        setCount( index)
    }
    return (

        <button className="log" onClick={goTo}>{pokeName} </button>
    
    ) 
}

export default NavBar
