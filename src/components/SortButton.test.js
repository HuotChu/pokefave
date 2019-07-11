import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import SortButton from './SortButton';

afterEach( cleanup );

describe( 'SortButton Component', () => {
  it( 'toggles sort state', () => {
    // ...
  } );

  it( 'sorts the Pokemon list alphabetically', () => {
    // ...
  } );
} );
