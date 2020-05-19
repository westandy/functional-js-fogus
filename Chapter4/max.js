// const basicMax = (array, plucker) =>
//   array.reduce((max, item) => Math.max(plucker(item), max), -1);

// console.log(basicMax([1, 2, 3, 4.75, 4.5]));

// array.filter => [apples,oranges].filter(oranges) = [oranges]
// array.map => [apples].map(orangeMapper) = [oranges]
// array.reduce => [apples,oranges].reduce((pinapple pie,fruit)) =  pinapple

[1, 2, 3, 4, 5].reduce((sum, value) => {
  const newSum = sum + value;
  return newSum;
}, 0);
// 15

const any = array =>
  array.reduce((evalulation, fn) => evalulation || fn(), false);

console.log(any([() => true, () => false])); // true

const all = array =>
  array.reduce((evalulation, fn) => evalulation && fn(), true);
console.log(all([() => true, () => false])); // false
