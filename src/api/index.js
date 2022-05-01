import axios from 'axios';
import { baseApiUrl } from './utils';

export const getPokemon = async () => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseApiUrl}/pokemon`).then((response) => {
      resolve(response.data.results);
    }, () => {
      reject(new Error('Something went wrong fetchin\' \'em all!'));
    });
  });
};

export const getPokemonDetails = async (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url).then((response) => {
      const { height, weight, sprites } = response.data;

      resolve({
        height,
        weight,
        images: sprites,
      });
    }, () => {
      reject(new Error('Something went wrong getting pokemon details.'));
    });
  });
};
