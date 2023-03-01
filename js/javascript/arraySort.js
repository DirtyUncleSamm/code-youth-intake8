// -- This is an example of using the sort method to sort array integers. We accomplish this by running a function through the 'sort' method that iterates through arr2 and compares the first integer with the proceeding one. If the result is negative that means it is in the right order, else the integers are in the right order. 
// -- Accending
let arr2 = [23,34,12,5,66,61,160,53];
sortAccArr = arr2.sort(function(a,b){
    return a-b; // -- i.e. 34 - 12 = 22; Therefore the second integer is less then the first. This is defining the perameters of the method.
});
console.log("sort accending:", sortAccArr);

sortDecArr = arr2.sort(function(a,b){
    return b-a;
});
console.log("sort decending:", sortDecArr);