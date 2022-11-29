// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//----- Example of a complex program. In this version because 'n' was initalized in the 'while' loop it will have to run through it for each iteration. In the less complex problem shown below we initialize the value of 'n' outside the loop as a reference for the loop to pull from.-------
// let i = 1;
// while(i<=12){
//     let n = 3;
//     console.log("table of 3", n*i);
//     i++;
// } --- ctrl C will stop the code from looping ---

let i = 1, n = 3;
while(i<=10){
    console.log("table of 3", n*i);
    i++;
}
//-------Above is an example of a complexity fix. Reduce code written to make a cleaner read for both humans and computers-------

let num = prompt("enter a number");
while(num>0){
    alert(num); //console log
    num = prompt("enter a number"); //update, without this the program will continue to loop
}
alert("thank you");
//-----In the code above the 'while' loop can be used when there are coditions for the code to run as long as the prompt is true to the condition. The reason we didnt use the 'for' loop due to the fact that the coditions need to be defined, and changes need to be defined----

