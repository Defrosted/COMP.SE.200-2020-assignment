import endsWith from '../src/endsWith.js';

it('handles string and target as expected', () => {
    expect(endsWith('abc', 'c')).toEqual(true);
    expect(endsWith('abc', 'b')).toEqual(false);
    expect(endsWith('abc', 'b', 2)).toEqual(true);
    expect(endsWith('abc', 'ab', 2)).toEqual(true);
    expect(endsWith('abcdef', 'cd', 4)).toEqual(true);
    expect(endsWith('abc', 'a', 1)).toEqual(true);
});

it('handles undefined values', () => {
    expect(endsWith('abc', undefined)).toEqual(false);
    expect(endsWith(undefined, '')).toEqual(false);
});

it('handles empty strings', () => {
    expect(endsWith('', 'c')).toEqual(false);
    expect(endsWith('', '')).toEqual(true);
});

it('handles undefined and NaN as the third parameter', () => {
    expect(endsWith('abc', 'c', undefined)).toEqual(true);
    expect(endsWith('abc', 'c', NaN)).toEqual(false);
});
