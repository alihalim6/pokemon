import React from 'react';
import PokeCard from '../src/components/PokeCard';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { baseApiUrl } from '../src/api';

describe('pokecard', () => {
  it('should change icon class on toggle of favorite icon', () => {
    const mockPokemon = { name: 'charmander', url: `${baseApiUrl}/pokemon/4` };
    const { getByText } = render(<PokeCard pokemon={mockPokemon}/>);
    let favoriteEmptyIcon = getByText('favorite_border');

    // mark as favorite
    fireEvent.click(favoriteEmptyIcon);
    const favoriteFilledIcon = getByText('favorite');
    expect(favoriteFilledIcon).toBeDefined();

    // unmark favorite
    fireEvent.click(favoriteFilledIcon);
    favoriteEmptyIcon = getByText('favorite_border');
    expect(favoriteEmptyIcon).toBeDefined();
  });
});