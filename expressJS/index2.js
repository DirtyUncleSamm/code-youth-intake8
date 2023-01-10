const express = require('express')
const app = express()
const port = 3000;
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));
// const user = {};

// -- template lierals
// app.get('/', (req,res)=>{
//     // res.render("test1", {user: {name:'bob', id:'1'}} )
//     res.render("test1", {user} )
// })
// const student = [{
//     name: 'alice',
//     city: 'toronto',
//     id: 1
// },
// {
//     name: 'bob',
//     city: 'toronto',
//     id: 2
// }
// ]
app.get('/data', (req,res)=>
res.render("test1", {data:student}))
app.listen(port, ()=>
console.log("server running")
)