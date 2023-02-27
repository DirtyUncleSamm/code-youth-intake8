// -- Write a function that checks whether a number is even or odd and returns the function.
function isEven(num){
    if(num % 2 == 0){
        console.log(num, "is even");
    }else{
        console.log(num, "is not even");
    }
    return num;
}
isEven(5);
isEven(4);