import isEmpty from '../src/isEmpty.js';

it('checks the examples', () => {
    expect(isEmpty(null)).toEqual(true);
    expect(isEmpty(true)).toEqual(true);
    expect(isEmpty(1)).toEqual(true);
    expect(isEmpty([1, 2, 3])).toEqual(false);
    expect(isEmpty('abc')).toEqual(false);
    expect(isEmpty({ 'a': 1})).toEqual(false);
});

it('checks other values', () => {
    let mySet = new Set();
    let myMap = new Map();
    expect(isEmpty('')).toEqual(true);
    expect(isEmpty(undefined)).toEqual(true);
    expect(isEmpty(NaN)).toEqual(true);
    expect(isEmpty({})).toEqual(true);
    expect(isEmpty([])).toEqual(true);
    expect(isEmpty(mySet)).toEqual(true);
    mySet.add(17);
    expect(isEmpty(mySet)).toEqual(false);
    expect(isEmpty(myMap)).toEqual(true);
    myMap.set('Test', 123);
    expect(isEmpty(myMap)).toEqual(false);
});