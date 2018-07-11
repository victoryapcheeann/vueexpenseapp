<template>
  <div class="ui segment">
    <div class="ui form">
      <div class="field">
        <label>Date</label>
        <input type="date" v-model="currentDate">
      </div>
      <div class="field">
        <label>Expense ($)</label>
        <input class="ui left input" type="number" v-model="currentExpense">
      </div>

      <div class="ui submit fluid button" @click="emitAdd">Add New</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ExpensesInput",
  data() {
    return {
      currentDate: new Date().toISOString().substring(0, 10),
      currentExpense: null
    }
  },
  methods: {
    emitAdd: function(){
      let payload = {
        id: Date.now(), // id uses current timestamp
        date: this.currentDate,
        expense: this.currentExpense
      }
      this.$emit('addExpense', payload);

      this.currentDate = new Date().toISOString().substring(0, 10);
      this.currentExpense = null;
    }
  },
  mounted(){

  }
}
</script>

<style scoped>

</style>
