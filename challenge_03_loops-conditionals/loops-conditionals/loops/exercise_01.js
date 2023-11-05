/*
    1. Create a for loop that loops while index is less or equal than 10.
    2. Each loop:
        * create a new random number between 1 and 10 (hint: check documentation regarding Math.floor and Math.random methods)
        * evaluate if random number is greater than 5
        * if it is equal or greater than 5 print "Logged In!"
        * if it is less than 5 print "Logged Out!"
*/

console.log("---------loops Exercice_01---------");

console.log("Random number evaluator:");

for (let index = 1; index <= 10; index++) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log("Try number " + index + " : randomNumber is " + randomNumber);

  if (randomNumber >= 5) {
    console.log("Logged In!");
  } else {
    console.log("Logged Out!");
  }
}



//Code has been tested, it works properly!
