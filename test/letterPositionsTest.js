const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it('returns [0] for "hello"', () => {
    assert.deepEqual(letterPositions('hello').h, [0]);
  });
  it('returns [2, 3] for "hello"', () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });
  it('returns an empty object for []', () => {
    assert.deepEqual(letterPositions([]), {});
  });
});
