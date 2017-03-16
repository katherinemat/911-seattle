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
