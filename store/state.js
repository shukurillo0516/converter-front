export default () => ({
  lineChartOptions: {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
    interaction: {
      intersect: false,
    },
    legend: {
      align: "start",
      position: "bottom",
      labels: {
        boxWidth: 20,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 60,
          minRotation: 60,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        suggestedMin: -10,
        suggestedMax: 200,
      },
    },
  },
  lineChartData: {
    labels: [],
    datasets: [
      {
        label: "Цена в рублях",
        data: [],
        borderColor: "rgb(46, 170, 220)",
        backgroundColor: "rgb(46, 170, 230)",
      },
    ],
  },
  tableData: [],
});
