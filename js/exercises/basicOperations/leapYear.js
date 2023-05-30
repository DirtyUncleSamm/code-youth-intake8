year = 2001;
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(year, "is a leap year", isLeapYear);