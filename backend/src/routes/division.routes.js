// Import required packages
var express = require("express");
var router = express.Router();
var DivisionController = require("../controllers/division.controller");

var divisionController = new DivisionController();

// GET Route - Get division by DIVNO
router.get("/get/:Divno", function(req, res, next) {
  console.log("get route");
  divisionController.getDivisionByDivNo(req.params.Divno, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// GET Route - Get all division
router.get("/get-all", function(req, res, next) {
  divisionController.getAllDivisions(function(result, err) {
    if (err) { 
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// POST Route - Insert a division
router.post("/insert", function(req, res, next) {
  divisionController.insertDivision(req.body, function(result, err) {
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

// PUT Route - Update a division
router.post("/update", function(req, res, next) {
  console.log("update route");
  divisionController.updateDivision(req.body, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

// DELETE Route - Delete division by DivNo
router.post("/delete/:divno", function(req, res, next) {
  console.log(" in router.delete");
  divisionController.deleteDivision(req.params.divno, function(result, err) {
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
