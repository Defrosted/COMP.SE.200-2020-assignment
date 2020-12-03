import clamp from '../src/clamp';

it('clamps numbers', () => {
    expect(clamp(-10, -5, 5)).toEqual(-5);
    expect(clamp(-99999, 3, 1000)).toEqual(3);
    expect(clamp(7, 1, 5)).toEqual(5); //Returns lower bound, when should return upper bound.
    expect(clamp(10, -5, 5)).toEqual(5); //Returns lower bound, when should return upper bound.
});

it('handles NaN and undefined values', () => {
    expect(clamp(NaN, 1, 2)).toEqual(NaN)
    expect(clamp(-7, -3, NaN)).toEqual(-3)
    expect(clamp(7, NaN, 6)).toEqual(6) //Returns lower bound, when should return upper bound.
});