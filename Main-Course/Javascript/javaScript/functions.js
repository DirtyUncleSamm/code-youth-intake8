// // examples of functions
// // functions are used to preform a dedicated task
// function message(){
//     // alert("welcome") ----pops up on screen
//     // confirm('press ok to confirm'); ----prompts a button response
//     // document.write("<b>hey bob</b>") ----inputs markup text on screen. HTML and CSS can be nested in this function
//     // console.log() -- displays in function
//     //name_of_function(arg1,arg2)
// }


// -- Below is an example of a function declaration --
// function name_of_function(param1, param2,..){
//     //code
// }

// function display(firstName){
//     console.log(firstName);
// }

// // function call, invoke
// display();



// function display( firstname, lastname){
//     console.log("my name is ", firstname, lastname);
// }
// display("sammantha", "preston");

function add(num1, num2){
    let sum = num1 + num2;
    return num2; //-- the return statement can only return one number in a function
}
console.log("sum is", add(12,43));


function cube(n1){
    let result = n1*n1*n1;
    return result;
}
console.log("the result is: ", cube(3));


parsefloat // decimal values