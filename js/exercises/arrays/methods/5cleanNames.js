// -- This is an example of how to clean new data with the .trim() method
let names = ["  batMan", "  the Joker", "  superman     "];
console.log("names before .trim() method:", names);

let cleanedNames = cleanNames(names);

function cleanNames (names){
    for(let i = 0; i < names.length; i++){
        names[i] = names[i].trim();
    }
    return names;
}
console.log("names after .trim() method:", cleanedNames);
