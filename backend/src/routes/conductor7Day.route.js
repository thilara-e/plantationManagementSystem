// Import required packages
var express = require("express");
var router = express.Router();
var Conductor7DayController = require("../controllers/conductor7Day.controller");

var conductor7DayController = new Conductor7DayController();

// GET Route - Get laborer by NIC
router.get("/get/:div", function(req, res, next) {
    
    conductor7DayController.getEndDate(req.params.div,function(result, err) {
      console.log("inside getEndDate-routes");
    if (err) {
      console.log("routes error")
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
      console.log(result);
    }
  });
});
router.get("/getStatus1/:div", function(req, res, next) {
    
  conductor7DayController.getStatus1(req.params.div,function(result, err) {
    console.log("inside getEndDate-routes");
  if (err) {
    console.log("routes error")
    res.status(404);
    res.send(err);
  } else {
    res.status(200);
    res.json(result);
    console.log(result);
  }
});
});

//GET Route - Get all 7Day Data
router.get("/get-all/:div", function(req, res, next) {
  
  conductor7DayController.getAll7DayData(req.params.div,function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// POST Route - Insert a laborer
router.post("/insert", function(req, res, next) {
  conductor7DayController.insertEndDate(req.body, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

router.post("/resetCalendar", function(req, res, next) {
  

  conductor7DayController.insertNewEndDate(req.body, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
      return;
    } else {
      res.status(200);
      res.json(result);
      return;
    }
  });
});

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
