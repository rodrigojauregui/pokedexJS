
export const getPokemon = async ( pokemon ) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${ pokemon ? encodeURI(pokemon): 'pikachu'}/`
  const resp = await fetch( url );
  const {height, id, name, weight, sprites } = await resp.json();
  const data = {
    height,
    id, 
    name, 
    weight, 
    sprites
  }


  return data
}


