import at from '../src/at';

it('resolves values from nested data structures', () => {
    const nestedObject = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(nestedObject, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
});

it('handles undefined and null values and invalid indexes', () => {
    const objectWithNullValues = { a: null, b: { c: 'test', a: [undefined] } };
    expect(at(objectWithNullValues, ['a', 'b.c', 'b.a[0]'])).toEqual([null, 'test', undefined]);

    expect(at({}, ['a'])).toEqual([undefined]);
    expect(at({ a: 'a' }, [''])).toEqual([undefined]);
});