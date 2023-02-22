// ! Version 1
// -- This was written before we learned 'for' 'while' loops
// .. The first set of code will only prompt twice and stop regardless
// .. of the users prompt being incorrect

const a = 13;
let d = prompt("guess the value of a")
if(d<a){
    prompt("your value is less then a. Try again!");
}
else if(d>a){
    prompt("your value is greater then a. Try again!");
}
else{
    alert("Your value is equal to a!");
}



