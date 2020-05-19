/**
 * Partially Applying One and Two Known Arguments
 */
const partial1 = (fun, arg1) => (...arguments) => {
  const allArgs = [arg1, ...arguments];
  return fun.apply(fun, allArgs);
};
// Example Usage
const div = (n, d) => n / d;
const over10Part1 = partial1(div, 10); // Fix the numerator to 10
// console.log(over10Part1(5)); // 10/5 == 2

const partial2 = (fun, arg1, arg2) => (...arguments) => {
  const args = [arg1, arg2, ...arguments];
  return fun.apply(fun, args);
};
// Example Usage
const div10By2 = partial2(div, 10, 2); // Fix the numerator to 10 and the denominator to 2
// console.log(div10By2()); // no parameters left, so it always outputs 10 / 2 = 5

/**
 * Partially Applying an Arbitrary Number of Arguments
 */
const partial = (fun, ...pargs) => (...arguments) => {
  const args = [...pargs, ...arguments];
  return fun.apply(fun, args);
};

module.exports = { partial1, partial2, partial };
