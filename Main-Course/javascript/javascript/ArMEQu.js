
    // Using the .includes() method find if both arrays include the number 50 if both arrays have the number 50 console.log("both") otherwise console.log() which array has the number 50 

console.log(" -- there are two arrays. Which one has the value 50? -- ")
let arr1 = [1,5,50,4,7,19]
let arr2 = [5,5,4,50,7,11]


if(arr1.includes(50) && arr2.includes(50)){
    console.log("both arrays contain 50");
}else if(arr1.includes(50) && !arr2.includes(50)){
    console.log("arr1 contains 50");
}else if(!arr1.includes(50) && arr2.includes(50)){
    console.log("arr2 contains 50")
}else{
    console.log("no array contains 50");
}

// -- Take everything from the list array and put it into the cart array. If something from list is already in cart dont add it
console.log(" -- Move everything from the list array into the cart array. Do not duplicate any values -- ")
let list = [1,2,3,4,5,6,7,"bob"];
let cart = ["bob", 23, 44];
reg = [];
let dup = [];

if( cart.includes("bob")){
    dup = list.pop(); // -- I can do this better with a for loop that checks each value and compares. 
    reg = cart.concat(list);
    cart = reg;
    console.log("cart: ", cart);
    reg.splice(0, reg.length);
    list.splice(0, list.length);
    console.log("register: ", reg);
    console.log("list: ", list);
}

// -- Using the filter method create a new array that only includes values that are multiples of ten 
// const result = words.filter(word => word.length > 6);
console.log("-- using the filter method create a new array and add only values that are multiples of ten -- ")
let nums = [45,50,55,60,75,80,95,90,100,10,20,15,44]

for(i=0;i<=nums.length;i++){
    if(nums = nums.filter(nums[i] % 10 == 0)){
        let filt = nums[i];
        console.log(filt);
    }
}