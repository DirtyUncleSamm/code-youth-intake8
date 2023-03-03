numbers = [2, 234, 3, 65, 34, 20, 22];

// -- Sort array largest to smallest
numbers.sort(function(a,b){
    return b - a;
});
console.log("numbers array after sort: ", numbers);

// -- push the first two elements of array to new array
// .. create empty array
largest = [];
largest.push(numbers[0], numbers[1]);

let sumOfLargest = largest[0] + largest[1];

console.log("Sum of two largest numbers = ", sumOfLargest);

// -- Sum of Largest and Smallest
largeSmall = [];
largeSmall.push(numbers[0], numbers[numbers.length-1])

let sumLargeSmall = largeSmall[0] + largeSmall[1];
console.log("Sum of Largest and Smallest = ", sumLargeSmall);








