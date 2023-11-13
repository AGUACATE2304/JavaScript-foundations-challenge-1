/*
    1. Create a for loop that loops while index is less or equal than 10.
    2. Each loop:
        * create a new random number between 1 and 10 (hint: check documentation regarding Math.floor and Math.random methods)
        * evaluate if random number is greater than 5
        * if it is equal or greater than 5 print "Logged In!"
        * if it is less than 5 print "Logged Out!"
*/

/**
 * isLogged
 */
const isLogged = function (iterations) {
  for (let iteration = 0; iteration < iterations; iteration++) {
    const number = Math.floor(Math.random() * 10);

    number >= 5
      ? console.log(`Number ${number}: Logged In`)
      : console.log(`Number ${number}: Logged Out`);
  }
};

/**
 * Program execution
 */
console.log("###############################");
console.log("--- Is LOGGED loop Program ---");

const iterations = 5;
isLogged(iterations);

console.log("--- Is LOGGED loop complete ---");
