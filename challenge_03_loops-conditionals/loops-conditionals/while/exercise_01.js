/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

/**
 * isEvenWhile
 */
const isEvenWhile = function (initialNumber, finalNumber) {
  let currentNumber = initialNumber;

  while (currentNumber < finalNumber) {
    currentNumber % 2 === 0 && console.log(`Number ${currentNumber} is even`);
    currentNumber++;
  }
};

/**
 * isOddWhile
 */
const isOddWhile = function (initialNumber, finalNumber) {
  let currentNumber = initialNumber;

  while (currentNumber < finalNumber) {
    currentNumber % 2 !== 0 && console.log(`Number ${currentNumber} is odd`);
    currentNumber++;
  }
};

/**
 * Program execution
 */
console.log("###############################");
console.log("--- Is EVEN or ODD while Program ---");

const initialNumber = 10;
const finalNumber = 40;

isEvenWhile(initialNumber, finalNumber);
isOddWhile(initialNumber, finalNumber);

console.log("--- Is EVEN or ODD while complete ---");
