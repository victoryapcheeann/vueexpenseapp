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
  data() {
    return {
    }
  },
  methods: {
    emitDelete: function(){
      this.$emit('deleteExpense', this.item.id);
    }
  }
}
</script>

<style scoped>
  .close.circle.icon {
    right: 0.2em;
    top: 0.5em;
    padding-left: 30px;
  }

  .expenseItemStyle {
    background-image: linear-gradient(to right, #fcb69f 0%, #ffecd2 100%);
    border-color: white;
  }
</style>
