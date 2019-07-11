import React from 'react';
import SortButton from './SortButton';

const Header = () => {
  return (
    <div className="ui red inverted segment" style={{ width: '80%', marginLeft: '10%' }} >
      <div className="ui two column stackable center aligned grid">
        <div className="middle aligned row">
          <div className="column" style={{ paddingLeft: '10%' }}>
            <h2 className="ui yellow inverted header">
              <i className="github alternate icon"></i>
              <div className="content">
                <span className="title">Pokéfave</span>
                <div className="sub header">Manage your favorite Pokémon</div>
              </div>
            </h2>
          </div>
          <div className="column">
            <SortButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
