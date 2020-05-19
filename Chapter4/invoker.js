const existy = require('../Chapter2/existy');
const identity = require('../Chapter2/identity');

const invoker = (name, method) => (target, ...arguments) => {
  if (!existy(target)) console.error('Must provide a target');
  const targetMethod = target[name];

  if (existy(targetMethod) && method == targetMethod) {
    return targetMethod.apply(target, arguments);
  } else {
    // console.error('Method does apply to target');
  }
};

module.exports = invoker;

// const rev = invoker('reverse', Array.prototype.reverse);
// console.log(rev([1, 2, 3]));
// console.log(rev('1'));
