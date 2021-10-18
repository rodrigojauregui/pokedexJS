import React, { useState } from "react";
import { PokeImages } from "./components/PokeImages";
import { PokeSearch } from "./components/PokeSearch";
import { PokedexComponents } from "./components/PokedexComponents";
import { GifsPokemons } from "./components/GifsPokemons";

export const PokemonApp = () => {
  const [pokemonIdentified, setPokemonIdentified] = useState('');

  return (
    <>
      {/* <head>
        <link
          href="http://fonts.cdnfonts.com/css/pokemon-solid"
          rel="stylesheet"
        />
      </head> */}
      <div>
        <div className="mx-36  flex justify-center relative ">
          <PokeImages />
        </div>

        <div className="mx-36  mt-8 pt-8 grid grid-cols-2 border-t-2">
          <PokedexComponents pokemonIdentified={pokemonIdentified ? pokemonIdentified : ""} />

          <div className="flex flex-col">
            <PokeSearch setPokemonIdentified={setPokemonIdentified} />

            <div className=" flex justify-center  mt-4">
              <GifsPokemons
                pokemonIdentified={pokemonIdentified ? pokemonIdentified : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
