<template>
  <div id='kanban'>
    <p style="text-align: center; margin: 0 0 20px; height: 50px">a simple KanBan</p>
    <div style="text-align: center">
      <el-transfer
        style="text-align: left; display: inline-block; height: 500px;"
        v-model="value"
        filterable
        target-order="original"
        @left-check-change="leftCheckChange"
        @right-check-change="rightCheckChange"
        :render-content="renderFunc"
        :titles="['BugList', '待测试']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }"
        @change="handleChange"
        :data="data">
        <!-- <el-button class="transfer-footer" slot="left-footer" style="width: 50px">+</el-button> -->
        <el-popover
          placement="top"
          width="160"
          v-model="visible"
          cclass="transfer-footer"
          slot="left-footer">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea"
            style="position:absolute; left: 0; top: -45px"
            @keyup.enter.native="pushdata()">
          </el-input>

          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="pushdata">确定</el-button>
          </div>
          <el-button slot="reference">+</el-button>
        </el-popover>
        <!-- <el-button class="transfer-footer" slot="right-footer" size="small">-</el-button> -->
        <el-popover
          placement="top"
          width="160"
          v-model="visible1"
          cclass="transfer-footer"
          slot="right-footer">
            <p>确认删除选中的项吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible1 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="deleteItems">确定</el-button>
            </div>
          <el-button slot="reference">-</el-button>
        </el-popover>
      </el-transfer>
    </div>
  </div>
</template>

<style>
.transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }

.el-transfer-panel {
    width: 300px;
}

.el-transfer-panel__body {
    height: 400px;
}

.el-transfer-panel__list.is-filterable{
    height: 328px;
}
</style>

<script>
import { request } from '../network/request'
import Vue from 'vue'
import qs from 'qs'
Vue.prototype.$qs = qs
export default {
  name: 'kanban',
  data () {
    return {
      data: [],
      value: [], // 这玩意是保存哪些在右边的
      renderFunc (h, option) {
        return <span>{ option.key } - { option.label }</span>
      },
      visible: false,
      visible1: false,
      textarea: '',
      keynum: 1,
      leftchoosen: [],
      rightchoosen: []
    }
  },
  mounted () {
    request({
      url: '/kanban'
    })
      .then(res => {
        this.data = res.data
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].location === 'right') {
            this.value.push(res.data[i].key)
          }
        }
        // this.data = res.data
        this.keynum = this.findMaxKey(this.data) + 1
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    handleChange (value, direction, movedKeys) {
      if (direction === 'right') {
        for (let i = 0; i < movedKeys.length; i++) {
          for (let j = 0; j < this.data.length; j++) {
            if (this.data[j].key === movedKeys[i]) {
              const postData3 = this.$qs.stringify({
                location: 'right'
              })
              request({
                method: 'patch',
                url: '/kanban/' + this.data[j].id,
                data: postData3
              }).then((res) => {
                console.log(res)
              })
            }
          }
        }
      }
      if (direction === 'left') {
        for (let i = 0; i < movedKeys.length; i++) {
          for (let j = 0; j < this.data.length; j++) {
            if (this.data[j].key === movedKeys[i]) {
              const postData4 = this.$qs.stringify({
                location: 'left'
              })
              request({
                method: 'patch',
                url: '/kanban/' + this.data[j].id,
                data: postData4
              }).then((res) => {
                console.log(res)
              })
            }
          }
        }
      }
    },
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
    findMaxKey (data) {
      let max = 0
      for (let i = 0; i < data.length; i++) {
        if (max < parseInt(data[i].key)) {
          max = parseInt(data[i].key)
        }
      }
      return max
    },
    leftCheckChange (key) {
      console.log('点了一下左边')
      for (let i = 0; i < key.length; i++) {
        if (this.leftchoosen.indexOf(key[i]) === -1) {
          this.leftchoosen.push(key[i])
        }
      }
      for (let j = 0; j < this.leftchoosen.length; j++) {
        if (key.indexOf(this.leftchoosen[j]) === -1) {
          this.leftchoosen.splice(j, 1)
        }
      }
      console.log('现在左边有')
      console.log(this.leftchoosen)
    },
    rightCheckChange (key) {
      console.log('点了一下右边')
      for (let i = 0; i < key.length; i++) {
        if (this.rightchoosen.indexOf(key[i]) === -1) {
          this.rightchoosen.push(key[i])
        }
      }
      for (let j = 0; j < this.rightchoosen.length; j++) {
        if (key.indexOf(this.rightchoosen[j]) === -1) {
          this.rightchoosen.splice(j, 1)
        }
      }
      console.log('现在右边有')
      console.log(this.rightchoosen)
    },
    pushdata () {
      this.visible = false
      const postData = this.$qs.stringify({
        id: this.randomString(32),
        key: this.keynum,
        label: this.textarea,
        location: 'left'
      })
      request({
        method: 'post',
        url: '/kanban',
        data: postData
      }).then((res) => {
        console.log(res)
      })
      request({
        url: '/kanban'
      }).then(res => {
        this.data = res.data
        this.keynum = this.findMaxKey(this.data) + 1
      }).catch(err => {
        console.log(err)
      })
      this.textarea = null
    },
    deleteItems () {
      this.visible1 = false
      console.log('左边选了')
      console.log(this.leftchoosen)
      console.log('右边选了')
      console.log(this.rightchoosen)
      const shouldBeDeleted = this.leftchoosen.concat(this.rightchoosen)
      console.log('合并')
      console.log(shouldBeDeleted)
      for (let i = 0; i < shouldBeDeleted.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          if (this.data[j].key === shouldBeDeleted[i]) {
            console.log('找到被删除的了')
            request({
              method: 'delete',
              url: '/kanban/' + this.data[j].id
            }).then((res) => {
              console.log(res)
            })
          }
        }
      }
      request({
        url: '/kanban'
      }).then(res => {
        this.data = res.data
        this.keynum = this.findMaxKey(this.data) + 1
      }).catch(err => {
        console.log(err)
      })
      this.leftchoosen = []
      this.rightchoosen = []
    }
  }
}
</script>
