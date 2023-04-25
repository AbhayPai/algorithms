module.exports = (n) => {
  // Factorial is always starts with 1 for all non negative integers
  let result = 1;

  // Algorithm used here is Linear Time Complexity: O(n)
  // Need to start with array index of 2, since multiplying by 1 has no effect
  for (let index = 2; index <= n; index++) {
    // Populate the result with previous result times index
    result = result * index;
  }

  // Hide this and you wont see result from index.js file automatically
  console.info(`FactorialNumber(${n}): `, result);

  // Return the result
  return result;
};
