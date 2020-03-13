// Import required packages
console.log("route file start");
var express = require("express");
var router = express.Router();
var LaborerController = require("../controllers/laborer.controller");

var laborerController = new LaborerController();

// GET Route - Get laborer by NIC
router.get("/get/:mobilePhone", function(req, res, next) {
  
  laborerController.getLaborerByMobile(req.params.mobilePhone, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);console.log("route");
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// GET Route - Get all laborers
router.get("/get-all", function(req, res, next) {
  laborerController.getAllLaborers(function(result, err) {
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
  laborerController.insertLaborer(req.body, function(result, err) {
    console.log("Routes insert");
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});


// // POST Route - Load a laborer
// router.get("/load", function(req, res, next) {
//   laborerController.insertLaborer(req.body, function(result, err) {
//     console.log("Routes insert");
//     if (err) {
//       res.status(404);
//       res.send(err);
//     } else {
//       res.status(200);
//       res.json(result);
//     }
//   });
// });

// PUT Route - Update a laborer
router.post("/update", function(req, res, next) {
  laborerController.updateLaborer(req.body, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// DELETE Route - Delete laborer by NIC
router.post("/delete/:mobile_no", function(req, res, next) {
  console.log("route delete");
  laborerController.deleteLaborer(req.params.mobile_no, function(result, err) {
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
