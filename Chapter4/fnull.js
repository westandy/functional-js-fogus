const existy = require('../Chapter2/existy');
const identity = require('../Chapter2/identity');

const fnull = (fn, ...defaults) => {
  return (...args) => {
    const newArgs = args.map((argument, index) =>
      existy(argument) ? argument : defaults[index]
    );
    return fn.apply(null, newArgs);
  };
};

// const someFunctionCreator =
// (argumentsIWantToCapture) => (argumentsAtRunTime) => {doingStuffWithAlltheArguments};

// Safe Multiply Problem
const nums = [1, 2, 3, null, 5];
const multiply = (total, n) => total * n;
const safeMultiply = fnull(multiply, 1 /*total*/, 1 /*n*/);
const test = nums.reduce(safeMultiply);
console.log(test);

// configuration object problem
// use fnull to set defaults of a configuration object
const createDefaults = def => (obj, key) => {
  const val = fnull(identity, def[key]);
  return obj && val(obj[key]);
};

const readCriticalKeyFromConfig = config => {
  const lookup = createDefaults({ critical: 108 });
  return lookup(config, 'critical');
};
console.log(readCriticalKeyFromConfig({ critical: '9' })); // 9
console.log(readCriticalKeyFromConfig({})); // 108
