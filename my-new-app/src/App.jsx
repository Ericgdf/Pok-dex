import MyTitle from "./MyTitle.jsx";
import PokemonCard from "./componements/PokemonCard.jsx";
import { useEffect, useState } from "react";
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
  useEffect(() => {alert("hello pokemon trainer :)")},[]); // renvoie message à l'ouverture du site
  {pokemonList[count].name === "pikachu" ? alert("pika pikachu") : ""}  // si pikachu apparait alors message

  return (
  <div> 
  <PokemonCard name={pokemonList[count].name} src={pokemonList[count].imgSrc}/>

  <ul> {pokemonList.map((pokemon, index) =>(
    <NavBar 
    count ={count}
    setCount={setCount}
    index = {index}
    key = {pokemon.name}
    pokeName={pokemon.name} 
    />
   
  ))}
  </ul>

  </div>) 
}
//<NavBar count ={count} setCount={setCount} /> //


export default App

