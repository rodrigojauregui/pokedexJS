import { useFetchPokedex } from "../hooks/useFetchPokedex";
import Pokedex from "../images/pokedex.png";

export const PokedexComponents = ({ pokemonIdentified }) => {

  
  const { data } = useFetchPokedex(pokemonIdentified);

  
  return (


    <div className="relative">
      <img src={Pokedex} alt="pokedex" width="600" className="relative" />
      <div className="w-48 h-36 border-4  absolute top-12 left-48 bg-white ">
        { <img src={ pokemonIdentified?data.sprites.front_default:''} alt="" width='150' className="m-auto"/> }
      </div>

      <div className="w-48 h-36 border-4 absolute top-64 left-48 bg-white">
        <div className="mt-4 ml-2">
          <h1> {pokemonIdentified? `name: ${data.name}`: 'name:' } </h1>
          <p> {pokemonIdentified? `id: ${data.id}`: 'id:' } </p>
          <p> {pokemonIdentified? `height: ${data.height}`: 'height:' } </p>
          <p> {pokemonIdentified? `weight: ${data.weight}`: 'weight:' } </p>
        </div>
      </div>
    </div>
  );
};

