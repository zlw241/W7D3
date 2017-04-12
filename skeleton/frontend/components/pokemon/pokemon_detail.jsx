import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null
    };
    // debugger
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id) {
      this.props.requestPokemonDetail(newProps.params.id)
    }
  }

  // componentDidMount() {
  //   this.props.requestPokemonDetail(this.props.params.id).then(res => this.setState({pokemon: res}));
  // }

  render() {
    let pokemonDetails = this.props.pokemon;
    // debugger
    if (this.state.pokemon === null) {
      return (
        <div className="loader"></div>
      );
    } else {
      return (
        <div>{this.state.pokemon}</div>
      );
    }
  }
}

export default PokemonDetail;
