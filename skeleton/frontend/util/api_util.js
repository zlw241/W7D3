export function fetchAllPokemon() {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
}

export function fetchPokemonDetail(id) {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  });
}
