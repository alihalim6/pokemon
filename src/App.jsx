import { hot } from 'react-hot-loader';
import React from 'react';
import { getPokemon } from './api';
import './app.css';
import PokeCard from './components/PokeCard';
import { sortAscending, sortDescending } from './utils';

class App extends React.Component {
  state = {
    pokemons: [],
    loading: true,
    ascendingPokemons: [],
    descendingPokemons: [],
    sortedAscending: false,
    sortedDescending: false,
  };

  async componentDidMount() {
    await getPokemon().then((pokemons) => {
      this.setState({ pokemons, loading: false });
    });
  }

  sortAscending = () => {
    const { pokemons, ascendingPokemons } = this.state;

    this.setState((state) => {
      return {
        sortedAscending: !state.sortedAscending,
        // eslint-disable-next-line max-len
        ascendingPokemons: ascendingPokemons.length ? state.ascendingPokemons : sortAscending(pokemons),
        sortedDescending: false,
      };
    });
  };

  sortDescending = () => {
    const { pokemons, descendingPokemons } = this.state;

    this.setState((state) => {
      return {
        sortedDescending: !state.sortedDescending,
        // eslint-disable-next-line max-len
        descendingPokemons: descendingPokemons.length ? state.descendingPokemons : sortDescending(pokemons),
        sortedAscending: false,
      };
    });
  };

  spaceBarSortAscending = (event) => {
    if (event.keyCode === 32) {
      event.preventDefault();
      this.sortAscending();
    }
  };

  spaceBarSortDescending = (event) => {
    if (event.keyCode === 32) {
      event.preventDefault();
      this.sortDescending();
    }
  };

  render() {
    const {
      loading,
      pokemons,
      ascendingPokemons,
      descendingPokemons,
      sortedAscending,
      sortedDescending,
    } = this.state;
    // default to showing the pokemon in the order they are returned from api
    let displayedPokemons = pokemons;

    if (sortedAscending) {
      displayedPokemons = ascendingPokemons;
    }

    if (sortedDescending) {
      displayedPokemons = descendingPokemons;
    }

    return (
      <div className="app">
        {loading && <h1>Loading...</h1>}
        {!loading && <h1 className="header">Learn About Pokemon!</h1>}
        {!loading && (
          <div className="pokemon-container">
            <div className="sort-container">
              <span onClick={this.sortAscending} className={`sort-cta ${sortedAscending ? 'sort-applied' : ''}`} role="switch" tabIndex="0" aria-checked={sortedAscending} onKeyDown={this.spaceBarSortAscending}>Sort A-Z</span>
              <span onClick={this.sortDescending} className={`sort-cta ${sortedDescending ? 'sort-applied' : ''}`} role="switch" tabIndex="0" aria-checked={sortedDescending} onKeyDown={this.spaceBarSortDescending}>Sort Z-A</span>
            </div>
            {displayedPokemons.map((pokemon) => {
              return <PokeCard pokemon={pokemon} key={pokemon.name} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default hot(module)(App);
