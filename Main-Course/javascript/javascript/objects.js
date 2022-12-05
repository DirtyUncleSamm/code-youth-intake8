const students = ["bob", 23, "toronto"];// -- items stored in array
// const object_name = {key1:value1,key2:value2...}; -- curly brackets for objects

const student = {
    name:"Bob", 
    age:23,
    address:"toronto",
    phone:"123-456-7890"
};
// -- two ways to access object values (properties) 1 - dot notation
console.log("age", student.age);

// -- two ways to access properties 2 - square bracket notation
console.log("phone number", student["phone"]); // -- property must be wrapped in quotations, otherwise it will assume you are taking an array

// -- initialize an empty object and fill
const obj = {};
obj.key1="value1";
obj.key2="valued2";
console.log("new obj: ", obj);


// -- nested object
const user = {
    name:"Alice",
    address:{
        city:"Toronto",
        country:"Canada",
        postal:"1c6 2n3",
    },
    marks: [12, 34, 24]
}
console.log("full address object: ", user.address);
console.log("city value in nested address object: ", user.address.city);
console.log("marks: ", user.marks[1] );