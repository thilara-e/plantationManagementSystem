// Import required packages
var LastFertilizer = require("../models/lastFertilizer.model");
var FieldData = require("../models/fieldData.model");
var Expenses = require("../models/expenses.model");
var Notifications = require("../models/notification.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// Laborer controller
function ExpensesController() {}

//Get laborer by NIC
ExpensesController.prototype.getExpensesByEID = function(divExpenseID, callback) {
  var sqlQuery = sqlGenerator.getExpensesByEID(divExpenseID);

  connection.query(sqlQuery, function(err, resultExpenses) {
    if (err) {
      callback(null, err);
    } else if (resultExpenses.length == 0) {
      callback("Laborer doesn't exist for the given NIC.");
    } else {
      // *** resultLaborer is the response from DB. therefore attributes must be same as table column names
      var expenses = new Expenses(
            resultExpenses[0].divNo,
            resultExpenses[0].expenseID,
            resultExpenses[0].descriptions,
            resultExpenses[0].date,
            resultExpenses[0].amount,
            resultExpenses[0].status
      );
      callback(expenses);
    }
  });
};

// Get all laborers
ExpensesController.prototype.getAllExpenses = function(status,callback) {
  var sqlQuery = sqlGenerator.getAllExpenses(status);

  connection.query(sqlQuery, function(err, resultExpenses) {
    if (err || resultExpenses.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var resExpenses = [];

      while (resultExpenses[i]) {
        var expenses = new Expenses(
            resultExpenses[0].divNo,
            resultExpenses[0].expenseID,
            resultExpenses[0].descriptions,
            resultExpenses[0].date,
            resultExpenses[0].amount,
            resultExpenses[0].status
        );
        resExpenses.push(expenses);
        i++;
      }
      callback(resExpenses);
    }
  });
};

ExpensesController.prototype.getAllNotifications = function(status,callback) {
  var sqlQuery = sqlGenerator.getAllNotifications(status);
console.log(sqlQuery);
  connection.query(sqlQuery, function(err, resultNotifications) {
    if (err || resultNotifications.length == 0) {
      callback(null, err);
    } else {
      var i = 0;
      var result = [];

      while (resultNotifications[i]) {
        var notifications = new Notifications(
            resultNotifications[i].divNo,
            resultNotifications[i].descriptions,
            resultNotifications[i].description,
            resultNotifications[i].generatedBy,
            resultNotifications[i].date,
            resultNotifications[i].amount,
            resultNotifications[i].status
        );
        result.push(notifications);
        i++;
      }
      console.log(result);
      callback(result);
    }
  });
}

// Insert laborer to DB
ExpensesController.prototype.insertExpenses= function(reqBody, callback) {
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var expenses = new Expenses(
            reqBody.divNo,            
            reqBody.expenseID,
            reqBody.descriptions,
            reqBody.date,
            reqBody.amount,
            reqBody.status
    );

    var sqlQuery = sqlGenerator.insertExpenses(expenses);
console.log("54654");
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
          console.log("Transaction Complete.dulNI");
          callback("Expense successfully inserted into the system!");
        });
      }
    });
  });
};

// Update laborer in DB
ExpensesController.prototype.updateExpenses = function(reqBody, callback) {
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }

    // *** request should contain below keys exactly as it is.
    var expenses = new Expenses(
            reqBody.expenseID,
            reqBody.divNo,
            reqBody.descriptions,
            reqBody.date,
            reqBody.amount,
            reqBody.status
    );

    var sqlQuery = sqlGenerator.updateExpenses(expenses);

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
          callback("Laborer successfully updated in the system!");
        });
      }
    });
  });
};

//Delete laborer by NIC
ExpensesController.prototype.deleteExpensesByEID = function(divexpenseID, callback) {
  var sqlQuery = sqlGenerator.deleteExpensesByEID(divexpenseID);

  connection.query(sqlQuery, function(err, resultLaborer) {
    if (err) {
      callback(null, err);
    } else if (resultExpenses.affectedRows == 0) {
      callback("Laborer doesn't exist for the given NIC.");
    } else {
      callback("Laborer successfully deleted from the system!");
    }
  });
};


// Get LastFertilizer Date
ExpensesController.prototype.getLastFertilizer = function(div,callback) {
  
  var sqlQuery = sqlGenerator.getLastFertilizer(div);
  
  connection.query(sqlQuery, function(err, resultLastFertilizer) {
    if (err) {
        
      callback(null, err);
    } else if (resultLastFertilizer.length == 0) {
      callback("endDate not defined");
    } else {
      // *** resultLaborer is the response from DB. therefore attributes must be same as table column names
      var lastFertilizer = new LastFertilizer(
          resultLastFertilizer[0].date
        );
        console.log(lastFertilizer);
      callback(lastFertilizer);
    }
  });
};

  // Get field Data
ExpensesController.prototype.getFieldData = function(interval,div,callback) {
  
    var sqlQuery = sqlGenerator.getFieldData(interval,div);
    
    connection.query(sqlQuery, function(err, resultfeildData) {
      if (err) {
          
        callback(null, err);
      } else if (resultfeildData.length == 0) {
        callback("endDate not defined");
      } else {
        // *** resultLaborer is the response from DB. therefore attributes must be same as table column names
        var fieldData = new FieldData(
            resultfeildData[0].acres
          );
          console.log(fieldData);
        callback(fieldData);
      }
    });
  };
// Export laborer controller
module.exports = ExpensesController;
