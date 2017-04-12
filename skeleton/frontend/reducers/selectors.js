import _ from 'lodash';

export function selectAllPokemon(state) {
  return _.values(state.pokemon);
}
