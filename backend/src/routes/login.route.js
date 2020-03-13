// Import required packages
var express = require("express");
var router = express.Router();
var LoginController = require("../controllers/login.controller");

var loginController = new LoginController();



//GET Route - Get all sum Data
router.get("/auth/:userDetails", function(req, res, next) {
  
  loginController.authUser(req.params.userDetails,function(result, err) {
    
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
      console.log(result);
    }
  });
});

//GET Route - Get all sum Data
router.get("/get/:email", function(req, res, next) {
  
  loginController.getDiv(req.params.email,function(result, err) {
    
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
      console.log(result);
    }
  });
});


// Export router
module.exports = router;
