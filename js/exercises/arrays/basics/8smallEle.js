const arr = [4, 2, 7, 1, 8, 3];

function findSmallestElement(arr) {
    let smallest = arr[0];
    console.log(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        console.log(arr[i]);
        smallest = arr[i];
      }
    }
    
    return smallest;
}
  
  const smallest = findSmallestElement(arr);

  console.log(smallest);