import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ListContext from '../contexts/list-context';
import PokeList from './PokeList';

afterEach( cleanup );

const state = {
  activeList: [
    {
      id: 'Bulbasaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
    },
    {
      id: 'Ivysaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png'
    }
  ]
};

describe( 'PokeList Component', () => {
  it( 'renders a list of PokeCard components', async () => {
    const { queryAllByTitle } = render(
      <ListContext.Provider value={state}>
        <PokeList />
      </ListContext.Provider>
    );
    const cards = queryAllByTitle( 'PokeCard' );
    expect( cards[ 0 ] ).toBeInTheDocument();
    expect( cards ).toHaveLength( 2 );
  } );
} );
