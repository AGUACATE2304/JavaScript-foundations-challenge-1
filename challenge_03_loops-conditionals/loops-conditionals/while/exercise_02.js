/*
    1. Create a while loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    Expected output:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!
*/

/**
 * isTenthWhile
 */
const isTenthWhile = function (startNumber, limitNumber) {
  let currentNumber = startNumber;

  while (currentNumber <= limitNumber) {
    if (currentNumber === 100) {
      console.log("You made it!\nAll, done!");
    }

    if (currentNumber === 50) {
      console.log("Half way there!");
    }

    if (currentNumber % 10 === 0 && currentNumber % 50 !== 0) {
      console.log(`Checkpoint! ${currentNumber}`);
    }

    currentNumber++;
  }
};

/**
 * Program execution
 */
console.log("###############################");
console.log("--- Is TENTH while Program ---");

const startNumber = 1;
const limitNumber = 100;

isTenthWhile(startNumber, limitNumber);

console.log("--- Is TENTH while complete ---");
