(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],h=0,p=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"024c":function(t,e,a){"use strict";var n=a("71ea"),s=a.n(n);s.a},"02ff":function(t,e,a){"use strict";var n=a("3bd6"),s=a.n(n);s.a},"10fb":function(t,e,a){"use strict";var n=a("510e"),s=a.n(n);s.a},"1c41":function(t,e,a){"use strict";var n=a("69f3"),s=a.n(n);s.a},"231c":function(t,e,a){},"3bd6":function(t,e,a){},4070:function(t,e){t.exports="data:image/png;base64,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"},"428f":function(t,e,a){t.exports=a.p+"img/看板.a2948876.jpg"},"510e":function(t,e,a){},5533:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ab8b");var n=a("2b0e"),s=a("9ca8"),i=(a("ef97"),a("5c96")),r=a.n(i),o=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal",on:{click:t.tohome}},[t._v("Powered by Webpack")]),a("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[a("a",{staticClass:"p-2 text-dark",attrs:{href:"#"},on:{click:t.abug}},[t._v("Features")]),a("a",{staticClass:"p-2 text-dark",attrs:{href:"#"}},[t._v("Enterprise")]),a("a",{staticClass:"p-2 text-dark",attrs:{href:"#"}},[t._v(t._s(t.amilogin))]),a("a",{staticClass:"p-2 text-dark",on:{click:t.tochat}},[t._v("Chat")])]),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.login,expression:"!login"}],staticClass:"btn btn-outline-primary",on:{click:t.tologin}},[t._v("log in")]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],staticClass:"btn btn-outline-primary",on:{click:t.logout}},[t._v("log out")])]),a("router-view",{on:{transfer:t.islogin,transfer2:t.username}}),a("footer",{staticClass:"container py-5",staticStyle:{position:"relative",bottom:"0"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md"},[a("svg",{staticClass:"d-block mb-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",role:"img",viewBox:"0 0 24 24",focusable:"false"}},[a("title",[t._v("Product")]),a("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),a("path",{attrs:{d:"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"}})]),a("small",{staticClass:"d-block mb-3 text-muted"},[t._v("© 2017-2019")])]),t._m(0),t._m(1),t._m(2),t._m(3)])])],1)}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 col-md"},[a("h5",[t._v("Features")]),a("ul",{staticClass:"list-unstyled text-small"},[a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Cool stuff")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Random feature")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Team feature")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Stuff for developers")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Another one")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Last time")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 col-md"},[a("h5",[t._v("Resources")]),a("ul",{staticClass:"list-unstyled text-small"},[a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Resource")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Resource name")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Another resource")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Final resource")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 col-md"},[a("h5",[t._v("Resources")]),a("ul",{staticClass:"list-unstyled text-small"},[a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Business")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Education")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Government")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Gaming")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 col-md"},[a("h5",[t._v("About")]),a("ul",{staticClass:"list-unstyled text-small"},[a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Team")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Locations")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Privacy")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Terms")])])])])}],c=a("2f62"),u={name:"index",data:function(){return{login:!1,uname:""}},computed:Object(c["b"])({amilogin:function(t){return t.login.islogin0}}),methods:{tohome:function(){this.$router.push("/")},islogin:function(t){this.login=t},username:function(t){this.uname=t},logout:function(){var t=this;this.$confirm("确认退出账号吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"成功退出账号"}),t.login=!1,t.$store.commit("login/nnnlogin")})).catch((function(){t.$message({type:"info",message:"已取消退出"})})),console.log(this.login)},tologin:function(){this.$router.push("/login")},tochat:function(){this.$router.push("/chat")},abug:function(){this.$router.commit("wrongcommit")}}},h=u,p=(a("024c"),a("2877")),d=Object(p["a"])(h,o,l,!1,null,null,null),f=d.exports,m=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[a("div",{staticClass:"col-md-5 p-lg-5 mx-auto my-5"},[a("h1",{staticClass:"display-4 font-weight-normal"},[t._v("Devops")]),a("p",{staticClass:"lead font-weight-normal"},[t._v("DevOps is a set of practices that combines software development (Dev) and information-technology operations (Ops) which aims to shorten the systems development life cycle and provide continuous delivery with high software quality.")]),a("el-popover",{attrs:{placement:"top-start",title:"页面跳转",width:"300",trigger:"hover",content:"将会跳转至我的github地址，由于github服务器在国外，打开稍慢"}},[a("el-button",{staticClass:"thisbtn",attrs:{slot:"reference"},on:{click:t.tomygithub},slot:"reference"},[t._v("My github")])],1)],1),a("div",{staticClass:"product-device shadow-sm d-none d-md-block"}),a("div",{staticClass:"product-device product-device-2 shadow-sm d-none d-md-block"})]),a("div",{staticClass:"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"},[a("div",{staticClass:"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"},[a("div",{staticClass:"my-3 py-3"},[a("h2",{staticClass:"display-5"},[t._v("燃尽图")]),a("el-link",{staticStyle:{color:"grey"},on:{click:t.toRanJin}},[t._v("点此打开燃尽图"),a("i",{staticClass:"el-icon-view el-icon--right"})])],1),a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"400px",height:"200px"},attrs:{src:t.url,"preview-src-list":t.srcList}})],1)]),a("div",{staticClass:"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"},[a("div",{staticClass:"my-3 p-3"},[a("h2",{staticClass:"display-5"},[t._v("Kanban")]),a("el-link",{on:{click:t.toKanBan}},[t._v("click here to use a simple Kanban"),a("i",{staticClass:"el-icon-view el-icon--right"})])],1),a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"400px",height:"200px"},attrs:{src:t.url2,"preview-src-list":t.srcList2}})],1)])])])},v=[],b={name:"index",data:function(){return{url:a("8933"),srcList:[a("8933"),a("fc13"),a("c21e"),a("f38e")],url2:a("428f"),srcList2:[a("428f"),a("c686"),a("ef62")]}},methods:{tomygithub:function(){window.location.href="https://github.com/ivansmoot"},toKanBan:function(){this.$router.push("/kanban")},toRanJin:function(){this.$router.push("/ranjin")}}},x=b,y=(a("1c41"),Object(p["a"])(x,g,v,!1,null,"80ae8664",null)),w=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mydiv",attrs:{id:"app4"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"text-center mb-4"},[n("img",{staticClass:"mb-4",attrs:{src:a("4070"),alt:""}}),n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("登录")]),n("p",[t._v("Be agile")])]),n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"-30px"},attrs:{"status-icon":"",model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"账号",prop:"account"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"admin"},model:{value:t.ruleForm.account,callback:function(e){t.$set(t.ruleForm,"account",e)},expression:"ruleForm.account"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"pass"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{type:"password",placeholder:"password"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),n("el-form-item",{attrs:{label:"验证码",prop:"checkcode"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{id:"codeinput",placeholder:"Verification code"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.jump()}},model:{value:t.ruleForm.checkcode,callback:function(e){t.$set(t.ruleForm,"checkcode",e)},expression:"ruleForm.checkcode"}})],1),n("div",{staticStyle:{position:"absolute",right:"30px",bottom:"237px"}},[n("el-button",{attrs:{type:"primary",round:""},on:{click:t.creatCode}},[t._v(t._s(t.code))])],1),n("div",{staticStyle:{position:"absolute",right:"37px",bottom:"187px"}},[n("el-link",{attrs:{type:"info"},on:{click:t.toRegister}},[t._v("没有账号？前去注册")])],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"checkbox mb-3"},[t._m(0)]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"},on:{click:t.jump}},[t._v("登录")])],1)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"margin-left":"20px"}},[a("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" 记住我 ")])}],S=a("bc3a"),_=a.n(S);function P(t){var e=_.a.create({baseURL:"http://localhost:3000"});return e(t)}var O={name:"login",data:function(){return{dialog_visible:!0,data:[],code:"",ruleForm:{account:"",pass:"",checkcode:""},rules:{account:[{required:!0,message:"请输入账户",trigger:"blur"}],pass:[{required:!0,message:"请输入密码",trigger:"blur"}],checkcode:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},mounted:function(){var t=this;P({url:"/users"}).then((function(e){t.data=e.data})).catch((function(t){console.log(t)}))},created:function(){this.creatCode()},computed:Object(c["b"])({}),methods:{judgeLogin:function(t,e){for(var a=!1,n=0;n<this.data.length;n++)t===this.data[n].account&&e===this.data[n].password&&(a=!0);return a},jump:function(){var t=document.getElementById("codeinput");t.blur(),this.judgeLogin(this.ruleForm.account,this.ruleForm.pass)?this.code===this.ruleForm.checkcode?(this.$alert("登陆成功","恭喜你",{confirmButtonText:"确定"}),this.$store.commit("login/llllogin"),this.$emit("transfer",!0),this.$emit("transfer2",this.ruleForm.account),this.$router.push("/")):(console.log("wrong password"),this.$alert("请重新输入","验证码错误",{confirmButtonText:"确定"}),this.creatCode()):(console.log("wrong password"),this.$alert("请重新输入","账号/密码错误",{confirmButtonText:"确定"}),this.creatCode())},toRegister:function(){this.$router.push("/register")},creatCode:function(){this.code="",this.checkCode="";for(var t=4,e=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a=0;a<t;a++){var n=Math.floor(36*Math.random());this.code+=e[n]}}}},j=O,T=(a("d24b"),Object(p["a"])(j,k,C,!1,null,"3ebc9850",null)),R=T.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"kanban"}},[a("p",{staticStyle:{"text-align":"center",margin:"0 0 20px",height:"50px"}},[t._v("A simple KanBan")]),a("div",{staticStyle:{"text-align":"center"}},[a("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block",height:"500px"},attrs:{filterable:"","target-order":"original","render-content":t.renderFunc,titles:["BugList","待测试"],"button-texts":["到左边","到右边"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:t.data},on:{"left-check-change":t.leftCheckChange,"right-check-change":t.rightCheckChange,change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("el-popover",{attrs:{slot:"left-footer",placement:"top",width:"160",cclass:"transfer-footer"},slot:"left-footer",model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("el-input",{staticStyle:{position:"absolute",left:"0",top:"-45px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.pushdata()}},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.pushdata}},[t._v("确定")])],1),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("+")])],1),a("el-popover",{attrs:{slot:"right-footer",placement:"top",width:"160",cclass:"transfer-footer"},slot:"right-footer",model:{value:t.visible1,callback:function(e){t.visible1=e},expression:"visible1"}},[a("p",[t._v("确认删除选中的项吗？")]),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible1=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.deleteItems}},[t._v("确定")])],1),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("-")])],1)],1)],1)])},A=[],z=(a("99af"),a("c975"),a("a434"),a("e25e"),a("4328")),I=a.n(z);n["default"].prototype.$qs=I.a;var N={name:"kanban",data:function(){this.$createElement;return{data:[],value:[],renderFunc:function(t,e){return t("span",[e.key," - ",e.label])},visible:!1,visible1:!1,textarea:"",keynum:1,leftchoosen:[],rightchoosen:[]}},mounted:function(){var t=this;P({url:"/kanban"}).then((function(e){t.data=e.data;for(var a=0;a<e.data.length;a++)"right"===e.data[a].location&&t.value.push(e.data[a].key);t.keynum=t.findMaxKey(t.data)+1})).catch((function(t){console.log(t)}))},methods:{handleChange:function(t,e,a){if("right"===e)for(var n=0;n<a.length;n++)for(var s=0;s<this.data.length;s++)if(this.data[s].key===a[n]){var i=this.$qs.stringify({location:"right"});P({method:"patch",url:"/kanban/"+this.data[s].id,data:i}).then((function(t){console.log(t)}))}if("left"===e)for(var r=0;r<a.length;r++)for(var o=0;o<this.data.length;o++)if(this.data[o].key===a[r]){var l=this.$qs.stringify({location:"left"});P({method:"patch",url:"/kanban/"+this.data[o].id,data:l}).then((function(t){console.log(t)}))}},handleCurrentChange:function(t){this.currentPage=t},randomString:function(t){t=t||32;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=e.length,n="",s=0;s<t;s++)n+=e.charAt(Math.floor(Math.random()*(a+1)));return n},findMaxKey:function(t){for(var e=0,a=0;a<t.length;a++)e<parseInt(t[a].key)&&(e=parseInt(t[a].key));return e},leftCheckChange:function(t){for(var e=0;e<t.length;e++)-1===this.leftchoosen.indexOf(t[e])&&this.leftchoosen.push(t[e]);for(var a=0;a<this.leftchoosen.length;a++)-1===t.indexOf(this.leftchoosen[a])&&this.leftchoosen.splice(a,1)},rightCheckChange:function(t){for(var e=0;e<t.length;e++)-1===this.rightchoosen.indexOf(t[e])&&this.rightchoosen.push(t[e]);for(var a=0;a<this.rightchoosen.length;a++)-1===t.indexOf(this.rightchoosen[a])&&this.rightchoosen.splice(a,1)},pushdata:function(){var t=this;this.visible=!1;var e=this.$qs.stringify({id:this.randomString(32),key:this.keynum,label:this.textarea,location:"left"});P({method:"post",url:"/kanban",data:e}).then((function(t){console.log(t)})),P({url:"/kanban"}).then((function(e){t.data=e.data,t.keynum=t.findMaxKey(t.data)+1})).catch((function(t){console.log(t)})),this.textarea=null},deleteItems:function(){for(var t=this,e=this.leftchoosen.concat(this.rightchoosen),a=0;a<e.length;a++)for(var n=0;n<this.data.length;n++)this.data[n].key===e[a]&&P({method:"delete",url:"/kanban/"+this.data[n].id}).then((function(t){console.log(t)}));P({url:"/kanban"}).then((function(e){t.data=e.data,t.keynum=t.findMaxKey(t.data)+1})).catch((function(t){console.log(t)})),this.leftchoosen=[],this.rightchoosen=[],this.visible1=!1}}},D=N,q=(a("02ff"),Object(p["a"])(D,F,A,!1,null,null,null)),M=q.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chat"}},[a("div",{staticStyle:{position:"relative",width:"1000px",height:"auto","min-height":"440px","box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.1)",margin:"0 auto"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"username",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"content",label:"内容"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{ref:e.row.id,attrs:{placement:"top",width:"160"}},[a("el-input",{staticStyle:{position:"absolute",left:"0",top:"-45px"},attrs:{type:"textarea2",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.reply(e)}},model:{value:t.textarea2,callback:function(e){t.textarea2=e},expression:"textarea2"}}),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e._self.$refs[e.row.id].doClose()}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.reply(e)}}},[t._v("确定")])],1),a("el-button",{staticStyle:{position:"absolute",top:"10px",right:"76px"},attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v("回复")])],1),a("el-popover",{ref:e.row.date,attrs:{placement:"right",width:"400",trigger:"click"}},[a("el-card",{staticClass:"box-card",staticStyle:{position:"absolute",top:"-50px",left:"-50px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("全部回复")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){e._self.$refs[e.row.date].doClose()}}},[t._v("取消")])],1),t._l(t.getReplys,(function(e){return a("div",{key:e,staticClass:"text item"},[t._v(" "+t._s(e)+" ")])}))],2),a("el-button",{staticStyle:{position:"absolute",top:"5px",right:"20px"},attrs:{slot:"reference",type:"text",size:"small"},on:{click:function(a){return t.lookReply(e)}},slot:"reference"},[t._v(" 查看 "),a("el-badge",{staticClass:"mark",staticStyle:{"background-color":"white"},attrs:{value:t.replynum(e,t.filterInfs),size:"mini"}})],1)],1)]}}])})],1),a("div",{staticStyle:{height:"50px"}}),a("el-pagination",{staticStyle:{position:"absolute",bottom:"10px",left:"400px"},attrs:{background:"",layout:"prev, pager, next","page-size":t.pagesize,total:this.filterInfs.length+1,"current-page":t.currentPage},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),a("p"),a("div",{staticStyle:{margin:"0 auto",width:"600px"}},[a("el-tag",{staticStyle:{left:"100px"},attrs:{type:"info"}},[t._v("发表评论")]),a("p"),a("el-input",{staticStyle:{width:"600px"},attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"140","show-word-limit":""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.pushContent()}},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),a("div",{staticStyle:{position:"relative",left:"520px",top:"15px"}},[a("el-button",{attrs:{type:"primary",round:""},on:{click:t.pushContent}},[t._v("发表")])],1)],1)])},B=[];a("fb6a");n["default"].prototype.$qs=I.a;var K={name:"chat",data:function(){return{textarea:"",textarea2:"",pagesize:6,currentPage:1,filterInfs:[],uname:"",getReplys:[]}},mounted:function(){var t=this;!1===this.$parent.login&&this.$confirm("该功能需要先登陆","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$router.push("/login")})).catch((function(){t.$router.push("/")})),this.uname=this.$parent.uname,P({url:"/content"}).then((function(e){t.filterInfs=e.data})).catch((function(t){console.log(t)}))},computed:{tableData:function(){return this.filterInfs.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)},replynum:function(){return function(t,e){for(var a,n=0;n<e.length;n++)t.row.id===e[n].id&&(a=e[n].reply.length-e[n].alreadyReadNum-2);return a}}},methods:{reply:function(t){var e=this;t._self.$refs[t.row.id].doClose(),P({url:"/content"}).then((function(a){for(var n=0;n<a.data.length;n++)if(a.data[n].id===t.row.id){for(var s=a.data[n].id,i=[],r=0;r<a.data[n].reply.length;r++)i.push(a.data[n].reply[r]);i.push(e.textarea2);var o=e.$qs.stringify({reply:i},{arrayFormat:"repeat"});P({method:"patch",url:"/content/"+s,data:o}).then((function(t){console.log(t)})),e.textarea2="",P({url:"/content"}).then((function(t){e.filterInfs=t.data})).catch((function(t){console.log(t)}))}})).catch((function(t){console.log(t)}))},lookReply:function(t){var e=this;this.getReplys=[],P({url:"/content"}).then((function(a){for(var n=0;n<a.data.length;n++)if(a.data[n].id===t.row.id)for(var s=2;s<a.data[n].reply.length;s++)e.getReplys.push(a.data[n].reply[s]);for(var i=0;i<e.filterInfs.length;i++)if(e.filterInfs[i].id===t.row.id){e.filterInfs[i].alreadyReadNum=e.filterInfs[i].reply.length-2;var r=e.$qs.stringify({alreadyReadNum:e.filterInfs[i].alreadyReadNum});P({method:"patch",url:"/content/"+e.filterInfs[i].id,data:r}).then((function(t){console.log(t)}))}})).catch((function(t){console.log(t)}))},handleCurrentChange:function(t){this.currentPage=t},randomString:function(t){t=t||32;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=e.length,n="",s=0;s<t;s++)n+=e.charAt(Math.floor(Math.random()*(a+1)));return n},getdate:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth(),n=t.getDate(),s=t.getHours(),i=t.getMinutes(),r=t.getSeconds();a<10&&(a="0"+a),n<10&&(n="0"+n),s<10&&(s="0"+s),i<10&&(i="0"+i),n<10&&(r="0"+r);var o=e+"-"+a+"-"+n+" "+s+":"+i+":"+r;return o},pushContent:function(){var t=this,e=this.$qs.stringify({id:this.randomString(32),username:this.uname,date:this.getdate(),content:this.textarea,reply:["",""],alreadyReadNum:0},{arrayFormat:"repeat"});P({method:"post",url:"/content",data:e}).then((function(t){console.log(t)})),P({url:"/content"}).then((function(e){t.filterInfs=e.data})).catch((function(t){console.log(t)})),this.textarea="",this.currentPage=Math.ceil((this.filterInfs.length+1)/this.pagesize)}}},G=K,E=(a("93e7"),Object(p["a"])(G,V,B,!1,null,"91a1dace",null)),X=E.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ranjin"},[a("v-chart",{ref:"chart1",attrs:{options:t.orgOptions,"auto-resize":!0}}),a("div",{staticStyle:{position:"relative",height:"200px"}},[a("div",{staticStyle:{position:"absolute",width:"400px",left:"250px",top:"50px"}},[a("span",{staticStyle:{position:"absolute",left:"100px",top:"-30px"}},[t._v("请选择项目起止时间")]),a("el-date-picker",{staticStyle:{width:"380px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("el-button",{staticStyle:{position:"absolute",left:"100px",top:"50px"},attrs:{type:"primary",round:""},on:{click:t.showdate}},[t._v("绘制理想燃尽图")])],1),a("div",{staticStyle:{position:"absolute",width:"200px",left:"750px",top:"50px"}},[a("span",{staticStyle:{position:"absolute",left:"155px",top:"-30px",width:"200px"}},[t._v("请输入当前进度")]),a("el-input",{staticStyle:{position:"absolute",width:"240px",left:"-40px"},attrs:{placeholder:"请输入日期(格式:2020-03-20)","suffix-icon":"el-icon-date"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),a("el-input",{staticStyle:{position:"absolute",left:"230px"},attrs:{placeholder:"请输入剩余进度","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.showdate2()}},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}}),a("el-button",{staticStyle:{position:"absolute",left:"140px",top:"50px"},attrs:{type:"primary",round:""},on:{click:t.showdate2}},[t._v("绘制当前燃尽图")])],1)])],1)},Q=[],Y={name:"ranjin",data:function(){return{orgOptions:{},value1:"",xData:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],yData:[820,932,901,934,1290,1330,1320],yData2:[],input1:"",input2:""}},mounted:function(){this.drawIt()},methods:{drawIt:function(){this.orgOptions={xAxis:{type:"category",data:this.xData},yAxis:{type:"value"},series:[{data:this.yData,type:"line",smooth:!0},{data:this.yData2,type:"line",smooth:!0}]}},showdate:function(){this.xData=[],this.yData=[];for(var t=parseInt(this.value1[0].substr(8,2)),e=parseInt(this.value1[1].substr(8,2)),a=t;a<=e;a++)this.xData.push(a);this.yData.push("100");for(var n=100,s=100/(e-t),i=t+1;i<e;i++)n-=s,this.yData.push(n);this.yData.push("0"),this.drawIt()},judgedate:function(){var t=/^[0-9]{4}-[0-9]{2}-[0-9]{2}/;if(t.test())return!0;var e=!1,a=parseInt(this.input1.substr(8,2)),n=parseInt(this.input1.substr(0,4)),s=parseInt(this.input1.substr(5,2)),i=parseInt(this.value1[0].substr(8,2)),r=parseInt(this.value1[1].substr(8,2)),o=parseInt(this.value1[0].substr(0,4)),l=parseInt(this.value1[1].substr(0,4)),c=parseInt(this.value1[0].substr(5,2)),u=parseInt(this.value1[1].substr(5,2)),h=[],p=[],d=[];return h.push(o),h.push(c),h.push(i),p.push(l),p.push(u),p.push(r),d.push(n),d.push(s),d.push(a),d[0]>=h[0]&&d[1]>=h[1]&&d[2]>=h[2]&&d[0]<=p[0]&&d[1]<=p[1]&&d[2]<=p[2]&&(e=!0),e},showdate2:function(){var t=parseInt(this.input1.substr(8,2)),e=parseInt(this.input2),a=t-this.xData[0];this.judgedate()?(this.yData2[a]=e,this.drawIt()):this.$message({message:"你这日期输得有问题啊",type:"warning"})}}},H=Y,J=(a("a13a"),Object(p["a"])(H,L,Q,!1,null,"37e9c1a2",null)),W=J.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mydiv"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"text-center mb-4"},[n("img",{staticClass:"mb-4",attrs:{src:a("4070"),alt:""}}),n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("注册")]),n("p",[t._v("Be agile")])]),n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"-30px"},attrs:{"status-icon":"",model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"账号",prop:"account"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"account"},model:{value:t.ruleForm.account,callback:function(e){t.$set(t.ruleForm,"account",e)},expression:"ruleForm.account"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"pass"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{type:"password",placeholder:"input password"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),n("el-form-item",{attrs:{label:"确认密码",prop:"pass2"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{type:"password",placeholder:"confirm password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.regi()}},model:{value:t.ruleForm.pass2,callback:function(e){t.$set(t.ruleForm,"pass2",e)},expression:"ruleForm.pass2"}})],1)],1),n("br"),n("button",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"},on:{click:t.regi}},[t._v("注册")])],1)},$=[];n["default"].prototype.$qs=I.a;var Z={name:"register",data:function(){return{dialog_visible:!0,code:"",data:[],ruleForm:{account:"",pass:"",pass2:""},rules:{account:[{required:!0,message:"请输入账户",trigger:"blur"}],pass:[{required:!0,message:"请输入密码",trigger:"blur"}],pass2:[{required:!0,message:"请输入确认密码",trigger:"blur"}]}}},mounted:function(){var t=this;P({url:"/users"}).then((function(e){t.data=e.data})).catch((function(t){console.log(t)}))},methods:{judgeAccount:function(t){var e=1;if(""===t)return-1;for(var a=0;a<this.data.length;a++)this.data[a].account===t&&(e=-2);return e},judgePass:function(t,e){return t!==e?-1:""===t?-2:1},randomString:function(t){t=t||32;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=e.length,n="",s=0;s<t;s++)n+=e.charAt(Math.floor(Math.random()*(a+1)));return n},regi:function(){var t=this;if(1===this.judgeAccount(this.ruleForm.account)&&1===this.judgePass(this.ruleForm.pass,this.ruleForm.pass2)){console.log("可以注册");var e=this.$qs.stringify({id:this.randomString(32),account:this.ruleForm.account,password:this.ruleForm.pass});P({method:"post",url:"/users",data:e}).then((function(t){console.log(t)})),this.$alert("将跳转至登陆页","注册成功",{confirmButtonText:"确定",callback:function(e){t.$router.push("/login")}})}else-1===this.judgeAccount(this.ruleForm.account)?this.$message({message:"账号不能为空",type:"warning"}):-2===this.judgeAccount(this.ruleForm.account)?this.$message({message:"账号已存在",type:"warning"}):-1===this.judgePass(this.ruleForm.pass,this.ruleForm.pass2)?this.$message({message:"两次密码不一致",type:"warning"}):-2===this.judgePass(this.ruleForm.pass,this.ruleForm.pass2)&&this.$message({message:"密码不能为空",type:"warning"})}}},tt=Z,et=(a("10fb"),Object(p["a"])(tt,U,$,!1,null,"52ac6b98",null)),at=et.exports;n["default"].use(m["a"]);var nt=new m["a"]({mode:"history",routes:[{path:"/",redirect:"/firstpage"},{path:"/firstpage",component:w},{path:"/login",component:R},{path:"/kanban",component:M},{path:"/chat",component:X},{path:"/ranjin",component:W},{path:"/register",component:at}],scrollBehavior:function(t,e,a){return{x:0,y:0}}}),st=nt,it={islogin0:!1},rt={},ot={},lt={llllogin:function(t){t.islogin0=!0},nnnlogin:function(t){t.islogin0=!1}},ct={namespaced:!0,state:it,getters:rt,actions:ot,mutations:lt};n["default"].use(c["a"]);var ut=!1,ht=new c["a"].Store({modules:{login:ct},strict:ut}),pt=a("dc21"),dt=a("e594");pt["a"]({dsn:"https://68de2092117f4935876222ebf7bd3d5a@o376878.ingest.sentry.io/5198161",integrations:[new dt["a"]({Vue:n["default"],attachProps:!0})],release:"crazydave@0.5.0",logErrors:!0}),n["default"].component("v-chart",s["a"]),n["default"].use(r.a),new n["default"]({router:st,store:ht,render:function(t){return t(f)}}).$mount("#app")},"69f3":function(t,e,a){},"71ea":function(t,e,a){},8933:function(t,e,a){t.exports=a.p+"img/燃尽图-按时完成.9719da8e.png"},"93e7":function(t,e,a){"use strict";var n=a("d174"),s=a.n(n);s.a},a13a:function(t,e,a){"use strict";var n=a("5533"),s=a.n(n);s.a},c21e:function(t,e,a){t.exports=a.p+"img/燃尽图-未完成.e0fafe63.png"},c686:function(t,e,a){t.exports=a.p+"img/看板2.f7c5ad3e.png"},d174:function(t,e,a){},d24b:function(t,e,a){"use strict";var n=a("231c"),s=a.n(n);s.a},ef62:function(t,e,a){t.exports=a.p+"img/看板3.b9d36475.png"},f38e:function(t,e,a){t.exports=a.p+"img/燃尽图-落后赶上.2cc666e2.png"},fc13:function(t,e,a){t.exports=a.p+"img/燃尽图-提前完成.b995008a.png"}});
//# sourceMappingURL=app.5f5af51e.js.map