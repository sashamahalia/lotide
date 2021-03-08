const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

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
};

module.exports = middle;




