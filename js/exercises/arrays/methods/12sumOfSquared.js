const numbers = [1,2,3,4,5];
let squared = 0;

for(let i = 0; i < numbers.length; i++){
    const square = numbers[i] * numbers[i];
    squared += square;
}
console.log(squared);