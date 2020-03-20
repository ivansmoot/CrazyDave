<template>
  <div class="ranjin">
    <v-chart ref="chart1" :options="orgOptions" :auto-resize="true"></v-chart>
    <div style="position: relative; height: 200px">
      <div style="position: absolute; width: 400px; left: 250px; top: 50px">
        <span style="position: absolute; left: 100px; top: -30px">请选择项目起止时间</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
          style="width: 380px">
        </el-date-picker>
        <el-button type="primary" round @click="showdate"
          style="position: absolute; left: 100px; top: 50px">绘制理想燃尽图</el-button>
      </div>
      <div style="position: absolute; width: 200px; left: 750px; top: 50px">
        <span style="position: absolute; left: 155px; top: -30px; width: 200px">请输入当前进度</span>
        <el-input
          placeholder="请输入日期(格式:2020-03-20)"
          suffix-icon="el-icon-date"
          v-model="input1"
          style="position: absolute; width:240px; left: -40px">
        </el-input>
        <el-input
          placeholder="请输入剩余进度"
          prefix-icon="el-icon-search"
          v-model="input2"
          style="position: absolute; left: 230px">
        </el-input>
        <el-button type="primary" round @click="showdate"
          style="position: absolute; left: 140px; top: 50px">绘制当前燃尽图</el-button>
      </div>
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
      yData2: [920, 1032, 1001, 1034, 1390, 1430, 1420],
      input1: '',
      input2: ''
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
