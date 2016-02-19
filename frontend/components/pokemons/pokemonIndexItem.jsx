var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null,"/pokemon/" + this.props.pokemon.id, {});
  },

  render: function () {
    return (
      <div>
        <li className='poke-list-item' onClick={this.showDetail}>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.poke_type}</p>
        </li>
      </div>
    );
  }
});

module.exports = PokemonIndexItem;
