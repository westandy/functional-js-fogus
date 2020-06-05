const { partial } = require('../Chapter5/partialapp');
const { trampoline } = require('./trampoline');

/**
 * A working "generator" - an example of infinite tail recursion
 * @param seed - a function to calculate the seed value for the next cell
 * @param current - a function to calculate the value at a given cell
 * @param step - a function to step to the next cell
 */
const generator = (seed, current, step) => ({
  head: current(seed),
  tail: () => {
    console.log('forced');
    return generator(step(seed), current, step);
  }
});
const genHead = gen => gen.head;
const genTail = gen => gen.tail();

/**
 * Take a generator and run it through
 * to the end of the tail.
 */
const genTake = (n, gen) => {
  const doTake = (x, g, ret) =>
    x === 0 ? ret : partial(doTake, x - 1, genTail(g), ret.concat(genHead(g)));

  // Run doTake(n,gen,[]) and evaluating each result
  // until it is no longer a function
  return trampoline(doTake, n, gen, []);
};

/**
 * Examples
 */

const identity = x => x;
const increment = n => n + 1;
const integers = generator(0, identity, increment);
// console.log(genHead(integers));
// console.log(genTail(integers));

// console.log(genTake(10, integers));
// console.log(genTake(100, integers));
// console.log(genTake(1000, integers));
// console.log(genTake(10000, integers));

module.exports = { generator, genHead, genTail, genTake };
