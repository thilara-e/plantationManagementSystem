// Import required packages
var express = require("express");
var router = express.Router();
var ConductorController = require("../controllers/conductor.controller");

var conductorController = new ConductorController();

// GET Route - Get conductor by NIC
router.get("/get/:nic", function(req, res, next) {
  conductorController.getConductorBysNIC(req.params.nic, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});
// GET Route - Get all conductors
router.get("/get-all", function(req, res, next) {
  conductorController.getAllConductors(function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {  
      res.status(200);
      res.json(result);
    }
  });
});

// POST Route - Insert a conductor
router.post("/insertConductortostaff", function(req, res, next) {
  conductorController.insertConductortoconductor(req.body, function(result, err) {
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

// POST Route - Insert a conductor
router.post("/insertConductortostaff", function(req, res, next) {
    conductorController.insertConductortostaffr(req.body, function(result, err) {
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

// PUT Route - Update a conductor
router.post("/update", function(req, res, next) {
  conductorController.updateConductor(req.body, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// DELETE Route - Delete condutor by NIC
router.delete("/delete/:nic", function(req, res, next) {
  console.log("HEHEE");
  conductorController.deleteConductorBysNIC(req.params.nic, function(result, err) {
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
