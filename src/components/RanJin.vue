<template>
  <div class="ranjin">
    <v-chart ref="chart1" :options="orgOptions" :auto-resize="true"></v-chart>
  </div>
</template>

<style scoped>
.echarts {
  width: 1200px;
  height: 500px;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: 'ranjin',
  data () {
    return {
      orgOptions: {}
    }
  },
  mounted () {
    this.drawIt()
  },
  methods: {
    drawIt () {
      this.orgOptions = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      }
    }
  }
}
</script>
