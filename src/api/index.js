import axios from 'axios';
import { baseApiUrl } from './utils';

export const getMonsters = async () => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseApiUrl}/pokemon`).then((response) => {
      resolve(response.data.results);
    }, () => {
      reject(new Error('Something went wrong catchin\' \'em all!'));
    });
  });
};

export const getColor = async (name) => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseApiUrl}/pokemon-color/${name}`).then((response) => {
      resolve(response.data.name);
    }, () => {
      reject(new Error('Something went wrong getting pokemon color.'));
    });
  });
};
