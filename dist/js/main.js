"use strict";

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
var chartId = document.getElementById("chart-container"); // checks for the chart ID and displays a backup image if the browser can't find it

setTimeout(function () {
  if (chartId.innerHTML === "") {
    // console.log('noId');
    var chartArea = document.getElementsByClassName("chart-area");

    for (var i = 0; i < chartArea.length; i++) {
      chartArea[i].style.display = "none";
    } // insert chart screenshot here


    document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
  } else {// console.log('yesId')
  }
}, 500);

function drawHighcharts() {
  Highcharts.chart(chartId, {
    chart: {
      type: 'column',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '14J-L991np9sUoJ1I5J24LXZf2AnDGLWbkiRTaxhquCc',
      googleSpreadsheetWorksheet: 2,
      startRow: 72,
      endColumn: 1
    },
    plotOptions: {
      series: {
        groupPadding: .1,
        dataLabels: {
          enabled: true,
          inside: true,
          formatter: function formatter() {
            if (this.x == 2011) {
              return 0;
            }
          }
        }
      } // column: {
      //     minPointLength: 3
      // }

    },
    legend: {
      enabled: false // align: 'right',
      // symbolRadius: 0,
      // verticalAlign: 'top',
      // x: 10,
      // itemMarginTop: -10

    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        }
      }
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      },
      max: 30,
      min: -45,
      tickAmount: 6
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      valueDecimals: 1,
      valueSuffix: '%'
    },
    annotations: [{
      shapes: [{
        type: 'path',
        points: [{
          x: 1999,
          y: 7.3,
          xAxis: 0,
          yAxis: 0
        }, {
          x: 2020,
          y: 7.3,
          xAxis: 0,
          yAxis: 0
        }]
      }],
      labels: [{
        point: {
          x: 2000,
          y: 2,
          yAxis: 0,
          xAxis: 0
        },
        useHTML: true,
        backgroundColor: 'white'
      }],
      labelOptions: {
        formatter: function formatter() {
          return "Historical <br/>average";
        }
      }
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  drawHighcharts();
} else {
  document.addEventListener("DOMContentLoaded", drawHighcharts);
}