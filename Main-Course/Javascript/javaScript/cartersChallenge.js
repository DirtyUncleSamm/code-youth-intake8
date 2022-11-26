/*
4. Calculating marks for a student
   
   Create two variables, 'marks' and 'total'
   Set total to 500
   Set marks to a number between 0 and 500
   Calculate the percentage for the marks and find what letter grade to give the student

*Grades*
Percentage greater than or equal to 90% : Grade A
Percentage greater than or equal to 80% : Grade B
Percentage greater than or equal to 70% : Grade C
Percentage greater than or equal to 60% : Grade D
Percentage greater than or equal to 40% : Grade E
Percentage less than 40% : Grade F
*/
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