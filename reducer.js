const array = [1, 2, 3, 4, 5];

// const sum = array.reduce((sum, value) => sum + value, 0);

const sum = array.reduce((accum, item) => {
  const newAccum = accum + item;
  return newAccum;
}, 0);
console.log(sum);

// Contrived form validation
const functions = [() => true, () => false, () => true];
const isValid = functions.reduce((evaluated, fn) => {
  return evaluated && fn();
}, true);
console.log(isValid);

const or = functions =>
  functions.reduce((evaluated, fn) => evaluated || fn(), false);

const and = functions =>
  functions.reduce((evaluated, fn) => evaluated && fn(), true);

const max = arrayOfNumbers =>
  arrayOfNumbers.reduce((maxValue, value) => Math.max(value, maxValue), -1e6);
console.log(max(array));

// filter : [apples, oranges].filter(oranges) == [apples]
// map: [apples].map(toOranges) == [oranges]
// reduce: [apples, oranges, bananas].reduce((pie,fruit)=>{...},pan) == fruit pie
