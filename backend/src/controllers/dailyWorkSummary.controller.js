// Import required packages
//var EndDate = require("../models/conductor7Day.model");
var DailyWork = require("../models/dailyWorkSummary.model");
var DailyField = require("../models/dailyFieldData.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Laborer controller
function dailyWorkSummaryController() {}

// Get laborer by NIC
// conductor7DayController.prototype.getEndDate = function(callback) {
  
//   var sqlQuery = sqlGenerator.getEndDateByDiv();
  
//   connection.query(sqlQuery, function(err, resultEndDate) {
//     if (err) {
        
//       callback(null, err);
//     } else if (resultEndDate.length == 0) {
//       callback("endDate not defined");
//     } else {
//       // *** resultLaborer is the response from DB. therefore attributes must be same as table column names
//       var endDate = new EndDate(
//         resultEndDate[0].endDate
//         );
//         console.log(endDate);
//       callback(endDate);
//     }
//   });
// };

// Get all sums
dailyWorkSummaryController.prototype.getAllData = function(callback) {
  
  var sqlQuery = sqlGenerator.getAllDailyWorkData();

  connection.query(sqlQuery, function(err, dailyWorkData) {
    
    if (err || dailyWorkData.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var dailyWork = [];
      
      while (dailyWorkData[i]) {
        
        
          var dailyWorkSum = new DailyWork(
            dailyWorkData[i].divNo,
            dailyWorkData[i].totYeild,
            
          );
           
          dailyWork.push(dailyWorkSum);
        i++;
      }
      console.log(dailyWork);
      callback(dailyWork);
    }
  });
};

// Get all fields
dailyWorkSummaryController.prototype.getAllFieldData = function(div,callback) {
  console.log("HERER");
  var sqlQuery = sqlGenerator.getAllDailyFieldData(div);

  connection.query(sqlQuery, function(err, dailyFieldData) {
    
    if (err || dailyFieldData.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var dailyField = [];
      
      while (dailyFieldData[i]) {
        
        
          var dailyFieldSum= new DailyField(
            dailyFieldData[i].fieldID,
            dailyFieldData[i].totYeild,
            dailyFieldData[i].labCount
            
          );
         
          dailyField.push(dailyFieldSum);
        i++;
      }
      console.log(dailyField);
      callback(dailyField);
    }
  });
};
// Get all fields
dailyWorkSummaryController.prototype.getAllFieldDataMonth = function(div,callback) {
  
  var sqlQuery = sqlGenerator.getAllDailyFieldDataMonth(div);
console.log(sqlQuery);
  connection.query(sqlQuery, function(err, dailyFieldData) {
    
    if (err || dailyFieldData.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var dailyField = [];
      
      while (dailyFieldData[i]) {
        
        
          var dailyFieldSum= new DailyField(
            dailyFieldData[i].fieldID,
            dailyFieldData[i].totYeild,
            "null"
            
          );
         
          dailyField.push(dailyFieldSum);
        i++;
      }
      console.log(dailyField);
      callback(dailyField);
    }
  });
};
// // Insert laborer to DB
// LaborerController.prototype.insertLaborer = function(reqBody, callback) {
//   connection.beginTransaction(function(err) {
//     if (err) {
//       callback(null, err);
//     }

//     // *** request should contain below keys exactly as it is.
//     var laborer = new Laborer(
//       reqBody.laborerNIC,
//       reqBody.laborerName,
//       reqBody.laborerAddress,
//       reqBody.laborerMobileNo,
//       reqBody.laborerStatus
//     );

//     var sqlQuery = sqlGenerator.insertLaborer(laborer);

//     sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
//       if (err) {
//         connection.rollback();
//         callback(null, err);
//       } else {
//         connection.commit(function(err) {
//           if (err) {
//             connection.rollback();
//             callback(null, err);
//           }
//           console.log("Transaction Complete.");
//           callback("Laborer successfully inserted into the system!");
//         });
//       }
//     });
//   });
// };

// // Update laborer in DB
// LaborerController.prototype.updateLaborer = function(reqBody, callback) {
//   connection.beginTransaction(function(err) {
//     if (err) {
//       callback(null, err);
//     }

//     // *** request should contain below keys exactly as it is.
//     var laborer = new Laborer(
//       reqBody.laborerNIC,
//       reqBody.laborerName,
//       reqBody.laborerAddress,
//       reqBody.laborerMobileNo,
//       reqBody.laborerStatus
//     );

//     var sqlQuery = sqlGenerator.updateLaborer(laborer);

//     sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
//       if (err) {
//         connection.rollback();
//         callback(null, err);
//       } else if (result.affectedRows == 0) {
//         connection.rollback();
//         callback("Laborer doesn't exist for the given NIC.");
//       } else {
//         connection.commit(function(err) {
//           if (err) {
//             connection.rollback();
//             callback(null, err);
//           }
//           console.log("Transaction Complete.");
//           callback("Laborer successfully updated in the system!");
//         });
//       }
//     });
//   });
// };

// // Delete laborer by NIC
// LaborerController.prototype.deleteLaborerByNIC = function(nic, callback) {
//   var sqlQuery = sqlGenerator.deleteLaborerByNIC(nic);

//   connection.query(sqlQuery, function(err, resultLaborer) {
//     if (err) {
//       callback(null, err);
//     } else if (resultLaborer.affectedRows == 0) {
//       callback("Laborer doesn't exist for the given NIC.");
//     } else {
//       callback("Laborer successfully deleted from the system!");
//     }
//   });
// };

// Export laborer controller
module.exports = dailyWorkSummaryController;
