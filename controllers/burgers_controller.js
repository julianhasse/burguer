// *****************************************************************************
// Create routes and set up logic within those routes where required.
// ******************************************************************************

const express = require("express");
const router = express.Router();

// Import the model  <- burger.js
const burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.allBurgers((data) => {
    var burgersObject = {
      burgers: data
    };
    res.render("index", burgersObject);
  });
});


// Post
router.post("/", function(req, res) {

  burger.createBurgers([
    "burger_name", "devoured"
    ], [
      req.body.name, false
    ], function() {
      res.redirect("/");
    });
});

// Update
router.put("/:id", function(req,res) {
  var condition = "id = " + req.params.id;

  console.log("condition " + condition);

  burger.updateBurgers({
    devoured: req.body.ate
  }, condition, function() {
    res.redirect("/");
  });
});

// Delete
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes -> server.js
module.exports = router;