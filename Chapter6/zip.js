const construct = require('../Chapter2/construct');

const constructPair = (pair, rests) => {
  // _.first(pair)
  const [firstPair] = pair.slice(0, 1);
  // _.first(rests)
  const [firstRests] = rests.slice(0, 1);
  // second(pair)
  const [secondPair] = pair.slice(1);
  // second(rests)
  const [secondRests] = rests.slice(1);
  return [construct(firstPair, firstRests), construct(secondPair, secondRests)];
};

// console.log(constructPair(['a', 1], [[], []]));

// console.log(
//   constructPair(
//     ['a', 1],
//     constructPair(['b', 2], constructPair(['c', 3], [[], []]))
//   )
// );

const unzip = pairs => {
  if (!pairs || pairs.length == 0) {
    return [[], []];
  }

  const [firstPair, ...restPairs] = pairs;
  return constructPair(firstPair, unzip(restPairs));
};

/**
 * Turn lha = [1,2,3], rha = [4,5,6] into
 * [[1,4],[2,5],[3,6]]
 * Pairing values at the same index of each array
 */
const zip = (lha, rha) => lha.map((item, index) => [item, rha[index]]);

// console.log(unzip(zip([1, 2, 3], [4, 5, 6])));

module.exports = { constructPair, unzip, zip };
