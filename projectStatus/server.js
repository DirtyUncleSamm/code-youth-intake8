const express = require('express')
const app = express()
const getUsers = require('./db.js')
const port = 3011

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get('/projects', getUsers);

app.use(express.urlencoded());
app.get('/', (req,res)=>{
    res.render("projects")
})



app.listen(port, ()=>
console.log("server running"))