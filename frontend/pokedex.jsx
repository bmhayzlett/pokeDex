var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var App = require('./components/App');
var PokemonDetail = require('./components/pokemons/pokemonDetail');

var ApiUtil = require('./util/apiUtil');
var PokemonActions = require('./actions/pokemonActions');
var PokemonStore = require('./stores/pokemon');

var routes = (
  <Route component={App} path="/">
    <Route component={PokemonDetail} path="pokemon/:pokemonId"></Route>
  </Route>
);

document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('#root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
