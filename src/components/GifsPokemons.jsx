import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifsPokemons = ({ pokemonIdentified }) => {
  const { data } = useFetchGifs(pokemonIdentified);

  return (
    <>
      {data.map((img) => {
        return (
          <div className="w-96 max-h-56" key={img.id}>
            <img
              src={img.url}
              alt={img.title}
              className="object-fill h-full w-full "
            />
          </div>
        );
      })}
    </>
  );
};
