const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//test code
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// const testOne = findKey(obj, x => x === 3);
// assertEqual(testOne, 'c');

// const stars = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);
// assertEqual(stars, 'noma');

// const obj1 = {
//   a: {stringOne: 'hello world'},
//   b: {arrayOne: [3, 4]}
// };

// const test3 = findKey(obj1, x => Array.isArray(x.arrayOne));
// assertEqual(test3, 'b');