<template>
  <div class="ui segment box">
    <div class="ui form">
      <div class="field">
        <label>Date</label>
        <input type="date" v-model="currentDate">
      </div>
      <div class="field" :class="{invalid:!$v.currentExpense.between || !$v.currentExpense.required}">
        <label>Expense ($)</label>
        <input 
          class="input" 
          type="number" 
          value="1"
          @blur="$v.currentExpense.$touch()"
          v-model="currentExpense"
        >
        <transition name = "slide">
        <div 
          class="error"
          v-if="!$v.currentExpense.between">Must be between 
          {{$v.currentExpense.$params.between.min}} and 
          {{$v.currentExpense.$params.between.max}}
        </div>
        </transition>
        <transition name = "slide">
        <div 
          class="error"
          v-if="!$v.currentExpense.required">
          This field cannot be empty  
        </div>
        </transition>
      </div>
      <div 
        v-mojs="ballBurstAnimation" 
        class="ui submit fluid button" 
        @click="emitAdd">
        Add New
      </div>
    </div>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />

  </div>
</template>

<script>
import VueMoJS from 'vue-mo-js'
import modal from './ExpenseErrorModal';
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, between, integer } from 'vuelidate/lib/validators'

Vue.use(VueMoJS)
Vue.use(Vuelidate)

export default {
  name: "ExpensesInput",
     components: {
     modal,
  },
  data() {
    return {
      currentDate: new Date().toISOString().substring(0, 10),
      currentExpense: 1,
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
          },
      isModalVisible: false
    }
  },
  methods: {
    emitAdd(){
      let payload = {
        id: Date.now(), // id uses current timestamp
        date: this.currentDate,
        expense: this.currentExpense
      }
      console.log(this.$v.currentExpense.between)
      console.log(this.$v.currentExpense.required)
      if(this.$v.currentExpense.between && this.$v.currentExpense.required) {
        this.$emit('addExpense', payload);
      }
      else {
        this.isModalVisible = true;
      }

      this.currentDate = new Date().toISOString().substring(0, 10);
      this.currentExpense = 1;
    },
    closeModal() {
        this.isModalVisible = false;
    }
  },
  validations: {
       currentExpense: {
        integer,
        required,
        between: between(1, 99)
      }
  },
  mounted(){

  }
}
</script>

<style scoped>
  .box {
     box-shadow: 10px 10px 20px -6px grey;
  }

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

  .error {
    color: lightcoral;
    margin-top: 5px;
    padding: 5px;
    border-radius: 10px;
  }

  .field.invalid input[type=number] {
    border: 1px solid red;
  }

  .field.invalid label {
    color: red;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    position: absolute;
  }

  .slide-enter-active, .slide-leave-active{
    transition: all 1s;
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
