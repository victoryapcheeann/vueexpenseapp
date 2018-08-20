<template>
    <div id="app">
        <lottie :options="defaultOptions" :height="100" :width="100"/>
    </div>
</template>

<script>
  import Lottie from 'vue-lottie';
  import * as animationData from '../../assets/logo.json';

  export default {
    name: 'app',
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    }
  }
</script>