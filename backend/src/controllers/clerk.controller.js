// Import required packages
var Clerk = require("../models/clerk.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Clerk controller
function ClerkController() {}

// Get clerk by NIC
ClerkController.prototype.getClerkBysNIC = function(snic, callback) {
  var sqlQuery = sqlGenerator.getClerkBysNIC(snic);

  connection.query(sqlQuery, function(err, resultClerk) {
    if (err) {
      callback(null, err);
    } else if (resultClerk.length == 0) {
      callback("Clerk doesn't exist for the given sNIC.");
    } else {
      // *** resultClerk is the response from DB. therefore attributes must be same as table column names
      var clerk = new Clerk(
        resultClerk[0].sNIC,
        resultClerk[0].sPosition,
        resultClerk[0].sName,
        resultClerk[0].sMobile,
        resultClerk[0].sDOB,
        resultClerk[0].sAddress,
        resultClerk[0].sStatus
      );
      callback(clerk);
    }
  });
};

//Update clerk in DB
ClerkController.prototype.updateClerk = function(reqBody, callback) {
  console.log("update");
connection.beginTransaction(function(err) {
  if (err) {
    callback(null, err);
  }

  // *** request should contain below keys exactly as it is.
  var clerk = new Clerk(
      reqBody.clerkNIC,
      "clerk",
      reqBody.clerkName,
      reqBody.clerkMobile,
      reqBody.clerkDOB,
      reqBody.clerkAddress,
      "Active"
  );

  var sqlQuery = sqlGenerator.updateClerk(clerk);

  sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
    if (err) {
      connection.rollback();
      callback(null, err);
    } else if (result.affectedRows == 0) {
      connection.rollback();
      callback("Laborer doesn't exist for the given NIC.");
    } else {
      connection.commit(function(err) {
        if (err) {
          connection.rollback();
          callback(null, err);
        }
        console.log("Transaction Complete.");
        callback("Clerk successfully updated in the system!");
      });
    }
  });
});
};


// Get all Clerks
ClerkController.prototype.getAllClerks = function(callback) {
  var sqlQuery = sqlGenerator.getAllClerks();

  connection.query(sqlQuery, function(err, resultClerks) {
    if (err || resultClerks.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var resClerks = [];

      while (resultClerks[i]) {
        var clerk = new Clerk(
            resultClerk[i].sNIC,
            resultClerk[i].sPosition,
            resultClerk[i].sName,
            resultClerk[i].sMobile,
            resultClerk[i].sDOB,
            resultClerk[i].sAddress,
            resultClerk[i].sStatus
        );
        resClerks.push(clerk);
        i++;
      }
      callback(resClerks);
    }
  });
};

// Insert clerk to DB
ClerkController.prototype.insertClerk = function(reqBody, callback) {
  console.log("controlller insert");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var clerk = new Clerk(
      reqBody.clerkNIC,
      reqBody.clerkPosition,
      reqBody.clerkName,
      reqBody.clerkMobile,
      reqBody.clerkDOB,
      reqBody.clerkAddress,
      reqBody.clerkStatus
    );

    var sqlQuery = sqlGenerator.insertClerk(clerk);

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
          callback("Clerk successfully inserted into the system!");
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

 //Delete Clerk by nic
 ClerkController.prototype.deleteClerk = function(lNIC, callback) {
  console.log("controlller delete");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
  

    var sqlQuery = sqlGenerator.deleteClerk(lNIC);
      console.log(sqlQuery);
    sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else if (result.affectedRows == 0) {
        connection.rollback();
        callback("Clerk doesn't exist for the given NIC.");
      
      } else {
        connection.commit(function(err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log("Transaction Complete.");
          callback("Clerk successfully deleted into the system!");
        });
      }
    });
  });
};

// Export clerk controller
module.exports = ClerkController;
