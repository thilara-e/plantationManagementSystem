// SQL Generator
function SqlGenerator() { }
// --------------------------- Laborer Table --------------------------------

// Get laborer by NIC query
SqlGenerator.prototype.getLaborerByMobile = function(mobilePhone) {
  var query = "SELECT * FROM laborer WHERE mobileNo ='" + mobilePhone + "' ";
  return query;
}

// Get division by DIVNO query
SqlGenerator.prototype.getDivisionByDivNo = function(divno) {
  var query = "SELECT * FROM division WHERE divNo='" + divno + "'";
  return query;
}
// Get field by FID query
SqlGenerator.prototype.getFieldByFID = function(fid) {
  var query = "SELECT * FROM field WHERE fieldID='" + fid + "'";
  return query;
}

// Get manager by NIC query
SqlGenerator.prototype.getManagerBysNIC = function(nic) {
  var query = "SELECT * FROM staff WHERE sNIC='" + nic + "'";
  return query;
}

// Get all laborers
SqlGenerator.prototype.getAllLaborers = function(mobile_no) {
  var query = "SELECT * FROM laborer";
  return query;
}

// Get all divisions
SqlGenerator.prototype.getAllDivisions = function() {
  var query = "SELECT * FROM division";
  return query;
}
// Get all fields
SqlGenerator.prototype.getAllFields = function() {
  var query = "SELECT * FROM field";
  return query;
}

// Get all managers
SqlGenerator.prototype.getAllManagers = function() {
  var query = "SELECT * FROM staff";
  return query;
}


// Insert laborer query
// *** input param should be a Laborer Object (in js cannot define type)
SqlGenerator.prototype.insertLaborer = function(laborer) {
  var query = "INSERT INTO laborer (lNIC, lName, lAddress, mobileNo,lStatus) VALUES (" + 
    "'" + laborer.nic + "', " +
    "'" + laborer.name + "', " +
    "'" + laborer.address + "', " +
    "'" + laborer.mobile_no + "', " +
    "'" + laborer.status + "')";

    // *** use a console.log to view query before do other things.
    // console.log(query);
  return query;
}

// Insert division query
// *** input param should be a Laborer Object (in js cannot define type)
SqlGenerator.prototype.insertDivision = function(division) {
  var query = "INSERT INTO division (divNo, location,dStatus) VALUES (" + 
    "'" + division.divno + "', " +
    "'" + division.location + "', " +
    // "'" + division.status + "', " +
    // "'" + laborer.mobile_no + "', " +
    "'" + division.status + "')";
console.log("sql generator ");
    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}



///////////////////////////////////////////////////field table//////////////////////////////////////////////


// Insert field query
// *** input param should be a Laborer Object (in js cannot define type)
SqlGenerator.prototype.insertField = function(field) {
  var query = "INSERT INTO field (fAcres,fStatus,divNo,plantYear) VALUES (" + 
    // "'" + field.fid + "', " +
    "'" + field.facres + "', " +
     "'" + field.status + "', " +
     "'" + field.divno + "', " +
    "'" + field.replantation_date+ "')";
console.log("sql generator ");
    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}

// Delete field by fid query
SqlGenerator.prototype.deleteField = function(Fid) {
  var query = "UPDATE field SET" +
  
    " fStatus='deleted' WHERE" +
    " fieldID='" + Fid + "'";
    console.log(query);
  return query;
}


// Update field query
// *** input param should be a fieldr Object (in js cannot define type)
SqlGenerator.prototype.updateField = function(field) { console.log("sql query");
  var query = "UPDATE field SET" +
  " fAcres='" + field.facres + "'," +
  " divNo='" + field.divno + "',"+
  "plantYear='"+field.replantation_date+"' WHERE" +
  " fieldID='" + field.fid + "'";
    
    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}





