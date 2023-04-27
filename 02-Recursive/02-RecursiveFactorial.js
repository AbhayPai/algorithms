const RecursiveFactorial = (n) => {
  let result;

  if (n === 0) {
    // Set result
    result = 1;
  } else {
    // Algorithm used here is Exponential Time: O(n)
    // Set result
    result = result * RecursiveFactorial(n - 1);
  }

  // Hide this and you wont see result from index.js file automatically
  console.info(`RecursiveFactorial(${n}): `, result);

  // Return the result
  return result;
};

module.exports = RecursiveFactorial;