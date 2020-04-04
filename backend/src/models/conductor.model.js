// Conductor model

// Default constructor
var Conductor = function(nic,position, name,mobile,dob, address, status,username,divno) {

  console.log("model insert");
  this.nic = nic;
  this.position = position;
  this.name = name;
  this.mobile = mobile;
  this.dob = dob;
  this.address = address;
  this.status = status;
   this.username = username;
  this.divno = divno;
}

// Export manager model
module.exports = Conductor;