// Insert manager query
// *** input param should be a Manager Object (in js cannot define type)
SqlGenerator.prototype.insertManager = function(staff) {
  var query = "INSERT INTO staff (sNIC,sPosition,sName,sMobile,sDOB,sAddress,sStatus,username,password) VALUES (" + 
    "'" + staff.nic + "', " +
    "'" + staff.position + "', " +
    "'" + staff.name + "', " +
    "'" + staff.mobile + "', " +
    "'" + staff.dob + "', " +
    "'" + staff.address + "', " +
    "'" + staff.status + "', " +
    "'" + staff.username + "', " +
    "'" + staff.password + "')";
console.log("sql generator ");
    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}

// Insert clerk query
// *** input param should be a Manager Object (in js cannot define type)
SqlGenerator.prototype.insertClerk = function(staff) {
  var query = "INSERT INTO staff (sNIC,sPosition,sName,sMobile,sDOB,sAddress,sStatus,username,password) VALUES (" + 
    "'" + staff.nic + "', " +
    "'" + staff.position + "', " +
    "'" + staff.name + "', " +
    "'" + staff.mobile + "', " +
    "'" + staff.dob + "', " +
    "'" + staff.address + "', " +
    "'" + staff.status + "', " +
    "'" + staff.username + "', " +
    "'" + staff.password + "')";
console.log("sql generator ");
    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}

// Insert conductor query
// *** input param should be a Conductor Object (in js cannot define type)
SqlGenerator.prototype.insertConductortostaff = function(staff) {
  console.log("sql generator");
  var query = "INSERT INTO staff (sNIC,sPosition,sName,sMobile,sDOB,sAddress,sStatus,username,password) VALUES (" + 
    "'" + staff.nic + "', " +
    "'" + staff.position + "', " +
    "'" + staff.name + "', " +
    "'" + staff.mobile + "', " +
    "'" + staff.dob + "', " +
    "'" + staff.address + "', " +
    "'" + staff.status + "', " +
    "'" + "div1@gmail.com" + "', " +
    "'" + "1e10adc3949ba59abbe56e057f20f883e" + "')";
    
console.log("sql generator staff");
    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}

SqlGenerator.prototype.insertConductortoconductor = function(conductor) {
  var query = "INSERT INTO conductor (sNIC,divNo) VALUES (" + 
     
  "'" + conductor.nic + "', " +
    // "'" + staff.position + "', " +
    // "'" + staff.name + "', " +
    // "'" + staff.mobile + "', " +
    // "'" + staff.dob + "', " +
    // "'" + staff.address + "', " +
    "'" + conductor.divno + "')";
    
console.log("sql generator conductor ");
    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}

/////////////////////////////////////////Division table/////////////////////////////////
// Update division query
// *** input param should be a Laborer Object (in js cannot define type)
SqlGenerator.prototype.updateDivision = function(division) {
  var query = "UPDATE division SET" +
    // " lNIC='" + division.divno + "'," +
    // " lName='" + division.name + "'," +
    // " lAddress='" + l]division.address + "'," +
    " location='" + division.location + "' WHERE" +
    " divNo='" + division.divno + "'";
    
    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}


// Update laborer query
// *** input param should be a Laborer Object (in js cannot define type)
SqlGenerator.prototype.updateLaborer = function(laborer) {
  var query = "UPDATE laborer SET" +
    " lNIC='" + laborer.nic + "'," +
    " lName='" + laborer.name + "'," +
    " lAddress='" + laborer.address + "'," +
    " lStatus='" + laborer.status + "' WHERE" +
    " mobileNo='" + laborer.mobile_no + "' AND lStatus='Active'";
    
    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}

// Delete laborer by NIC query
SqlGenerator.prototype.deleteLaborer = function(mobileNo) {
  var query = "UPDATE laborer SET" +
  
    " lStatus='deleted' WHERE" +
    " mobileNo='" + mobileNo + "'";
    console.log(query);
  return query;
}

// Delete division by DIivNo query
SqlGenerator.prototype.deleteDivision = function(divNo) {
  var query = "UPDATE division SET" +
  
    " dStatus='deleted' WHERE" +
    " divNo='" + divNo + "'";
    console.log(query);
  return query;
}


