// -- This is an example of a single object that console.logs: student name, id, country, course, marks and hobbies
// - - Create a single object for a student with an id, name, a nested object named address that has (country, province and city), email, phone number, and an array of marks.
// - - After you have created an object console log a sentence that displays the students name, id and address. 


let students = {
    id: 1,
    name: "Stephan",
    address: {
        Country: "Canada",
        Province: "Ontario",
        City: "Toronto"
    },
    email: "stephan@example.com",
    phone: 123-456-7789,
    marks: [34, 98, 66],
    course: "Web Development",
    hobbies: ["UI/UX", "DataBase Design", "hacking"]
}

console.log("The student", students.name, "with the id", students.id, "is from", students.address.Country, "is taking", students.course, "so far their top mark is", students.marks[1], "their interests are:", students.hobbies);

// -- counts the amount of properties in object
let count = 0;
for(let key in students){
    console.log(key, students[key]);
    count++
}
console.log("count", count);
