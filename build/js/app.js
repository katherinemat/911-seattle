(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "qbXrBHvXdcS4WPRooTF9fk1he";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Crime = function(){
};

Crime.prototype.getCrime = function(displayFunction) {
  $.get('https://data.seattle.gov/resource/pu5n-trf4.json?district_sector=S&$$app_token=' + apiKey)
  .then(function(response) {
    displayFunction(response[0].event_clearance_description);
  })
  .fail(function(error) {
    $('#showCrimes').text(error.responseJSON.message);
  });
};

exports.crimeModule = Crime;

},{"./../.env":1}],3:[function(require,module,exports){
//ask about file routes. is single period a traverse?
var Crime = require('./../js/crime.js').crimeModule;

var displayCrime = function(crimeData) {
  $('#showCrimes').text("The crime is " + crimeData + ".");
};

$(document).ready(function() {
  var currentCrimeObject = new Crime();
  $('#getCrimes').click(function() {
    var type = $('#crime').val();
    $('#crime').val("");
    currentCrimeObject.getCrime(displayCrime);
  });
});

},{"./../js/crime.js":2}]},{},[3]);
