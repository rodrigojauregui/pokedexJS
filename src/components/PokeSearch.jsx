import React, { useState } from "react";

export const PokeSearch = ({setPokemonIdentified}) => {
  
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue)
    setPokemonIdentified(cat => [inputValue])
    setInputValue('')
  };

  return (
    <div className="flex flex-col items-center ">
      <h1 className="poke-font text-5xl text-center mt-8 text-red-600 ">
        BUSCA UN POKEMÓN
      </h1>

      <div className="mt-10    w-full flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-4 w-80 rounded-lg h-10 border-blue-600  pl-5"
            placeholder=" "
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};
