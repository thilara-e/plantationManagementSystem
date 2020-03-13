// Import required packages
var express = require("express");
var router = express.Router();
var ExpenseSumController = require("../controllers/expenseSum.controller");

var ExpenseSumController = new ExpenseSumController();

// GET Route - Get laborer by NIC


// GET Route - Get all laborers
router.get("/get-all/:monthofyear", function(req, res, next) {
  ExpenseSumController.getAllExpenseSum(req.params.monthofyear,function(result, err) {
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


// PUT Route - Update a laborer

// DELETE Route - Delete laborer by NIC


// Export router
module.exports = router;
