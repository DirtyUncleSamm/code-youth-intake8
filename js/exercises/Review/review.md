1. ***ageCalculator:*** Define a function called ageCalculator. This function should take 3 parameters:
    name – a string representing someone's name
    yearOfBirth – a number representing their year of birth
    currentYear – a number representing the current year
The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows.
"Suzie is 32 years old."


2. ***largestOfTwoNumbers:*** Given an array of numbers, find the two largest numbers in that array, and sum them together.
Sum of largest and smallest number inn array



3. ***vowelsInString:*** count the number of vowels that appear in a given string

4.  Define a function called range
     The function takes 3 integer parameters: start, end, and step.
     The function should return an array of numbers from start to end counting by step.
For example:
    codeoutputrange(0, 10, 2);[ 0, 2, 4, 6, 8, 10 ]range(10, 30, 5);[ 10, 15, 20, 25, 30 ]range(-5, 2, 3);[ -5, -2, 1 ]
    The function should return an empty array [] if given incorrect parameters, such as:
    start, end, or step being undefined
    start being greater than end
    step being 0, or negative




5.  Given an array of objects representing TV Shows, we want to create new arrays:
* One including only the titles of the shows
* One including objects that include only the title and the rating properties
// 3. One including only the titles of the shows, but:
//   If the rating is greater or equal to 9, we put the title in upper case.
//   Else, we make the title lower case.
// (hint:You can create these 3 arrays using the map method)
// 4. One including only the TV Shows that were watched ({ watched: true })
// 5. One including only the TV Shows that have a rating greater or equal to 9
// 6. One including only the TV Shows that were first published before 2015
// (hint:You can create these 3 arrays using the filter method)