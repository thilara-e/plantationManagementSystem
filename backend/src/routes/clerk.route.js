// Import required packages
var express = require("express");
var router = express.Router();
var ClerkController = require("../controllers/clerk.controller");

var clerkController = new ClerkController();

// GET Route - Get clerk by NIC
router.get("/get/:nic", function(req, res, next) {
  clerkController.getClerkBysNIC(req.params.nic, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// GET Route - Get all laborers
router.get("/get-all", function(req, res, next) {
  clerkController.getAllClerks(function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {  
      res.status(200);
      res.json(result);
    }
  });
});

// POST Route - Insert a manager
router.post("/insert", function(req, res, next) {
  clerkController.insertClerk(req.body, function(result, err) {
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

// PUT Route - Update a mnager
router.post("/update", function(req, res, next) {
  clerkController.updateClerk(req.body, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// DELETE Route - Delete clerk by NIC
router.post("/delete/:nic", function(req, res, next) {
  clerkController.deleteClerk(req.params.nic, function(result, err) {
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
