const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it('should return 2 when passed a sentence and the key "t" is called', () => {
    const testOne = countLetters('this is a string');
    assert.strictEqual(2, testOne.t);
  });
  it('should return undefined when passed a space as a key', () => {
    const testTwo = countLetters('this is a new string');
    assert.strictEqual(testTwo[' '], undefined);
  });
  it('should return 1 when passed "this is a string" and the key "n" is called', () => {
    const testThree = countLetters('this is a string');
    assert.strictEqual(testThree.n, 1);
  });
});


//test cases
// const testCase = countLetters('this is a string');
// assertEqual(testCase.t, 2); //should pass
// assertEqual(testCase[' '], undefined); //should pass
// assertEqual(testCase.n, 1); // should pass