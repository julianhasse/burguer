// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// author: Julian Hasse 🍔 🍔 🍔 
// ******************************************************************************

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const port = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
// =============================================================
app.use(express.static("public"));

// Setup bodyParser
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// The methodOverride() middleware is for requests from clients that only natively support 
// simple verbs like GET and POST, so you can accept requests from all kinds of clients.
// =============================================================
app.use(methodOverride("_method"));

// Setup Handlebars.
// =============================================================
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// =============================================================
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, () => {
  console.log("App listening on PORT " + port);
});
