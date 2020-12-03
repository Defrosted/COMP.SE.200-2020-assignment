import compact from '../src/compact';

it('Removes falsey values', () => {
    expect(compact([false, null, 0, "", undefined, NaN])).toEqual([]);
    expect(compact([0, 2, 3])).toEqual([2, 3]); //The first correct value is always missing
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]); //The first correct value is always missing
});

it('Handles empty arrays', () => {
    expect(compact([])).toEqual([]);
});