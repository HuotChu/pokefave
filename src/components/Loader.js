import React, { PureComponent } from 'react';

class Loader extends PureComponent {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">Catching Pokémon...</div>
      </div>
    );
  }
}

export default Loader;