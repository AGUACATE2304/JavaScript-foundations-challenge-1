/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

console.log("---------while Exercice_01---------");

let number = 10;
console.log("Even numbers between 10 & 40:");
while (number <= 40) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}

number = 10;
console.log("Odd numbers between 10 & 40:");
while (number <= 40) {
  if (number % 2 === 1) {
    console.log(number);
  }
  number++;
}

// Code has been tested, it works properly!
