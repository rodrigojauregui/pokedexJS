
export const getGifs = async (pokemon) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(pokemon)}&limit=1&api_key=DLvjXBVtW9JYDbl3AAftyvVBD5kSbE1X`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  //console.log(gifs);
  return gifs;
  
};