const  a = [2,4,5,7,4,8,9];

let res = a.map((item)=>item*2)
            .filter((item)=>item>10)
            .reduce((a,b)=>a+b);
console.log(res);

// -- spread operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
let b = a;
console.log("b", a);
a.push(200);
console.log("a", a);
console.log("b", b);
let c = [...a];// -- this is the spread operator (create copy of array)
console.log("c", c);
c.push(100);
console.log("c", c);
let d = [...a,12,13,14];// spread operator to concatenate arrays
console.log("d", d);
let e = [...c,...d];
console.log("e", e);