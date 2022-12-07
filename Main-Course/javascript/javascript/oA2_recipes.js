// -- 12-06-2022

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let recipe = 
{
    title: "mocha",
    serving: 1,
    prepTime: 3,
    ingredients: ["coffee", "hot chocolate", "milk", "marshmellows"],
    description: function(){
        console.log("recipe title: ", this.title, "this recipe serves :", this.serving, ", and will take", this.prepTime, "mins");
    }
};// -- when I use console.log in a function I need to declare my function globally
recipe.description();
// console.log("recipe: ", recipe.title);
// console.log("serving size: ", recipe.serving);
// for(let i = 0; i < recipe.ingredients.length; i++){
//     console.log(recipe.ingredients[i]);
// }
// for(let key in recipe){
//     console.log(key,recipe[key]);
//     if(Array.isArray(recipe[key])){
//         for(let i = 0; i <recipe[key].length; i++){
//             console.log(key[i]);
//         }
//     }
// }// -- this will list the elements in the array on different lines in my terminal

// console.log("keys", Object.keys(recipe));
// console.log("values", Object.values(recipe));
// console.log("marks", Object.entries(recipe));