// Delete manager by NIC query
SqlGenerator.prototype.deleteManager = function(lNIC) {
  console.log("sql genarator");
  var query = "UPDATE staff SET" +
  
    " sStatus='deleted' WHERE" +
    " sNIC='" + lNIC + "'";
    console.log(query);
  return query;
}

// Delete clerk by NIC query
SqlGenerator.prototype.deleteClerk = function(lNIC) {
  console.log("sql genarator");
  var query = "UPDATE staff SET" +
  
    " sStatus='deleted' WHERE" +
    " sNIC='" + lNIC + "'";
    console.log(query);
  return query;
}

//insert conducto to division
SqlGenerator.prototype.insertConductorToDivision = function(nic,div) {
  var query = "INSERT INTO conductor(sNIC,divNo) VALUES('" + nic + "','" + div + "')";
  return query;
}




// ----------------- DB quering method for Insert & Update ------------------
SqlGenerator.prototype.getExpensesByEID = function(divExpenseID) {
  var query = "SELECT * FROM divisionexpenses WHERE divExpenseID='" + divExpenseID + "'";
  return query;
}

SqlGenerator.prototype.insertExpenses = function(divisionexpenses) {
 console.log("sqlgenerator");
 var query = "INSERT INTO divisionexpenses (divExpenseID, divNo, expenseID, descriptions, date, amount, status) VALUES (" + 
    "'" + divisionexpenses.divExpenseID + "', " +
    "'" + divisionexpenses.divNo + "', " +    
    "'" + divisionexpenses.expenseID + "', " +
    "'" + divisionexpenses.descriptions + "', " +
    "'" + divisionexpenses.date + "', " +
    "'" + divisionexpenses.amount + "', " +
    "'" + divisionexpenses.status + "')"; 


    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}


SqlGenerator.prototype.getAllExpenses = function() {
  var query = "SELECT * FROM divisonexpenses";
  return query;
}

SqlGenerator.prototype.executeSql = function (connection, query, callback) {
  connection.query(query, function (err, result) {
    if (err) {
      callback(null, err);
    } else {
      callback(result)
    }
  });
}


///--------------------------------------expense table-------------------------------------------------

// ----------------- DB quering method for Insert & Update ------------------
SqlGenerator.prototype.getExpensesByEID = function(divExpenseID) {
  var query = "SELECT * FROM divisionexpenses WHERE divExpenseID='" + divExpenseID + "'";
  return query;
}

SqlGenerator.prototype.insertExpenses = function(divisionexpenses) {
 console.log("sqlgenerator");
 var query = "INSERT INTO divisionexpenses (divNo, expenseID, descriptions, date, amount, status) VALUES (" + 
    "'" + divisionexpenses.divNo + "', " +    
    "'" + divisionexpenses.expenseID + "', " +
    "'" + divisionexpenses.descriptions + "', " +
    "'" + divisionexpenses.date + "', " +
    "'" + divisionexpenses.amount + "', " +
    "'" + divisionexpenses.status + "')"; 


    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}

// SqlGenerator.prototype.getAllExpenses = function() {
//   var query = "SELECT * FROM divisonexpenses";
//   return query;
// }

SqlGenerator.prototype.executeSql = function (connection, query, callback) {
  connection.query(query, function (err, result) {
    if (err) {
      callback(null, err);
    } else {
      callback(result)
    }
  });
}

SqlGenerator.prototype.getAllNotifications = function(status){
  var query = "SELECT divisionexpenses.divNo, divisionexpenses.descriptions, expenses.description, expenses.generatedBy, divisionexpenses.date,divisionexpenses.amount FROM divisionexpenses INNER JOIN expenses ON expenses.expenseID = divisionexpenses.expenseID WHERE status='"+status+"' LIMIT 10 ";
return query;
}


// --------------------------- weather Table --------------------------------

// Insert weather query
// * input param should be a weather Object (in js cannot define type)
SqlGenerator.prototype.insertWeather = function(weather) {
  var query = "INSERT INTO dailyweather (divNo, curDate, weather) VALUES (" + 
    "'" + weather.division + "', " +
    "'" + weather.date + "', " +
    "'" + weather.status + "')";

    // * use a console.log to view query before do other things.
    // console.log(query);
  return query;
}

