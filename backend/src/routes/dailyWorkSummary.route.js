// Import required packages
var express = require("express");
var router = express.Router();
var DailyWorkSummaryController = require("../controllers/dailyWorkSummary.controller");

var dailyWorkSummaryController = new DailyWorkSummaryController();

// GET Route - Get laborer by NIC
// router.get("/get", function(req, res, next) {
    
//     conductor7DayController.getEndDate(function(result, err) {
//       console.log("inside getEndDate-routes");
//     if (err) {
//       console.log("routes error")
//       res.status(404);
//       res.send(err);
//     } else {
//       res.status(200);
//       res.json(result);
//       console.log(result);
//     }
//   });
// });

//GET Route - Get all sum Data
router.get("/get-allSum", function(req, res, next) {
  //console.log("came here 1");
  dailyWorkSummaryController.getAllData(function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

//GET Route - Get all field Data
router.get("/get-all/:div", function(req, res, next) {
    //console.log("came here 1");
    dailyWorkSummaryController.getAllFieldData(req.params.div,function(result, err) {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.status(200);
        res.json(result);
      }
    });
  });
//GET Route - Get all field Data
router.get("/get-allMonth/:div", function(req, res, next) {
  //console.log("came here 1");
  dailyWorkSummaryController.getAllFieldDataMonth(req.params.div,function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// // POST Route - Insert a laborer
// router.post("/insert", function(req, res, next) {
//   laborerController.insertLaborer(req.body, function(result, err) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     } else {
//       res.status(200);
//       res.json(result);
//     }
//   });
// });

// // PUT Route - Update a laborer
// router.put("/update", function(req, res, next) {
//   laborerController.updateLaborer(req.body, function(result, err) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     } else {
//       res.status(200);
//       res.json(result);
//     }
//   });
// });

// // DELETE Route - Delete laborer by NIC
// router.delete("/delete/:nic", function(req, res, next) {
//   laborerController.deleteLaborerByNIC(req.params.nic, function(result, err) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     } else {
//       res.status(200);
//       res.json(result);
//     }
//   });
// });

// Export router
module.exports = router;
