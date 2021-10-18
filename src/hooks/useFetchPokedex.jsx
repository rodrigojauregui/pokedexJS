
import { useState, useEffect } from "react";
import { getPokemon } from "../helpers/getPokemon";


export const useFetchPokedex = (pokemon) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });
  useEffect(() => {
    getPokemon(pokemon)
      .then( (pokes)=> {
        setState({
          data: pokes,
          loading: false
        });
      })
  }, [pokemon])


  return state;
}




