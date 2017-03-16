var apiKey = require('./../.env').apiKey;
var Map = require('./../js/map.js').mapModule;

Crime = function(){
};

Crime.prototype.getCrime = function(firstDate, secondDate, crimeType, crimeDistrict) {
  var query = "https://data.seattle.gov/resource/pu5n-trf4.json?$limit=500";
  var queryNumber = 0;

  if(crimeType !== "") {
    query = query + "&event_clearance_description=" + crimeType;
  }
  if(crimeDistrict !== "") {
    query = query + "&district_sector=" + crimeDistrict;
  }
  if(firstDate !== "" && secondDate !== ""){
    query = query + '&$where=event_clearance_date between "' + firstDate + '" and "' + secondDate + '"';
  }
  
  $.get(query + '&$$app_token=' + apiKey).then(function(response) {
    currentMapObject = new Map(47.612988, -122.333540);
    for(var i = 0; i < response.length; i++) {
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
