const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         
    password: '',   
    database: 'mripollf'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connectat a la BBDD MySQL');
});

module.exports = db;