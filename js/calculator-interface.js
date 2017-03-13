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
