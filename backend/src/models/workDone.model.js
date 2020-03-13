var WorkDone = function(lMobile,date,description,fieldID,amount, status) {
  console.log("Workdonemodel")
    this.lMobile = lMobile;
    this.date = date;
    this.description = description;
    this.fieldID = fieldID;
    this.amount = amount;
    this.status = status;
  }
  
  // Export weather model
  module.exports = WorkDone;