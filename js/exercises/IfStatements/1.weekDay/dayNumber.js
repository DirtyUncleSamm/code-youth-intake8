// -- Open 'dayNumber.html' in live view. 
// .. The browser will give two prompts:
// .. * input a number to return corresponding day
// .. * input day to return corresponding number
let num = prompt("input number to find the day of the week");
if(num ==1){
    alert("your day is Monday");
}
else if(num==2){
    alert("your day is Tuesday");
}
else if(num==3){
    alert("your day is Wednesday");
}
else if(num==4){
    alert("your day is Thursday");
}
else if(num==5){
    alert("your day is Friday");
}
else if(num==6){
    alert("your day is Saturday");
}
else if(num==7){
    alert("your day is Sunday");
}
else {
    alert("incorrect input");
}

let day = prompt("input a day to find the number");
if(day=="monday"){
    alert("your number is 1");
}  
else if(day=="tuesday"){
    alert("your number is 2");
}
else if(day=="wednesday"){
    alert("your number is 3");
}
else if(day=="thursday"){
    alert("your number is 4");
}
else if(day=="friday"){
    alert("your number is 5");
}
else if(day=="saturday"){
    alert("your number is 6");
}
else if(day=="sunday"){
    alert("your number is 7");
}
else{
    alert("wrong input!")
}


    
