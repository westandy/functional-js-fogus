const makeUniqueStringFunction = start => {
  let counter = start;
  return prefix => [prefix, counter++].join('');
};

const uniqueString = makeUniqueStringFunction(0);
console.log(uniqueString('dari'));
console.log(uniqueString('dari'));

// var omgenerator = (function (init) {
//   var COUNTER = init;

//   return {
//     uniqueString: function (prefix) {
//       return [prefix, COUNTER++].join('');
//     }
//   };
// })(0);

// console.log(omgenerator.uniqueString('lichking-'));
