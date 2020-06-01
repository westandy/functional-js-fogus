const cycle = (times, array) => {
  if (times <= 0) {
    return [];
  }
  return [...array, ...cycle(times - 1, array)];
};

// console.log(cycle(20, [1, 2, 3]));

module.exports = cycle;
