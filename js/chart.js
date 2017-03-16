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
