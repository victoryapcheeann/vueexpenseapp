<template>
  <div>
      <p>{{ expenseListForChart.expenseData }}</p>
      <p>{{ expenseListForChart.dateData }}</p>
      <p>{{ expenseListForChart.output }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "ExpenseCharts",
  computed: {
      ...mapGetters([
        'expenseListForChart'
    ])
  }
}
</script>

<style scoped>
div {
  color: white;
  background-color: black;
}
</style>
