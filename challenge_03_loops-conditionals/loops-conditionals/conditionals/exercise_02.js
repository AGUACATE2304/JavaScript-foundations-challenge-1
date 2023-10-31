/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}

// The error lies on line 11 of the code, the number contained in the variable is as large as 3,
// in which case the 'if' statement stops executing. To fix the bug, the code should be reversed
//
// This is the code without the bug:
//
// const age = 20;
//
// if (age >= 18) {
//   console.log("Most places consider you an adult.");
// } else if (age >= 13) {
//   console.log("Nice, you're a teenager!");
// } else if (age >= 3) {
//  console.log("You are in elementary school, kid.");
// } else if (age < 3) {
//  console.log("You're just a baby!");
// }
//
