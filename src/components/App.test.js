import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

afterEach( cleanup );

describe( 'App Component', () => {
  it( 'renders a PokeList component', () => {
    const { getByTitle } = render( <App /> );
    const list = getByTitle( 'PokeList' );
    expect( list ).toBeInTheDocument();
  } );
} );
