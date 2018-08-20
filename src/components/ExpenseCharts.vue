<template>
    <div>
        <Logo class='logoStyle'/>    
        <ParticleComponent class='chartHeader'/>
        <line-chart 
          :data="expenseListForChart" 
          :colors="['grey']"
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
import ParticleComponent from './Particles/particle-component'
import Logo from './Logo/Logo'

Vue.use(VueChartkick, {adapter: Chart})

export default {
  name: "ExpenseCharts", 
  components: {
    ParticleComponent,
    Logo
  },
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
  animation: 	1s ease-out 0s 1 chartEnterAnimation
}

.logoStyle {
  position: absolute;
  margin-left: -60%;
  animation: 	1s ease-out 0s 1 logoEnterAnimation
}

.headerContainer {
  display: flex;
}

.chartHeader {
  display: flex;
  justify-content: center;
  animation: 1s ease-out 0s 1 headerEnterAnimation;
}

@keyframes headerEnterAnimation {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes chartEnterAnimation {
  0% {
    transform: translateY(100%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes logoEnterAnimation {
  0% {
    transform: translatex(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
