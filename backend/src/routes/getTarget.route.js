// Import required packages
var express = require("express");
var router = express.Router();
var GetTargetController = require("../controllers/getTarget.controller");

var getTargetController = new GetTargetController();

// GET Route - Get all set targets
router.get("/get-all/:div", function(req, res, next) {
    getTargetController.getAllTargets(req.params.div, function(result, err) {
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
