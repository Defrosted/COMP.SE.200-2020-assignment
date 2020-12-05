import countBy from '../src/countBy';

interface User{
    user:string;
    active:boolean;
}

it('counts the amount of times the keys are returned', () => {
    const users = [{ 'user': 'barney', 'active': true }, { 'user': 'betty', 'active': true }, { 'user': 'fred', 'active': false }];
    expect(countBy(users, (value:User) => value.active)).toEqual({ 'true': 2, 'false': 1 });
});

//it('handles empty collections', () => {
    //expect(countBy([],)).toEqual();
//});