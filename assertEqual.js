// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😇😇😇 Assertion Passed: ' + actual  + ' === ' + expected);
  } else {
    console.log('😭😭😭 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual('hello world', 'hello world');
assertEqual('hello', 'hello world');
assertEqual(52, 52);
assertEqual(52, 53);