// Import required packages
var Conductor = require("../models/manager.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Conducotor controller
function ConductorController() {}

// Get conductor by NIC
ConductorController.prototype.getConductorBysNIC = function(snic, callback) {
  var sqlQuery = sqlGenerator.getConductorBysNIC(snic);

  connection.query(sqlQuery, function(err, resultConductor) {
    if (err) {
      callback(null, err);
    } else if (resultConductor.length == 0) {
      callback("Conductor doesn't exist for the given sNIC.");
    } else {
      // *** resultConductor is the response from DB. therefore attributes must be same as table column names
      var conductor = new Conductor(
        resultConductor[0].sNIC,
        resultConductor[0].sPosition,
        resultConductor[0].sName,
        resultConductor[0].sMobile,
        resultConductor[0].sDOB,
        resultConductor[0].sAddress,
        resultConductor[0].sStatus,
        resultConductor[0].divNo
      );
      callback(conductor);
    }
  });
};

// Get all conductors
ConductorController.prototype.getAllConductors = function(callback) {
  var sqlQuery = sqlGenerator.getAllConductors();

  connection.query(sqlQuery, function(err, resultConductors) {
    if (err || resultConductors.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var resConductors = [];

      while (resultConductors[i]) {
        var conductor = new Conductor(
            resultConductor[i].sNIC,
            resultConductor[i].sPosition,
            resultConductor[i].sName,
            resultConductor[i].sMobile,
            resultConductor[i].sDOB,
            resultConductor[i].sAddress,
            resultConductor[i].sStatus,
            resultConductor[i].divNo
        );
        resConductors.push(conductor);
        i++;
      }
      callback(resConductors);
    }
  });
};


ConductorController.prototype.insertConductortostaff = function(reqBody, callback) {
  console.log("controlller insert");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var staff = new Conductor(
      reqBody.conductorNIC,
      reqBody.conductorPosition,
      reqBody.conductorName,
      reqBody.conductorMobile,
      reqBody.conductorDOB,
      reqBody.conductorAddress,
      reqBody.conductorStatus,
     
    );

    var sqlQuery = sqlGenerator.insertConductortostaff(staff);

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
          callback("Conductor successfully inserted into the system!");
        });
      }
    }
    
    );

    

  });
};

// Insert conductor to DB
ConductorController.prototype.insertConductor = function(reqBody, callback) {
console.log("controlller insert");
connection.beginTransaction(function(err) {
  if (err) {
    callback(null, err);
  }

  // *** request should contain below keys exactly as it is.
  var conductor = new Conductor(
    reqBody.conductorNIC,
    'null',
    'null',
    'null',
    'null',
    'null',
    'null',
    'null',
    reqBody.conductorDivNo
  );

  var staff = new Manager(
    
      reqBody.conductorNIC,
      reqBody.conductorPosition,
      reqBody.conductorName,
      reqBody.conductorMobile,
      reqBody.conductorDOB,
      reqBody.conductorAddress,
      reqBody.conductorStatus,
      'div1@gmail.com' ,
      'e10adc3949ba59abbe56e057f20f883e'

  );


  console.log(conductor);
  console.log(staff);
 
   var sqlQuery = sqlGenerator.insertConductortoconductor(conductor);

  //  var sqlQuery = sqlGenerator.insertConductortostaff(staff);

console.log(sqlQuery);
  sqlGenerator.executeSql(connection, sqlQuery, function(result, err) { 
    if (err) {
      console.log(err);
      
      connection.rollback();
      callback(null, err);     
    } else {
      connection.commit(function(err) {
        if (err) {
          connection.rollback();
          callback(null, err);
        }
        console.log("Transaction Complete.");
        //callback("Conductor successfully inserted into the system!");
      });
    }
  }
  
  
  );

  var sqlQuery = sqlGenerator.insertConductortostaff(staff);

  console.log(sqlQuery);
  sqlGenerator.executeSql(connection, sqlQuery, function(result, err) { 
    if (err) {
      console.log(err);
      
      connection.rollback();
      callback(null, err);     
    } else {
      connection.commit(function(err) {
        if (err) {
          connection.rollback();
          callback(null, err);
        }
        console.log("Transaction Complete.");
        callback("Conductor successfully inserted into the system!");
      });
    }
  });


});
};




//Update conductor in DB
ConductorController.prototype.updateConductor = function(reqBody, callback) {
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var conductor = new Conductor(
      reqBody.staffNIC,
      'null',
      reqBody.staffName,
      reqBody.staffMobileNo, 
      'null',
      reqBody.staffAddress,
     
      reqBody.staffUsername,
      reqBody.staffDiv,
    );

    var sqlQuery = sqlGenerator.updateConductor(conductor);

    sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else if (result.affectedRows == 0) {
        connection.rollback();
        callback("Conductor doesn't exist for the given NIC.");
      } else {
        connection.commit(function(err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log("Transaction Complete.");
          callback("Conductor successfully updated in the system!");
        });
      }
    });
  });
};

// Delete conductor by NIC
ConductorController.prototype.deleteConductorByNIC = function(nic, callback) {
  var sqlQuery = sqlGenerator.deleteConductorByNIC(nic);

  connection.query(sqlQuery, function(err, resultLaborer) {
    if (err) {
      callback(null, err);
    } else if (resultLaborer.affectedRows == 0) {
      callback("Conductor doesn't exist for the given NIC.");
    } else {
      callback("Conductor successfully deleted from the system!");
    }
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

// Export laborer controller
module.exports = ConductorController;
