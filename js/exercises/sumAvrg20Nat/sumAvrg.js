// 1. Write a program to find the sum  and average of first 20 even natural numbers.

// Initialize variables
let sum = 0;
let count = 0;

// Loop through the first 20 even natural numbers
for (let i = 2; i <= 40; i += 2) {
  sum += i;
  count += 1;
}

// Calculate the average
let average = sum / count;

// Print the sum and average
console.log("Sum of first 20 even natural numbers:", sum);
console.log("Average of first 20 even natural numbers:", average);