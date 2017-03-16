var apiKey = require('./../.env').apiKey;
var Map = require('./../js/map.js').mapModule;

Crime = function(){
};

Crime.prototype.getCrime = function(crimeType, crimeDistrict) {
  // var query = "https://data.seattle.gov/resource/pu5n-trf4.json?";
  // var queryNumber = 0;
  // if(crimeType !== "") {
  //   queryNumber++;
  //   if (queryNumber > 1) {
  //     query = query + "AND event_clearance_description=" + crimeType;
  //   } else {
  //     query = query + "event_clearance_description=" + crimeType;
  //   }
  // }
  // if(crimeDistrict !== "") {
  //   queryNumber++;
  //   query = query + "district_sector=" + crimeDistrict;
  // }
  //
  // $.get(query + '&$$app_token=' + apiKey)
  $.get('https://data.seattle.gov/resource/pu5n-trf4.json?district_sector=B&&event_clearance_description=MOTOR VEHICLE COLLISION' + '&$$app_token='+ apiKey)
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
