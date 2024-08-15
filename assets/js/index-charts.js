"use strict";

/* Chart.js docs: https://www.chartjs.org/ */

window.chartColors = {
  green: "#75c181",
  gray: "#a9b5c9",
  text: "#252930",
  border: "#e7e9ed",
};

var suhuChartConfig = {
  type: "line",
  data: {
    labels: [], // Labels akan diisi secara dinamis
    datasets: [
      {
        label: "°C",
        backgroundColor: "rgba(117,193,129,0.2)",
        borderColor: "rgba(117,193,129, 0.8)",
        data: [], // Data akan diisi secara dinamis
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      align: "end",
    },
    tooltips: {
      mode: "index",
      intersect: false,
      titleMarginBottom: 10,
      bodySpacing: 10,
      xPadding: 16,
      yPadding: 16,
      borderColor: window.chartColors.border,
      borderWidth: 1,
      backgroundColor: "#fff",
      bodyFontColor: window.chartColors.text,
      titleFontColor: window.chartColors.text,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            drawBorder: false,
            color: window.chartColors.border,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            drawBorder: false,
            color: window.chartColors.border,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

var phChartConfig = {
  type: "line",
  data: {
    labels: [], // Labels akan diisi secara dinamis
    datasets: [
      {
        label: "pH",
        backgroundColor: "rgba(117,193,129,0.2)",
        borderColor: "rgba(117,193,129, 0.8)",
        data: [], // Data akan diisi secara dinamis
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      align: "end",
    },
    tooltips: {
      mode: "index",
      intersect: false,
      titleMarginBottom: 10,
      bodySpacing: 10,
      xPadding: 16,
      yPadding: 16,
      borderColor: window.chartColors.border,
      borderWidth: 1,
      backgroundColor: "#fff",
      bodyFontColor: window.chartColors.text,
      titleFontColor: window.chartColors.text,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            drawBorder: false,
            color: window.chartColors.border,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            drawBorder: false,
            color: window.chartColors.border,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

var tdsChartConfig = {
  type: "line",
  data: {
    labels: [], // Labels akan diisi secara dinamis
    datasets: [
      {
        label: "ppm",
        backgroundColor: "rgba(117,193,129,0.2)",
        borderColor: "rgba(117,193,129, 0.8)",
        data: [], // Data akan diisi secara dinamis
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      align: "end",
    },
    tooltips: {
      mode: "index",
      intersect: false,
      titleMarginBottom: 10,
      bodySpacing: 10,
      xPadding: 16,
      yPadding: 16,
      borderColor: window.chartColors.border,
      borderWidth: 1,
      backgroundColor: "#fff",
      bodyFontColor: window.chartColors.text,
      titleFontColor: window.chartColors.text,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            drawBorder: false,
            color: window.chartColors.border,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            drawBorder: false,
            color: window.chartColors.border,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

function createChart(ctx, config) {
  return new Chart(ctx, config);
}

window.addEventListener("load", function () {
  // Inisialisasi grafik suhu
  var ctxSuhu = document.getElementById("chart-line-suhu").getContext("2d");
  window.chartSuhu = createChart(ctxSuhu, suhuChartConfig);

  // Inisialisasi grafik pH
  var ctxPh = document.getElementById("chart-line-ph").getContext("2d");
  window.chartPh = createChart(ctxPh, phChartConfig);

  // Inisialisasi grafik TDS
  var ctxTds = document.getElementById("chart-line-tds").getContext("2d");
  window.chartTds = createChart(ctxTds, tdsChartConfig);
});

function updateChart(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets[0].data.push(data);
  chart.update();
}
