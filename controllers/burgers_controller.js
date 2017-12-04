var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.allBurgers(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//show burgers in db
router.post("/", function(req, res) {

  burger.createBurgers([
    "burger_name", "devoured"
    ], [
      req.body.name, false
    ], function() {
      res.redirect("/");
    });
});

//update a burger to eaten or not
router.put("/:id", function(req,res) {
  var condition = "id = " + req.params.id;

  console.log("condition " + condition);

  burger.updateBurgers({
    devoured: req.body.ate
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;