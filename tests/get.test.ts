import get from '../src/get.js';

it('returns correct values', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, 'a[0].b.c')).toEqual(3);
    expect(get(object, ['a', '0', 'b', 'c'], 'default')).toEqual(3);
    expect(get(object, 'a.b.c', 'default')).toEqual('default');
});

it('handles', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(NaN, 'a[0].b.c')).toEqual(undefined);
    expect(get("", ['a', '0', 'b', 'c'], 'default')).toEqual('default');
    expect(get(object, "")).toEqual(undefined);
});