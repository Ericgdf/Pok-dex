import MyTitle from "./MyTitle.jsx";
import PokemonCard from "./componements/PokemonCard.jsx";
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [count, setCount] = useState(0); // count = la valeur retrouné setCount = l'action appliqué dessus useState(0) = ici la valeur initale sera de 0

  const next = () => {
    setCount(count + 1) 
  }

  const previous = () =>{
    setCount(count -1)
  }

  return (<div>
        <div>
            <PokemonCard name={pokemonList[count].name} src={pokemonList[count].imgSrc}/>
        </div>
      {count > 0 ? <button onClick={previous}>Previous</button> : <button>First Element</button>}
      {count < pokemonList.length - 1 ? <button onClick={next}>Next</button> : <button>Last Element</button> }
    </div>);
}

export default App;
