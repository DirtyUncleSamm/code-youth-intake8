// -- open calculator.html in live view
// .. Enter two number prompts and one operator
// ** I would like to extend this function to work on a static calc ui **

function calculator( val1, val2, operator){
    if(operator == "+"){
        var result = val1 + val2;
    }else if(operator == "-"){
        var result = val1 - val2;
    }else if(operator == "*"){
        var result = val1 * val2;
    }else if (operator == "/"){
        var result = val1/val2;
    }else{
        console.log("invalid")
    }
    return result;
}//--- having the result outside of the if else statements is not working



let val1 = parseInt(prompt("enter value"));
let val2 = parseInt(prompt("enter value"));
let operator = prompt("enter operator");
let operation = (calculator(val1, val2, operator));
alert(operation);