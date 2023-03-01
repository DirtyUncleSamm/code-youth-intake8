let arr = ["Spawn", "Cloud Atlas", "Twin Towers", "Dare Devil" ];
const numberedArray = arr.map((element, index) => {
    return `${index + 1}. ${element}`;
});

console.log(numberedArray);