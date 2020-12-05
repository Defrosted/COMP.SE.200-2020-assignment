import memoizeFunction from '../src/memoize';

// Wrap memoize with a custom interface for it to work with TypeScript
interface MemoizedFunction extends Function {
    Cache: MapConstructor | WeakMapConstructor;
    cache: Map<any, any>;
};
const memoize = memoizeFunction as unknown as MemoizedFunction;

it('memoizes a function', () => {
    // Set test objects
    const object = { 'a': 1, 'b': 2 };
    const other = { 'c': 3, 'd': 4 };

    memoize.Cache = Map;

    const values = memoize(Object.values);
    expect(values(object)).toEqual([1, 2]);
    expect(values(other)).toEqual([3, 4]);

    object.a = 2;
    expect(values(object)).toEqual([1, 2]);

    values.cache.set(object, ['a', 'b']);
    expect(values(object)).toEqual(['a', 'b']);
});

it('allows for replacing the Map type', () => {
    // Set test objects
    const object = { 'a': 1, 'b': 2 };
    const other = { 'c': 3, 'd': 4 };

    memoize.Cache = WeakMap;

    const values = memoize(Object.values);
    expect(values(object)).toEqual([1, 2]);
    expect(values(other)).toEqual([3, 4]);

    object.a = 2;
    expect(values(object)).toEqual([1, 2]);

    values.cache.set(object, ['a', 'b']);
    expect(values(object)).toEqual(['a', 'b']);

    expect(values.cache instanceof WeakMap).toBe(true);
});
