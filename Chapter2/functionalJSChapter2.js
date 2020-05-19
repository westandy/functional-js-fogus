// var fortytwo = function() { return 42 };
const fortyTwo = () => 42;

//var fortytwos = [42, function() { return 42 }];
const fortyTwos = [42, () => 42];

//var fortytwos = {number: 42, fun: function() { return 42 }};
const fortyTwosObj = {number:42, fun: () => 42};

//42 + (function() { return 42 })();
console.log( 42 + (() => 42)() )
// 84

/**
 * function weirdAdd(n, f) { return n + f() }
 * (42, function() { return 42 });
 */
const weirdAdd = (n,f) => n + f();
console.log(weirdAdd(42, () => 42)); // 84