// --------------------------- Dailywork-workassign Table --------------------------------

// Insert work assign query
// * input param should be a worker Object (in js cannot define type)
SqlGenerator.prototype.insertWorkAssign = function(workAssign) {
  var query = "INSERT INTO dailywork (curDate, lMobile, typeID, fieldID, amount) VALUES (" + 
    "'" + workAssign.date + "', " +
    "'" + workAssign.lMobile + "', " +
    "" + workAssign.typeID + ", " +
    "" + workAssign.field + ", " +
    "" + workAssign.amount + ")";

    // * use a console.log to view query before do other things.
     //console.log(query);
  return query;
}



SqlGenerator.prototype.loadWorkDone = function(lMobile) {
 
  var query = "SELECT lMobile, curDate, description, fieldID, amount, status FROM dailywork INNER JOIN work ON dailywork.typeID=work.typeID WHERE lMobile='" + lMobile +"' AND curDate='" + new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate() +"'";
  console.log(query); 
  return query;

 
}

SqlGenerator.prototype.submitWorkDone = function(dailywork) {
  console.log()
  var query = "UPDATE dailywork SET" +
    " amount='" + dailywork.amount +  "'," +
    " status='" + dailywork.status + "' WHERE" +
    " lMobile='" + dailywork.lMobile + "' AND" +
    " curDate='" + dailywork.date + "'";

    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}

SqlGenerator.prototype.getAllExpenseSum = function(sm,sy,em,ey) {
  var query = "SELECT description, sum(amount) As amount, date FROM divisionexpenses INNER JOIN expenses ON divisionexpenses.expenseID=expenses.expenseID WHERE date BETWEEN '"+sy+"-"+sm+"-01' AND '"+ey+"-"+em+"-01' GROUP BY description";
  console.log(query);
  return query;
}



//-------------------------------------divenddate tabel-----------------
// Get endDate by division query
SqlGenerator.prototype.getEndDateByDiv = function(div) {
  var query = "SELECT endDate FROM divenddate WHERE divNo='" + div + "' AND dstatus=0";
  console.log(query);
  return query;
}
SqlGenerator.prototype.getStatus1ByDiv = function(div) {
  var query = "SELECT endDate FROM divenddate WHERE divNo='" + div + "' AND dstatus=1";
  
  return query;
}

// Get 7Day data by division query
SqlGenerator.prototype.getAll7DayData = function(div) {

  var query = "SELECT dailywork.fieldID, SUM(amount) AS totYeild, target FROM dailywork,field,targets WHERE dailywork.fieldID=field.fieldID AND field.fieldID=targets.field AND targets.status is null AND field.divNo='" + div + "' AND typeID=1 AND dailywork.curDate BETWEEN(SELECT date(endDate) FROM divenddate WHERE divNo='" + div + "' AND dstatus=1) AND (SELECT date(endDate) FROM divenddate WHERE divNo='" + div + "' AND dstatus=0) Group BY dailywork.fieldID ";
  console.log(query);
  return query;
}

// SqlGenerator.prototype.insertUpdateEndDate = function(endDate) {
//   var query ="UPDATE divenddate SET dstatus= 3 where divNo='" + endDate.divNo + "' AND dstatus=2; UPDATE divenddate SET dstatus= 2 where divNo='" + endDate.divNo + "' AND dstatus=1; UPDATE divenddate SET dstatus=1 where divNo='" + endDate.divNo + "' AND dstatus=0; INSERT INTO divenddate (divNo, dstatus) VALUES ('" + endDate.divNo + "',0 );";

//     // *** use a console.log to view query before do other things.
//      console.log(query);
//   return query;
// }

SqlGenerator.prototype.insertNewEndDate = function(resetCalendar) {
  var query ="INSERT INTO divenddate (divNo, reason,endDate,dstatus) VALUES ('" + resetCalendar.div + "','" + resetCalendar.reason + "','" + resetCalendar.endDate + "',0 );";

    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}
