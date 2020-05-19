/**
 * creates a function that validates an object against the validators
 */
const checker = (...VALIDATORS) => {
  return obj =>
    VALIDATORS.reduce(
      (errors, isValid) =>
        isValid(obj) ? errors : [...errors, isValid.message],
      []
    );
};

/**
 * First Example
 * Validating a Command Object
 */

// Always validate an object.  We should get an emptry [], i.e. errors are empty
const always = require('./always');
const alwaysPasses = checker(always(true), always(true));
// console.log('alwaysPasses({}): ', alwaysPasses({})); // []

// Always invalidate an object
const fails = always(false);
fails.message = 'a failure in life';
const alwaysFails = checker(fails);
// console.log('alwaysFails({}): ', alwaysFails({})); // [fails.message]

/**
 * Validator API - creates a common validator
 * with a message and a given validation method
 */
const validator = (message, fn) => {
  const f = (...args) => fn.apply(fn, args);
  f.message = message;
  return f;
};

// Test the Validator API
const gonnaFail = checker(validator('ZOMG!', always(false)));
// console.log('gonnaFail(100)', gonnaFail(100)); // ['ZOMG!']

/**
 * Isolating Individual Checkers
 */
const aMap = obj => typeof obj === 'object';

/**
 * Create a validator for an object
 * 1) Object must be a map
 */
const checkCommand = checker(validator('must be a map', aMap));
// console.log('checkCommand({})', checkCommand({})); // true
// console.log('checkCommand(42)', checkCommand(42)); // must be a map

const hasKeys = (...keys) => {
  let fun = obj => keys.every(key => obj.hasOwnProperty(key));
  fun.message = ['Must have values for keys:', ...keys].join(' ');
  return fun;
};

/**
 * Create a validator for an object
 * 1) Object must be a map
 * 2) Object must have 'msg' and 'type' properties
 */
const checkCommand2 = checker(
  validator('must be a map', aMap),
  hasKeys('msg', 'type')
);

// Test the checkCommand2 validator
// console.log(
//   "checkCommand2({ msg: 'blah', type: 'display' })",
//   checkCommand2({ msg: 'blah', type: 'display' })
// ); // []
// console.log('checkCommand2(42)', checkCommand2(32)); // ["must be a map", "Must have values for keys: msg type"]
// console.log('checkCommand2({})', checkCommand2({})); // ["Must have values for keys: msg type"]

module.exports = { checker, validator, aMap, hasKeys, checkCommand2 };
