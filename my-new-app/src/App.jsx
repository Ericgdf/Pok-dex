import MyTitle from "./MyTitle.jsx";
import PokemonCard from "./componements/PokemonCard.jsx";
import { useState } from "react";
import NavBar from "./componements/navBar.jsx";

export const pokemonList = [
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
  return (<div>
  <PokemonCard name={pokemonList[count].name} src={pokemonList[count].imgSrc}/>
  <NavBar count ={count} setCount={setCount} index = {pokemonList.lenthg-1}/>
  </div>)
}

export default App

