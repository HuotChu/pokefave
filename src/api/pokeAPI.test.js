import pokeAPI from './pokeAPI';

describe( 'pokeAPI Tests', () => {
  it( 'fetches a list of records', async () => {
    const list = await pokeAPI.getList();
    expect( list ).toHaveLength( 20 );
  } );

  it( 'returns id, image, and shiny props for each pokemon', async () => {
    const list = await pokeAPI.getList();
    list.forEach( ( entry ) => {
      expect( entry ).toHaveProperty( 'id', expect.any( String ) );
      expect( entry ).toHaveProperty( 'image', expect.any( String ) );
      expect( entry ).toHaveProperty( 'shiny', expect.any( String ) );
    } );
  } );
} );