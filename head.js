// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  switch (array[0]) {
  case '':
  return undefined; 
  default:
    return array[0];
  }
};

