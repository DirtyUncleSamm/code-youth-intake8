// -- using filter, return positive numbers


console.log("  ---- ITERATE NUMBERS 0 TO 10 IN AN ARRAY USING THE 'FOR LOOP' -- ");

let arr = [];
for(i=0;i<=10;i++){
    arr.push(i);
}
console.log(arr);




console.log("  ---- ADD EVERYONE FROM THE 'toBeAdded' LIST TO THE 'banList' AND ERASE ELEMENTS FROM 'toBeAdded' ARRAY -- ");

let toBeAdded = ["Jomsly", "Henrick", "Darsha"]
let banList = ["Budly","Gurtrood","dimsly"]

let nameAdd = banList.splice(0,banList.length);
banList = toBeAdded.concat(nameAdd);
console.log("banList:", banList);
toBeAdded.splice(0, toBeAdded.length);
nameAdd.splice(0, nameAdd.length);

console.log("toBeAdded array: ", toBeAdded);
console.log("nameAdd array:", nameAdd);


  

console.log("  ---- USING .pop()   .push()   .shift()   .unshift() MAKE THE 'weekDays' ARRAY START AT MONDAY AND END ON SUNDAY -- ");

let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"]
console.log("initial 'weekDays' array: ", weekDays);


let rej = [];
rej = weekDays.pop();

let sat = weekDays.pop();
let mon = weekDays.pop();
let sun = weekDays.pop();
let thu = weekDays.pop();
let wed = weekDays.pop();
let tue = weekDays.pop();
let fri = weekDays.pop();

console.log("empty 'weekDays' array: ", weekDays);

weekDays.push(mon, tue, wed, thu, fri, sat, sun);
console.log("after 'weekDays.push()':", weekDays);

     

  
// -- Add fifty random whole numbers between 0 and 100 to myNumbers console.log(myNumbers) after all 50 numbers are added


  

// split the numbers into two arrays, 'even' and 'odd'

// find the average of myNumber 
// find the median of myNumbers

// .map(), .trim()

//Define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end. The cleanNames() function should use the array map method to return a new array full of trimmed names. For example:
// cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]) 
// should give ["avengers", "captain_america", "ironman", "black panther"]
