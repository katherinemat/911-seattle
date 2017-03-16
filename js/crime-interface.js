//ask about file routes. is single period a traverse?
var Crime = require('./../js/crime.js').crimeModule;

var displayCrime = function(crimeData) {
  $('#showCrimes').append("<p> The crime is" + crimeData + ". </p>");
};

$(document).ready(function() {
  var currentCrimeObject = new Crime();
  $('#getCrimes').click(function() {
    var type = $("#crime option:selected").text();
    var district = $('#district option:selected').text();
    var firstDate = $("#first-date").val();
    var secondDate = $("#second-date").val();
    currentCrimeObject.getCrime(firstDate, secondDate, displayCrime);
  });
});
