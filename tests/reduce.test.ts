import reduce from '../src/reduce';


it('reduces an array', () => {
    const sumReducer = (acc: number, n: number) => acc + n;
    const mockReducer = jest.fn().mockImplementation(sumReducer);
    const array = [1, 2, 3];
    
    const result = reduce(array, mockReducer, 0);

    expect(mockReducer).toHaveBeenCalledTimes(3);
    expect(mockReducer).toHaveBeenCalledWith(3, 3, 2, array);

    expect(result).toBe(6);
});


it('reduces an object', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const reducer = (result: any, value: any, key: any) => {
        (result[value] || (result[value] = [])).push(key)
        return result
    };

    expect(reduce(object, reducer, {}))
        .toEqual({ '1': ['a', 'c'], '2': ['b'] });
});
