var apiKey = require('./../.env').apiKey;

Crime = function(){
};

Crime.prototype.getCrime = function(displayFunction) {
  $.get('https://data.seattle.gov/resource/pu5n-trf4.json?district_sector=S&$$app_token=' + apiKey)
  .then(function(response) {
    displayFunction(response[0].event_clearance_description);
  })
  .fail(function(error) {
    $('#showCrimes').text(error.responseJSON.message);
  });
};

exports.crimeModule = Crime;
