import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON_DETAIL = 'RECEIVE_POKEMON_DETAIL';
export const RECEIVE_NEW_POKEMON = 'RECEIVE_NEW_POKEMON';

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const requestAllPokemon = () => {
  return (dispatch) => {
    return (APIUtil.fetchAllPokemon()
      .then(res => dispatch(receiveAllPokemon(res)),
            err => console.log(err)));
  };
};

export const receivePokemonDetail = (pokemon) => {
  return {
    type: RECEIVE_POKEMON_DETAIL,
    pokemon
  };
};

export const requestPokemonDetail = (id) => {
  // debugger
  return (dispatch) => {
    return (APIUtil.fetchPokemonDetail(id)
      .then(res => dispatch(receivePokemonDetail(res)),
            err => "Pokemon not found"));
  };
};

export const receiveNewPokemon = (pokemon) => {
  return {
    type: RECEIVE_NEW_POKEMON,
    pokemon
  };
};

export const createPokemon = (pokemon) => {
  return (dispatch) => {
    return (APIUtil.postPokemon(pokemon)
      .then(res => {
        return dispatch(receiveNewPokemon(res))},
            err => "Error creating pokemon"));
  };
};
