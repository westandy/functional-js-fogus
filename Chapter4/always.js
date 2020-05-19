const always = value => {
  return function () {
    return value;
  };
};

// const always = value => () => value;

// const f = always(() => {});
// console.log(f() === f());

module.exports = always;
