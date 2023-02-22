// -- open 'leapYear.html'. Browser will prompt a year
// .. will return if your prompt == || !== leap year
let year = prompt("Is this a leap year?")
if(year % 4==0){
    if(year % 100){
        if(year % 400){
            alert("is a leap year");
        }
    }
}
else{ 
    alert("is not a leap year");
}
//how do I specify 365 vs 366 days?



