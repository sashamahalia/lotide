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

const takeUntil = (array, callback) => {
  const newArray = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

//test cases
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

// const loona = ['heejin', 'hyunjin', 'haseaul', 'yeojin', 'vivi', 'kim lip', 'jinsoul', 'choerry', 'yves', 'chuu', 'gowon', 'oliva hye'];
// const results3 = takeUntil(loona, x => x.includes(' '));
// assertArraysEqual(results3, ['heejin', 'hyunjin', 'haseaul', 'yeojin', 'vivi',]);

module.exports = takeUntil;

