let colors = ['red', 'green', 'blue', 'yellow', 'pink'];

// -- find items in array
if(colors.includes('green')){
    console.log("green is here");
}

// -- format spacing between elements in array
let joinArr = (colors.join('+'));
console.log(joinArr);

// -- reduce
let arr = (45, 63, 78, 12, 19, 105);
console.log(arr);
// -- total+=current
let result = arr.reduce((total, current) => total+current,0);
console.log(result);