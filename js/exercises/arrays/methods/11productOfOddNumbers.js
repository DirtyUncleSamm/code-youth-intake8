let arr = [10,11,12,13,14,15];
let product = 1;
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0 ){
        product *= arr[i];
    }
}
console.log(product);