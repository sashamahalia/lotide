const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key] && object2[key])) {
      if (eqArrays(object1[key], object2[key]) !== true) {
        return false;
      }
      
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


//test code

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); //should log true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); //should log true

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2);
// assertEqual(eqObjects(cd, cd2), false);