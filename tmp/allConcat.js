//ask about file routes. is single period a traverse?
var Crime = require('./../js/crime.js').crimeModule;

var displayCrime = function(crimeData) {
  $('#showCrimes').append("<p> The crime is" + crimeData + ". </p>");
};

$(document).ready(function() {
  var currentCrimeObject = new Crime();
  $('#getCrimes').click(function() {
    var type = $("#crime option:selected").text();
    $('#crime').val("");
    currentCrimeObject.getCrime(type, displayCrime);
  });
});

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
