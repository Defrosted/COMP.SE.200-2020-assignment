import add from '../src/add';

it('calculates the sum of two numbers', () => {
    const sum = add(1, 1);

    expect(sum).toBe(2);
});
