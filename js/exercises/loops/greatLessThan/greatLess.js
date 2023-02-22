// ! Version 2
// -- This code solves the prompt issue from the OG version
// .. it says. While (d is not equal to a) continue to iterate.
// .. Once d == a alert the user they guessed right
const a = 13;
let d = prompt("Guess the value of a");

while (d != a) {
  if (d < a) {
    d = prompt("Your value is less than a. Try again!");
  } else if (d > a) {
    d = prompt("Your value is greater than a. Try again!");
  }
}

alert("Your value is equal to a!");