SqlGenerator.prototype.updateEndDateStatus4 = function(endDate) {
  var query = "UPDATE divenddate SET dstatus= 4 where divNo='" + endDate.div + "' AND dstatus=0; " ;

    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}
SqlGenerator.prototype.insertEndDate = function(endDate) {
  var query ="INSERT INTO divenddate (divNo, dstatus) VALUES ('" + endDate.divNo + "',0 );";

    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}
SqlGenerator.prototype.updateEndDateStatus2 = function(endDate) {
  var query = "UPDATE divenddate SET dstatus= 3 where divNo='" + endDate.divNo + "' AND dstatus=2; " ;

    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}
SqlGenerator.prototype.updateEndDateStatus1 = function(endDate) {
  var query = "UPDATE divenddate SET dstatus= 2 where divNo='" + endDate.divNo + "' AND dstatus=1 " ;

    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}
SqlGenerator.prototype.updateEndDateStatus0 = function(endDate) {
  var query = "UPDATE divenddate SET dstatus=1 where divNo='" + endDate.divNo + "' AND dstatus=0 " ;

    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}

//-----------------------------Daily work Table--------------------------------
//Get daily work summary
SqlGenerator.prototype.getAllDailyWorkData = function() {
 
  var query = "SELECT divNo,SUM(amount) AS totYeild FROM dailywork,field WHERE dailywork.fieldID=field.fieldID AND curDate='2020-02-15' AND typeID=1 Group BY divNo ";
  
  return query;
}

//Get daily work summary
SqlGenerator.prototype.getAllDailyFieldData = function(div) {
 
  var query = "SELECT dailywork.fieldID, SUM(amount) AS totYeild, COUNT(lMobile) AS labCount FROM dailywork,field WHERE dailywork.fieldID=field.fieldID AND divNo='" + div + "'  AND curDate='2020-02-15' Group BY dailywork.fieldID";
  console.log(query);
  return query;
}
SqlGenerator.prototype.getAllDailyFieldDataMonth = function(div) {

  var month= new Date().getMonth();
 
  var year=new Date().getFullYear();
  var format='';
  console.log(year);
  if(month==0){
    year=year-1
    format =year+'-12%';
  }
  else if(month<8){
    format=year+'-0'+(month+1)+'%';
  }
  else{
    format=year+'-'+month+'%';
  }
 

  var query = "SELECT dailywork.fieldID, SUM(amount) AS totYeild FROM dailywork,field WHERE dailywork.fieldID=field.fieldID AND divNo='" + div + "' AND typeID=1 AND curDate LIKE '" + format + "' Group BY dailywork.fieldID";
  console.log(query);
  return query;
}

//-----------------------------User Table---------------------------------------
//Get user details
SqlGenerator.prototype.getUserDetails = function(username) {
 
  var query = "SELECT password,sPosition FROM staff WHERE username='" + username + "';";
  console.log(query);
  return query;
}


//-------------------------FactoryDivision Table----------------------------------
SqlGenerator.prototype.insertFactoryYeild = function(factoryYeild) {
  var query = "INSERT INTO divisionfactory (`divNo`, `factID`, `weight`, `amountRS`) VALUES (" + 
    "'" + factoryYeild.divNo + "', " +
    "'" + factoryYeild.factID + "', " +
    "'" + factoryYeild.weight + "', " +
    "'" + factoryYeild.amountRS + "')";

  
  return query;
}

//------------------------Conductor table----------------------------------------
SqlGenerator.prototype.getDiv = function(username) {
 
  var query = "SELECT divNo FROM staff,conductor WHERE staff.sNIC=conductor.sNIC AND staff.username='" + username + "';";
  console.log(query);
  return query;
}


//--------------------------------Target table---------------------------

SqlGenerator.prototype.getTarget = function(fieldID) {
 
  var query = "SELECT target FROM targets WHERE field'" + fieldID + "' AND status is null;";
  console.log(query);
  return query;
}

