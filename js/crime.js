var apiKey = require('./../.env').apiKey;

Crime = function(){
}

Crime.prototype.getCrime = function(displayFunction) {
  $.get('https://data.seattle.gov/resource/pu5n-trf4.json?district_sector=N')
  .then(function(response) {
    console.log(response);
  })
  .fail(function(error) {
    $('#showCrimes').text(error.responseJSON.message);
  });
}

exports.crimeModule = Crime;
