var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var ApiUtil = require('../../util/apiUtil');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return {pokemonDetail: this.getStateFromStore};
  },

  getStateFromStore: function () {
    var pokemonId = parseInt(this.props.params.pokemonId);
    var pokemon = PokemonStore.one(pokemonId);
    if(pokemonId){
      return pokemon;
    } else {
      return undefined;
    }
  },
  componentDidMount: function(){
    this.pIndexToken = PokemonStore.addListener(this._onChange);
    ApiUtil.fetchOnePokemon(parseInt(this.props.params.pokemonId));
  },
  componentWillUnmount: function(){
    this.pIndexToken.remove();
  },
  _onChange: function(){
    this.setState(this.getStateFromStore());
  },

  componentWillReceiveProps: function(nextProps){
    return ApiUtil.fetchOnePokemon(parseInt(nextProps.params.pokemonId));
  },

  render: function(){

    if (this.state.pokemonDetail !== undefined) {
      var returned = <div className="pokemon-detail-pane">
        <div className="detail">
          <p>{this.state.pokemonDetail.name}</p>
          <p>{this.state.pokemonDetail.attack}</p>
          <p>{this.state.pokemonDetail.defense}</p>
          <p>{this.state.pokemonDetail.poke_type}</p>
          <p>{this.state.pokemonDetail.moves}</p>
          <img src={this.state.pokemonDetail.image_url}/>
        </div>
      </div>;
    } else {
      returned = null;
    }

    return (
      <div>
        {returned}
      </div>
    );
  }
});

module.exports = PokemonDetail;
