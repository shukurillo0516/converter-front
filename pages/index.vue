<template>
  <div id="main">
    <div class="header px-3 py-4">
      <img src="logo.png" alt="logo" class="logo" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: "Title",
            data: [45, 55, 48, 35, 12],
          },
        ],
      },
    };
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
