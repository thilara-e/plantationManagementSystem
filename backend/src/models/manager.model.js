// Manager model

// Default constructor
var Manager = function(nic,position, name,mobile,dob, address, status) {

    console.log("model insert");
    this.nic = nic;
    this.position = position;
    this.name = name;
    this.mobile = mobile;
    this.dob = dob;
    this.address = address;
    this.status = status;
  }
  
  // Export manager model
  module.exports = Manager;