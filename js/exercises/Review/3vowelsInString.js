// -- Out side a function
let string = "My name is Sammantha";
console.log(string);
count = 0;
for(let i = 0;i < string.length; i++){
    // console.log(string[i]);
    if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
        count += string[i].length;
    }
}
console.log("Number of vowels in string = ", count);

// -- Inside a function
function vowelcount(str){
	let count=0;
	const vowel = ['a','e','i','o','u']
	for (let char of str){
		if(vowel.includes(char)){
			count++
		}
	}
	return count
}

console.log(vowelcount(`this is a very long string with some vowels perhaps`));