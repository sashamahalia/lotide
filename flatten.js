const assertArraysEqual = require("./assertArraysEqual");

const flatten = (arr) => {
  let result = [];
  for (const item of arr) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      result = result.concat(flatten(item));
    }
  }
  return result;
};

assertArraysEqual([1, 2, 3, 4], flaten([1, 2, [3, 4]]));