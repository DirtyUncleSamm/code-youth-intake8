const student = [{
    name:"Bob",
    age:32,
    address:"US",
},
{
    name:"Alice",
    age:22,
    address:"CA",
},
{
    name:"Carol",
    age:20,
    address:"UK",
}
];

console.log(student[0]);
console.log(student[0].address);
// -- display names of all students
for(i=0;i<student.length;i++){
    console.log("name: ",student[i].name);
}