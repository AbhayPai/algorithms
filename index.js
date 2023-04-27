// Start Math Algorithm
// Requiring custom module of FibonacciSequence
let FibonacciSequence = require("./01-Math/FibonacciSequence");
let FactorialNumber = require("./01-Math/FactorialNumber");
let PrimeNumber = require("./01-Math/PrimeNumber");
let isPowerOfTwo = require("./01-Math/isPowerOfTwo");

// Start FibonacciSequence
FibonacciSequence(2);
FibonacciSequence(7);
// End FibonacciSequence

// Start FactorialNumber
FactorialNumber(0);
FactorialNumber(5);
// End FactorialNumber

// Start PrimeNumber
PrimeNumber(1);
PrimeNumber(2);
PrimeNumber(3);
PrimeNumber(5);
// End PrimeNumber

// Start isPowerOfTwo
isPowerOfTwo(1);
isPowerOfTwo(2);
isPowerOfTwo(3);
isPowerOfTwo(5);
// End isPowerOfTwo

// End Math Algorithm

// Start Recursive Algorithm
let RecursiveFibonacci = require("./02-Recursive/01-RecursiveFibonacci");

RecursiveFibonacci(2);
// End Recursive Algorithm
