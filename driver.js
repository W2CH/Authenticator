const mysql = require('mysql2');

const poolOfConnections = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'authenticator',
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0
})

module.exports = poolOfConnections.promise();