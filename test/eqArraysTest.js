const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test code
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
assertEqual(eqArrays(arr1, arr2), true);

console.log();

arr2.push(5);
assertEqual(eqArrays(arr1, arr2), false);

console.log();

const string1 = ['what', 'about', 'a', 'snack'];
const a = 'a tasty';
const string2 = ['what', 'about', a, 'snack'];
assertEqual(eqArrays(string1, string2), false)


