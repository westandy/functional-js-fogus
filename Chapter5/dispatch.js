const invoker = require('../Chapter4/invoker');
const existy = require('../Chapter2/existy');

/**
 * Loop through an array of functions, 'functions'
 * call each with an object and return the first actual value it finds
 */
const dispatch = (...functions) => {
  const size = functions.length;
  return (target, ...args) => {
    for (let index = 0; index < size; index++) {
      const func = functions[index];
      const ret = func.apply(null, [target, ...args]);
      if (existy(ret)) return ret;
    }
  };
};
module.exports = dispatch;

/**
 * Examples
 */
const stringReverseRecursive = strValue => {
  // Base Cases
  if (!existy(strValue)) return strValue;
  if (strValue.length <= 1) return strValue;

  // Recursive Step
  const lastChar = strValue.slice(-1);
  const rest = strValue.slice(0, -1);
  return lastChar.concat(stringReverseRecursive(rest));
};
console.log(stringReverseRecursive());
console.log(stringReverseRecursive('a'));
console.log(stringReverseRecursive('ab'));
console.log(stringReverseRecursive('abcde'));
console.log(stringReverseRecursive('abcba')); // ha ha just kidding

// Basic toString -
// Can build a toString both Arrays and Strings without having to check types
const str = dispatch(
  invoker('toString', Array.prototype.toString),
  invoker('toString', String.prototype.toString)
);
console.log(str('a'));
console.log(str([1, 2, 3]));

// Build your own reverse for Strings
// and combine it with Arrays.
//
const reverse = dispatch(
  invoker('reverse', Array.prototype.reverse),
  stringReverseRecursive
);

console.log(reverse([1, 2, 3]));
//=> [3, 2, 1]

console.log(reverse('abc'));
//=> "cba"
