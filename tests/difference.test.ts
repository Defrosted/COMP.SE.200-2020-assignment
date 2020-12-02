import difference from '../src/difference';

it('filters out indexes that are included in the other arrays (SameValueZero equality)', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
    expect(difference([1, 2], [1, 2])).toEqual([]);
    expect(difference([1, 2], [3, 4])).toEqual([1, 2]);

    expect(difference([1, 2], [3, 4, 5, 6, 2])).toEqual([1]);

    expect(difference([1, 2])).toEqual([1, 2]);
});

it('tests equality with SameValueZero', () => {
    // Strings
    expect(difference(['a', 'b'], ['a'])).toEqual(['b']);

    // Booleans & null/undefined
    expect(difference([true, false], [false])).toEqual([true]);
    expect(difference([null, undefined], [null])).toEqual([undefined]);

    // Objects
    expect(difference([{ a: 'a' }, { b: 'b' }], [{ a: 'a' }])).toEqual([{ a: 'a' }, { b: 'b' }]);

    // NaN
    expect(difference([1, NaN], [NaN])).toEqual([1]);

    // -0 === 0
    expect(difference([-1, -0], [0])).toEqual([-1]);
});
