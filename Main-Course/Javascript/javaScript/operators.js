let  a= 20, b= 10, d= 4;
//c= a+b;
//c= a-b;
//c= a*b;
//c= a/b;
let c= b/d;
let x= b%d;
avg = a+b+d/3;

console.log("original value of a:",a);
console.log("original value of b:",b);
console.log("original value of d:",d);
console.log(c);
console.log(x);
 d++;//increment operator
console.log("this displays incremental value d=d+1:",d);
b--;
console.log("value of b= b-1:",b);
console.log("exponent of b to the power of 3",b**3);//exponentiation operator

 a *= 5; //a= a*5;
console.log(a);
//comparison operators
a=b;//this is the assignment
console.log("a equals b",a==b);//this is the comparison
let y = '9';
console.log("y equals b",b==y);
console.log("y is strictly equal tob:",b===y);//strict equality operators, check the datatype and will return false if one is a number and the other is a string
//look into bitwize operators on own [operators in binary form]
console.log(y+3);//since y is a string it will concatinate the value of y='9' and will convert the value of '3' into string. Therefore the console.log will print 93 instead of 12

