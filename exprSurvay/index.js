const express = require('express')
const app = express()
const port = 3001

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.render("home")
})
app.get('/survay', (req,res)=>{
    res.render("survay")
})

app.listen(port, ()=>
console.log("server running"))