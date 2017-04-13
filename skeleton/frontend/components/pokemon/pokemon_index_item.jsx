import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({poke}) => {
  return (
    <li>
      <Link to={`/pokemon/${poke.id}`}>
        <span className="poke-info">{poke.id}</span>
        <img className="small-poke" src={poke.image_url} />
        <span className="poke-info">{poke.name}</span>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
