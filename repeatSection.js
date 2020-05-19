const repeat = (times, value) => Array.from({ length: times }).map(() => value);
console.log(repeat(4, 'stuff'));

/**
 * Use functions, not values
 */
const repeatedly = (times, fn) => Array.from({ length: times }).map(fn);
// console.log(repeatedly(3, () => Math.floor(Math.random() * 10 + 1)));
// console.log(repeatedly(3, () => 'Odelay!'));

const iterateUntil = (fn, check, init) => {
  let ret = [];
  let result = fn(init);

  while (check(result)) {
    ret.push(result);
    result = fn(result);
  }

  return ret;
};

console.log(
  iterateUntil(
    n => n + n,
    n => n <= 1024,
    1
  )
);
