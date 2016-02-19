var PokemonActions = require('../actions/pokemonActions');

var ApiUtil = {



  fetchAllPokemons: function(){
    $.ajax({
      url: '/api/pokemon/',
      type: 'GET',
      success: function(pokemons){
        return PokemonActions.receiveAllPokemons(pokemons);
      }

    });

  },

  fetchOnePokemon: function(id){
    $.ajax({
      url: '/api/pokemon/' + id,
      type: 'GET',
      success: function(pokemon){
        return PokemonActions.receiveSinglePokemon(pokemon);
      }
    });
  }

};
window.ApiUtil = ApiUtil;
module.exports = ApiUtil;


// if(found){
//       $.ajax({
//         url: '/api/todos/' + id,
//         type: 'DELETE',
//         success: function(result){
//           console.log(result);
//           _todos = _todos.filter(function(el){
//             return el.id !== id;
//           });
//           TodoStore.changed();
//         }
//       });
//     }
