const number = prompt('enter a number');

function checkDivisibility(number) {
    console.log("funtest");
    if (number % 5 == 0 && number % 11 == 0){
        alert("divisible by five and eleven")
    } else if (number % 5 == 0) {
        alert("five");
    } else if (number % 11 == 0) {
        alert("eleven");
    } else {
        alert("not divisible by five or eleven");
    }
  }
  
