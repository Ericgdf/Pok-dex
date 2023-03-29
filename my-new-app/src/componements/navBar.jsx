import PokemonCard from "./PokemonCard.jsx";
import { pokemonList } from "../App.jsx";




function NavBar({count, setCount}){
    const next = () => {
        (setCount(count + 1)) 
      }
    
      const previous = () =>{
        (setCount(count -1))
      }
    return (
        <div>
        {count > 0 ? <button onClick={previous}>Previous</button> : <button>First Element</button>}  
        {count < (pokemonList.length  -1) ? <button onClick={next}>Next</button> : <button>Last Element</button> }
    </div>);
}

export default NavBar
