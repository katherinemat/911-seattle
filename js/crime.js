var apiKey = require('./../.env').apiKey;
var Map = require('./../js/map.js').mapModule;

Crime = function(){
};

Crime.prototype.getCrime = function(displayFunction) {
  $.get('https://data.seattle.gov/resource/pu5n-trf4.json?district_sector=S&$$app_token=' + apiKey)
  .then(function(response) {

    currentMapObject = new Map(47.612988, -122.333540);

    for(var i = 0; i < 20; i++) {
      //latitude
      var latitude = response[i].incident_location.coordinates[1];
      console.log(latitude);

      //longitude
      var longitude = response[i].incident_location.coordinates[0];
      console.log(longitude);
      currentMapObject.placeMarker(latitude, longitude);
    }
  })
  .fail(function(error) {
    $('#showCrimes').text(error.responseJSON.message);
  });
};

exports.crimeModule = Crime;
