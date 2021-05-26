const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true if both arrays are [1, 2, 3, 4]', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4];
    assert.isTrue(eqArrays(arr1, arr2));
  })
  it('should return false if one array is [1, 2, 3, 4] and the other is [1, 2, 3, 4, 5]', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4, 5];
    assert.isFalse(eqArrays(arr1, arr2));
  })
  it('should return false if two arrays are the same except for one containing a varible instead of a string', () => {
    const string1 = ['what', 'about', 'a', 'snack'];
    const a = 'a tasty';
    const string2 = ['what', 'about', a, 'snack'];
    assert.isFalse(eqArrays(string1, string2));
  })
});
