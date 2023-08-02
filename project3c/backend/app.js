const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const cors = require("cors");
const indexRouter = require("./routes/index");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

dotenv.config();

// MySQL connection setup
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// Handle database disconnections
connection.on("error", (err) => {
  console.error("Database error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.error("Database connection was closed.");
  }
  if (err.code === "ER_CON_COUNT_ERROR") {
    console.error("Database has too many connections.");
  }
  if (err.code === "ECONNREFUSED") {
    console.error("Database connection was refused.");
  }
});

// Middleware to make the database connection available to routes
app.use((req, res, next) => {
  req.db = connection;
  next();
});

// Routes setup
app.use("/", indexRouter);
app.use("/users", indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Handle server termination
process.on("SIGINT", () => {
  connection.end(() => {
    console.log("Database connection closed due to app termination.");
    process.exit(0);
  });
});

// export default connection;
module.exports = { connection };
