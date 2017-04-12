import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }

  componentDidMount() {
    this.props.requestAllPokemon().then(() => this.setState({loaded: true}));

  }

  render() {
    let pokemonList = this.props.pokemon.map((poke) => <PokemonIndexItem key={poke.id} poke={poke}/>);


    if (this.state.loaded === false) {
      return (
        <div className="loader"></div>
      );
    } else {
      return (
        <div>
          <section className="pokemon-list-container">
            <ul className="pokemon-list">
              {pokemonList}
            </ul>
          </section>
          <section>
            {this.props.children}
          </section>
        </div>
      );
    }
  }
}

export default PokemonIndex;
