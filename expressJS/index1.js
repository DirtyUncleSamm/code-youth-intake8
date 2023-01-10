const express = require('express')
const app = express()
const port = 3000;
const products = require('./data.js')
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=>{
    res.send("Home Page")
})
app.get('/test', (req,res)=>
res.render("test"))

// const products = [
//     {id:1,
//     name: "iphone",
//     price: 600
//     },
//     {
//         id:2,
//         name: "smart watch",
//         price: 600
//     }
// ]
// -- line 27 /data shows data for all the objects in the array, specifying the id 
app.get('/data/:id', (req,res)=>{
    const id = req.params.id;
    res.send(id);
    const products = products.find((item) =>item.id===id) // -- this is a forloop for my array
// const prod = {};
// for(let i =0; i<products.length; i++{
//     if(id==products[i].id)
//     id
// }) // -- this is a conveluded way to write this function, it is much easier to use an => function
res.json(products) 
}
)

console.log(products, "products");
app.listen(port, ()=>
console.log("server running")
)