const countLetters = function(setence) {
  const result = {};

  for (letter of setence) {
    if (letter === ' ') {
      letter++;
    } else if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;


