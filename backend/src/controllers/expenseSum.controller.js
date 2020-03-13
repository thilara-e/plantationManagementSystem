// Import required packages
var Summary = require("../models/expenseSum.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Laborer controller
function ExpenseSumController() {}

//Get ExpenseSum by date

ExpenseSumController.prototype.getAllExpenseSum = function(monthofYear,callback) {
  
  // var divis = Math.floor(div/1000000);
  //   div = div%1000000;
    var sy = Math.floor(monthofYear/100);
    var sm = monthofYear % 100;
    var ey = Math.floor(monthofYear/100);
    var em = (monthofYear % 100) + 1;
    if(em==13){
        em = 1;
        ey+=1;
    }
    if(em>=10){
        ems = em.toString();
    }
    else{
        ems = "0" + em.toString();
    }
    if(sm>=10){
        sms = sm.toString();
    }
    else{
        sms = "0" + sm.toString();
    }
    
  var sqlQuery = sqlGenerator.getAllExpenseSum(sms,sy,ems,ey);

  
console.log(sqlQuery);
  connection.query(sqlQuery, function(err, resultExpenseSum) {
    if (err || resultExpenseSum.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var result = [];

      while (resultExpenseSum[i]) {
        var expenseSum = new Summary(
            resultExpenseSum[i].description,
            resultExpenseSum[i].date,
            resultExpenseSum[i].amount,
            
        );
        result.push(expenseSum);
        i++;
      }
      console.log(result);
      callback(result);
    }
  });
}

// Insert laborer to DB

// Export laborer controller
module.exports = ExpenseSumController;
