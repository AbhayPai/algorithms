module.exports = (n) => {
  let result = false;

  if (n < 1) {
    // Hide this and you wont see result from index.js file automatically
    console.info(`isPowerOfTwo(${n}): `, result);

    // Return the result
    return result;
  }

  // Algorithm used here is Constant Time Complexity: O(1)
  // Using bitwise and operator to determine power of two
  result = (n & (n - 1)) === 0;

  // Hide this and you wont see result from index.js file automatically
  console.info(`isPowerOfTwo(${n}): `, result);

  // Return the result
  return result;
};
