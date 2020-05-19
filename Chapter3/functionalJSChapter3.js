let globals = {};

function makeBindFun(resolver) {
  return (k, v) => {
    let stack = globals[k] || [];
    globals[k] = resolver(stack, v);
    return globals;
  };
}

const stackBinder = makeBindFun((stack, v) => {
  stack.push(v);
  return stack;
});

const stackUnbinder = makeBindFun(stack => {
  stack.pop();
  return stack;
});

const dynamicLookup = k => {
  const slot = globals[k] || [];
  const [last] = slot.slice(-1);
  return last;
};

stackBinder('a', 1);
stackBinder('b', 100);
// console.log(globals);

stackBinder('a', '*');
// console.log(dynamicLookup('a'));
// console.log(globals);

function f() {
  return dynamicLookup('a');
}
function g() {
  stackBinder('a', 'g');
  return f();
}

// console.log(f());
// console.log(g());
// console.log(globals);

console.log(
  {
    f: function () {
      return this;
    }
  }.f.call('Anything can be this')
);
