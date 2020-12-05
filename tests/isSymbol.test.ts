import isSymbol from '../src/isSymbol';

it('checks if parameter is Symbol', () => {
    expect(isSymbol(Symbol("test"))).toBe(true);
    expect(isSymbol(Object(Symbol("test")))).toBe(true);
    expect(isSymbol(Object("test"))).toBe(false);
    expect(isSymbol(Object(null))).toBe(false);
});
