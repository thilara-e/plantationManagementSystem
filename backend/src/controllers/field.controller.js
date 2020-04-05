// Import required packages
var FieldReplant = require("../models/fieldReplant.model");
var Field = require("../models/field.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Field controller
function FieldController() {}

// Get field by field
FieldController.prototype.getFieldByFID = function(FID, callback) {console.log("getfieldbyfid");
  var sqlQuery = sqlGenerator.getFieldByFID(FID);

  console.log(sqlQuery);
  connection.query(sqlQuery, function(err, resultField) {
    if (err) {
      callback(null, err);
    } else if (resultField.length == 0) {
      callback("Field doesn't exist for the given .");
    } else {
      // *** resultLaborer is the response from DB. therefore attributes must be same as table column names
      var field = new Field(
        resultField[0].fieldID,
        resultField[0].divNo,
        resultField[0].fAcres,
        resultField[0].fStatus,
        resultField[0].plantYear
      );
      callback(field);

      console.log(field)
    }
  });
};

// Get all fields
FieldController.prototype.getAllFields = function(callback) {
  var sqlQuery = sqlGenerator.getAllFields();

  connection.query(sqlQuery, function(err, resultFields) {
    if (err || resultFields.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var resFields = [];

      while (resultFields[i]) {
        var field= new Field(
            resultField[i].fieldID,
            resultField[i].divNo,
            resultField[i].facres,
            resultField[i].fStatus,   
        );
        resFields.push(field);
        i++;
      }
      callback(resFields);
    }
  });
};

// Insert division to DB
FieldController.prototype.insertField = function(reqBody, callback) {
  console.log("controlller insert");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var field = new Field(
      reqBody.fieldFID,
      reqBody.fieldDivNo, 
      reqBody.fieldAcres,
      reqBody.fieldStatus,
      reqBody.replantation_date
      
    );
    console.log(field);
    var sqlQuery = sqlGenerator.insertField(field);

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
          callback("Field successfully inserted into the system!");
        });
      }
    });
  });
};

 // Update field in DB
 FieldController.prototype.updateField = function(reqBody, callback) {
  console.log("update field controller");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var field = new Field(
      reqBody.fieldFID,
      reqBody.fieldDivNo, 
      reqBody.fieldAcres,
      reqBody.fieldStatus,
      reqBody.replantation_date
    );

    console.log(field);
    var sqlQuery = sqlGenerator.updateField(field);

    sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
      if (err) { 
        connection.rollback();
        callback(null, err);
      } else if (result.affectedRows == 0) {
        connection.rollback();
        callback("Field doesn't exist for the given NIC.");
      } else {
        connection.commit(function(err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log("Transaction Complete.");
          callback("Field successfully updated in the system!");
        });
      }
    });
  });
};


// Insert replant to DB
FieldController.prototype.fieldReplant = function(reqBody, callback) {
 // console.log(reqBody.fieldID);
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var fieldReplant = new FieldReplant(
      reqBody.fieldID,
      reqBody.status, 
      reqBody.sdate
    );
    console.log(fieldReplant);
    var sqlQuery = sqlGenerator.updatePreReplant(reqBody.fieldID);
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

    var sqlQuery = sqlGenerator.fieldReplant(fieldReplant);

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
          callback("Field successfully inserted into the system!");
        });
      }
    });


  });
};

FieldController.prototype.deleteField = function(Fid,callback) {
  console.log("controller");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    // var deletelaborer = new DeleteLaborer(
   
    //   reqBody.laborerMobileNo
    // );

    var sqlQuery = sqlGenerator.deleteField(Fid);

    sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else if (result.affectedRows == 0) {
        connection.rollback();
        callback("Field doesn't exist for the given NIC.");
      } else {
        connection.commit(function(err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log("Transaction Complete.");
          callback("Field successfully deleted from the system!");
        });
      }
    });
  });
};
   //export field controller
  module.exports = FieldController;