import defaultTo from '../src/defaultTo';

it('determines if a default value should be returned', () => {
    expect(defaultTo(null, 0)).toEqual(0);
    expect(defaultTo(undefined, 0)).toEqual(0),
    expect(defaultTo(NaN, 0)).toEqual(0);

    expect(defaultTo('test', null)).toEqual('test');
    expect(defaultTo(1, null)).toEqual(1);
    expect(defaultTo(false, null)).toEqual(false);
});
