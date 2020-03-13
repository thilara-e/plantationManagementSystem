// Import required packages
var Targets = require("../models/getTarget.model");
//var FieldAreas = require("../models/fieldAreas.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// retrive target controller
function GetTargetController() {}

// Get all set targets
// GetTargetController.prototype.getAllTargets = function(div, callback) {
//     var sqlQuery = sqlGenerator.getAllTargets(div);
//     //console.log(sqlQuery);
  
//     connection.query(sqlQuery, function(err, resultTargets) {
//       if (err || resultTargets.length == 0) {
//         callback(null, err);
//       } else {
//         var i = 0;
//         var resTargets = [];
  
//         while (resultTargets[i]) {
//           var targets = new Targets(
//             resultTargets[i].divNo,
//             resultTargets[i].field,
//             resultTargets[i].target
//           );
//           resTargets.push(targets);
//           i++;
//           //console.log(resTargets);
//         }
//         //console.log(resTargets);
//         callback(resTargets);
//       }
//     });
//   };
GetTargetController.prototype.getAllTargets = function(div, callback) {

    var divis = Math.floor(div/1000000);
    div = div%1000000;
    var sy = Math.floor(div/100);
    var sm = div % 100;
    var ey = Math.floor(div/100);
    var em = (div % 100) + 1;
    if(em==13){
        em = 1;
        ey+=1;
    }
    if(em>=10){
        ems = em.toString();
    }
    else{
        ems = "0" + em.toString();
    }
    if(sm>=10){
        sms = sm.toString();
    }
    else{
        sms = "0" + sm.toString();
    }

    var sqlQuery = sqlGenerator.getAllTargets(divis, sms,sy,ems,ey);
    //console.log(sqlQuery);
  
    connection.query(sqlQuery, function(err, resultTargets) {
      if (err || resultTargets.length == 0) {
        callback(null, err);
      } else {
        var i = 0;
        var resTargets = [];
  
        while (resultTargets[i]) {
            if(resultTargets[i].totaly > (resultTargets[i].target*0.95)){
                var targets = new Targets(
                    resultTargets[i].fieldID,
                    resultTargets[i].totaly,
                    resultTargets[i].target,
                    "Achieved"
                  );
            }
            else{
                var targets = new Targets(
                    resultTargets[i].fieldID,
                    resultTargets[i].totaly,
                    resultTargets[i].target,
                    "Insufficient"
                  );
            }
          
          resTargets.push(targets);
          i++;
          //console.log(resTargets);
        }
        //console.log(resTargets);
        callback(resTargets);
      }
    });
  };
  

// Export set targets controller
module.exports = GetTargetController;
