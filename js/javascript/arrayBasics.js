// -- function = (), object = {}, dataset = []
let student1 = "ebru";
let student2 = "burak";
let student3 = "kafi";
// -- array is an ordered collection of elements
let student = ["ebru", "kafi", "burak", "hassan", "ray", "samm"];
// -- Array Literal
let a = [2,3,4,5,6,7,8];
// -- Array constructor
let b = new Array(10,20,30,40)
// -- filling an empty array
let c = [];
c[0]="grey";
c[1]=4;
c[3]=true;// -- leaving space in an array i.e. storing data in 1 and 3 but not 2. 2 will still show as an empty space
// -- we access elements through an index, starting from the 0'th place
console.log(student);
console.log("legnth of student:",student.length)
console.log("last element in student array:", student[student.length-1]);
console.log("array c:",c);
console.log("fouth data space in c array",c[3])
console.log("array b:",b);
console.log("array a:",a);


let color = ["green", "blue", "gray", "yellow", "crimson","teal"]
console.log(color);
console.log(color.length);
console.log(color[0]);
console.log(color[3]);
console.log(color[color.length-1]);

// --

for(let i =0;i<=a.length; i++){
    console.log(a[i]*2);
}

let n = [1,2,3,4,5,6,7,8,9,10];
for(let n=0; n<=n.length; n++){
    if(n % 2 == 0){
            console.log(n);
    }
}