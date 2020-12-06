import isDate from '../src/isDate.js';

it('works with date values', () => {
    expect(isDate(new Date)).toEqual(true);
    expect(isDate('Mon April 23 2012')).toEqual(false);
    expect(isDate('12/24/2020')).toEqual(false);
    expect(isDate('24/12/2020')).toEqual(false);
    expect(isDate('12-24-2020')).toEqual(false);
    expect(isDate('23-12-2020')).toEqual(false);
    expect(isDate('11122020')).toEqual(false);
    expect(isDate(11122020)).toEqual(false);
});

it('works with null and undefined values', () => {
    expect(isDate(null)).toEqual(false);
    expect(isDate(undefined)).toEqual(false);
    expect(isDate()).toEqual(false);
});