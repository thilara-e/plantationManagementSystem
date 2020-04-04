// Clerek model

// Default constructor
var Clerk = function(nic,position, name,mobile,dob, address, status,username,password) {

  console.log("model insert");
  this.nic = nic;
  this.position = position;
  this.name = name;
  this.mobile = mobile;
  this.dob = dob;
  this.address = address;
  this.status = status;
  this.username = username;
  this.password = password;
}

// Export clerk model
module.exports = Clerk;