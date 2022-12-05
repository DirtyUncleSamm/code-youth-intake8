const user = {};
user.firstName = "John";
user.surName = "Smith";
console.log("Original name: ", user["firstName"]);
user.firstName = "Pete";
console.log("Name Changed: ", user.firstName);



console.log("keys", Object.keys(user));
console.log("values", Object.values(user));
console.log("marks", Object.entries(user));