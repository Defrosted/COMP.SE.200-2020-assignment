import map from '../src/map';

const square = (n: number) => n * n;

it('maps the array by given predicate', () => {
    expect(map([4, 8], square)).toEqual([16, 64]);
    expect(map(['1', '2'], (i: string) => Number(i))).toEqual([1, 2]);

    expect(map([], square)).toEqual([]);
});

it('passes parameters and calls predicate for each index', () => {
    const squareMock = jest.fn().mockImplementation(square);
    const numbers = [2, 4, 8, 16];
    map(numbers, squareMock);

    expect(squareMock).toHaveBeenCalledTimes(4);
    expect(squareMock).toHaveBeenCalledWith(16, 3, numbers);
});
