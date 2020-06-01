const isEmpty = require('../Chapter2/isEmpty');

const some = (args, predicate) =>
  args.reduce((accum, arg) => accum || predicate(arg), false);

const orify = (...preds) => (...args) => {
  const something = (ps, truth) => {
    if (isEmpty(ps)) return truth;

    const [firstPs, ...restPs] = ps;
    return some(args, firstPs) || something(restPs, truth);
  };
  return something(preds, false);
};

module.exports = orify;

/**
 * Examples
 */
const zero = x => x === 0;
const isOdd = x => x % 2 === 1;
const zeroOrOdd = orify(isOdd, zero);

console.log(zeroOrOdd()); //=> false
console.log(zeroOrOdd(0, 2, 4, 6)); //=> true
console.log(zeroOrOdd(2, 4, 6)); //=> false
