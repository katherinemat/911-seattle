var apiKey = require('./../.env').apiKey;
var Map = require('./../js/map.js').mapModule;

Crime = function(){
};

Crime.prototype.getCrime = function(crimeType, crimeDistrict, firstDate, secondDate, displayFunction) {
  var parameters = [];
  if(crimeType != null) {
    parameters.push("event_clearance_description=" + crimeType);
  }
  $.get('https://data.seattle.gov/resource/pu5n-trf4.json?' + '&$$app_token=' + apiKey)
  // $.get('https://data.seattle.gov/resource/pu5n-trf4.json?district_sector=' + crimeDistrict + '&$$app_token='+ apiKey)
  // $.get("https://data.seattle.gov/resource/pu5n-trf4.json?$where=event_clearance_date between '" + firstDate + "' and '" + secondDate + "' &$$app_token="+ apiKey)
  .then(function(response) {
    currentMapObject = new Map(47.612988, -122.333540);

    for(var i = 0; i < 50; i++) {
      // console.log(response[i].event_clearance_date);
      var latitude = response[i].incident_location.coordinates[1];
      var longitude = response[i].incident_location.coordinates[0];
      currentMapObject.placeMarker(latitude, longitude);
    }
  })
  .fail(function(error) {
    $('#showCrimes').text(error.responseJSON.message);
  });
};

exports.crimeModule = Crime;
