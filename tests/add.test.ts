import add from '../src/add';

it('calculates the sum of two numbers', () => {
    let sum = add(1, 1);
    expect(sum).toBe(2);

    sum = add(-256, 512);
    expect(sum).toBe(256);

    sum = add(-2, -2);
    expect(sum).toBe(-4);
});

it('calculates sums using floats and BigInts', () => {
    const maxInt = Number.MAX_SAFE_INTEGER;
    expect(add(maxInt, -1)).toBe(maxInt - 1);

    expect(add(2.25, 3.35)).toBe(5.6);
});

it('handles special values', () => {
    expect(add(1, Infinity)).toBe(Infinity);
    expect(add(1, NaN)).toBe(NaN);
});

it('handles string numbers similar to numbers', () => {
    expect(add("2", "")).toBe("2"); // results are not parsed into numbers
    expect(add("2", "2")).toBe("22"); 
});