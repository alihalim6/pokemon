import { hot } from 'react-hot-loader';
import React from 'react';
import PropTypes from 'prop-types';
import { capitalCase } from 'capital-case';
import { getPokemonDetails } from '../api';
import './pokecard.css';

class PokeCard extends React.Component {
  state = {
    details: {},
    favorite: false,
  };

  async componentDidMount() {
    const { pokemon } = this.props;

    await getPokemonDetails(pokemon.url).then((details) => {
      this.setState({ details });
    });
  }

  toggleFavorite = () => {
    this.setState((state) => {
      return { favorite: !state.favorite };
    });
  };

  favoriteEnterPressed = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.toggleFavorite();
    }
  };

  render() {
    const { details, favorite } = this.state;
    const { pokemon } = this.props;
    const name = capitalCase(pokemon.name);
    // if no image, just show a square with first letter of pokemon name
    const nameFirstLetter = name.substring(0, 1);
    const imageUrl = (details.images && details.images.front_default) ? details.images.front_default : '';

    return (
      <div className="card-container">
        {imageUrl && <div className="image-container">{imageUrl && <img alt="front view of pokemon" src={imageUrl} />}</div>}
        {!imageUrl && <div className="name-first-letter">{nameFirstLetter}</div>}
        <div className="info-container">
          <span className="info title">{name}</span>
          <span className="info">{`Height: ${details.height} decimetres`}</span>
          <span className="info">{`Weight: ${details.weight} hectograms`}</span>
        </div>
        <div className="favorite-container">
          {!favorite && <span role="button" tabIndex="0" className="material-icons favorite-icon" onClick={this.toggleFavorite} onKeyUp={this.favoriteEnterPressed}>favorite_border</span>}
          {favorite && <span role="button" tabIndex="0" className="material-icons favorite-icon" onClick={this.toggleFavorite} onKeyUp={this.favoriteEnterPressed}>favorite</span>}
        </div>
      </div>
    );
  }
}

PokeCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default hot(module)(PokeCard);
