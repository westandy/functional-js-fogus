// ES5
function createScaleFunction(factor) {
  return function (v) {
    return v.map(n => n * factor);
  };
}

// ES6
// const createScaleFunction = factor => v => v.map(n => n * factor);

const scale10 = createScaleFunction(10);
// console.log(scale10([1, 2, 3, 4]));

function createWeirdScaleFunction(factor) {
  return function (v) {
    this['FACTOR'] = factor;
    const captures = this;
    const mapper = n => n * this['FACTOR'];
    mapper.bind(captures);
    return v.map(mapper);
  };
}

const scaleWeird10 = createWeirdScaleFunction(10);
// console.log(scaleWeird10.call({}, [5, 6, 7]));

/**
 * Complement Example
 */
const complement = predicate => (...arguments) =>
  !predicate.apply(null, arguments);
module.exports = { complement };

const isEven = n => n % 2 == 0;
const isOdd = complement(isEven);

// console.log(isEven(40));
// console.log(isOdd(41));
