const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(setence) {
  const result = {};

  for (letter of setence) {
    if (letter === ' ') {
      letter++;
    } else if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

//test cases
// const testCase = countLetters('this is a string');
// assertEqual(testCase.t, 2); //should pass
// assertEqual(testCase[' '], undefined); //should pass
// assertEqual(testCase.n, 1); // should pass
