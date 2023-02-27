// length of the sequence
const length = 5;

// Initialize variables for the first two numbers in the sequence
let a = 0;
let b = 1;

// Loop through the sequence, starting with the third number
for (let i = 0; i < length; i++) {
  // Log the current number to the console
  console.log(a);

  // Calculate the next number in the sequence
  const c = a + b;

  // Update variables for the next iteration of the loop
  a = b;
  b = c;
}