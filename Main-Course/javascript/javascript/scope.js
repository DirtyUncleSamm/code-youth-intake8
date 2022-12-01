//local scope vs global scope


let a = 5;// -- this is a global scope
console.log("a1",a)
function display(){
  //  let b =8;// -- this is local scope
//    console.log("b1",b)
}
display();
//console.log("b2",b); -- this is global scope and has no ability to call values within a function

if(a>0){
  //  console.log("b2", b);
    let c=8;
    console.log("c1", c);
    d="hi";
}
//console.log("c2", c); -- this will be undefined
console.log("d",d);