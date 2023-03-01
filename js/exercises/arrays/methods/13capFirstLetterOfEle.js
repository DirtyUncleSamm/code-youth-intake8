const arr = ['apple', 'banana', 'cherry'];

function capitalizeFirstLetters(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  }
  

console.log(capitalizeFirstLetters(arr));