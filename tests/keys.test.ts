import keys from '../src/keys';

class Test {
    [x: string]: number;
    a: number = 1;
    b: number = 2;
}

Test.prototype.c = 3;

it('returns object keys', () => {
    expect(keys(new Test)).toEqual(['a', 'b']);
    expect(keys({a: 'a', b: 'b'})).toEqual(['a', 'b']);
});

it('handles arrays and array-like values', () => {
    expect(keys(['a', 'b'])).toEqual(['0', '1']);
    expect(keys('hi')).toEqual(['0', '1']);
});

it('handles empty parameters', () => {
    expect(keys([])).toEqual([]);
    expect(keys({})).toEqual([]);

    expect(keys(Object(null))).toEqual([]);
});
