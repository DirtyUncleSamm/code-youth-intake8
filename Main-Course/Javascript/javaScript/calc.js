

function calculator( val1, val2, operator){
    if(operator == "+"){
        let sum = val1 + val2;
        return sum;
    }else if(operator == "-"){
        let result = val1 - val2;
        return result;
    }else if(operator == "*"){
        let product = val1 * val2;
        return product;
    }else if (operator == "/"){
        let remainder = val1/val2;
        return remainder;
    }else(
        console.log("invalid")
    )
  
    
}

let val1 = prompt("enter value");
let val2 = prompt("enter value");
let operator = prompt("enter operator");
alert(calculator);