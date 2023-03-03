function ageCalculator(name, yearOfBirth, currentYear){
    const age = currentYear - yearOfBirth;
    return name + " is " + age + " years old."
}
console.log(ageCalculator("Sammantha", 1997, 2023));
console.log(ageCalculator("T", 1953, 2023));
console.log(ageCalculator("V", 1965, 2023));
