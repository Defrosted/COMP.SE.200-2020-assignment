import isObject from '../src/isObject.js';

it('are these objects', () => {
    expect(isObject({})).toEqual(true);
    expect(isObject([])).toEqual(true);
    expect(isObject(Function)).toEqual(true);
    expect(isObject(new Number(0))).toEqual(true);
    expect(isObject(new String(''))).toEqual(true);
    expect(isObject(/ab+c/)).toEqual(true);
});

it('special cases', () => {
    expect(isObject(null)).toEqual(false);
    expect(isObject(NaN)).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
    expect(isObject("")).toEqual(false);
});