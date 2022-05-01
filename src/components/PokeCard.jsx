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

  favoriteToggled() {    
    this.setState((state) => {
      return { favorite: !state.favorite };
    });
  }

  render() {
    const { details, favorite } = this.state;
    const { pokemon } = this.props;
    const name = capitalCase(pokemon.name);
    const nameFirstLetter = name.substring(0, 1);
    const imageUrl = details.images && details.images.front_default ? details.images.front_default : '';

    return (
      <div className="card-container">
        {imageUrl && <div className="image-container">{imageUrl && <img alt="pokemon" src={imageUrl} />}</div>}
        {!imageUrl && <div className="name-first-letter">{nameFirstLetter}</div>}
        <div className="info-container">
          <span className="info title">{name}</span>
          <span className="info">
            Height:&nbsp;
            {details.height}
            &nbsp;decimetres
          </span>
          <span className="info">
            Weight:&nbsp;
            {details.weight}
            &nbsp;hectograms
          </span>
        </div>
        <div className="favorite-container">
          {!favorite && <span className="material-icons favorite-icon" onClick={this.favoriteToggled}>favorite_border</span>}
          {favorite && <span className="material-icons favorite-icon" onClick={this.favoriteToggled}>favorite</span>}
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
