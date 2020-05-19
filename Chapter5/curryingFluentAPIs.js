const { checker, validator } = require('../Chapter4/objectValidators');
const { curry2 } = require('./currying');

const greaterThan = curry2((lhs, rhs) => lhs > rhs);
const lessThan = curry2((lhs, rhs) => lhs < rhs);

const withinRange = checker(
  validator('arg must be greater than 10', greaterThan(10)),
  validator('arg must be less than 20', lessThan(20))
);
console.log(withinRange(15)); // [] - no errors
console.log(withinRange(1)); // ['arg must be greater than 10'] - an error
