import toNumber from '../src/toNumber';

class TestNumber extends Object {
    value = 0;

    constructor(n: number) {
        super();
        this.value = n;
    }

    valueOf() {
        return this.value;
    }
}

it('casts values into numbers', () => {
    expect(toNumber(1)).toEqual(1);
    expect(toNumber('1')).toEqual(1);
    expect(toNumber('  1  ')).toEqual(1);

    expect(toNumber(Number.MIN_VALUE)).toEqual(5e-324);
    expect(toNumber(Infinity)).toEqual(Infinity);

    expect(toNumber(new TestNumber(100))).toEqual(100);
    expect(toNumber(new TestNumber(0))).toEqual(0);

    expect(toNumber('+0x64')).toEqual(NaN);
    expect(toNumber('0b1100100')).toEqual(100);
    expect(toNumber('0o144')).toEqual(100);

    expect(toNumber(Symbol(10))).toEqual(NaN);
    expect(toNumber(Object(10))).toEqual(10);
});
