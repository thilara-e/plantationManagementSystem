// Weather model

// Default constructor
var Weather = function(division, date, status) {
    this.division = division;
    this.date = date;
    this.status = status;
  }
  
  // Export weather model
  module.exports = Weather;