<template>
  <div>
    <expense-input
      @addExpense="addExpense">
    </expense-input>
    <expense-item
      v-for="item in expenseListStoredByDate"
      :key="item.id"
      :item="item"
      @deleteExpense="deleteExpense">
    </expense-item>

  </div>
</template>

<script>
  import ExpenseItem from './ExpenseItem'
  import ExpenseInput from './ExpenseInput'
  import { mapGetters } from 'vuex'
export default {
  name: "ExpenseList",
  components: {
    ExpenseItem,
    ExpenseInput
  },
  computed: {
      ...mapGetters([
        'expenseListStoredByDate'
    ])
  },
  methods: {
    addExpense: function(payload) {
      this.expenseList.push(payload);
    },
    deleteExpense: function(id) {
      let index = this.expenseList.map(function(item) {
        return item.id
      }).indexOf(id);

      this.expenseList.splice(index, 1);
    }

  }
}
</script>

<style scoped>

</style>
