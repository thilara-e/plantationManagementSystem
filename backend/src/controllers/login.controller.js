// Import required packages
//var EndDate = require("../models/conductor7Day.model");
var AuthData = require("../models/userDataForAuth.model");
var ConductorDiv = require("../models/conductorDiv.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Laborer controller
function loginController() {}

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


// Get all fields
loginController.prototype.authUser = function(userDetails,callback) {
    console.log(userDetails);
    
  var sqlQuery = sqlGenerator.getUserDetails(userDetails);

  connection.query(sqlQuery, function(err, userData) {
    
    if (err || userData.length == 0) {
      callback(null, err);
    } else {     
        
      var authData = new AuthData(
        userData[0].password,
        userData[0].sPosition
                );
         
    console.log("authData",authData);
      callback(authData);
    }
  });
};

loginController.prototype.getDiv = function(email,callback) {
  //console.log(userDetails);
  
var sqlQuery = sqlGenerator.getDiv(email);

connection.query(sqlQuery, function(err, divData) {
  
  if (err || divData.length == 0) {
    callback(null, err);
  } else {     
      
    var conductorDiv = new ConductorDiv(
      divData[0].divNo,
              );
    callback(conductorDiv);
  }
});
};

// Export laborer controller
module.exports = loginController;
