// -- Open 'parseFloat.html' in live view and enter number into prompt
// .. The return will tell you if it is: positive, negative, or zero
// .. The parseFloat function only allows -num and not decimal places

let num = prompt("write a number"); 
parseFloat(num);
if(num<0){
    alert("your number is negative");
}
else if(num==0){
    alert("your number is 0");
}
else{
    alert("your number is positive");
}