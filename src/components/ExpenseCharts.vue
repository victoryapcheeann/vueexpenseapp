<template>
  <div>
      <p class='chartHeader'>My Expense Chart</p>
      <line-chart 
        :data="expenseListForChart" 
        :colors="['orange']"
        height="600px" 
        class='chartStyle' 
      >
      </line-chart>
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
  border-radius: 40px;
  padding: 30px;
}

.chartStyle {
  background-image: linear-gradient(-100deg, #a1c4fd 0%, #c2e9fb 100%);
}

.chartHeader {
  text-align: center;
}
</style>
