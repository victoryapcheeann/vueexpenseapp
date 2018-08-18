<template>
  <div>
      <p>{{ expenseListForChart }}</p>
  </div>
</template>

<script>
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

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
