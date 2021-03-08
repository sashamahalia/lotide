const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] if given ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns [2, 3, 4, 5] if given [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it('returns 4 if given tail([1, 2, 3, 4, 5]).length', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]).length, 4);
  });
  it('returns 4 if given tail([1, 2, 3, 4, 5]).length', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]).length, 4);
  });
  it('returns [] if given [])', () => {
    assert.deepEqual(tail([]), []);
  });
});