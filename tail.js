const assertEqual = require('./assertEqual');

//return everything except the head (first item) of an array
const tail = function(array) {
  const newArray = [];
  for (let item of array) {
    newArray.push(item);
  }
  newArray.splice(0, 1);
  return newArray;
};

module.exports = tail;


