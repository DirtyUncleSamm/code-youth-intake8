
let myNumbers = [];

for (let i = 0; i < 50; i++) {
  myNumbers.push(Math.floor(Math.random() * 101));
}
console.log(myNumbers);

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] % 2 === 0) {
    evenNumbers.push(myNumbers[i]);
  } else {
    oddNumbers.push(myNumbers[i]);
  }
}
console.log("Even numbers: " + evenNumbers);
console.log("Odd numbers: " + oddNumbers);

let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
  sum += myNumbers[i];
}

let average = sum / myNumbers.length;
console.log("Average: " + average);


myNumbers.sort(function(a, b) {
  return a - b;
});
let median = 0;
let middleIndex = Math.floor(myNumbers.length / 2);

if (myNumbers.length % 2 === 0) {
  median = (myNumbers[middleIndex - 1] + myNumbers[middleIndex]) / 2;
} else {
  median = myNumbers[middleIndex];
}
console.log("Median: " + median);

