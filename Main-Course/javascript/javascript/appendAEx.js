// -- using filter, return positive numbers

// -- Adding items from 0 - 10 to an empty array
let arr = [];
for(i=0;i<=10;i++){
    arr.push(i);
}
console.log(arr);

// -- Add everyone from toBeAdded to the banList array then empty the toBeAdded Array
let toBeAdded = ["Jomsly", "Henrick", "Darsha"]
let banList = ["Budly","Gurtrood","dimsly"]
let nameAdd = banList.splice(0,banList.length);
banList = toBeAdded.concat(nameAdd);
console.log("banList:", banList);
toBeAdded.splice(0, toBeAdded.length);
nameAdd.splice(0, nameAdd.length);
console.log("toBeAdded array: ", toBeAdded);
console.log("nameAdd array:", nameAdd);


//    /*
//     1) Using only pop(), push(), unshift(), and shift() make weekDays start at monday and end at sunday in the correct order
//    */
// let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"]
// let unNeeded = weekDays.pop();
// let days = [];
// days = weekDays.pop();
// days = weekDays.shift();
// console.log(days);
