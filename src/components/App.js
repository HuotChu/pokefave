import React, { PureComponent } from 'react';
import pokeAPI from '../api/pokeAPI';
import PokeList from './PokeList';

class App extends PureComponent {
  constructor( props ) {
    super( props );
    this.updateActive = ( activeList ) => this.setState( { activeList } );
    this.state = {
      activeList: [],
      updateActive: this.updateActive
    };
  }

  componentDidMount() {
    pokeAPI.getList().then( list => this.updateActive( list ) );
  }

  render() {
    return (
      <PokeList />
    );
  }
}

export default App;
