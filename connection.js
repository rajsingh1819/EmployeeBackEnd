// require("dotenv").config();
const mysql = require("mysql");

var con = mysql.createConnection({
  port: "3306",
  host: "localhost",
  user: "root",
  password: "  ",   //if did you set your MySql Password then MySql password write here.but first create your Mysql table
  database: "userData",
});

con.connect((err) => {
  err ? console.log(err) : console.log("Data Base Connected !!!");
});

module.exports = con;
