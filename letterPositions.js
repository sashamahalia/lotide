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
    console.log("The two arrays DO match!");
  } else {
    console.log("The two arrays DON'T match!");
  }
};

const letterPositions = function(sentence) {
  const results = {};
  
  return results;
};

let testCase = letterPositions('hello')

const wordies = 'he llo';

for (char in wordies) {
  if (wordies[char] === ' ') {
    char++
  } else {
    console.log(char);
  }
}

// console.log(assertArraysEqual(testCase.h, [0]));
// console.log(assertArraysEqual(testCase.e, [1]));
// console.log(assertArraysEqual(testCase.l, [2, 3]));
// console.log(assertArraysEqual(testCase.l, [4]));