const { partial1 } = require('../Chapter5/partialapp');

const rand = partial1(Math.random, 1);

/**
 * Examples
 */
// console.log(rand(10));

module.exports = rand;