//-----------------------------divisionexpenses table--------------------
SqlGenerator.prototype.getLastFertilizer = function(div) {
 
  var query = "SELECT date FROM divisionexpenses WHERE expenseID=15 ORDER BY date DESC LIMIT 1;";
  console.log(query);
  return query;
}

SqlGenerator.prototype.insertExpenses = function(divisionexpenses) {
  console.log("sqlgenerator");
  var query = "INSERT INTO divisionexpenses (divNo, expenseID, descriptions, date, amount, status) VALUES (" + 
     "'" + divisionexpenses.divNo + "', " +    
     "'" + divisionexpenses.expenseID + "', " +
     "'" + divisionexpenses.descriptions + "', " +
     "'" + divisionexpenses.date + "', " +
     "'" + divisionexpenses.amount + "', " +
     "'" + divisionexpenses.status + "')"; 
 
 
     // *** use a console.log to view query before do other things.
     console.log(query);
   return query;
 }

//---------------------------Fieldreplant/field table--------------------------

SqlGenerator.prototype.getFieldData = function(interval,div) {
  var cur=new Date().getFullYear()+'-'+new Date().getMonth()+1+'-'+new Date().getDate();
  var cat1=new Date().getFullYear()-2+'-'+new Date().getMonth()+1+'-'+new Date().getDate();
  var cat2=new Date().getFullYear()-5+'-'+new Date().getMonth()+1+'-'+new Date().getDate();

 if(interval=='2'){
  var query = "SELECT SUM(field.fAcres)AS acres FROM field,fieldreplant WHERE field.fieldID=fieldreplant.fieldID AND fStatus='active' AND plantedDate BETWEEN '"+cat1+"' AND '"+cur+"' AND rstatus=1;";
 }
 else if(interval=='5'){
  var query = "SELECT SUM(field.fAcres) AS acres FROM field,fieldreplant WHERE field.fieldID=fieldreplant.fieldID AND fStatus='active' AND plantedDate BETWEEN '"+cat2+"' AND '"+cat1+"' AND rstatus=1;";
 }
 else{
  var query = "SELECT SUM(field.fAcres)AS acres FROM field,fieldreplant WHERE field.fieldID=fieldreplant.fieldID AND fStatus='active' AND plantedDate<'"+cat2+"' AND rstatus=1;"
 }
 // var query = "SELECT date FROM divisionexpenses WHERE expenseID=15 ORDER BY date DESC LIMIT 1;";
  console.log(query);
  return query;
}



SqlGenerator.prototype.fieldReplant = function(fieldReplant) {
 // console.log("sqlgenerator");
  var query = "INSERT INTO fieldReplant (fieldID,plantedDate,cropType,rstatus) VALUES (" + 
     "'" + fieldReplant.fieldID + "', " +    
     "'" + fieldReplant.date + "', " +
     "'tea', " +
     "'" +fieldReplant.status+ "')"; 
 
 
     // *** use a console.log to view query before do other things.
     console.log(query);
   return query;
 }

 SqlGenerator.prototype.updatePreReplant = function(field) {
  var query = "UPDATE fieldreplant SET rstatus=0 where fieldID='" + field + "' AND rstatus=1; " ;

    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}






// ------------------------------ Set targets table ---------------------------------------

// Get all fields' areas by division
SqlGenerator.prototype.getAllFieldAreas = function(div) {
  var query = "SELECT field.fieldID, field.fAcres, field.fStatus, field.divNo, YEAR(fieldreplant.plantedDate) AS plantYear FROM field,fieldreplant WHERE field.divNo ='"+div+"' AND field.fieldID = fieldreplant.fieldID";
  console.log(query);
  return query;
}

