// depending on the month, 
// display no. of days month==1 || month==3.... month=="jan" || month="march" ||....

let month = 'feb';

if (month == 'jan' || month == 'mar' || month == 'may' || month == 'jul' || month == 'aug' || month == 'oct' || month == 'dec') {
    const days = 31;
    console.log(month, "has ", days, " days!")
}else if(month == 'apr' || month == 'jun' || month == 'sep' || month == 'nov') {
    const days = 30;
    console.log(month, "has ", days, " days!")
}else if (month == 'feb') {
    const days = 28;
    console.log(month, "has ", days, " days!")
}
