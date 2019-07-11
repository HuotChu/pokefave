import React, { PureComponent } from 'react';
import ListContext from '../contexts/list-context';
import PokeCard from './PokeCard';

class PokeList extends PureComponent {
  static contextType = ListContext;

  pokeCards = () => this.context.activeList.map( pokemon => <PokeCard key={pokemon.id} pokemon={pokemon} /> );

  render() {
    return (
      <div className='ui centered cards'>
        { this.pokeCards() }
      </div>
    );
  }
};

export default PokeList;
