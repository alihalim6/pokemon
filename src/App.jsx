import { hot } from 'react-hot-loader';
import React from 'react';
import { getPokemon } from './api';
import './app.css';
import PokeCard from './components/PokeCard';

class App extends React.Component {
  state = {
    pokemons: [],
    loading: true,
  };

  async componentDidMount() {
    await getPokemon().then((pokemons) => {
      this.setState({ pokemons, loading: false });
    });
  }

  render() {
    const { loading, pokemons } = this.state;

    return (
      <div className="app">
        {loading && <span>Loading...</span>}
        {!loading && <h1 className="header">Learn About Pokemon!</h1>}
        {!loading && (
          <div className="pokemon-container">
            {pokemons.map((pokemon) => {
              return <PokeCard pokemon={pokemon} key={pokemon.name} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default hot(module)(App);
