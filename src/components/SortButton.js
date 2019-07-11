import './SortButton.css';
import React, { PureComponent } from 'react';
import Pokemon from '../store/Pokemon';
import ListContext from '../contexts/list-context';

class SortButton extends PureComponent {
  static contextType = ListContext

  constructor( props ) {
    super( props );
    this.sortList = () => {
      const sort = this.state.sort === 'default' ? 'alpha' : 'default';
      let list = Pokemon.list();
      const sortedPokemon = sort === 'default' ? list : list.sort(
        ( poke1, poke2 ) => poke1.id > poke2.id ? 1 : poke1.id < poke2.id ? -1 : 0
      );
      this.setState( { sort } );
      this.context.updateActive( sortedPokemon );
    };
    this.state = {
      sort: 'default'
    };
  }

  render() {
    const { sort } = this.state;
    return (
      <button className="ui inverted right labeled icon button" onClick={this.sortList}>
        <i className={`right ${sort === 'default' ? 'sort alphabet down' : 'ban'} icon`}></i>
        {sort === 'default' ? 'Apply' : 'Remove'} Sort
      </button>
    );
  }
}

export default SortButton;
