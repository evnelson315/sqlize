// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    localhost: {
        port: 3306,
        host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'imrx94qfg9zw9i6g',
        password: "vjda20ney5yar00v",
        database: "starwars"
    },
    jawsDB: {
         port: 3306,
        host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'imrx94qfg9zw9i6g',
        password: "vjda20ney5yar00v",
        database: "y00xjtkhlcumfi4b"
        // TODO: Add your JawsDB connection info here
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection(source.jawsDB);



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;