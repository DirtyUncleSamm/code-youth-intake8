


// const multiply = (val1, val2) => {
//    let output = val1*val2;
//    return output;
// }
// console.log(multiply(3,6));


//-- this is long form
const c = (r) => {
    let area = r*r*3.142;
    return area;
}
console.log(c(5));

//-- this is the right way to 
const area = (radius) => {return 3.142*radius*radius};
console.log("area",area(4))

let x = function area = (radius) => {return 3.142*radius*radius}; 