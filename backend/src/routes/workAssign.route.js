// Import required packages
var express = require("express");
var router = express.Router();
var WorkAssignController = require("../controllers/workAssign.controller");

var workAssignController = new WorkAssignController();

// POST Route - Insert workAssign
router.post("/insert", function(req, res, next) {
    workAssignController.insertWorkAssign(req.body, function(result, err) {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.status(200);
        res.json(result);
      }
    });
  });

  // Export router
module.exports = router;
