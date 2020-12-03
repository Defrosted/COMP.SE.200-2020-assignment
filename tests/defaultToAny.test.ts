import defaultToAny from '../src/defaultToAny';

it('', () => {
    expect(defaultToAny(1, 10, 20)).toEqual(1);
    expect(defaultToAny(undefined, 10, 20)).toEqual(10);
    expect(defaultToAny(undefined, null, 20)).toEqual(20);
    expect(defaultToAny(undefined, null, NaN)).toEqual(NaN);
});