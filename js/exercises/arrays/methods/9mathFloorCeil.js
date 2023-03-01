let num = [3.5, 6.2, 4.4, 10.9];

const roundDown = num.map(arr => Math.floor(arr));

console.log("array rounded down:", roundDown);

const roundUp = num.map(arr => Math.ceil(arr));
console.log("array rounded up:", roundUp);