// Import required packages
var Weather = require("../models/weather.model");
var SqlGenerator = require("../utils/sqlGenerator");
var connection = require("../utils/connection");

var sqlGenerator = new SqlGenerator();

// weather controller
function WeatherController() {}

// Insert weather to DB
WeatherController.prototype.insertWeather = function(reqBody, callback) {
    connection.beginTransaction(function(err) {
      if (err) {
        callback(null, err);
      }
  
      // *** request should contain below keys exactly as it is.
      var weather = new Weather(
        reqBody.weatherDivision,
        reqBody.weatherDate,
        reqBody.weatherStatus
        // reqBody.temperature,
        // reqBody.humidity
      );
  
      var sqlQuery = sqlGenerator.insertWeather(weather);
  
      sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
        if (err) {
          connection.rollback();
          callback(null, err);
        } else {
          connection.commit(function(err) {
            if (err) {
              connection.rollback();
              callback(null, err);
            }
            console.log("Transaction Complete.");
            callback("Weather successfully inserted into the system!");
          });
        }
      });
    });
  };

  // Export weather controller
module.exports = WeatherController;
