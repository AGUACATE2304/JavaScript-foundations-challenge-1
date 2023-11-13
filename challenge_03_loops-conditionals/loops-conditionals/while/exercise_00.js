/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    3. After 3 loop iterations, change "loggedIn" to be true.
    4. After the loops is done print out: "Sucessfully logged in!"

    HINT1: Be careful for an infinite loop!
*/

/**
 * isOddLoop
 */
const isLoggedIn = function (limit) {
  let iteration = 0;
  let loggedIn = false;

  while (!loggedIn) {
    console.log(`Incorrect login credentials: loggedIn value is "${loggedIn}"`);
    iteration++;

    if (iteration === limit) {
      loggedIn = true;
    }
  }

  console.log(`Sucessfully logged in!: loggedIn value is "${loggedIn}"`);
};

/**
 * Program execution
 */
console.log("###############################");
console.log("--- Is LOGGED while Program ---");

const limit = 3;
isLoggedIn(limit);

console.log("--- Is LOGGED while complete ---");
