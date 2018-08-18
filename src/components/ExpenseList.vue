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
  import { mapGetters, mapMutations } from 'vuex'
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
      ...mapMutations([
        'addExpense',
        'deleteExpense'
    ])
  }
}
</script>

<style scoped>

</style>
