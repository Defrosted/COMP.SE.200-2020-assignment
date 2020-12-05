import countBy from '../src/countBy';

interface User{
    user: string;
    active: boolean;
}

const users: User[] = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
];

const predicate = (value: User) => value.active;

it('counts the amount of times the keys are returned', () => {
    const predicateMock = jest.fn().mockImplementation(predicate);
    const result = countBy(users, predicateMock);

    expect(predicateMock).toHaveBeenCalledTimes(users.length);
    expect(predicateMock).toHaveBeenCalledWith(users[2]);

    expect(result).toEqual({ 'true': 2, 'false': 1 });
});

it('handles empty collections', () => {
    expect(countBy([], predicate)).toEqual({});
});
