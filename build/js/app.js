(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "qbXrBHvXdcS4WPRooTF9fk1he";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Map = require('./../js/map.js').mapModule;

Crime = function(){
};

Crime.prototype.getCrime = function(crimeType, displayFunction) {
  $.get('https://data.seattle.gov/resource/pu5n-trf4.json?event_clearance_description=' + crimeType + '&$$app_token=' + apiKey)
  .then(function(response) {

    currentMapObject = new Map(47.612988, -122.333540);

    for(var i = 0; i < 50; i++) {
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

},{"./../.env":1,"./../js/map.js":3}],3:[function(require,module,exports){
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

// Map.prototype.setStyle(function(feature) {
  //
  // });
  exports.mapModule = Map;

},{}],4:[function(require,module,exports){
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

},{"./../js/crime.js":2,"./../js/map.js":3}]},{},[4]);
