<template>
  <div class="ui segment expenseItemStyle">
    <b>Date:</b> {{ item.date }}
    <i @click="emitDelete"
       class="red close circle icon"></i>
    <br>
    <b>Expense:</b> $ {{ item.expense }}
  </div>
</template>

<script>
export default {
  name: "ExpenseItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitDelete(){
      this.$emit('deleteExpense', this.item.id);
    }
  }
}
</script>

<style scoped>
  .close.circle.icon {
    padding-left: 80px;
  }
  .expenseItemStyle {
    background-image: linear-gradient(to right, #fcb69f 0%, #ffecd2 100%);
    border-color: white;
    box-shadow: 10px 10px 20px -6px rgba(252,188,138,1);
  }
</style>
