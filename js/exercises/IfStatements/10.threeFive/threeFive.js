// 5. threeFive: Create a function that checks
// .. to see if a number is divisible by 5 or 11
let num = parseInt(prompt("write an num"));
    if (num % 3 == 0 && num % !5 == 0){
        console.log("three");
    }else if (num % 5 == 0 && num % !3 == 0){
        console.log("five");
    }else if (num % 3 == 0 && num % 5 == 0){
        console.log("threeFive")
    }else{console.log("not divisible by three or five")}