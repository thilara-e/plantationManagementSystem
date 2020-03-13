// field areas model

// Default constructor
var FieldAreas = function(field, area, status, division, plantYear) {
    this.division = division;
    this.field= field;
    this.status = status;
    this.area = area;
    this.plantYear = plantYear;
  }
  
  // Export lset target model
  module.exports = FieldAreas;