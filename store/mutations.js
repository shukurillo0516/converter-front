export default {
  setTableData(state, payload) {
    state.tableData = payload;
  },
  setChartData(state, payload) {
    let labels = [];
    let data = [];
    let my_data = [...payload];
    my_data.sort((a, b) => {
      let date1 = new Date(a[4]);
      let date2 = new Date(b[4]);
      return date1 - date2;
    });
    for (let i = 0; i < my_data.length; i++) {
      let row = my_data[i];
      labels.push(row[4]);
      if (row[3]) {
        data.push(row[3]);
      } else {
        data.push(0);
      }
    }
    state.lineChartData.labels = labels;
    state.lineChartData.datasets[0].data = data;
  },
};
