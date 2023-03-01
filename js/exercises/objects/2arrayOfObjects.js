const students = [
    {
        id: 1,
        name: "Bob"
    },
    {
        id: 2,
        name: "Tom"
    },
    {
        id: 3,
        name: "cob"
    },
    {
        id: 4,
        name: "stop"
    }
]

for(let i =0; i <students.length; i++){
    console.log(students[i]);
}

students.forEach((ele) => console.log(ele.id, ele.name));