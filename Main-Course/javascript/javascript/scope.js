//local scope vs global scope


let a = 5;// -- this is a global scope
console.log("a1",a)
function display(){
  //  let b =8;// -- this is local scope
//    console.log("b1",b)
}
display();
//console.log("b2",b); -- this is global scope and has no ability to call values within a function

if(a>0){// -- anything that is declaired in curly brackets is a block scope statement
  //  console.log("b2", b);
    let c=8;
    console.log("c1", c);
    d="hi"; // -- this is a global variable if it is not declared with let, var, or const
}
//console.log("c2", c); -- this will be undefined
console.log("d",d);

p=5;
console.log("p1", p);
var p;

let p;

// -- variable declarations --
// -- let is a block scope, has replaced var in the javascript update
// -- var is a global scope, does node have to be declaired
//      -- hoisting is a action of var that allows variables to be called before declaration