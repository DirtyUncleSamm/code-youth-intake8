let colors = ['red','green','blue','yellow','pink'];
// colors[0] --- red
// colors[1] --- green
// colors[2]

// colors.length -- 5
// colors[colors.length-1] -- pink 

for(let i=0;i<colors.length;i++){
	console.log(i,colors[i]);
}

for(let item of colors){
	console.log(item);
}
//callback function - a function as a parameter in another function
colors.forEach((ele)=> console.log("item",ele))

colors.forEach(print);
function print(ele){
	console.log("e",ele)
}

//push is used to add an element at the end of an array
colors.push("white","grey");
console.log("push",colors);

//pop is used to remove last element from an array
let del = colors.pop();
console.log("pop",colors);

//unshift to add element at beginning
colors.unshift("black");
console.log("unshift",colors);

//shift delete element from beginning
del = colors.shift();
console.log("shift",colors);

colors[3]="aqua";
console.log("change",colors);

//splice used to add, remove, replcae elements from any position
// splice(start_index,count_to_delete,add_element,add_element.....)

//splice to delete element
let splicedArr = colors.splice(2,2);
console.log("splicedArr", splicedArr);
console.log("deleted splice", colors);

//splice to add elements
splicedArr = colors.splice(3,0,"abc","def");
console.log("added splice1", colors);


//replace using splice
splicedArr = colors.splice(1,2,"dark green", "brown");
console.log("replaced splice", colors);

colors.sort();
console.log("sorted",colors);

let arr = [45,44,21,30,32,100,225,158,48];
arr.sort();
console.log("sort",arr);

//ascending sort
arr.sort((a,b)=> {return a-b})
console.log("asc sort",arr);

//descending sort
arr.sort(function(a,b){
	return b-a;
})
console.log("desc sort",arr);

arr.reverse();
console.log("reverse",arr);

let newArr = arr.map((ele)=> ele/2);
let res = [];
for(i=0;i<arr.length;i++){
	res.push(arr[i]/2);
}
console.log("res",res);
// console.log("map",newArr);
console.log("original array", arr);

let filteredArr = arr.filter((ele)=> ele>50);
console.log("filtere", filteredArr);

// ex: array [23,4,-5,78,-9,3,-6]    using filter, return positive numbers

// reduce
console.log("arr",arr);
let result = arr.reduce((total,current)=> total+current,0);

// total+=current
console.log("sum:",result);