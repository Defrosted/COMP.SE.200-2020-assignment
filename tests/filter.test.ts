import filter from '../src/filter';

interface User {
    user: string;
    active: boolean;
};

const users: User[] = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
];

const predicate = ({ active }: User) => active;

it('filters array based on predicate', () => {
    expect(filter(users, predicate))
        .toEqual(users.filter(predicate));
});

it('works with an empty array parameter', () => {
    expect(filter([], predicate)).toEqual([]);
});

it('passes parameters to the predicate', () => {
    const predicateMock = jest.fn().mockImplementation(predicate);
    filter(users, predicateMock);

    expect(predicateMock).toHaveBeenCalledTimes(2);
    expect(predicateMock).toHaveBeenCalledWith(users[1], 1, users);
});
