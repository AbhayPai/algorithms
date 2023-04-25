module.exports = (n) => {
  // Series always start with 0 and 1
  const givenNumber = [0, 1];

  // Algorithm used here is Linear Time Complexity: O(n)
  // Need to start with array index of 2, since 0 and 1 are prepopulated
  // in the series
  for (let index = 2; index < n; index++) {
    // Populate the array with previous 2 numbers
    givenNumber[index] = givenNumber[index - 1] + givenNumber[index - 2];
  }

  // Hide this and you wont see result from index.js file automatically
  console.info(`FibonacciSequence(${n})`);
  console.table(givenNumber);

  // Return the newly populated array
  return givenNumber;
};
