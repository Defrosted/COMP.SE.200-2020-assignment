import ceil from '../src/ceil';

it('rounds numbers by precision', () => {
    expect(ceil(2.52525252)).toEqual(3);
    expect(ceil(2.52525252, 2)).toEqual(2.53);
    expect(ceil(54.5, -1)).toEqual(60);
    expect(ceil(1000, -4)).toEqual(10000);
});

it('handles special & non-numeric values', () => {
    expect(ceil(NaN)).toEqual(NaN);
    expect(ceil(Infinity)).toEqual(Infinity);

    expect(ceil(undefined)).toEqual(NaN);
    expect(ceil(null)).toEqual(0);

    expect(ceil(5.55, null)).toEqual(6);
    expect(ceil(5.55, undefined)).toEqual(6);
    expect(ceil(5.55, NaN)).toEqual(6);
});

it('handles numbers that are strings', () => {
    expect(ceil("5.55")).toEqual(6);
    expect(ceil(5.5252, "2")).toEqual(5.53);
});
