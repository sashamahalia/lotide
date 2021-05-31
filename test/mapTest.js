const assert = require('chai').assert;
const map = require('../map');


describe("#map", () => {
  it('returns ["g", "c", "t", "m", "t"]  given ["ground", "control", "to", "major", "tom"], word => word[0]', () => {
     const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });
  it('returns ["black bird", "black bear", "black sheep"] if given ["bird", "bear", "sheep"], animal => `black ${animal}`', () => {
    assert.deepEqual(map(["bird", "bear", "sheep"], animal => `black ${animal}`), ['black bird', 'black bear', 'black sheep']);
  });
  it('returns [20, 40, 60, 80] if given map([2, 4, 6, 8], num => num * 10)', () => {
    assert.deepEqual(map([2, 4, 6, 8], num => num * 10), [20, 40, 60, 80]);
  });
  it('returns [] if given [])', () => {
    assert.deepEqual(map([]), []);
  });
});