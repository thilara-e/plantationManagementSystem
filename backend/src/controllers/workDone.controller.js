// Import required packages
var WorkDone = require("../models/workDone.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Laborer controller
function WorkDoneController() {}


// Get all laborers
WorkDoneController.prototype.loadWorkDone = function(lMobile,callback) {
  var sqlQuery = sqlGenerator.loadWorkDone(lMobile);
console.log("workdone");
  connection.query(sqlQuery, function(err, resultWorkDone) {
    if (err) {
      callback(null, err);
    } else if( resultWorkDone.length == 0) {
      connection.rollback();
      callback("No work assign for the given MobileNo.");
    }else {
      

      
        var workdone = new WorkDone(
            resultWorkDone[0].lMobile,
            resultWorkDone[0].date,
            resultWorkDone[0].description,
            resultWorkDone[0].fieldID,
            resultWorkDone[0].amount,
            resultWorkDone[0].status
        );
        console.log(workdone)
        callback(workdone);      
  }
});
};



// Update workDone in DB

WorkDoneController.prototype.submitWorkDone = function(reqBody, callback) {
  console.log("controllersubmit");  
  connection.beginTransaction(function(err) {
      if (err) {
        callback(null, err);
      }
  
      // *** request should contain below keys exactly as it is.
      var workdone = new WorkDone(
                reqBody.lMobile,
                reqBody.date,
                reqBody.description,
                reqBody.fieldID,
                reqBody.amount,
                reqBody.status
      );
  
      var sqlQuery = sqlGenerator.submitWorkDone(workdone);
  console.log(workdone);
      sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
        if (err) {
          connection.rollback();
          callback(null, err);
        } else if (result.affectedRows == 0) {
          connection.rollback();
          callback("Laborer doesn't exist for the given Mobile number.");
        } else {
          connection.commit(function(err) {
            if (err) {
              connection.rollback();
              callback(null, err);
            }
            console.log("Transaction Complete.");
            callback("Work successfully submitted to the system!");
          });
        }
      });
    });
  };

module.exports = WorkDoneController;
