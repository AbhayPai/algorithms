const recursiveFibonacci = (n) => {
  let result;

  if (n < 2) {
    // Set result
    result = n;
  } else {
    // Algorithm used here is Exponential Time: O(2^n)
    // Set result
    result = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }

  // Hide this and you wont see result from index.js file automatically
  console.info(`recursiveFibonacci(${n}): `, result);

  // Return the result
  return result;
};

module.exports = recursiveFibonacci;
