import isObject from '../src/isObject.js';

it('returns true for Objects, false for non-Objects', () => {
    expect(isObject({})).toEqual(true);
    expect(isObject([])).toEqual(true);
    expect(isObject(Function)).toEqual(true);
    expect(isObject(new Number(0))).toEqual(true);
    expect(isObject(new String(''))).toEqual(true);
    expect(isObject(/ab+c/)).toEqual(true);
});

it('handles special cases', () => {
    expect(isObject(null)).toEqual(false);
    expect(isObject(NaN)).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
    expect(isObject("")).toEqual(false);
});