// retrive targets model

// Default constructor
var Targets = function(field, total, target, status) {
    this.field= field;
    this.total = total;
    this.target = target;
    this.status = status;
  }
  
  // Export get target model
  module.exports = Targets;