import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      errors: null
    };
    // debugger
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id) {
      this.props.requestPokemonDetail(newProps.params.id);
    }
  }

  componentDidMount() {
    // debugger
    this.props.requestPokemonDetail(this.props.params.id)
              .then(() => this.setState({ loaded: true }),
                    (err) => {
                      this.setState({ loaded: true, errors: err });
                    });
  }

  render() {
    let pokemon = this.props.pokemon;
    // debugger
    if (this.state.loaded === false) {
      return (
        <div className="loader"></div>
      );
    } else {
      if (this.state.errors !== null) {
        return (<div>{this.state.errors}</div>);
      }
      return (
        <div className="detail">
          <div>
            <div><img src={pokemon.image_url} /></div>
          </div>
          <div className="detail-params">
            <div>{pokemon.name}</div>
            <div>Type: {pokemon.poke_type}</div>
            <div>Attack: {pokemon.attack}</div>
            <div>Defense: {pokemon.defense}</div>
            <div>
              Moves: {pokemon.moves.map(
                (move, idx) => {
                  if (idx < pokemon.moves.length-1) {
                    return (<span key={idx}>{`${move}, `}</span>);
                  } else {
                    return (<span key={idx}>{move}</span>);
                  }
                }
              )}
            </div>
          </div>
          <div className="items-container">
            <h3>Items</h3>
            <div className="item-images">
              {pokemon.items.map((item, idx) => {
                return(
                  <Link to={`/pokemon/${item.pokemon_id}/items/${item.id}`} key={item.id}>
                    <img src={item.image_url} />
                  </Link>
                );
              })}
            </div>
            <div className="item-details">{this.props.children}</div>
          </div>
        </div>
      );
    }
  }
}

export default PokemonDetail;
