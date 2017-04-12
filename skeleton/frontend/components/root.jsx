import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={ PokemonIndexContainer }>
          <IndexRoute component={PokemonIndexContainer}/>
          <Route path="/pokemon/:id" component={PokemonDetailContainer}></Route>
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
