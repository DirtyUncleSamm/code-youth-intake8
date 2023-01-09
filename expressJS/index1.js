const express = require('express')
const app = express()
const port = 3000;
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=>{
    res.send("Home Page")
})
app.get('/test', (req,res)=>
res.render("test"))

app.listen(port, ()=>
console.log("server running")
)