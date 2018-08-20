<template>
    <div :class="$style.blocks">
      <DemoBlock
        v-for="(demo, index) in demos"
        :key="index"
        :background="demo.background"
        :text="demo.text"
        :button-styles="demo.buttonStyles"
        :button-options="demo.buttonOptions"
      />
    </div>
</template>

<script>
import DemoBlock from './demo-block'

export default {
  components: {
    DemoBlock,
  },
  data() {
    return {
      demos: [
        {
          text: 'EXPENSE OVER TIME',
          buttonStyles: {
            background: 'linear-gradient(to top, #22b9d2 0%, #5389ec 100%)',
            color: '#fff',
            padding: '2rem 4rem',
            borderRadius: '10px',
            fontFamily: "'Avenir', Helvetica, Arial, sans-serif",
          },
          buttonOptions: {
            particleType: 'triangle',
            particleStyle: 'stroke',
            size: 5,
            particleColor: 'blue',
            duration: 1400,
            speed: 1.5,
            oscillationCoefficient: 15,
            direction: 'right',
          },
        }
      ],
    }
  },
}
</script>

<style module>
.container {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
}

.blocks {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
}
</style>