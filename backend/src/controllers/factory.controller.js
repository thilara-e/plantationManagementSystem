// Import required packages
var FactoryYeild = require("../models/factoryYeild.model");
//var all7DayData = require("../models/all7DayData.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Laborer controller
function factoryController() {}



// Insert factory yeild data to DB
factoryController.prototype.insertFactoryData = function(reqBody, callback) {
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var factoryYeild = new FactoryYeild(
      reqBody.divNo,
      reqBody.factID,
      reqBody.curDate,
      reqBody.weight,
      reqBody.amountRS
    );

    var sqlQuery = sqlGenerator.insertFactoryYeild(factoryYeild);
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
            callback("Data successfully inserted into the system!");
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
module.exports = factoryController;
