let colors = ['red', 'green', 'blue', 'yellow', 'pink'];
for(let i = 0; i<colors.length; i++){
    console.log(i, colors[i]); // -- this will put the position of the element in the array, along with its value
}

for(let item of colors){
    console.log(item);
}// -- this displays the elements in the array

// -- below is a callback function 
// - a call back function is a functiuon passed into another function as an argument
colors.forEach((ele)=> console.log("item", ele));
colors.forEach(print);
function print(ele){
    console.log("e", ele)
}
// -- ele is a callback because it is calling the function colors and adding to it