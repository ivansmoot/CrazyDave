<template>
  <div class="ranjin">
    <v-chart ref="chart1" :options="orgOptions" :auto-resize="true"></v-chart>
    <div style="text-align: center">
      <span >请选择项目起止时间</span>
      <p></p>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        style="width: 400px">
      </el-date-picker>
      <P></P>
      <el-button type="primary" round @click="showdate">绘制理想燃尽图</el-button>
    </div>
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
      orgOptions: {},
      value1: '',
      xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      yData: [820, 932, 901, 934, 1290, 1330, 1320],
      yData2: [920, 1032, 1001, 1034, 1390, 1430, 1420]
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
          data: this.xData
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.yData,
          type: 'line',
          smooth: true
        },
        {
          data: this.yData2,
          type: 'line',
          smooth: true
        }]
      }
    },
    showdate () {
      this.xData = []
      this.yData = []
      const fday = parseInt(this.value1[0].substr(8, 2))
      const lday = parseInt(this.value1[1].substr(8, 2))
      for (let i = fday; i <= lday; i++) {
        this.xData.push(i)
      }
      this.yData.push('100')
      let ydata = 100
      const stride = 100 / (lday - fday)
      for (let j = fday + 1; j < lday; j++) {
        ydata -= stride
        this.yData.push(ydata)
      }
      this.yData.push('0')
      this.drawIt()
    }
  }
}
</script>

<!-- Echarts真的好难用，还是Vue-echatrs好用，感谢鱿鱼丝 -->
