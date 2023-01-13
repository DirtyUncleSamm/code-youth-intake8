const express = require('express')
const { Pool } = require('pg')
const app = express()
const {getUsers, getUsersById, createUser, getProducts, getProductsById, createProduct} = require('./db.js')
const port = 3001
app.use(express.urlencoded());
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

// -- Products Table
app.get('/products', getProducts);
app.get('products/:id', getProductsById);
app.post('/save', createProduct);



// -- Users Table

app.get('/users', getUsers);
app.get('/users/:id', getUsersById);
app.post('/save1', createUser);

// -- delete user by id -- Delete may not be possible from the browser through psql
//app.delete('/users/:id', deleteUser);

// -- to encode data pulled by psql


// app.post('/save', (req, res)=>{
// // res.send("form submitted")
// const name = req.body.name;
// const email = req.body.email;
// res.send(`Name: ${name} Email: ${email}`);
// })

// -- Navigation 'end points' to render .ejs pages
app.get('/', (req,res)=>{
    res.render("home")
})
app.get('/survay', (req,res)=>{
    res.render("survay")
})
app.get('/form', (req,res)=>{
    res.render("form")
})
app.get('/productForm', (req,res)=>{
    res.render("productForm")
})


app.listen(port, ()=>
console.log("server running"))