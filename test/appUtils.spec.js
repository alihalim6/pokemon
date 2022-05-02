import { sortAscending, sortDescending } from '../src/utils/index';

const mockDefaultPokemons = [{ name: 'maya' }, { name: 'zavier' }, { name: 'ali' }];

// testing the sort functions directly gives assurance that the sort functionality in app works as expected
describe('app utils', () => {
  it('should sort given data in ascending order', () => {
    const mockAscendingPokemons = [{ name: 'ali' }, { name: 'maya' }, { name: 'zavier' }];
    const sortResult = sortAscending(mockDefaultPokemons);
    expect(mockAscendingPokemons).toEqual(sortResult);
  });

  it('should sort given data in descending order', () => {
    const mockDescendingPokemons = [{ name: 'zavier' }, { name: 'maya' }, { name: 'ali' }];
    const sortResult = sortDescending(mockDefaultPokemons);
    expect(mockDescendingPokemons).toEqual(sortResult);
  });
});
