// -- double each element of array and display elements which are greater than 10
const  a = [2,4,5,7,4,8,9];

// -- Method one
// let res = [];
// for(i=0;i<a.length;i++){
//    let num = a[i]*2;
//    if(num>10){
//     res.push(num);
//    }
// }
// console.log("array res", res);


// --  method two
// res = a.map((item)=>item*2);
// console.log("result of array:", res)

// let final = res.filter((item)=>item*10);
// console.log("result of filtered array:", final);

// -- method three
let res = a.map((item)=>item*2)
            .filter((item)=>item>10)
            .reduce((a,b)=>a+b);
console.log(res);

// -- spread operator
let b = a;
console.log("b", a);
a.push(200);
console.log("a", a);
console.log("b", b);
let c = [...a];// -- this is the spread operator
console.log("c", c);
c.push(100);
console.log("c", c);