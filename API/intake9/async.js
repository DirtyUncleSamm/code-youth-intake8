// synchronos
console.log("first");
console.log("second");
console.log("third");


// asynchronos
console.log("fourth");
setTimeout(() => console.log("fifth"), 200); // -- this will output last because it will take 200 miliseconds to process
console.log("sixth");