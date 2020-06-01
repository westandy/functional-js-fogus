const isEmpty = require('../Chapter2/isEmpty');

const every = (args, predicate) =>
  args.reduce((accum, arg) => accum && predicate(arg), true);

const andify = (...preds) => (...args) => {
  const everything = (ps, truth) => {
    if (isEmpty(ps)) return truth;

    const [firstPs, ...restPs] = ps;
    return every(args, firstPs) && everything(restPs, truth);
  };
  return everything(preds, true);
};

module.exports = andify;

/**
 * Examples
 */
const isNumber = x => typeof x === 'number';
const isEven = x => x % 2 === 0;

const evenNums = andify(isNumber, isEven);
console.log(evenNums(1, 2)); // false
console.log(evenNums(2, 4, 6, 8)); // true
console.log(evenNums(2, 4, 6, 8, 9)); // false
