const express = require('express')
const app = express()
const getUsers = require('./db.js')
const port = 3001

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get('/users', getUsers);

app.get('/', (req,res)=>{
    res.render("home")
})
app.get('/survay', (req,res)=>{
    res.render("survay")
})
app.get('/form', (req,res)=>{
    res.render("form")
})
app.use(express.urlencoded());
app.post('/save', (req, res)=>{
// res.send("form submitted")
const name = req.body.name;
const email = req.body.email;
res.send(`Name: ${name} Email: ${email}`);
})



app.listen(port, ()=>
console.log("server running"))