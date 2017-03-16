(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "qbXrBHvXdcS4WPRooTF9fk1he";

},{}],2:[function(require,module,exports){
Chart = function(){
};

Chart.prototype.getChart = function() {
  var chart = new CanvasJS.Chart("chartContainer", {
    title:{
      text: "911 data"
    },
    data: [
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPoints: [
        { label: "MVC",  y: 10  },
        { label: "HARASSMENT", y: 15  },
        { label: "CAR THEFT", y: 25  },
        { label: "FIGHT",  y: 30  },
        { label: "PARKING",  y: 28  },
        { label: "TRESPASS",  y: 28  },
        { label: "BURGLARY",  y: 28  },
        { label: "LIQUOR",  y: 28  }
      ]
    }
    ]
  });
  chart.render();
};

exports.chartModule = Chart;

},{}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/map.js":4}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
var Chart = require('./../js/chart.js').chartModule;

$(document).ready(function() {
  $('#get-chart').click(function() {
    console.log("hey");
    var currentChartObject = new Chart();
    currentChartObject.getChart();
    var type = $("#crime option:selected").text();
    var district = $('#district option:selected').text();
    var firstDate = $("#first-date").val();
    var secondDate = $("#second-date").val();
  });
});

//ask about file routes. is single period a traverse?
var Crime = require('./../js/crime.js').crimeModule;

$(document).ready(function() {
  var currentCrimeObject = new Crime();
  $('#get-crimes').click(function() {
    var type = $("#crime option:selected").text();
    var district = $('#district option:selected').text();
    var firstDate = $("#first-date").val();
    var secondDate = $("#second-date").val();
    console.log(firstDate);
    console.log(secondDate);
    currentCrimeObject.getCrime(firstDate, secondDate, type, district);
  });
});

// var Map = require('./../js/map.js').mapModule;
//
// $(document).ready(function() {
//   $('#getCrimes').click(function() {
//     var currentMapObject = new Map(47.612988, -122.333540);
//   });
// });

},{"./../js/chart.js":2,"./../js/crime.js":3}]},{},[5]);
