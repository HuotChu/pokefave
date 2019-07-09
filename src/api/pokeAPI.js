import axios from 'axios';

const api = axios.create( { baseURL: 'https://pokeapi.co/api/v2/' } );

async function getImageData ( pokeList = [] ) {
  const promises = pokeList.map( poke => api.get( `/pokemon-form/${poke.name}` ) );
  const imageArray = await axios.all( promises );
  return imageArray.map( res => res.data.sprites.front_default );
};

const pokeAPI = {
  getList: async () => {
    const list = await api.get( '/pokemon' );
    let results = list.data.results || [];
    if ( results.length ) {
      const images = await getImageData( results );
      images.forEach( ( img, index ) => {
        let res = results[ index ];
        results[ index ] = {
          id: res.name,
          image: img,
          shiny: img.replace( /(\/\d+\.png$)/, '/shiny$1' )
        };
      } );
    }
    return results;
  }
};

export default pokeAPI;