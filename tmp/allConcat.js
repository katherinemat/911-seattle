//ask about file routes. is single period a traverse?
var Crime = require('./../js/crime.js').crimeModule;

// var displayCrime = function(crimeData) {
//   $('#showCrimes').append("<p> The crime is" + crimeData + ". </p>");
// };

$(document).ready(function() {
  var currentCrimeObject = new Crime();
  $('#getCrimes').click(function() {
    var type = $("#crime option:selected").text();
    var district = $('#district option:selected').text();
    var firstDate = $("#first-date").val();
    var secondDate = $("#second-date").val();
    currentCrimeObject.getCrime(type, district);
  });
});

// var Map = require('./../js/map.js').mapModule;
//
// $(document).ready(function() {
//   $('#getCrimes').click(function() {
//     var currentMapObject = new Map(47.612988, -122.333540);
//   });
// });
