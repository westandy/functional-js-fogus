const existy = require('../Chapter2/existy');
const isEmpty = require('../Chapter2/isEmpty');

const myLength = array => {
  if (!existy(array) || !array[0]) {
    return 0;
  } else {
    const rest = array.slice(1);
    return 1 + myLength(rest);
  }
};

// console.log(myLength([1, 2, 3, 4, 5]));

const myLengthIterative = array => {
  if (!existy(array) || !array[0]) return 0;

  let CPU_STACK = [];
  for (let ii = 0; !!array[ii]; ii++) {
    CPU_STACK.push(ii);
  }

  let count = 0;
  while (!isEmpty(CPU_STACK)) {
    count++;
    CPU_STACK.pop();
  }
  return count;
};

console.log(myLengthIterative([1, 2, 3, 4, 5]));

module.exports = myLength;
