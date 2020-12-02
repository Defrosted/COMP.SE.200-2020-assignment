import capitalize from '../src/capitalize';

it('capitalizes words', () => {
    expect(capitalize('TEST')).toEqual('Test');
    expect(capitalize('test')).toEqual('Test');
    expect(capitalize('TesT')).toEqual('Test');
});

it('handles strings with numbers and special characters', () => {
    expect(capitalize("AK47")).toEqual("Ak47");
    expect(capitalize('WOW!!!')).toEqual('Wow!!!');
    expect(capitalize('@_-!?=*^')).toEqual('@_-!?=*^');
});

it('handles undefined as parameter', () => {
    expect(capitalize(undefined)).toEqual("Undefined");
});
