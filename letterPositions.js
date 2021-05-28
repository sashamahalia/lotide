const letterPositions = function(sentence) {
  const results = {};

  for (const index in sentence) {
    if (sentence[index] === ' ') {
      continue;
    } else if (sentence[index] in results) {
      results[sentence[index]].push(Number(index));
    } else {
      results[sentence[index]] = [Number(index)];
    }
  }
  return results;
};

module.exports = letterPositions;