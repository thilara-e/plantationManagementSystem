// Import required packages
var express = require("express");
var router = express.Router();
var ManagerController = require("../controllers/manager.controller");

var managerController = new ManagerController();

// GET Route - Get manager by NIC
router.get("/get/:nic", function(req, res, next) {
  managerController.getManagerBysNIC(req.params.nic, function(result, err) {
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
  managerController.getAllManagers(function(result, err) {
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
  managerController.insertManager(req.body, function(result, err) {
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
router.put("/update", function(req, res, next) {
  managerController.updateManager(req.body, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// DELETE Route - Delete manager by NIC
router.post("/delete/:nic", function(req, res, next) {
  console.log("route delete");
  managerController.deleteManager(req.params.nic, function(result, err) {
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
