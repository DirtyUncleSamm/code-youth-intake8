const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'express',
    password: 'asdf',
    port: 5432,
})
// -- products Table Queries

// -- display all products in .json format
const getProducts = (req,res)=>{
    pool.query('SELECT * FROM products', (err, results)=>{
        if(err){
            throw err;
        }
        return res.json(results.rows);
    })
}

// -- displays specific product by PRIMARY KEY 'id'
const getProductsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM products where id=$1', [id], (err, results)=>{
        if(err){
            throw err;
        }
        // res.render("products", {data:results.rows})
        return res.json(results.rows);
    })
}

const createProduct = (req, res) => {
    const name = req.body.name;
    console.log(name);
    const category = req.body.category;
    const proFresh = req.body.fresh;
    const photo = req.body.photo;
    const description = req.body.description;
    const price = req.body.price;

    pool.query('INSERT INTO products(name, category, product_freshness, photo, description, price) VALUES($1, $2,$3,$4,$5,$6)', [name, category, proFresh, photo, description, price], (err, results)=>{
        if(err){
            throw err;
        }
        res.send("new product added")
        // res.send("new product", "Name:" $:(name)) -- displays new product information 
    })
}



// -- users Table Queries

// -- select and display users as a .json file from psql
const getUsers = (req,res)=>{
    pool.query('SELECT * FROM users', (err, results)=>{
        if(err){
            throw err;
        }
        return res.json(results.rows);
    })
}

// -- Select users by their PRIMARY KEY 'id'
const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM users where id=$1', [id], (err, results)=>{
        if(err){
            throw err;
        }
        // res.render("users", {data:results.rows})
        return res.json(results.rows);
    })
}

// --  This is a duplicate funtion of the one above except it displays the proper syntax for adding multiple parameters for search

// const getUsersById = (req, res) => {
//     const id = NUMBER(re.params.id);
//     pool.query('SELECT * FROM users WHERE id=$1 AND name=$2', [id, name], (err, results)=>{
//         if(err){
//             throw err;
//         }
//         return res.json(results.rows);
//     })
// }

// -- SAVE user input from browser
const createUser = (req, res) => {
    const name = req.body.name;
    console.log(name);
    const email = req.body.email;

    pool.query('INSERT INTO users(name, email) VALUES($1,$2)', [name,email], (err, results)=>{
        if(err){
            throw err;
        }
        res.send("new user added")
        // res.send("new user", "Name:" $:(name))
    })
}
// -- This did not work for Raninder

// const deleteUser = (req, res) => {
//     const id = parseInt(req.params.id);

//     pool.query('DELETE FROM users WHERE id=$1',[id], (err,res)=>{
//         if(err){
//             throw err;
//         }
//         res.send('user deleted with id: ${id}')
//     })
// }

module.exports = {getUsers, getUsersById, createUser, getProducts, getProductsById, createProduct};