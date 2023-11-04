const express = require("express");
var cors = require("cors");
const userRoute = require("./routes/user");
const app = express();
app.use(express.static("userPractice"));
app.use(express.json());
require("dotenv").config();
app.use(cors()); //important
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

module.exports = app;
