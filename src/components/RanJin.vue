<template>
  <div class="ranjin">
    <div id="chart1"></div>
  </div>
</template>

<script>
export default {
  name: 'ranjin',
  data () {
    return {
    }
  },
  mounted () {
    this.$chart.ranjin('chart1')
  }
}
</script>

<style scoped>
  #chart1 {
    width: 1080px;
    height: 500px;
    margin: 0 auto;
  }
</style>
