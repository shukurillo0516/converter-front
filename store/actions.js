export default {
  async getOrdersData() {
    try {
      let req = await this.$axios.get("v1/spreadsheet-data/");
      if (req.data.payload) {
        return req.data.payload;
      } else {
        throw req.data.error;
      }
    } catch (err) {
      console.log(err);
    }
  },
  async doPollingSpreadsheet({ commit, dispatch }) {
    try {
      let data = await dispatch("getOrdersData");
      commit("setTableData", data);
      commit("setChartData", data);
    } catch (err) {
      console.log(err, "doPollingSpreadsheet");
    }
    setTimeout(() => dispatch("doPollingSpreadsheet"), 5000);
  },
};
