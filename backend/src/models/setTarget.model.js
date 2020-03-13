// setTarget model

// Default constructor
var SetTarget = function(division, fieldT1, fieldT2, fieldT3, field1, field2, field3, date, month) {
    this.division = division;
    this.fieldT1= fieldT1;
    this.fieldT2= fieldT2;
    this.fieldT3= fieldT3;
    this.field1= field1;
    this.field2= field2;
    this.field3= field3;
    this.date= date;
    this.month= month;
    //this.target = target;
  }
  
  // Export lset target model
  module.exports = SetTarget;