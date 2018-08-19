<template>
  <div>
    <expense-input
      @addExpense="addExpense">
    </expense-input>
      <transition-group name = "slide" type = "transition">
          <expense-item
            v-for="item in expenseListSortedByDate"
            :key="item.id"
            :item="item"
            @deleteExpense="deleteExpense">
          </expense-item>
      </transition-group>
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
        'expenseListSortedByDate'
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
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    position: absolute;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 1s;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

    @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(20px);
      opacity: 0;
    }
  }
</style>
