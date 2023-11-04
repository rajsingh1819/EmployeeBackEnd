// require("dotenv").config();
const mysql = require("mysql");

var con = mysql.createConnection({
  port: "3306",
  host: "localhost",
  user: "root",
  password: "Admin27281819",
  database: "userData",
});

con.connect((err) => {
  err ? console.log(err) : console.log("Data Base Connected !!!");
});

module.exports = con;
