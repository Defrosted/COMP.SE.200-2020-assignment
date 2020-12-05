import words from '../src/words';

it('parses words from strings', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);

    expect(words('\u0074\u0065\u0073\u0074 \u0074\u0065\u0073\u0074')).toEqual(['test', 'test']);

    expect(words('')).toEqual([]);
    expect(words('', /[^, ]+/g)).toEqual([]);
});
