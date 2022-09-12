<template>
  <div>
    <table class="table">
      <thead class="bg-black text-white text-lg">
        <tr>
          <th>№</th>
          <th>заказ №</th>
          <th>стоимость,$</th>
          <th>стоимость,₽</th>
          <th>срок поставки</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-right text-lg" v-for="(row, i) in rows" :key="i">
          <td v-for="(field, index) in row" :key="index">{{ field }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    rows() {
      return this.$store.state.tableData;
    },
  },
};
</script>

<style scoped lang="scss">
table,
td {
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-collapse: collapse;
}
td {
  background-color: #d2e5ff;
}
th {
  padding: 0.375rem 0;
}
.table {
  width: 100%;
}
</style>
