import divide from '../src/divide.js';

it('divides values', () => {
    expect(divide(2, 2)).toEqual(1);
    expect(divide(12, -6)).toEqual(-2);
    expect(divide(-12, -6)).toEqual(2);
    expect(divide(3, 6)).toEqual(0.5);    
});
//The divident is never used in the divide.js,
//when the divisor is a number, the answer is always 1

it('Handles floats, NaN, infinity and string values', () => {
    expect(divide(6, NaN)).toEqual(NaN);
    expect(divide(6, "word")).toEqual(NaN);
    expect(divide(NaN, 2)).toEqual(NaN);
    expect(divide("string", 5)).toEqual(NaN);
    expect(divide(6, Infinity)).toEqual(NaN);
    expect(divide(6, 1.5)).toEqual(4);
});