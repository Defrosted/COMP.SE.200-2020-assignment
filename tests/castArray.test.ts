import castArray from '../src/castArray';

it('casts values into arrays', () => {
    expect(castArray(true)).toEqual([true]);
    expect(castArray('true')).toEqual(['true']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
    expect(castArray({ a: 'a' })).toEqual([{ a: 'a' }]);
});

it('doesn\'t nest arrays', () => {
    expect(castArray(['test'])).toEqual(['test']);
});
