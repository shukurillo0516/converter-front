<template>
  <div id="main">
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
html,
body,
#__nuxt,
#__layout,
#main {
  height: 100% !important;
  width: 100% !important;
  font-family: "Roboto Condensed";
}
#main {
  display: flex;
  flex-flow: column;
}
</style>
