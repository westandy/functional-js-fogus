/**
 * A simple recursive fibonacci solution
 */
const fibonacciNaive = nth => {
  if (nth < 2) {
    return 1;
  }
  return fibonacciNaive(nth - 1) + fibonacciNaive(nth - 2);
};

// console.log(fibonacciNaive(20));

/**
 * Dynamic combined with Recursion to avoid a stack overflow
 * From 2^N stack operations to N stack operations (still 2^N function calls)
 */
let mem = {};
const fibonacciDynamic = nth => {
  if (nth < 2) {
    return 1;
  }
  if (!mem[nth]) {
    mem[nth] = fibonacciDynamic(nth - 1) + fibonacciDynamic(nth - 2);
  }
  return mem[nth];
};
console.log(fibonacciDynamic(1200));
