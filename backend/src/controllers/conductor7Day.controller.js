// Import required packages
var EndDateData = require("../models/conductor7Day.model");
var ResetCalendar = require("../models/resetCalandar.model");
var EndDate = require("../models/endDate.model");
var all7DayData = require("../models/all7DayData.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Laborer controller
function conductor7DayController() {}

// Get laborer by NIC
conductor7DayController.prototype.getEndDate = function(div,callback) {
  
  var sqlQuery = sqlGenerator.getEndDateByDiv(div);
  
  connection.query(sqlQuery, function(err, resultEndDate) {
    if (err) {
        
      callback(null, err);
    } else if (resultEndDate.length == 0) {
      callback("endDate not defined");
    } else {
      // *** resultLaborer is the response from DB. therefore attributes must be same as table column names
      var endDate = new EndDateData(
        resultEndDate[0].endDate
        );
        console.log(endDate);
      callback(endDate);
    }
  });
};
// Get laborer by NIC
conductor7DayController.prototype.getStatus1 = function(div,callback) {
  
  var sqlQuery = sqlGenerator.getStatus1ByDiv(div);
  console.log(sqlQuery);
  connection.query(sqlQuery, function(err, resultEndDate) {
    if (err) {
        
      callback(null, err);
    } else if (resultEndDate.length == 0) {
      callback("endDate not defined");
    } else {
      // *** resultLaborer is the response from DB. therefore attributes must be same as table column names
      var endDate = new EndDateData(
        resultEndDate[0].endDate
        );
        console.log(endDate);
      callback(endDate);
    }
  });
};


// Get all laborers
conductor7DayController.prototype.getAll7DayData = function(div,callback) {
  
  var sqlQuery = sqlGenerator.getAll7DayData(div);
  
  connection.query(sqlQuery, function(err, result7DayData) {
    
    if (err || result7DayData.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var res7Day = [];
      
      while (result7DayData[i]) {
        var status;
        if(result7DayData[i].totYeild>=(result7DayData[i].target/4)){
          var conductor7DayData = new all7DayData(
            result7DayData[i].fieldID,
            result7DayData[i].totYeild,
            "Complete"
          );
        }
        else{var conductor7DayData = new all7DayData(
          result7DayData[i].fieldID,
          result7DayData[i].totYeild,
          "Incomplete"
        );}
        
        res7Day.push(conductor7DayData);
        i++;
      }
      console.log(res7Day);
      callback(res7Day);
    }
  });
};

// Insert laborer to DB
conductor7DayController.prototype.insertEndDate = function(reqBody, callback) {
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var endDate = new EndDate(
      reqBody.divNo
    );
    var sqlQuery = sqlGenerator.updateEndDateStatus2(endDate);
    console.log(sqlQuery);
        sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
          if (err) {
            console.log(err)
            connection.rollback();
            callback(null, err);
          } else {
            connection.commit(function(err) {
              if (err) {
                connection.rollback();
                callback(null, err);
              }
              console.log("updateEndDateStatus2Transaction Complete.");
            });
          }
        });
           
    var sqlQuery = sqlGenerator.updateEndDateStatus1(endDate);
    console.log(sqlQuery);
        sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
          if (err) {
            console.log(err)
            connection.rollback();
            callback(null, err);
          } else {
            connection.commit(function(err) {
              if (err) {
                connection.rollback();
                callback(null, err);
              }
              console.log("updateEndDateStatus1 Transaction Complete.");
            });
          }
        });

    var sqlQuery = sqlGenerator.updateEndDateStatus0(endDate);
    console.log(sqlQuery);
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
              console.log("updateEndDateStatus0 Transaction Complete.");

             
            });
          }
        });
    var sqlQuery = sqlGenerator.insertEndDate(endDate);
    console.log(sqlQuery);
        sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
          if (err) {
            console.log(err)
            connection.rollback();
            callback(null, err);
          } else {
            connection.commit(function(err) {
              if (err) {
                connection.rollback();
                callback(null, err);
              }
              console.log("insertEndDate Transaction Complete.");
              
              callback("Status successfully inserted into the system!");
            });
          }
        });



 
  });
};


    
// Insert laborer to DB
conductor7DayController.prototype.insertNewEndDate = function(reqBody, callback) {
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }
console.log("WHERES THE ERROR");
    // *** request should contain below keys exactly as it is.
    var resetCalendar = new ResetCalendar(
      reqBody.div,
      reqBody.reason,
      reqBody.endDate
    );
    console.log(resetCalendar);
    var sqlQuery = sqlGenerator.updateEndDateStatus4(resetCalendar);
    console.log(sqlQuery);
        sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
          if (err) {
            console.log(err)
            connection.rollback();
            callback(null, err);
          } else {
            connection.commit(function(err) {
              if (err) {
                connection.rollback();
                callback(null, err);
              }
              console.log("Update Transaction Complete.");
              
              callback("Status successfully inserted into the system!");
            });
          }
        });
    var sqlQuery = sqlGenerator.insertNewEndDate(resetCalendar);
    console.log(sqlQuery);
        sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
          if (err) {
            console.log(err)
            connection.rollback();
            callback(null, err);
          } else {
            connection.commit(function(err) {
              if (err) {
                connection.rollback();
                callback(null, err);
              }
              console.log("insertEndDate Transaction Complete.");
              
              callback("Status successfully inserted into the system!");
            });
          }
        });



 
  });
};
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
module.exports = conductor7DayController;
