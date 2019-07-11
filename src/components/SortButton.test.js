import React, { PureComponent } from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListContext from '../contexts/list-context';
import Pokemon from '../store/Pokemon';
import SortButton from './SortButton';

const mockList = [
  { id: 'c' },
  { id: 'a' },
  { id: 'b' }
];

Pokemon.store( mockList );

afterEach( cleanup );

describe( 'SortButton Component', () => {
  it( 'toggles sort state', () => {
    const { queryByText } = render( <SortButton /> );
    let button = queryByText( 'Apply Sort' );
    expect( button ).toBeInTheDocument();
    button.click();
    button = queryByText( 'Remove Sort' );
    expect( button ).toBeInTheDocument();
  } );

  it( 'sorts the Pokemon list alphabetically', () => {
    let state = {};
    let activeList = [];
    const updateActive = ( activeList ) => {
      state.activeList = activeList;
    };
    state = { activeList, updateActive };
    const { queryByText } = render( 
      <ListContext.Provider value={state}>
        <SortButton />
      </ListContext.Provider>
     );
    queryByText( 'Apply Sort' ).click();
    render(
      <ListContext.Provider value={state}>
        <ListContext.Consumer>
          { value => expect( value.activeList ).toMatchObject( [
            { id: 'a' },
            { id: 'b' },
            { id: 'c' }
          ] ) }
        </ListContext.Consumer>
      </ListContext.Provider>
    );
  } );
} );
