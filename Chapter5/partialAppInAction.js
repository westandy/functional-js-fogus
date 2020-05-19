const { validator, aMap, hasKeys } = require('../Chapter4/objectValidators');
const { complement } = require('../Chapter3/closureExamples');
const { partial1, partial } = require('./partialapp');
const identity = require('../Chapter2/identity');

// Recall
// console.log(validator('arg must be a map', aMap)(42)); // false

const zero = validator('cannot be zero', function (n) {
  return 0 === n;
});
const isNumber = obj => typeof obj === 'number';
const number = validator('arg must be a number', isNumber);

const sqr = n => {
  if (!number(n)) throw new Error(number.message);
  if (zero(n)) throw new Error(zero.message);

  return n * n;
};

// console.log(sqr(6));

/**
 * Condition1 Example
 */
const condition1 = (...validators) => (fun, arg) => {
  const errors = validators.reduce(
    (errAccum, isValid) =>
      isValid(arg) ? errAccum : [...errAccum, isValid.message],
    []
  );

  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }

  return fun(arg);
};

const sqrPre = condition1(
  validator('arg must not be zero', complement(zero)),
  validator('arg must be a number', isNumber)
);
// console.log(sqrPre(identity, 10));
// console.log(sqrPre(identity, ''));
// console.log(sqrPre(identity, 0));

const uncheckedSqr = n => n * n;

/**
 * Make uncheckedSqr the first argument of sqrPre (i.e. partial application)
 * and return a function, checkedSqr, that takes the other parameter of sqrPre.
 */
// Partially Applied Function = partial1(originalFunction, firstArgumentOfOriginalFunction)
const checkedSqr = partial1(sqrPre, uncheckedSqr);
// console.log(checkedSqr(10)); // 100
// console.log(checkedSqr('')); // arg must be a number
// console.log(checkedSqr(0)); // arg must not be zero

const isEven = n => n % 2 === 0;
const sillySquare = partial1(
  condition1(validator('should be even', isEven)),
  checkedSqr
);
// console.log(sillySquare(10));
// console.log(sillySquare(11));
// console.log(sillySquare(''));
// console.log(sillySquare(0));

const validateCommand = condition1(
  validator('arg must be a map', aMap),
  validator('arg must have the correct keys', hasKeys('msg', 'type'))
);
const createCommand = partial(validateCommand, identity);
