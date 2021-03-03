const assertArraysEqual = function(firstArray, secondArray) {
  let trueOrFalse = true;
  if (firstArray.length !== secondArray.length) {
    trueOrFalse = false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      trueOrFalse = false;
      break;
    }
  }
  let result = (trueOrFalse ? console.log("The two arrays DO match!") : console.log("The two arrays don't match!"));
  return result;
};

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

const without = function(source, itemsToRemove) {
  const filterArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      filterArray.push(item);
    }
  }
  return filterArray;
};

