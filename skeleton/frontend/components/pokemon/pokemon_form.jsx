import React from 'react';
import merge from 'lodash';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: "",
      defense: "",
      move1: "",
      move2: ""
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    let key = e.currentTarget.name;
    this.setState({[key]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const pokemon = Object.assign({}, this.state);
    const move1 = this.state.move1;
    const move2 = this.state.move2;
    const moves = [move1, move2];
    pokemon.moves = moves;
    this.props.createPokemon(pokemon);
  }

  render() {
    return (
      <form className="pokemon-form" onSubmit={this.handleSubmit}>
        <label>Name
          <input name="name" onChange={this.handleInput} type="text" value={this.state.name} />
        </label>

        <label>Image URL
          <input name="image_url" onChange={this.handleInput} type="text" value={this.state.image_url} />
        </label>

        <label>Type
          <select name="poke_type" onChange={this.handleInput}>
            <option value=""></option>
            <option value="fire">fire</option>
            <option value="electric">electric</option>
            <option value="normal">normal</option>
            <option value="ghost">ghost</option>
            <option value="psychic">psychic</option>
            <option value="water">water</option>
            <option value="bug">bug</option>
            <option value="dragon">dragon</option>
            <option value="grass">grass</option>
            <option value="fighting">fighting</option>
            <option value="ice">ice</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="steel">steel</option>
          </select>
        </label>

        <label>Attack
          <input name="attack" onChange={this.handleInput} type="text" value={this.state.attack} />
        </label>

        <label>Defense
          <input name="defense" onChange={this.handleInput} type="text" value={this.state.defense} />
        </label>

        <label>Move 1
          <input name="move1" onChange={this.handleInput} type="text" value={this.state.move1} />
        </label>

        <label>Move 2
          <input name="move2" onChange={this.handleInput} type="text" value={this.state.move2} />
        </label>

        <input type="submit" name="create-pokemon" value="Create Pokemon" />
      </form>
    );
  }
}


export default PokemonForm;
