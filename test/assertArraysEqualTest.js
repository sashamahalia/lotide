const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//test code
const arr1 = ['lighthouse', 'labs', 'web', 'bootcamp'];
const arr2 = ['lighthouse', 'labs', 'web', 'bootcamp'];
assertArraysEqual(arr1, arr2);

console.log();

const arr3 = [];
const arr4 = [];
assertArraysEqual(arr3, arr4);

console.log();

const arr5 = [1, 2, 3, 4, 5];
const arr6 = [1, 2, 3, 4];
assertArraysEqual(arr5, arr6); //=> should fail