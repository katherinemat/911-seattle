Map = function(latitude, longitude){
  this.centerSpot = {lat: latitude, lng: longitude};
  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: this.centerSpot
  });
};

Map.prototype.placeMarker = function(latitude, longitude){
  // Loop through the results array and place a marker for each
  // set of coordinates.
  var crimeSpot = {lat: latitude, lng: longitude};
  var marker = new google.maps.Marker({
    position: crimeSpot,
    map: this.map
  });
};
exports.mapModule = Map;
