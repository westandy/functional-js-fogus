// var x = 1;

// // function someFunc() {
// //   console.log(x);
// //   var x = 2; // these two steps happen at different places
// // }

// // what actually happens at runtime
// function someFunc2() {
//   var x;
//   console.log(x);
//   x = 2;
// }

// // someFunc(); // undefined, but why
// someFunc2();

function captureShadow(SHADOWED) {
  return function (SHADOWED) {
    console.log(SHADOWED + 1);
    return SHADOWED + 1;
  };
}
var closureShadow = captureShadow('mickey mouse');
closureShadow(100);
