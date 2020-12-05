import every from "../src/every";

interface TestObject {
    value: string;
}

it('checks if each index passes predicate', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);

    expect(every([true, true], Boolean)).toBe(true);
    expect(every([true, false], Boolean)).toBe(false);

    expect(every([1, 1, 1, 1], (n: number) => n === 1)).toBe(true);
    expect(every([1, 1, 1, 2], (n: number) => n === 1)).toBe(false);

    expect(every([], (i: any) => !!i)).toBe(true);
    
    const testObjects: TestObject[] = [
        { value: 'a' },
        { value: 'a' }
    ];

    expect(every(testObjects, (o: TestObject) => o.value === 'a')).toBe(true);
    expect(every([...testObjects, { value: 'b' }],
        (o: TestObject) => o.value === 'a')).toBe(false);
});

it('passes parameters to predicate', () => {
    const predicate = jest.fn().mockImplementation((n: number) => !isNaN(n));
    const array = [1, 2, 3];
    every(array, predicate);

    expect(predicate).toHaveBeenCalledTimes(3);
    expect(predicate).toHaveBeenCalledWith(1, 0, array);
});
