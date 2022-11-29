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
// */
// let mark = prompt("input mark");
// let total = 500;
// let grade = mark/total*100;
// if(grade>=90){
//     alert("A");
// }
// else if(grade>=80){
//     alert("B");
// }
// else if(grade>=70){
//     alert("C")
// }
// else if(grade>=60){
//     alert("D");
// }
// else if(grade>=40){
//     alert("E");
// }
// else if(grade<40){
//     alert("F");
// }
// else{
//     alert("wrong input");
// }


// console.log("while statement")
// let i =0;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// console.log("for statement");
// for(let i=0; i<=10; i++){
//     console.log(i);
// }
// console.log("do while statement");
// let n = 0;
// do {
//     n++;
//     console.log(n);
// }while(n<10);



// let switchA = true, switchB = true, switchC = false;
// let light;
// if(switchA && switchB == true){
//     light = true;
//     console.log("light is on")
    
// }else{
//     light = false;
//     console.log("light is off")
// }


let switchA = true, switchB = false, switchC = false, switchD = false;
if(switchA == true){
    if(switchB == true || switchD == true){
        console.log("light is on")
    }else{
        console.log("light is off")
    }
}


let num = 4;
for(let i = 1; i<=10; i++){
    if(num == i){
        console.log(i);
    }
}


for(let i = 1; i<=3; i++){
    if(i == 1){
        console.log("this is the first iteration");
    }else if(i == 2){
        console.log("this is the second iteration");
    }else{
        console.log("this is the third iteration")
    }
}
 

let year = 1970;
for(i=1970; i<=2022; i++){
    if(year % 4 == 0 && year % 400 == 0 && !(year % 100 == 0)){
        console.log(year +" is a leap year");
    }else{console.log(year+ " is not a leap year");}
}