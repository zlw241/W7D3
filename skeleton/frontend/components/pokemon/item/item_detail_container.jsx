import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail';

function selectPokemonItem(state, itemId) {
  let foundItem = null;
  state.pokemonDetail.items.forEach((item, idx) => {
    if (item.id === itemId) {
      foundItem = item;
    }
  });
  return foundItem;
}

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, parseInt(ownProps.params.itemId))
});

export default connect(mapStateToProps)(ItemDetail);
