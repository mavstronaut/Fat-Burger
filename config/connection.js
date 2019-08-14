const mysql = require('mysql');
const connection;


if (process.env.JAWSDB_URL) { 
    // heroku database
    connecction = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // running on localhost
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'lakota',
        database: 'burgers_db'
    });
};
