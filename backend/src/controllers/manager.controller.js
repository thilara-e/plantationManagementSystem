// Import required packages
var Manager = require("../models/manager.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Laborer controller
function ManagerController() {}

// Get laborer by NIC
ManagerController.prototype.getManagerBysNIC = function(snic, callback) {
  var sqlQuery = sqlGenerator.getManagerBysNIC(snic);

  connection.query(sqlQuery, function(err, resultManager) {
    if (err) {
      callback(null, err);
    } else if (resultManager.length == 0) {
      callback("Manager doesn't exist for the given sNIC.");
    } else {
      // *** resultManager is the response from DB. therefore attributes must be same as table column names
      var manager = new Manager(
        resultManager[0].sNIC,
        resultManager[0].sPosition,
        resultManager[0].sName,
        resultManager[0].sMobile,
        resultManager[0].sDOB,
        resultManager[0].sAddress,
        resultManager[0].sStatus
      );
      callback(manager);
    }
  });
};

// Get all Managers
ManagerController.prototype.getAllManagers = function(callback) {
  var sqlQuery = sqlGenerator.getAllManagers();

  connection.query(sqlQuery, function(err, resultManagers) {
    if (err || resultManagers.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var resManagers = [];

      while (resultManagers[i]) {
        var manager = new Manager(
            resultManager[i].sNIC,
            resultManager[i].sPosition,
            resultManager[i].sName,
            resultManager[i].sMobile,
            resultManager[i].sDOB,
            resultManager[i].sAddress,
            resultManager[i].sStatus
        );
        resManagers.push(manager);
        i++;
      }
      callback(resManagers);
    }
  });
};

// Insert manager to DB
ManagerController.prototype.insertManager = function(reqBody, callback) {
  console.log("controlller insert");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var manager = new Manager(
      reqBody.managerNIC,
      reqBody.managerPosition,
      reqBody.managerName,
      reqBody.managerMobile,
      reqBody.managerDOB,
      reqBody.managerAddress,
      reqBody.managerStatus,
      reqBody.managerUsername,
      reqBody.managerPassword
    );

    console.log(manager);

    var sqlQuery = sqlGenerator.insertManager(manager);

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
          callback("Manager successfully inserted into the system!");
        });
      }
    });
  });
};


// Update laborer in DB
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
  //Delete Manager by nic
ManagerController.prototype.deleteManager = function(lNIC, callback) {
  console.log("controlller delete");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
  

    var sqlQuery = sqlGenerator.deleteManager(lNIC);
      console.log(sqlQuery);
    sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else if (result.affectedRows == 0) {
        connection.rollback();
        callback("Manager doesn't exist for the given NIC.");
      
      } else {
        connection.commit(function(err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log("Transaction Complete.");
          callback("Manager successfully deleted into the system!");
        });
      }
    });
  });
};

// Export manager controller
module.exports = ManagerController;
