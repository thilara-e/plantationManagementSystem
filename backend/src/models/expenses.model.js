// Laborer model

// Default constructor
var Expenses = function( divNo, expenseID, descriptions, date, amount, status) {
    this.divNo = divNo;
    this.expenseID = expenseID;
    this.descriptions = descriptions;
    this.date = date;
    this.amount = amount;
    this.status = status;
  }
  
  // Export laborer model
  module.exports = Expenses;