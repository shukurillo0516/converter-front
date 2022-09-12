<template>
  <div id="main">
    <div class="header px-3 py-4">
      <img src="logo.png" alt="logo" class="logo" />
    </div>
    <div class="content flex w-1/1">
      <div class="w-1/2 px-2">
        <line-chart
          class="chart"
          :chart-options="chartOptions"
          :chart-data="chartData"
          chart-id="chartId"
        />
      </div>
      <div class="w-1/2 px-2">
        <div name="total-display" class="w-2/3 m-auto mt-7 text-center">
          <div class="bg-black text-white text-4xl py-1">Total</div>
          <div class="border-2 text-8xl">525235</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  computed: {
    chartData() {
      return JSON.parse(JSON.stringify(this.$store.state.lineChartData));
    },
    chartOptions() {
      return JSON.parse(JSON.stringify(this.$store.state.lineChartOptions));
    },
  },
};
</script>

<style scoped lang="scss">
#main {
  height: 100%;
  width: 100%;
}
h1 {
  font-size: 2.6rem;
  font-weight: bold;
}
.header {
  background-color: #97f1a1 !important;
}
</style>
