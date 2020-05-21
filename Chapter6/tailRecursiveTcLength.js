const isEmpty = require('../Chapter2/isEmpty');

const tcLength = (array, n) => {
  const len = n ? n : 0;

  if (isEmpty(array)) {
    return len;
  } else {
    const rest = array.slice(1);
    return tcLength(rest, len + 1);
  }
};
// console.log(tcLength([1, 2, 3, 4, 5]));

module.exports = { tcLength };
