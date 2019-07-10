import React, { PureComponent } from 'react';
import PokeCard from './PokeCard';

class PokeList extends PureComponent {
  render() {
    return (
      <div className='ui centered cards' title='PokeList'>
        <PokeCard />
      </div>
    );
  }
};

export default PokeList;
