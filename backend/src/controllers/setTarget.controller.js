// Import required packages
var SetTarget = require("../models/setTarget.model");
var FieldAreas = require("../models/fieldAreas.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// set target controller
function SetTargetController() {}

// Get all field areas
SetTargetController.prototype.getAllFieldAreas = function(div, callback) {
    var sqlQuery = sqlGenerator.getAllFieldAreas(div);
  
    connection.query(sqlQuery, function(err, resultFieldAreas) {
      if (err || resultFieldAreas.length == 0) {
        callback(null, err);
      } else {
        var i = 0;
        var resFieldAreas = [];
  
        while (resultFieldAreas[i]) {
          var fieldAreas = new FieldAreas(
            resultFieldAreas[i].fieldID,
            resultFieldAreas[i].fAcres,
            resultFieldAreas[i].fStatus,
            resultFieldAreas[i].divNo,
            resultFieldAreas[i].plantYear
          );
          resFieldAreas.push(fieldAreas);
          i++;
        }
        callback(resFieldAreas);
      }
    });
  };

  // Insert target to DB
SetTargetController.prototype.insertSetTarget = function(reqBody, callback) {
    connection.beginTransaction(function(err) {
      if (err) {
        callback(null, err);
      }
  
      // *** request should contain below keys exactly as it is.
      var setTarget = new SetTarget(
        reqBody.division,
        reqBody.fieldTarget1,
        reqBody.fieldTarget2,
        reqBody.fieldTarget3,
        reqBody.field1,
        reqBody.field2,
        reqBody.field3,
        reqBody.date,
        reqBody.month
        //reqBody.target
      );
  
      console.log(setTarget);
      //console.log(mString);
      
      var sqlQuery = sqlGenerator.insertSetTarget(setTarget);
  
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
            callback("Target successfully inserted into the system!");
          });
        }
      });
    });
};
  

// Export set targets controller
module.exports = SetTargetController;
