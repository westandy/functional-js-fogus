const existy = require('../Chapter2/existy');

const myLength = array => {
  // if ( _.isEmptry(ary) )
  if (!existy(array) || !array[0]) {
    return 0;
  } else {
    // _.rest(ary)
    const rest = array.slice(1);
    return 1 + myLength(rest);
  }
};

// console.log(myLength([1, 2, 3, 4, 5]));
