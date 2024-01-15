const multiply = (val1, val2) => {
   let output = val1*val2;
   return output;
}
console.log(multiply(3,6));


//-- displays area with two lines of code
const c = (r) => {
    let area = r*r*3.142;
    return area;
}
console.log(c(5));

// -- Displays area with one line in arrow function
const area = (radius) => {return 3.142*radius*radius};
console.log("area",area(4))

// -- displays name
let display = () => {console.log("Alex");}
display();
// -- displays name with string
let displayName= (name) => console.log(`hi ${name}`);
displayName('John');

// // -- Function that adds a and b
// let add = (a,b) => {return a+b;}
// console.log(add(3,4));
