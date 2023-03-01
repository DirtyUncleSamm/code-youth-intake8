const arr1 = [1, 2, 3, 4, 5];

function copyArray(arr) {
    const copy = [];
    
    for (let i = 0; i < arr.length; i++) {
      copy.push(arr[i]);
    }
    
    return copy;
}

const arr2 = copyArray(arr1);

console.log(arr2); 