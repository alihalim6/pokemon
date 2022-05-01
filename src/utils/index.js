export const sortAscending = (pokemons) => {
  return [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
};

export const sortDescending = (pokemons) => {
  return [...pokemons].sort((a, b) => b.name.localeCompare(a.name));
};
