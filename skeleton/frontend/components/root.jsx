import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ItemDetailContainer from './pokemon/item/item_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={ PokemonIndexContainer }>
          <IndexRoute component={ PokemonFormContainer } />
          <Route path="pokemon/:id" component={ PokemonDetailContainer }>
            <Route path="items/:itemId" component={ ItemDetailContainer } />
          </Route>
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
