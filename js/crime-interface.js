//ask about file routes. is single period a traverse?
var Crime = require('./../js/crime.js').crimeModule;

var displayCrime = function(crimeData) {
  $('#showCrimes').text("The crime is " + crimeData + ".");
}

$(document).ready(function() {
  var currentCrimeObject = new Crime();
  $('#getCrimes').click(function() {
    var type = $('#crime').val();
    $('#crime').val("");
    currentCrimeObject.getCrime(displayCrime);
  });
});
