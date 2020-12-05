import slice from '../src/slice';

it('slices an array', () => {
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
    expect(slice([1, 2, 3, 4], 0, 2)).toEqual([1, 2]);

    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
    expect(slice([1, 2, 3, 4], 0, -2)).toEqual([1, 2]);
});

it('handles empty arrays', () => {
    expect(slice([])).toEqual([]);
});

it('handles undefined start and end parameters', () => {
    expect(slice([1, 2], undefined, 1)).toEqual([1]);
    expect(slice([1, 2], 1, undefined)).toEqual([2]);
});
