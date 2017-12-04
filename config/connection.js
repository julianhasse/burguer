// Set up MySQL connection.
const mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
  //Heroku production deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host (development)
    connection = mysql.createConnection({
        root: 3306,
        host: "localhost",
        user: "root",
        password: "91zv4999",
        database: "burgers_db",
    });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
