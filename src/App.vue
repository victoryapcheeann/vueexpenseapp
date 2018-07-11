<template>
  <div id="app" class="ui padded grid">
    <div class="ui row">
      <div class="twelve wide column">
        <expense-charts></expense-charts>
      </div>

      <div class="three wide column">
        <expense-list></expense-list>
      </div>
    </div>
  </div>
</template>

<script>
import ExpenseList from './components/ExpenseList'
import ExpenseCharts from './components/ExpenseCharts'

export default {
  name: 'App',
  components: {
    ExpenseList,
    ExpenseCharts
  },
  data() {
    return {

    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    width: 100vw;
  }


</style>
