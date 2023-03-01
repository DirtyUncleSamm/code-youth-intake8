let user = {
    id:1,
    name: "Bob",
    display: function(){ console.log("Hello", this.name) ;}
}
console.log(user.id, user.name);
user.display();
user.gender="male";
