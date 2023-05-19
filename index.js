const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes");
const fs = require("fs");

const port = process.env.PORT || 3001;
const app = express();

app.set("view engine", "ejs");

// app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   next();
// });
app.use(routes);
app.use(express.static(__dirname + "/static"));

// const root = path.join(__dirname, "static");

// app.get("*", function (req, res) {
//   fs.stat(root + req.path, function (err) {
//     if (err) {
//       res.sendFile("index.html", { root });
//     } else {
//       res.sendFile(req.path, { root });
//     }
//   });
// });

app.listen(port);
console.log("App listening on port " + port);
