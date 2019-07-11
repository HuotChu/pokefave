import Pokemon from './Pokemon';

describe( 'Pokemon Data Store Tests', () => {
  it( 'stores a list of data', async () => {
    const { list, store } = Pokemon;
    expect( list() ).toHaveLength( 0 );
    store( [ 1, 2, 3 ] );
    expect( list() ).toHaveLength( 3 );
  } );
} );
