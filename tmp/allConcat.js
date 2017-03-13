var Calculator = require ('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  var simpleCalculator2 = new Calculator("camo");
  $('.calculate').submit(function(event) {
    event.preventDefault();
    var firstInput = parseInt($("#first-number").val());
    var symbol = $('input[name="math-symbol"]:checked').val();
    var secondInput = parseInt($("#second-number").val());
    var calculation = simpleCalculator2.calculate(firstInput, symbol, secondInput);
    $("#math-result").text(calculation);
  });
});

var Calculator = require ('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  var simpleCalculator = new Calculator("camo");
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });


});

$(document).ready(function() {
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
