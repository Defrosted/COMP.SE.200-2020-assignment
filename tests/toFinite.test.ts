import toFinite from '../src/toFinite.js';

it('converting to finite number', () => {
    expect(toFinite(3.2)).toEqual(3.2);
    expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324);
    expect(toFinite(Number.MAX_VALUE)).toEqual(1.7976931348623157e+308);
    expect(toFinite(Infinity)).toEqual(1.7976931348623157e+308);
    expect(toFinite(-Infinity)).toEqual(-1.7976931348623157e+308);
    expect(toFinite('3.2')).toEqual(3.2);
    expect(toFinite(2e+310)).toEqual(1.7976931348623157e+308);
});

it('handles special cases', () => {
    expect(toFinite(NaN)).toEqual(0);
    expect(toFinite("String")).toEqual(0);
    expect(toFinite(null)).toEqual(0);
    expect(toFinite(undefined)).toEqual(0);
});