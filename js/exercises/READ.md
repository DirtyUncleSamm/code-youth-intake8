# JavaScript Exercises
***Exercises***
## If Statements
1. ***weekDay:*** write a program that takes user input as a number from 1 to 7 and returns the day of the week
2. ***evenOdd:*** write a program that takes user input and checks if a number is even or odd
3. ***posNegZero:*** write a program that checks to see if a number is negative, positive or zero
4. ***leapYear:*** write a program that checks user input to see if a year is a leap year
5. ***fiveEleven:*** Create a function that checks to see if a number is divisible by 5 or 11
6. ***vowelConst:*** write a program that checks whether a character is a vowel or consonant
7. ***gradePercent:*** 
    * Create two variables, 'marks' and 'total'
    * Set total to 500
    * Set marks to a number between 0 and 500
    * Calculate the percentage for the marks and find what letter grade to give the student

Percentage greater than or equal to 90% : Grade A
Percentage greater than or equal to 80% : Grade B
Percentage greater than or equal to 70% : Grade C
Percentage greater than or equal to 60% : Grade D
Percentage greater than or equal to 40% : Grade E
Percentage less than 40% : Grade F
    
8. ***daysInMonth:*** Find number of days in a month
9. ***greaterOfThree:*** Find the greater of three numbers
10. ***threeFive:*** If number is divisible by 3, return three. If number is divisible by 5, return five. If number is divisible by both, return threeFive
11. ***temp:*** Read temperature in celsius and display a suitable message according to temerature state below: 
    Temp    Description
    <0      Freezing
    0-10    Very Cold
    20-30   Normal
    30-40   Hot
    .>=40   Very Hot

12. ***comparePrompt:*** Create a function that takes two number prompts from a user, and compare one number with the other. Return the value of the greater number.

## Loops

1. Write a program to find the sum and average of the first 20 even 'natural' numbers
2. Write a program that prompts the user to input a positive integer and returns the multiplication table of the input
3. Write a program that prompts the user to input 10 integers. The function should check the value of the inputs and displays them in order from negative to positive
4. Write a program that displays the cube of a number upto a given integer. 
5. ***fibonacci:*** Write a program that displays a Fibonacci series
6. Write a program that determins if a user input is a prime number. If input is prime, return "this is a prime number". Else, return "not a prime number"

## Functions

1. ***cube:*** Find cube using functions
2. ***circle:*** Diameter & area of circle using functions   pi=3.142
3. swap two numbers using function
4. program to find the value of one number raised to the power of another using functions. 
5. Functions to perform various arithmetic operations.
6. ***isEven:*** Write a function that tests if a number is even or odd. Use a 'return' statement and call two numbers to test the program

### arrow functions
1. return greater of 2 numbers
2. return average of 4 numbers
3. check if leap year or not , return true/false

## Ararys
1. ***Colours:*** Create an array of colors. Display the first, fourth and last element of the array. Display the size and finally the complete array
2. ***reverse:*** read n number of values in an array and display it in reverse order.
3. ***sumAv:*** sum and average of marks
4. ***evenOdd:*** to count total number of even and odd elements in an array.
5. ***printNeg:*** to print all negative elements in an array.
6. ***searchEle:*** search an element in array
7. ***copyEle:*** copy the elements of one array into another array. 
8. ***smallEle:*** find the smallest element in an array.
9. ***copyEle:*** copy the elements from one array into another array

### Methods
1. ***loopInt:*** Declare an empty array. Using a for loop add the number 0-10 to the array
2. ***banList:*** Add everyone from toBeAdded to the banList array then empty the toBeAdded Array *Hint: look up 'js how to empty an array'
3. ***daySort*** Using only pop(), push(), unshift(), and shift() make weekDays start at monday and end at sunday in the correct order
4. ***randInt:*** Add 50 random whole numbers between 0 and 100 to myNumbers. console.log(myNumbers), after all 50 numbers are added. Split the numbers into 'even' and 'odd'. Find the average of myNumbers. Find the median of myNumbers. 
5. ***cleanNames:*** Using the .map() and .trim() methods define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end. 
6. ***mapforEachUpperCase:*** Captialize every word in array  let arr = ['red','green','blue','gray','black'];  ['RED','GREEN'...]
7. ***.join:*** Given an array of movies, iterate over them using the forEach method of the array type and console.log every movie in the array preceded by an ascending number. e.g. 
    1. Titanic  
    2. Avatar
8. ***foreEachLength:*** find length of each word of array [3, 5,4,4,5]
9. ***mathFloorCeil:*** round an array of numbers [10.5, 23.5]   Math.floor   Math.ceil
10. ***displayOdd:*** display only odd numbers from an array
11. ***productOfOddNumbers:*** find the product of odd elements in an array
12. ***sumOfSquared:*** find the sum of squares of an array
13. ***capFirstLetterOfEle:*** Capitalize first letter of each word in an array

## Objects
1. ***singleObject:*** create an object student with properties:
id,
name,
address,  another object
email,
phone
marks --array 
course:
hobbies-array

* In string form display:
student John with id(1) and country(US) got (45) marks in first subject and is interested in these things
2. ***arrayOfObjects:*** display an array of multiple objects

3. ***recipes:***
* Create an object to hold information on your favorite recipe. 
* It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
* On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

4. ***readingList:***
Keep track of which books you read and which books you want to read!

* Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

* Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

* Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


5. ***characters:***
* Get characters with mass greater than 100
* Get characters with height less than 200
* Get all male characters