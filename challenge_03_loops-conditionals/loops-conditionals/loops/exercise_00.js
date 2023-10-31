/*
        1. Create a for loop that will print out all the even numbers between 10 and 40.
        
        2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

for (let number = 10; 40 >= number; number++) {
  if (number % 2 === 0) {
    console.log(number + " is even");
  }

  if (number % 2 === 1) {
    console.log(number + " is odd");
  }
}

// for (let number = 10; 40 >= number; number++) {
//  if (number % 2 === 0) {
//    console.log(number + " is even");
//  }
// }
//
// for (let number = 10; 40 >= number; number++) {
//  if (number % 2 === 1) {
//    console.log(number + " is odd");
//  }
// }
//
// Code has been tested, it works properly!
