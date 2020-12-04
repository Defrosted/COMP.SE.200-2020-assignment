import isBoolean from '../src/isBoolean.js';

it('works with boolean values', () => {
    expect(isBoolean(false)).toEqual(true);
    expect(isBoolean(true)).toEqual(true);
});

it('works with other values', () => {
    expect(isBoolean(null)).toEqual(false);
    expect(isBoolean(NaN)).toEqual(false);
    expect(isBoolean(17)).toEqual(false);
    expect(isBoolean(undefined)).toEqual(false);
    expect(isBoolean("string")).toEqual(false);
});