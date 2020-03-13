var express = require("express");
var router = express.Router();
var WorkDoneController = require("../controllers/workDone.controller");

var workDoneController = new WorkDoneController();

// POST Route - Insert workAssign
router.get("/load/:lMobile", function(req, res, next) {
  console.log("routex")
    //console.log(req.params.status);
    workDoneController.loadWorkDone(req.params.lMobile,function(result, err) {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.status(200);
        res.json(result);
      }
    });
    console.log("end")
  }); 
 

  router.post("/submit/", function(req, res, next) {
    console.log("submitroute")
    workDoneController.submitWorkDone(req.body, function(result, err) {
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
