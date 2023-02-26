function memoize(resolver) {
  const cache = new Map();
  function memoizedValueFunc(value) {
    if (!cache.has(value)) {
      cache.set(value, resolver(value));
    }
    return cache.get(value);
  }
  return Object.assign(memoizedValueFunc, { cache });
}

const foo = { a: 1, b: 2 };
const func = memoize((value) => Object.values(value));
console.log(func(foo)); // [1, 2]
foo.a = 2;
console.log(func(foo)); // [1, 2]
console.log(func.cache.delete(foo));
console.log(func(foo)); // [2, 2]
