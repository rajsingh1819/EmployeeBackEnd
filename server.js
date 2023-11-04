require("dotenv").config(); // it is important
const app = require("./index");
const http = require("http");
const server = http.createServer(app);
server.listen(process.env.PORT);
