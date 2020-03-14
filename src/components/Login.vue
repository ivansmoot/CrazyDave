<template>
  <div id="app4" class="mydiv">
    <div class="text-center mb-4" v-show="dialog_visible">
      <img class="mb-4" src="../../public/img/k8s-logo.png" alt="">
      <h1 class="h3 mb-3 font-weight-normal">登录</h1>
      <p>这是目前测试的登录页面，<br>引入了bootstrap的Floating labels组件</p>
    </div>

    <!-- <div class="form-label-group" v-show="dialog_visible">
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="username">
      <label for="inputEmail">邮箱</label>
    </div>

    <div class="form-label-group" v-show="dialog_visible">
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required  v-model="password">
      <label for="inputPassword">密码</label>
    </div> -->

    <el-form status-icon :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-left: -30px">
      <el-form-item label="账号" prop="account">
        <el-input v-model="ruleForm.account" style="width: 400px" placeholder="admin"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" style="width: 400px" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="checkcode">
        <el-input v-model="ruleForm.checkcode" style="width: 300px"></el-input>
      </el-form-item>
      <div style="position:absolute;right:40px;bottom:210px;">
        <el-button type="primary" round @click="creatCode" >{{code}}</el-button>
      </div>
    </el-form>

    <!-- <div class="form-label-group short" v-show="dialog_visible">
      <input type="text" id="inputCode" class="form-control short" placeholder="验证码" required v-model="icode">
      <label for="inputPassword">验证码</label>
    </div> -->

    <!-- <div class="thiscode">
      <el-button type="primary" round @click="creatCode" >{{code}}</el-button>
    </div> -->

    <div class="checkbox mb-3" v-show="dialog_visible">
      <label style="margin-left: 20px">
        <input type="checkbox" value="remember-me"> 记住我
      </label>
    </div>

    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="jump" v-show="dialog_visible">登录</button>

    <!-- <transition mode="out-in">
      <router-view></router-view>
    </transition> -->

    <!-- <p class="mt-5 mb-3 text-muted text-center copyright">&copy; 2019-2020</p> -->
  </div>
</template>

<style scoped src="../../public/bootstrap-4.3.1/site/docs/4.3/examples/floating-labels/floating-labels.css">
/* src="../../public/bootstrap-4.3.1/site/docs/4.3/examples/floating-labels/floating-labels.css" */
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.mydiv{
  position: absolute;
  top: 20%;
  left: 20%;
  right: 20%;
  width: 500px;
  height: 700px;
  margin: 0 auto;
}
.copyright{
  position: absolute;
  left: 20%;
  right: 20%;
  bottom: -100px;
}
.short{
  /* float: left; */
  /* width: 300px; */
  /* overflow:hidden;
  position:relative; */
}
.thiscode{
  /* float: right; */
  /* left: 320px; */
  /* top: 357px; */
  /* top : 657px; */
  /* overflow: hidden; */
  /* position: absolute; */
}
.left {
  float: left;
  width:960px;
  height:540px;
  background-color: gray;
  overflow:hidden;
  position:relative;
}
.right {
  float:right;
  left: 980px;
  top: 75px;
  width: 500px;
  height: 500px;
  overflow:hidden;
  position:absolute;
}
.bgimg {
  background-image: url('../../public/img/bgimg.png');
  background-size: cover;
}
</style>

<script>
// import '../../public/bootstrap-4.3.1/site/docs/4.3/examples/floating-labels/floating-labels.css'
import { request } from '../network/request'
// import axios from 'axios'
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

export default {
  name: 'login',
  data () {
    return {
      dialog_visible: true,
      // username: '',
      // password: '',
      username1: 'test',
      password1: '',
      code: '',
      // icode: '',
      id: '2',
      ruleForm: {
        account: '',
        pass: '',
        checkcode: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账户', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        checkcode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    request({
      url: '/users'
      // url: `/findById?id=${this.id}`
    })
      .then(res => {
        console.log(res.data[0].account)
        this.username1 = res.data[0].account
        this.password1 = res.data[0].password
        console.log(this.username1)
        console.log(this.password1)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  created () {
    this.creatCode()
  },
  methods: {
    jump () {
      console.log('点击成功')
      if (this.ruleForm.account === this.username1 && this.ruleForm.pass === this.password1) {
        if (this.code === this.ruleForm.checkcode) {
          this.$alert('登陆成功', '恭喜你', {
            confirmButtonText: '确定'
            // callback: action => {
            //   this.$message({
            //     // type: 'info'
            //     //  message: `action: ${action}`
            //   })
            // }
          })
          this.$emit('transfer', true)
          this.$router.push('/')
        } else {
          console.log('wrong password')
          this.$alert('请重新输入', '验证码错误', {
            confirmButtonText: '确定'
            // callback: action => {
            //   this.$message({
            //     // type: 'info'
            //     //  message: `action: ${action}`
            //   })
            // }
          })
          this.creatCode()
        }
      } else {
        console.log('wrong password')
        this.$alert('请重新输入', '账号/密码错误', {
          confirmButtonText: '确定'
        })
        this.creatCode()
      }
    },
    creatCode () {
      // 先清空验证码的输入
      this.code = ''
      this.checkCode = ''
      // 验证码的长度
      var codeLength = 4
      // 随机数
      var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      for (var i = 0; i < codeLength; i++) {
        // 取得随机数的索引（0~35）
        var index = Math.floor(Math.random() * 36)
        // 根据索引取得随机数加到code上
        this.code += random[index]
      }
    }
  }

  // this.$router.push("/cart")
  // 传递的参数用{{ $route.query.goodsId }}获取
  // this.$router.push({path: '/cart?goodsId=12'})
  // this.$router.go(-2)
  // 后退两步
}
</script>
