import React from 'react';

const ListContext = React.createContext( {
  activeList: [],
  updateActive: () => {}
} );

export default ListContext;
