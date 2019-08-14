const mysql = require('mysql');
const connection;
const newLine = '\n\n'

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
        database: 'burger_db'
    });
};

connection.connect(function(err) {
    if (err) {
        console.error('ERROR: MySQL connection error -- ' + err.stack + newLine);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + newLine);
});

module.exports = connection;