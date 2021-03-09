const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (const index in sentence) {
    if (sentence[index] === ' ') {
      continue;
    } else if (sentence[index] in results) {
      results[sentence[index]].push(Number(index));
    } else {
      results[sentence[index]] = [Number(index)];
    }
  }
  return results;
};

// test code
// let testCase = letterPositions('hello')


// console.log(assertArraysEqual(testCase.h, [0]));
// console.log(assertArraysEqual(testCase.e, [1]));
// console.log(assertArraysEqual(testCase.l, [2, 3]));
// console.log(assertArraysEqual(testCase.o, [4]));

module.exports = letterPositions;