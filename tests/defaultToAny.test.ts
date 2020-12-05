import defaultToAny from '../src/defaultToAny';

it('returns the first proper value', () => {
    expect(defaultToAny(1, 10, 20)).toEqual(1);
    expect(defaultToAny(undefined, true, 20)).toEqual(true);
    expect(defaultToAny(null, undefined, 20)).toEqual(20);
    expect(defaultToAny(undefined, null, NaN)).toEqual(NaN);
    expect(defaultToAny(undefined, "This", null)).toEqual("This");
    expect(defaultToAny(10, null , 20)).toEqual(10);
    expect(defaultToAny(undefined, null, null)).toEqual(null);
    expect(defaultToAny(undefined, NaN ,null)).toEqual(null);//The function returns NaN as a normal value.
    expect(defaultToAny(NaN, "", 20)).toEqual("");//The function returns NaN as a normal value.
});