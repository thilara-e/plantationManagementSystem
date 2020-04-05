// Field model

// Default constructor
var Field = function(fid,divno,facres, status,replantation_date) {

  console.log("model insert");
  this.fid = fid;  
  
  this.facres = facres;
  
  this.status = status;
  this.divno = divno;
  this.replantation_date = replantation_date
}

// Export laborer model
module.exports = Field;