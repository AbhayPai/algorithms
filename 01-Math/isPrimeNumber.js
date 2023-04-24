module.exports = (n) => {
  // Any number below 2 returned to be false
  if (n < 2) {
    // Hide this and you wont see result in index automatically
    console.info(`PrimeNumber(${n}): `, false);

    // Return the result
    return false;
  }

  // Algorithm used here is Linear Time Complexity: O(sqrt(n))
  // Using sqrt to optimize primality test
  for (let index = 2; index < Math.sqrt(n); index++) {
    if (n%index === 0) {
      // Hide this and you wont see result in index automatically
      console.info(`PrimeNumber(${n}): `, false);

      // Return the result
      return false;
    }
  }

  // Hide this and you wont see result in index automatically
  console.info(`PrimeNumber(${n}): `, true);

  // Return the result
  return true;
};
