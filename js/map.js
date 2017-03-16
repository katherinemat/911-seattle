Map = function(latitude, longitude){
  this.centerSpot = {lat: latitude, lng: longitude};
  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: this.centerSpot
  });
};

Map.prototype.placeMarker = function(latitude, longitude){
  var crimeSpot = {lat: latitude, lng: longitude};
  var marker = new google.maps.Marker({
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      strokeColor: '#FF0000',
      scale: 3,
      strokeWeight: 8,
      fillColor: '#FF0000'
    },
    position: crimeSpot,
    map: this.map
  });
};

exports.mapModule = Map;
