import { RECEIVE_POKEMON_DETAIL } from '../actions/pokemon_actions';

const pokemonDetailReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POKEMON_DETAIL:
      return action.pokemon;
    default:
      return state;
  }
};


export default pokemonDetailReducer;
