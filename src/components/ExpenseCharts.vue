<template>
  <div>
      <p class='chartHeader'>My Expense Chart</p>
      <bar-chart 
        :data="expenseListForChart" 
        :colors="['green']"
        height="600px"
      >
      </bar-chart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueChartkick, {adapter: Chart})

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
  background-color: lightblue;
}

.chartHeader {
  text-align: center;
}
</style>
