import toString from '../src/toString';

it('converts values into strings', () => {
    expect(toString('test')).toEqual('test');

    expect(toString(0)).toEqual('0');
    expect(toString(123)).toEqual('123');

    expect(toString([1, 2, 3])).toEqual('1,2,3');
    expect(toString([1, null])).toEqual('1,')

    expect(toString(-0)).toEqual('-0');
    expect(toString(Symbol('test'))).toEqual('Symbol(test)');
});

it('converts null and undefined into empty strings', () => {
    expect(toString(undefined)).toEqual('');
    expect(toString(null)).toEqual('');
});
