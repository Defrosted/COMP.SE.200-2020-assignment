import countBy from '../src/countBy';

it('counts the amount of times the keys are returned', () => {
    const users = [{ 'user': 'barney', 'active': true }, { 'user': 'betty', 'active': true }, { 'user': 'fred', 'active': false }];
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
});

it('handles empty collections', () => {
    expect(countBy([],?????????)).toEqual();
});