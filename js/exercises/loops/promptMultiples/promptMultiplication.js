// write a program that prompts the user to input a positive integer. It should then print multiplication table of that number
let num = Number(prompt("enter a number"));;
let sum;
for(let i =1; i<10;i++) {
    sum = num * i;
    console.log(num, 'x', i, '=', sum)
}
