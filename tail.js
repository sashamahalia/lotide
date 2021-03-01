const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  const newArray = [];
  for (let item of array) {
    newArray.push(item);
  }
  newArray.splice(0, 1);
  return newArray;
};

