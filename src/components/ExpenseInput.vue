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

      <div v-mojs="ballBurstAnimation" class="ui submit fluid button" @click="emitAdd">Add New</div>
    </div>

  </div>
</template>

<script>
import VueMoJS from 'vue-mo-js'
import Vue from 'vue'

Vue.use(VueMoJS)

export default {
  name: "ExpensesInput",
  data() {
    return {
      currentDate: new Date().toISOString().substring(0, 10),
      currentExpense: null,
      ballBurstAnimation : {
            count : 6,
            origin: '100% 100%',
            radius: 		{20:50},
            children: {
              fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
              opacity: 		0.6,
              scale: 			1,
              radius:     { 10: 0 },
              duration: 	1500,
              delay: 			100,
              easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
          }
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
  .button {
    background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
    background-size: 600%;
    animation: anime 16s linear infinite;
    color: white;
  }

  /*I do not know where the default button hover css came from, so I have to override it*/
  .button:hover {
    background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
    background-size: 600%;
    animation: anime 16s linear infinite;
    color: white;
  }

  @keyframes anime {
   0% {
     background-position: 0% 50%
   }
   50% {
     background-position: 100% 50%
   } 
   100% {
     background-position: 0% 50%
   }
  }
</style>
