// -- 12-05-2022

const students = ["bob", 23, "toronto"];// -- items stored in array
// const object_name = {key1:value1,key2:value2...}; -- curly brackets for objects

const student = {
    name:"Bob", 
    age: 23,
    address:"toronto",
    phone:"123-456-7890",
    display: function(){
        console.log("My name is: ", this.name);
    }
};
// -- two ways to access object values (properties) 1 - dot notation
console.log("age", student.age);
console.log(student.display());

// -- two ways to access properties 2 - square bracket notation
console.log("phone number", student["phone"]); // -- property must be wrapped in quotations, otherwise it will assume you are taking an array

// -- initialize an empty object and fill
const obj = {};
obj.key1="value1";
obj.key2="value2";
obj.present = true;
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
console.log("name of student : ", user.student);
console.log("city value in nested address object: ", user.address.city);
console.log("marks: ", user.marks[1] );
for(let i = 0; i < user.marks.length; i++){
    console.log(user.marks[i]);
}
//-- 12-06-2022
for(let key in student){
    console.log(student[key]);
} // -- this is the code to see the value of all the elements in the object -- Below achieves the same thing but specifies what I am seeing in the console.log
console.log("keys", Object.keys(user));
console.log("values", Object.values(user));
console.log("marks", Object.entries(user));




