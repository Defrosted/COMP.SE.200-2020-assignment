import camelCase from '../src/camelCase';

it('transforms strings into camelCase', () => {
    expect(camelCase('lower case')).toEqual('lowerCase');
    expect(camelCase('UPPER CASE')).toEqual('upperCase');
    expect(camelCase('Upper First')).toEqual('upperFirst');
    expect(camelCase('snake_case')).toEqual('snakeCase');
    expect(camelCase('kebab-case')).toEqual('kebabCase');
});

it('doesn\'t care about numbers', () => {
    expect(camelCase('__some_string_0___')).toEqual('someString0');
    expect(camelCase('000_241')).toEqual('000241');
});

it('handles undefined', () => {
    expect(camelCase(undefined)).toEqual("undefined");
});
