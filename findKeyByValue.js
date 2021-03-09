const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let message = undefined;
  for (const key in object) {
    if (object[key] === value) {
      message = key;
      break;
    }
  }
  return message;
};

// // test cases

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'drama'); // should fail

module.exports = findKeyByValue;