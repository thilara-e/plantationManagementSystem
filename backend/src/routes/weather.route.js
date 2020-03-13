// Import required packages
var express = require("express");
var router = express.Router();
var WeatherController = require("../controllers/weather.controller");

var weatherController = new WeatherController();

// POST Route - Insert weather
router.post("/insert", function(req, res, next) {
    weatherController.insertWeather(req.body, function(result, err) {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.status(200);
        res.json(result);
      }
    });
  });

  // Export router
module.exports = router;
