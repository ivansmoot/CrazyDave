<template>
  <div id='chat'>
    <div style="position:relative; width:600px; height:440px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); margin: 0 auto">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="username"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容">
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :page-size="pagesize"
        :total="this.filterInfs.length"
        style="position:absolute; top:400px; left:180px">
      </el-pagination>
    </div>
    <p></p>
    <div style="margin: 0 auto; width:600px">
      <el-tag style="left:100px" type="info">发表评论</el-tag>
      <p></p>
      <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="140"
      show-word-limit
      style="width: 600px;"
      @keyup.enter.native="pushContent()"
      >
      </el-input>
      <div style="position:relative; left:520px; top:15px">
        <el-button type="primary" round @click="pushContent">发表</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import { request } from '../network/request'
import Vue from 'vue'
import qs from 'qs'
Vue.prototype.$qs = qs
export default {
  name: 'chat',
  data () {
    return {
      textarea: '',
      pagesize: 6,
      currentPage: 1,
      filterInfs: []
    }
  },
  mounted () {
    request({
      url: '/content'
    })
      .then(res => {
        this.filterInfs = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    tableData () {
      return this.filterInfs.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      )
    }
  },
  methods: {
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    randomString (len) {
      len = len || 32
      var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      var maxPos = $chars.length
      var pwd = ''
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)))
      }
      return pwd
    },
    getdate () {
      const date = new Date()
      const year = date.getFullYear()
      let month = date.getMonth()
      let day = date.getDate()
      let hour = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      if (hour < 10) {
        hour = '0' + hour
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (day < 10) {
        seconds = '0' + seconds
      }
      const contentDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
      return contentDate
    },
    pushContent () {
      const postData = this.$qs.stringify({
        id: this.randomString(32),
        username: '奈德史塔克',
        date: this.getdate(),
        content: this.textarea
      })
      request({
        method: 'post',
        url: '/content',
        data: postData
      }).then((res) => {
        console.log(res)
      })
      request({
        url: '/content'
      }).then(res => {
        this.filterInfs = res.data
      }).catch(err => {
        console.log(err)
      })
      this.textarea = ''
    }
  }
}
</script>
