// -- Ass everyone from toBeAdded to the banList array then empty the toBeAdded Array
let toBeAdded = ["Jomsly", "Henrick", "Darsha"]
let banList = ["Budly","Gurtrood","dimsly"]

let nameAdd = banList.splice(0,banList.length);
banList = toBeAdded.concat(nameAdd);
console.log("banList:", banList);
toBeAdded.splice(0, toBeAdded.length);
nameAdd.splice(0, nameAdd.length);

console.log("toBeAdded array: ", toBeAdded);
console.log("nameAdd array:", nameAdd);
