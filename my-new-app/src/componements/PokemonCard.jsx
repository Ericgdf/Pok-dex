import PropTypes from "prop-types"; // nécessaire pour utiliser prop-types

function PokemonCard ({name, src}){
    return <figure>
        {typeof src !== "undefined" ? <img src= {src}/> : <p>???</p>}
        <figcaption>{name}</figcaption>
    </figure>
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
} // ajouter une classe obligatoire au props + is Required rend obligatoire la props*/



export default PokemonCard