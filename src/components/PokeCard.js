import './PokeCard.css';
import React, { PureComponent } from 'react';

class PokeCard extends PureComponent {
  static defaultProps = {
    pokemon: {
      id: 'pokemon',
      image: '',
      shiny: ''
    }
  }

  constructor( props ) {
    super( props );
    const { id, image, shiny } = props.pokemon;
    this.toggleFavorite = () => this.setState( { favorite: !this.state.favorite } );
    this.state = {
      favorite: false
    };
    this.id = id.replace( /(^[a-z])/, ( m, m1 ) => m1.toUpperCase() );
    this.image = image;
    this.shiny = shiny;
  }

  render() {
    const { favorite } = this.state;
    const { id, image, shiny, toggleFavorite } = this;
    return (
      <div className={`${favorite ? 'yellow' : 'grey'} card`} title="PokeCard">
        {favorite && <span className="ui inverted left corner label" title="favorite"><i className="red heart icon"></i></span>}
        <div className={`ui inverted ${favorite ? 'yellow' : 'grey'} vertical center aligned segment`}>
          <img className="ui centered small image" alt={id} src={favorite ? shiny : image} />
        </div>
        <div className="content">
          <h2 className="center aligned header">{id}</h2>
        </div>
        <div className="extra content">
          <div className="center aligned link-text pointer" onClick={toggleFavorite}>
            <i className={`${favorite ? 'red heart' : 'like'} icon`}></i>
            {`${favorite ? 'Remove' : 'Add'} Favorite`}
          </div>
        </div>
      </div>
    );
  }
};

export default PokeCard;
