const mysql = require("mysql2");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

let connection = mysql.createConnection({
  host: process.env.DB_HOST, // This will be your RDS endpoint
  user: process.env.DB_USER, // The username for your database
  password: process.env.DB_PASS, // The password for your database
  database: process.env.DB_NAME, // The name of your database
});

const sqlQueries = {
  getTable: `SELECT * FROM users;`,
};

const executeQuery = (sqlQueries) => {
  connection.query(sqlQueries, function (err) {
    if (err) {
      console.log("not connected :()");
    } else executeQuery(sqlQueries.getTable) && console.log("we did it!");
    connection.end();
  });
};
