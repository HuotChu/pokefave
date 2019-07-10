import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PokeCard from './PokeCard';

afterEach( cleanup );

describe( 'PokeCard Component', () => {
  it( 'toggles favorite state', () => {
    const { queryByText, queryByTitle } = render( <PokeCard /> );
    const card = queryByText( 'Add Favorite' );
    expect( card ).toBeInTheDocument();
    let isFavorite = queryByTitle( 'favorite' );
    expect( isFavorite ).not.toBeInTheDocument();
    card.click();
    isFavorite = queryByTitle( 'favorite' );
    expect( isFavorite ).toBeInTheDocument();
  } );
} );
