const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];




function PokemonCard (){
    let Pokemon = pokemonList[1]
    return <figure>
        {typeof Pokemon.imgSrc !== "undefined" ? <img src= {Pokemon.imgSrc}/> : <p>???</p>}
        <figcaption>{Pokemon.name}</figcaption>
    </figure>
};



export default PokemonCard