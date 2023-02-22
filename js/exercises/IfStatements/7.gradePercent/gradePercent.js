let mark = prompt("input mark");
let total = 500;
let grade = mark/total*100;
if(grade>=90){
    alert("A");
}
else if(grade>=80){
    alert("B");
}
else if(grade>=70){
    alert("C")
}
else if(grade>=60){
    alert("D");
}
else if(grade>=40){
    alert("E");
}
else if(grade<40){
    alert("F");
}
else{
    alert("wrong input");
}