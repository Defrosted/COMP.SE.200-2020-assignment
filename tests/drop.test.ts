import drop from '../src/drop';

it('drops indexes from arrays', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 5)).toEqual([]);
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);

    expect(drop([1, 2, 3], undefined)).toEqual([2, 3]);
    expect(drop([])).toEqual([]);
});
