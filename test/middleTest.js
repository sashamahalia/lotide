const middle = require("../middle");
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//Test Code

assertArraysEqual([2, 3], middle([1, 2, 3, 4])); //should match
assertArraysEqual([2], middle([1, 2, 3])); // should match
assertArraysEqual([2, 3], middle([1, 2, 3, 4, 5])); // should not match
assertArraysEqual(['b'], middle(['a', 'b', 'c'])); // should match
assertArraysEqual(['b'], middle(['a', 'b', 'c', 'd'])); // should not match
assertArraysEqual([undefined], middle([NaN, undefined, null])); // should match
assertArraysEqual([], middle([])); // should match