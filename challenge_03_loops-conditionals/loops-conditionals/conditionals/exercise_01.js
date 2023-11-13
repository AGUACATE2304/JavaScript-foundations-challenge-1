/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

/**
 * isEvenOrOdd
 */
const evenOdd = function (number) {
  const result =
    number % 2 === 0 ? `Number ${number} is EVEN` : `Number ${number} is ODD`;

  return result;
};

/**
 * Program execution
 */
console.log("###############################");
console.log("--- Is EVEN or ODD Program ---");

for (let iteration = 0; iteration < 5; iteration++) {
  const number = Math.floor(Math.random() * 100);

  const result = evenOdd(number);
  console.log(result);
}

console.log("--- Is EVEN or ODD complete ---");
