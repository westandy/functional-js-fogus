const { oddOline, evenOline } = require('./oline');
const { partial1 } = require('../Chapter5/partialapp');

const trampoline = (fun, ...args) => {
  let result = fun.apply(fun, args);

  while (typeof result === 'function') {
    result = result();
  }

  return result;
};

const isEvenSafe = n =>
  n === 0 || trampoline(partial1(oddOline, Math.abs(n) - 1));

const isOddSafe = n =>
  n === 0 ? false : trampoline(partial1(evenOline, Math.abs(n) - 1));

/**
 * Examples
 */
// console.log(trampoline(oddOline, 3));
// console.log(trampoline(evenOline, 20000));
// console.log(trampoline(oddOline, 3000000));
// console.log(trampoline(evenOline, 20000001));

// console.log(isOddSafe(200001));
// console.log(isEvenSafe(200001));

module.exports = { isEvenSafe, isOddSafe, trampoline };
