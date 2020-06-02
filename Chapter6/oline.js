const { partial1 } = require('../Chapter5/partialapp');

const evenOline = n => n === 0 || partial1(oddOline, Math.abs(n) - 1);

const oddOline = n => (n === 0 ? false : partial1(evenOline, Math.abs(n) - 1));

/**
 * Examples
 */
// const nEquals2 = oddOline(3);
// const nEquals1 = nEquals2();
// const nEquals0 = nEquals1();
// console.log(nEquals2); // Function
// console.log(nEquals1); // Function
// console.log(nEquals0); // Function
// console.log(nEquals0()); // true

module.exports = { evenOline, oddOline };
