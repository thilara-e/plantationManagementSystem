// Division model

// Default constructor
var Division = function(divno, location, status) {

    console.log("model insert");
    this.divno = divno;
    this.location = location;
    // this.address = address;
    // this.mobile_no = mobile_no;
    this.status = status;
  }
  
  // Export laborer model
  module.exports = Division;

  