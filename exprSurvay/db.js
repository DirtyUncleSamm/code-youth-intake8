const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'express',
    password: 'asdf',
    port: 5432,
})

const getUsers = (req,res)=>{
    pool.query('SELECT * FROM users', (err, results)=>{
        if(err){
            throw err;
        }
        return res.json(results.rows);
    })
}

module.exports = getUsers;