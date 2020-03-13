// Import required packages
var express = require("express");
var router = express.Router();
var ExpensesController = require("../controllers/expenses.controller");

var ExpensesController = new ExpensesController();

// // GET Route - Get laborer by NIC
// router.get("/get/:divExpenseID", function(req, res, next) {
//   ExpensesController.getExpensesByEID(req.params.divExpenseID, function(result, err) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     } else {
//       res.status(200);
//       res.json(result);
//     }
//   });
// });

// GET Route - Get last fertilizer date
router.get("/getLastFertilizer/:div", function(req, res, next) {
  ExpensesController.getLastFertilizer(req.params.div,function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});
// GET Route - Get all field data
router.get("/getFieldData/div1/:interval", function(req, res, next) {
    console.log(req.params.interval);
    ExpensesController.getFieldData(req.params.interval,"div1",function(result, err) {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.status(200);
        res.json(result);
        console.log(result);
      }
      
    });
  });
  // GET Route - Get all field data
router.get("/getFieldData/div2/:interval", function(req, res, next) {
    console.log(req.params.interval);
    ExpensesController.getFieldData(req.params.interval,"div2",function(result, err) {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.status(200);
        res.json(result);
        console.log(result);
      }
      
    });
  });
  // GET Route - Get all field data
router.get("/getFieldData/div3/:interval", function(req, res, next) {
    console.log(req.params.interval);
    ExpensesController.getFieldData(req.params.interval,"div3",function(result, err) {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.status(200);
        res.json(result);
        console.log(result);
      }
      
    });
  });
// POST Route - Insert fertilizer amount
router.post("/enterFertilizer", function(req, res, next) {
  console.log("here");
 ExpensesController.enterFertilizer(req.body, function(result, err) {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

router.post("/insert", function(req, res, next) {
  console.log("here");
 ExpensesController.insertExpenses(req.body, function(result, err) {
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
//   ExpensesController.updateExpenses(req.body, function(result, err) {
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
// router.delete("/delete/:divExpenseID", function(req, res, next) {
//   ExpensesController.deleteExpensesByEID(req.params.div, function(result, err) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     } else {
//       res.status(200);
//       res.json(result);
//     }
//   });
// });

router.get("/select/:status", function(req, res, next) {
  ExpensesController.getAllNotifications(req.params.status,function(result, err) {
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