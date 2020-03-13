// Import required packages
var Division = require("../models/division.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Division controller
function DivisionController() {}

// Get division by DIVNO
DivisionController.prototype.getDivisionByDivNo = function(Divno, callback) {
  var sqlQuery = sqlGenerator.getDivisionByDivNo(Divno);

  connection.query(sqlQuery, function(err, resultDivision) {
    if (err) {
      callback(null, err);
    } else if (resultDivision.length == 0) {
      callback("Division doesn't exist for the given DivNo.");
    } else {
      // *** resultLaborer is the response from DB. therefore attributes must be same as table column names
      var division = new Division(
        resultDivision[0].divNo,
        resultDivision[0].location,
        resultDivision[0].dStatus, 
      );
      callback(division);
    }
  });
};

// Get all divisions
DivisionController.prototype.getAllDivisions = function(callback) {
  var sqlQuery = sqlGenerator.getAllDivisions();

  connection.query(sqlQuery, function(err, resultDivision) {
    if (err || resultDivision.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var resDivision = [];

      while (resDivision[i]) {
        var division = new Division(
            resultDivision[i].dDIVNO,
            resultDivision[i].dLocation,
            resultDivision[i].dStatus,   
        );
        resDivision.push(division);
        i++;
      }
      callback(resDivision);
    }
  });
};

// Insert division to DB
DivisionController.prototype.insertDivision = function(reqBody, callback) {
  console.log("controlller insert");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var division = new Division(
      reqBody.divisionDIVNO,
      reqBody.divisionLocation,
      reqBody.divisionStatus
    );

    var sqlQuery = sqlGenerator.insertDivision(division);

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
          callback("Division successfully inserted into the system!");
        });
      }
    });
  });
};

 // Update division in DB
DivisionController.prototype.updateDivision = function(reqBody, callback) {
  console.log("update division controller");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var division = new Division(
      reqBody.divisionDIVNO, 
      reqBody.divisionLocation,
      reqBody.divisionStatus
    );

    var sqlQuery = sqlGenerator.updateDivision(division);

    sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else if (result.affectedRows == 0) {
        connection.rollback();
        callback("Division doesn't exist for the given NIC.");
      } else {
        connection.commit(function(err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log("Transaction Complete.");
          callback("Division successfully updated in the system!");
        });
      }
    });
  });
};

// // Delete division by NIC
// DivisionController.prototype.deleteDivisionByDivNo = function(divno, callback) {
//   console.log("controller");
//   var sqlQuery = sqlGenerator.deleteDivision(divno);

//   connection.query(sqlQuery, function(err, resultDivision) {
//     if (err) {
//       callback(null, err);
//     } else if (resultDivision.affectedRows == 0) {
//       callback("Division doesn't exist for the given NIC.");
//     } else {
//       callback("Division successfully deleted from the system!");
//     }
//   });
// };

// Delete laborer by NIC

DivisionController.prototype.deleteDivision = function(divNo, callback) {
  console.log("controller");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    // var deletelaborer = new DeleteLaborer(
   
    //   reqBody.laborerMobileNo
    // );

    var sqlQuery = sqlGenerator.deleteDivision(divNo);

    sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else if (result.affectedRows == 0) {
        connection.rollback();
        callback("Division doesn't exist for the given NIC.");
      } else {
        connection.commit(function(err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log("Transaction Complete.");
          callback("Division successfully deleted from the system!");
        });
      }
    });
  });
};

// Export division controller
module.exports = DivisionController;
