const count = [11,13,3,4,5,20,7,8,9,10,1,12,14,2,15,16,17,18,19,6];

// -- Count even elements in an array.  [22,5,8,12,45,78] ==>4   count=0;  count++; --
console.log("Even values in the array: ");
for(i=0;i<=count.length;i++){
    if(count[i] % 2 == 0){
        console.log(count[i]);
    }
}

// -- Find the sum and average of n array elements --

let sum = 0;
for(let i=0;i<count.length;i++){
    sum += count[i];
}
let average = sum/count.length;
console.log("the sum of the array: ", sum);
console.log("the length of the array: ", count.length);
console.log("the average of the array: ", average)

// -- Search an element in an array --
let value = 8;
for(let i=0;i<=count.length;i++){
    if(count[i] === value){
        console.log("position of", value ,'in array is:' , count.indexOf(value));
    }
}

// -- Find the smallest element --
let min = 1;
for(let i=0;i<=count.length;i++){
    if(count[i]<=min){
        console.log("the smallest value is: ", count[i]);
    }
}




