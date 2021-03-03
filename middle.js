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

const middle = function(array) {
  let middle = [];
  if (!array.length <= 2) {
    for (let i = 0; i < array.length; i++) {
      if (array.length % 2 === 0 && i === (array.length / 2) - 1) {
        middle.push(array[i], array[i + 1]);
      } else if (array.length % 2 === 1 && i === (array.length / 2) - 0.5) {
        middle.push(array[i]);
      }
    }
  }
  return middle;
}

//console.log(middle());

//Test Code

assertArraysEqual([2, 3], middle([1, 2, 3, 4])); //should match
assertArraysEqual([2], middle([1, 2, 3])); // should match
assertArraysEqual([2, 3], middle([1, 2, 3, 4, 5])); // should not match
assertArraysEqual(['b'], middle(['a', 'b', 'c'])); // should match
assertArraysEqual(['b'], middle(['a', 'b', 'c', 'd'])); // should not match
assertArraysEqual([undefined], middle([NaN, undefined, null])); // should match
assertArraysEqual([], middle([])); // should match


