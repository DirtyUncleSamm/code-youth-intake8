const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db8',
    password: 'asdf',
    port: 5432
})

const getProjects = (req,res)=>{
    pool.query('SELECT * FROM projects', (err, results)=>{
        if(err){
            throw err;
        }
        return res.json(results.rows);
    })
}

module.exports = getProjects;