class Pokemon {
  static data = [];
  static store = ( values ) => this.data = this.data.concat( values );
  static list = () => Array.from( this.data );
}

export default Pokemon;
