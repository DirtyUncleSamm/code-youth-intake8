const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req,res)=>{
    res.send("Home Page")
})
// -- for the terminal: check to see if server is running: node .\fileName.js: then go to the browser and call the port number with localhost: port
// -- each app.get is creating a new page in our browser
app.get('/about', (req,res)=>
res.send("A little About Us")
)
app.get('/user', (req,res)=>
res.send("user page")
)
app.listen(port, ()=>
console.log("server running")
)// the => listed here is a call back function
// -- This is a code for my terminal to show that my server is running
// -- type into the url: localhost: 'portnumber' and this will bring up any code stored locally

// -- to check changes in the browser
