// Invoker - not curried
const rightAwayInvoker = (method, target, ...args) =>
  method.apply(target, args);

// console.log(rightAwayInvoker(Array.prototype.reverse, [1, 2, 3]));

// Curried
// const invoker = require('../Chapter4/invoker');
// console.log(invoker('reverse', Array.prototype.reverse)([1, 2, 3]));

/**
 * To curry right or to curry left
 */
const div = (n, d) => n / d;
const leftCurryDiv = n => d => n / d;
const rightCurryDiv = d => n => n / d;

// Examples
// const divide10By = leftCurryDiv(10); // d => 10 / d;
// console.log(divide10By(2)); // 5

// const divideBy10 = rightCurryDiv(10); // n => n / 10;
// console.log(divideBy10(2)); // 0.2

/**
 * Automatically Currying Parameters
 */
const curry = func => arg => func(arg);

const test = ['11', '11', '11', '11'];
// console.log(test.map(parseInt)); // [11,NaN, 3, 4]
// What is happening for test.map(parseInt):
// console.log(test.map((item, index) => parseInt(item, index))); // [11,NaN, 3, 4]
// console.log(test.map(curry(parseInt))); // [11,11,11,11]

const curry2 = func => secondArg => firstArg => func(firstArg, secondArg);
const parseBaseTen = curry2(parseInt)(10);
// console.log(test.map(parseBaseTen));

/**
 * CountyBy Example
 */
const countBy = (array, groupingFunc) =>
  array.reduce((accum, item) => {
    const key = groupingFunc(item);
    const count = accum[key] ? accum[key] + 1 : 1;
    return { ...accum, [key]: count };
  }, {});

const plays = [
  { artist: 'Burial', track: 'Archangel' },
  { artist: 'Ben Frost', track: 'Stomp' },
  { artist: 'Ben Frost', track: 'Stomp' },
  { artist: 'Burial', track: 'Archangel' },
  { artist: 'Emeralds', track: 'Snores' },
  { artist: 'Burial', track: 'Archangel' }
];
// console.log(countBy(plays, song => [song.artist, song.track].join(' - ')));
/**
{
  'Burial - Archangel': 3,
  'Ben Frost - Stomp': 2,
  'Emeralds - Snores': 1
}
*/

const songToString = song => [song.artist, song.track].join(' - ');
/**
 * IMPORTANT!
 * By using curry2(countBy) we have fixed the second argument,
 * the groupingFunc.  This means we can pass `songCount` to something else
 * and many different arrays of songs can be passed to this function.
 * We have decoupled `plays` data from the grouping function but still
 * get the utility of countBy
 */
const songCount = curry2(countBy)(songToString);
// console.log('Test', songCount(plays));

/**
 * Currying Three Parameters to implement HTML HEX Color Builders
 */
const curry3 = fun => last => middle => first => fun(first, middle, last);

const uniq = (array, iteratee, isSorted = true) => {
  const uniqueObj = array.reduce((accum, item) => {
    const key = iteratee(item);
    return { ...accum, [key]: 1 };
  }, {});
  const uniques = Object.keys(uniqueObj);
  return isSorted ? uniques.sort() : uniques;
};

const songsPlayed = curry3(uniq)(false)(songToString);
// console.log(songsPlayed(plays));
/**
 * IMPORTANT
 * Why not just do this?
 */
// console.log(uniq(plays, songToString, false));

module.exports = { curry, curry2, curry3, uniq, countBy };
