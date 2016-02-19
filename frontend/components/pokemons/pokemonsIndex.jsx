var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonsIndex = React.createClass({

  getInitialState: function () {
    return {pokemons: PokemonStore.all()};
  },

  componentDidMount: function () {
    this.pIndexToken = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.pIndexToken.remove();
  },

  _onChange: function(){
    this.setState({pokemons: PokemonStore.all()});
  },
  render: function(){

    var pokemonList = this.state.pokemons.map( function (pokemon){
        return  <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>;
    });

    // debugger;
    return (
      <div>
        <ul>
          {pokemonList}
        </ul>
      </div>
    );
  }

});

module.exports = PokemonsIndex;
