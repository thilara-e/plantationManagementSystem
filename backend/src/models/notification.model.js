var Notifications = function(divNo, descriptions, description, generatedBy, date, amount, status) {
    this.divNo = divNo;
    this.descriptions = descriptions;
    this.description = description;
    this.generatedBy = generatedBy;
    this.date = date;
    this.amount = amount;
    this.status = status;
  }
  
  // Export laborer model
  module.exports = Notifications;