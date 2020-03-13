// Import required packages
var WorkAssign = require("../models/workAssign.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// workAssign controller
function WorkAssignController() {}

// Insert workAssign to DB
WorkAssignController.prototype.insertWorkAssign = function(reqBody, callback) {
    connection.beginTransaction(function(err) {
      if (err) {
        callback(null, err);
      }
  
      // *** request should contain below keys exactly as it is.
      var workAssign = new WorkAssign(
        //reqBody.division,
        reqBody.date,
        reqBody.mobile,
        reqBody.type,
        reqBody.field,
        reqBody.amount
      );
  
      var sqlQuery = sqlGenerator.insertWorkAssign(workAssign);
  
      sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
        if (err) {
          connection.rollback();
          callback(null, err);
        } else {
          connection.commit(function(err) {
            if (err) {
              connection.rollback();
              callback(null, err);
            }
            console.log("Transaction Complete.");
            callback("Work assignment successfully inserted into the system!");
          });
        }
      });
    });
  };

  // Export workAssign controller
module.exports = WorkAssignController;
