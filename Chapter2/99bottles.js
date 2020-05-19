const imperativeWay = () => {
  let lyrics = [];
  for (let bottles = 99; bottles > 0; bottles--) {
    lyrics.push(bottles + " bottles of beer on the wall");
    lyrics.push(bottles + " bottles of beer");
    lyrics.push();

    if (bottles > 1) {
      lyrics.push(bottles - 1 + " bottles of beer on the wall.");
    } else {
      lyrics.push("No more bottles of beer on the wall!");
    }
  }
  return lyrics;
};
// console.log(imperativeWay());

/**
 * Andy's refactor from imperative to functional
 */
const stillImperativeBut = () =>
  Array.from({ length: 99 }).reduceRight(
    (accum, _, bottles) => [
      ...accum,
      bottles + " bottles of beer on the wall",
      bottles + " bottles of beer",
      "Take one down, pass it around",
      bottles > 1
        ? bottles - 1 + " bottles of beer on the wall."
        : "No more bottles of beer on the wall!",
    ],
    []
  );
// console.log(stillImperativeBut());

/**
 * Andy's Functional version
 */
const andyLyricSegment = bottles => [
  bottles + " bottles of beer on the wall",
  bottles + " bottles of beer",
  "Take one down, pass it around",
  bottles > 1
    ? bottles - 1 + " bottles of beer on the wall."
    : "No more bottles of beer on the wall!",
];
// console.log(andyLyricSegment(9));

const andySong = (numBottles, lyricGenerator) =>
  Array.from({ length: numBottles }).reduceRight(
    (song, _, bottles) => [...song, ...lyricGenerator(bottles + 1)],
    []
  );
// console.log(andySong(99, andyLyricSegment));

/**
 * Michael Fogus' underscore functional solution
 */
const _ = require("underscore");
const lyricSegment = n =>
  _.chain([])
    .push(n + " bottles of beer on the wall")
    .push(n + " bottles of beer")
    .push("Take one down, pass it around")
    .tap(lyrics =>
      n > 1
        ? lyrics.push(n - 1 + " bottles of beer on the wall.")
        : lyrics.push("No more bottles of beer on the wall!")
    )
    .value();
// console.log(lyricSegment(9));

const song = (start, end, lyricGen) =>
  _.reduce(_.range(start, end, -1), (acc, n) => [...acc, ...lyricGen(n)], []);
// console.log(song(99, 0, lyricSegment));

const array = [{ test: 1 }, { test: 1 }, { test: 2 }];

console.log(array.filter(item => item.test > 1));
console.log(array.map(item => item.test));

console.log(array.filter(item => item.test > 1).map(item => item.test));

console.log(
  array.reduce((accum, item) => {
    if (item.test > 1) {
      return [...accum, item.test];
    } else {
      return accum;
    }
  }, [])
);
