const arr = [1, 2, 3, 4, 5];
const element = 3;

function searchElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    
    return -1;
}

const index = searchElement(arr, element);

console.log(index);