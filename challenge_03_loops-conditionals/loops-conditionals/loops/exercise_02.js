/*
    1. Create a for loop that runs from 1-100 
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    You should see this printed out when run:
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
 * isTenthLoop
 */
const isTenthLoop = function (lowThreshold, highThreshold) {
  for (let number = lowThreshold; number <= highThreshold; number++) {
    if (number === 100) {
      console.log("You made it!\nAll, done!");
    }

    if (number === 50) {
      console.log("Half way there!");
    }

    if (number % 10 === 0 && number % 50 !== 0) {
      console.log(`Checkpoint! ${number}`);
    }
  }
};

/**
 * Program execution
 */
console.log("###############################");
console.log("--- Is TENTH loop Program ---");

const firstValue = 1;
const lastValue = 100;

isTenthLoop(firstValue, lastValue);

console.log("--- Is TENTH loop complete ---");
