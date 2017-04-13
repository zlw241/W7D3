import React from 'react';
import { connect } from 'react-redux';
import { requestPokemonDetail } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state) => ({
  pokemon: state.pokemonDetail
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemonDetail: (id) => dispatch(requestPokemonDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
