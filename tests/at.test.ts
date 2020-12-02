import at from '../src/at';

it('resolves values from nested data structures', () => {
    const nestedObject = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(nestedObject, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
});

it('handles undefined and null values and invalid indexes', () => {
    const object = { a: null, b: { c: 'test', a: [undefined] } };
    expect(at(object, ['a', 'b.c', 'b.a[0]', 'c'])).toEqual([null, 'test', undefined, undefined]);
});