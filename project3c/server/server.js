const mysql = require("mysql2");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

let connection = mysql.createConnection({
  host: process.env.DB_HOST, // This will be your RDS endpoint
  user: process.env.DB_USER, // The username for your database
  password: process.env.DB_PASS, // The password for your database
  database: process.env.DB_NAME, // The name of your database
});

fs.readFile("../db/setup.sql", "utf8", function (err, data) {
  if (err) throw err;
  console.log("Received data successfully");

  connection.query(data, function (err, results) {
    if (err) throw err;
    console.log("Executed SQL script successfully");

    // Close connection
    connection.end();
  });
});
