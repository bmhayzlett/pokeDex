var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');


var _pokemons = {};
var PokemonStore = new Store(Dispatcher);

PokemonStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      resetPokemon(payload.pokemon);
      break;
  }
};

PokemonStore.all = function(){
  var pokeArray = [];
  for(var key in _pokemons){
    if(_pokemons.hasOwnProperty(key)){
      pokeArray.push(_pokemons[key]);
    }
  }
  return pokeArray;

};

PokemonStore.one = function(id){
  return _pokemons[id];
};

function resetPokemons(pokemons){ //pokemons is an array
  _pokemons = {};
  pokemons.forEach(function(pokemon, index){
    _pokemons[index] = pokemon;
  });
  PokemonStore.__emitChange();
}


function resetPokemon(pokemon){
  _pokemons[pokemon.id] = pokemon;
  PokemonStore.__emitChange();
}

window.PokemonStore = PokemonStore;

module.exports = PokemonStore;
