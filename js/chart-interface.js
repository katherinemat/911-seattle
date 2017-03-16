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
