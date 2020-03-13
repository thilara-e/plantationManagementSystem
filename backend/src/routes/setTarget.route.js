// Import required packages
var express = require("express");
var router = express.Router();
var SetTargetController = require("../controllers/setTarget.controller");

var setTargetController = new SetTargetController();

// GET Route - Get all field areas
router.get("/get-all/:div", function(req, res, next) {
    setTargetController.getAllFieldAreas(req.params.div, function(result, err) {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.status(200);
        res.json(result);
      }
    });
  });

  // POST Route - Insert a target
router.post("/insert", function(req, res, next) {
    setTargetController.insertSetTarget(req.body, function(result, err) {
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