// Insert set target query
SqlGenerator.prototype.insertSetTarget = function(target) {
  var query = "INSERT INTO targets (divNo, field, target, curDate) VALUES ('" + 
    target.division + "'," +target.field1 + "," +target.fieldT1 + ",'"+new Date().getFullYear()+'-0'+(new Date().getMonth()+1)+'-'+new Date().getDate()+"'),('" +
    target.division + "'," +target.field2 + "," +target.fieldT2 + ",'"+new Date().getFullYear()+'-0'+(new Date().getMonth()+1)+'-'+new Date().getDate()+"'),('" +
    target.division + "'," +target.field3 + "," +target.fieldT3 + ",'"+new Date().getFullYear()+'-0'+(new Date().getMonth()+1)+'-'+new Date().getDate()+"');" ;

    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}


SqlGenerator.prototype.getAllTargets = function(div,sm,sy,em,ey) {
  
  var query = "SELECT dailywork.fieldID, SUM(amount) AS totaly, target FROM dailywork,field,targets WHERE dailywork.fieldID=field.fieldID AND field.fieldID=targets.field AND targets.curDate BETWEEN '"+sy+"-"+sm+"-01' AND '"+ey+"-"+em+"-01'  AND field.divNo='div" + 
  div + "' AND typeID=1 AND dailywork.curDate BETWEEN '"+sy+"-"+sm+"-01' AND '"+ey+"-"+em+"-01' Group BY dailywork.fieldID ";
  console.log(query);
  return query;
  
}





////////////////////////CONDUCTOR TABLE///////////////////////////

// Get conductor by NIC query
SqlGenerator.prototype.getConductorBysNIC = function(nic) {
  var query = "SELECT staff.sNIC,sPosition,sName,sMobile,sDOB,sAddress,username,divNo FROM staff,conductor WHERE staff.sNIC=conductor.sNIC AND staff.sNIC='" + nic + "' AND sPosition='conductor'";
  console.log(query);
  return query;
}

// Update conductor query
// *** input param should be a Laborer Object (in js cannot define type)
SqlGenerator.prototype.updateConductor = function(conductor) {
  var query = "UPDATE staff SET" +
    " sNIC='" + conductor.nic + "'," +
    " sName='" + conductor.name + "'," +
    " sAddress='" + conductor.address + "'," +
    " sMobile='" + conductor.mobile + "'," +
    " username='" + conductor.username + "' WHERE" +
    " sNIC='" + conductor.nic + "'";

    // *** use a console.log to view query before do other things.
  console.log(query);
  return query;
}

// Delete conductor by NIC query
SqlGenerator.prototype.deleteConductor = function(nic) {
  var query = "UPDATE staff SET sStatus='deleted' WHERE sNIC='" + nic + "'";
  console.log(query);
  return query;
}

//-------------------clerk-------------------------------------------
// Get all laborers
SqlGenerator.prototype.getClerkBysNIC = function(mobile_no) {
  var query = "SELECT sNIC,sPosition,sName,sMobile,sDOB,sAddress,sStatus FROM staff WHERE sMobile = '" + mobile_no + "' AND sPosition='clerk'";

  console.log(query);
  return query;
}

// Update clerk query
// *** input param should be a clerk Object (in js cannot define type)
SqlGenerator.prototype.updateClerk = function(clerk) {
  var query = "UPDATE staff SET" +
    " sNIC='" + clerk.nic + "'," +
    " sName='" + clerk.name + "'," +
    " sAddress='" + clerk.address + "'," +
    " sDOB='" + clerk.dob + "' WHERE" +
    " smobile='" + clerk.mobile + "'";
    
    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}

SqlGenerator.prototype.getManagerBysNIC = function(mobile_no) {
  var query = "SELECT sNIC,sPosition,sName,sMobile,sDOB,sAddress,sStatus FROM staff WHERE sMobile = '" + mobile_no + "' AND sPosition='manager'";

  console.log(query);
  return query;
}

SqlGenerator.prototype.updateManager = function(manager) {
  var query = "UPDATE staff SET" +
    " sNIC='" + manager.nic + "'," +
    " sName='" + manager.name + "'," +
    " sAddress='" + manager.address + "'," +
    " sDOB='" + manager.dob + "' WHERE" +
    " smobile='" + manager.mobile + "'";
    
    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}



// Export SQL generator
module.exports = SqlGenerator;
