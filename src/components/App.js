import './App.css';
import React, { PureComponent } from 'react';
import pokeAPI from '../api/pokeAPI';
import Pokemon from '../store/Pokemon';
import ListContext from '../contexts/list-context';
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
    pokeAPI.getList().then( list => {
      Pokemon.store( list );
      this.updateActive( list );
    } );
  }

  render() {
    const { state } = this;
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <ListContext.Provider value={state}>
          <PokeList />
        </ListContext.Provider>
      </div>
    );
  }
}

export default App;
