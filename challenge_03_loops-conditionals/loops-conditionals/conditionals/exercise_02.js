/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/

/**
 * Condition (age >= 3) will be executed for any case where value is equal or higher than 3
 * One possible solution should be changing the order of conditions, strating from higher and going down
 */

/*
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
*/

/**
 * howOldAreYou
 */
const howOldAreYou = function (age) {
  if (typeof age !== "number") {
    return "What? How did this happen!?";
  }

  if (age >= 18) {
    return "Most places consider you an adult.";
  }

  if (age >= 13) {
    return "Nice, you're a teenager!";
  }

  if (age >= 3) {
    return "You are in elementary school, kid.";
  }

  return "You're just a baby!";
};

/**
 * Program execution
 */
console.log("###############################");
console.log("--- Spot the bug 🐞 Program ---");

for (let iteration = 0; iteration < 5; iteration++) {
  const age = Math.floor(Math.random() * 20);

  const result = howOldAreYou(age);
  console.log(`You are ${age}: ${result}`);
}

const ageAsNull = null;
console.log(howOldAreYou(ageAsNull));

console.log("--- Spot the bug 🐞 complete ---");
