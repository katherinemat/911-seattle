var apiKey = require('./../.env').apiKey;

Crime = function(){
};

Crime.prototype.getCrime = function(displayFunction) {
  $.get('https://data.seattle.gov/resource/pu5n-trf4.json?district_sector=S&$$app_token=' + apiKey)
  .then(function(response) {
    for(var i = 0; i < 20; i++) {
      //latitude
      console.log(response[i].incident_location.coordinates[1]);
      //longitude
      console.log(response[i].incident_location.coordinates[0]);
    }
  })
  .fail(function(error) {
    $('#showCrimes').text(error.responseJSON.message);
  });
};

exports.crimeModule = Crime;
