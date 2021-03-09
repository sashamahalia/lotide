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

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
//test code


// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// const animals = ['bird', 'bear', 'sheep']
// const concat = map(animals, animal => `black ${animal}`);
// assertArraysEqual(concat, ['black bird', 'black bear', 'black sheep']);

// const nums = [2, 4, 6, 8];
// const timesTen = map(nums, num => num * 10);
// assertArraysEqual(timesTen, [20, 40, 60, 80]);

module.exports = map;