import chunk from '../src/chunk';

it('chunks an array into subarrays of given size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    expect(chunk([0, 1, 2])).toEqual([[0], [1], [2]]);
});

it('chunks with empty arrays', () => {
    expect(chunk([])).toEqual([]);
});

it('doesn\'t work with negative numbers', () => {
    expect(chunk(['a', 'b', 'c'], -2)).toEqual([]);
});

it('chunks when given number exceeds the array length', () => {
    expect(chunk(['a'], 2)).toEqual([['a']]);
});
