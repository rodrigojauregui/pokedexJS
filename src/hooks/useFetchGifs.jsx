
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (pokemon) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(pokemon)
      .then((imgs) => {
          setState({
            data: imgs,
            loading: false
          });
    });
  }, [pokemon]);

  return state;
};
