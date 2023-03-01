// -- Using only pop(), push(), unshift(), and shift() make weekDays start at monday and end at sunday in the correct order
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