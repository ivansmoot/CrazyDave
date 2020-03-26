<template>
  <div id='chat'>
    <div style="position:relative; width:1000px; height: auto;min-height:440px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); margin: 0 auto">
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
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">

            <el-popover
              placement="top"
              width="160"
              :ref="scope.row.id">
              <p>这是一段内容这是一段内容确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <!-- element的popover控件和teble控件配合有问题，一起用的时候必须要这样才能关掉 -->
                <el-button size="mini" type="text" @click="scope._self.$refs[scope.row.id].doClose()">取消</el-button>
                <el-button type="primary" size="mini" @click="reply(scope.row)">确定</el-button>
              </div>
              <el-button slot="reference" type="text" size="small">回复</el-button>

            </el-popover>

            <el-button type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="height:50px"></div>
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :page-size="pagesize"
        :total="this.filterInfs.length + 1"
        :current-page.sync="currentPage"
        style="position:absolute; bottom:10px; left: 400px">
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
      pagesize: 6, // 每页最多显示6条数据
      currentPage: 1,
      filterInfs: [],
      uname: ''
    }
  },
  mounted () {
    if (this.$parent.login === false) { // 获取父组件里的登陆信息
      this.$confirm('该功能需要先登陆', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/login')
      }).catch(() => {
        this.$router.push('/')
      })
    }
    this.uname = this.$parent.uname
    request({
      url: '/content'
    })
      .then(res => {
        this.filterInfs = res.data // 把从db.json获取到的res.data数据赋值给filterInfs
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    tableData () { // 表格内容就是绑定的这个叫tableData的计算属性的返回值，这个值根据filterInfs切片得到
      return this.filterInfs.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      )
    }
  },
  methods: {
    reply (row) {
      let thisRowReply
      request({
        url: '/content'
      })
        .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].id === row.id) {
              thisRowReply = res.data[i].reply
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
      console.log(thisRowReply)
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    randomString (len) { // 创建流水号方法
      len = len || 32
      var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      var maxPos = $chars.length
      var pwd = ''
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)))
      }
      return pwd
    },
    getdate () { // 格式化日期
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
    pushContent () { // 准备发送的内容
      const postData = this.$qs.stringify({
        id: this.randomString(32), // 生成一个32位流水号(是不是有点长啊？)
        username: this.uname, // username根据当前登陆用户来
        date: this.getdate(), // 时间就是当前时间
        content: this.textarea, // 获取评论框中的内容
        reply: ['评论占位']
      }, { arrayFormat: 'repeat' }) // fix axios传递数组过去有问题
      request({ // 把文本框的内容发送给db.json
        method: 'post',
        url: '/content',
        data: postData
      }).then((res) => {
        console.log(res)
      })
      request({ // 发给db.json后要重新接受一下db.json的文件，让刚刚写的评论马上在上面刷出来
        url: '/content'
      }).then(res => {
        this.filterInfs = res.data
      }).catch(err => {
        console.log(err)
      })
      this.textarea = '' // 重置文本框的内容为空，不然显得很傻逼
      this.currentPage = Math.ceil((this.filterInfs.length + 1) / this.pagesize)
    }
  }
}
</script>
