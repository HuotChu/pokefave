import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PokeList from './PokeList';

afterEach( cleanup );

describe( 'PokeList Component', () => {
  it( 'renders a PokeCard component', () => {
    const { getByTitle } = render( <PokeList /> );
    const card = getByTitle( 'PokeCard' );
    expect( card ).toBeInTheDocument();
  } );
} );
