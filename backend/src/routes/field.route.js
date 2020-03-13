// Import required packages
var express = require("express");
var router = express.Router();
var FieldController = require("../controllers/field.controller"); 

var fieldController = new FieldController();

// GET Route - Get field by FNO
router.get("/get/:FID", function(req, res, next) {
  console.log("route get fid ");
  console.log(req.params.FID);
  fieldController.getFieldByFID(req.params.FID, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
}); 


// POST Route - Insert a replant
router.post("/fieldReplant", function(req, res, next) {
  console.log("HERE");
  fieldController.fieldReplant(req.body, function(result, err) {
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



// GET Route - Get all fields
router.get("/get-all", function(req, res, next) {
  fieldController.getAllField(function(result, err) {
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
  fieldController.insertField(req.body, function(result, err) {
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

// PUT Route - Update a field
router.post("/update", function(req, res, next) {
  console.log("update route");
  fieldController.updateField(req.body, function(result, err) {
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
router.post("/delete/:fid", function(req, res, next) {
  fieldController.deleteField(req.params.fid, function(result, err) {
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
