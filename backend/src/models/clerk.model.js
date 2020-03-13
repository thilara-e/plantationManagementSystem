// Clerek model

// Default constructor
var Clerk = function(nic,position, name,mobile,dob, address, status) {

    console.log("model insert");
    this.nic = nic;
    this.position = position;
    this.name = name;
    this.mobile = mobile;
    this.dob = dob;
    this.address = address;
    this.status = status;
  }
  
  // Export clerk model
  module.exports = Clerk;