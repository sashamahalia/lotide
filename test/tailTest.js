const assertEqual = require('../assertEqual');
const tail = require('../tail');


//test code
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

console.log();

const numArray = [1, 2, 3, 4, 5]
result = tail(numArray);
assertEqual(result.length, 4);
assertEqual(result[0], 2);
assertEqual(result[1], 3);

// to test original array hasn't been altered
assertEqual(numArray.length, 5);