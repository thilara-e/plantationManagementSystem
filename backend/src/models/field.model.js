// Field model

// Default constructor
var Field = function(fid,divno,facres, status) {

    console.log("model insert");
    this.fid = fid;  
    
    this.facres = facres;
    // this.mobile_no = mobile_no;
    this.status = status;
    this.divno = divno;
  }
  
  // Export laborer model
  module.exports = Field;