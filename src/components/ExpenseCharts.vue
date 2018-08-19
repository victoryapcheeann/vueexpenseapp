<template>
  <div>
      <div class='chartHeader'>Expense Over Time</div>
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
.chartStyle {
  padding: 30px;
  border-radius: 40px;
  background-image: linear-gradient(-100deg, #a1c4fd 0%, #c2e9fb 100%);
  box-shadow: 10px 10px 20px -6px rgb(161, 218, 255);
}

.chartHeader {
  text-align: left;
  background-image: linear-gradient(30deg, #d5ff73 0%, #bbeec2 100%);  background-size: 100px 20px;
  background-repeat: no-repeat;
  background-position: bottom left;
  padding: 10px;
  margin: 10px;
  width: 300px;
  font-size: 20px;
  text-transform: uppercase;  
  transition: all 1s;
}

.chartHeader:hover {
  background-size: 200px 20px; 
  transition: all 1s;
}
</style>
