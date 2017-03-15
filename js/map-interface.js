var Map = require('./../js/map.js').mapModule;

var displayMap = function(mapData) {
  $('#map').text(mapData);
};

$(document).ready(function() {
  var currentMapObject = new Map();
  $('#getCrimes').click(function() {
    currentMapObject.initMap(displayMap);
  });
});
