import add from '../src/add';

it('calculates the sum of two numbers', () => {
    let sum = add(1, 1);
    expect(sum).toBe(2);

    sum = add(-256, 512);
    expect(sum).toBe(256);

    sum = add(-2, -2);
    expect(sum).toBe(-4);
});

it('calculates sums using floats', () => {
    expect(add(2.25, 3.35)).toEqual(5.6);
    expect(add(2, 5.5555555555)).toEqual(7.5555555555);
});

it('throws error with BigInts', () => {
    expect(() => add(5000n, 5000n)).toThrow();
});

it('handles special values', () => {
    expect(add(1, Infinity)).toEqual(Infinity);
    expect(add(1, NaN)).toEqual(NaN);
});

it('handles string numbers similar to numbers', () => {
    expect(add("2", "")).toEqual("2");
    expect(add("2", "2")).toEqual("22");
});
