const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes");
const fs = require("fs");

const port = process.env.PORT || 3001;
const app = express();

app.set("view engine", "ejs");
app.use(routes);
app.use(express.static(__dirname + "/static"));

app.listen(port);
console.log("App listening on port " + port);
