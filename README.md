# devopswebpack

> 这是一个由webpack项目为基础的前端项目，页面展示内容为Devops相关内容，项目提交后触发阿里云的hook构建，再将构建后的容器部署在k8s上。

## 环境

> 为了运行项目你需要有git和npm环境</br>
> 涉及到容器的部分需要有docker和kubernetes

## Code Step
> git init </br>
> git pull https://github.com/ivansmoot/theoutside.git </br>
> npm install 下载依赖 </br>
> npm run js 启动后端模拟端口 </br>
> npm run serve 启动项目 </br>
> enjoy your code

## Push Step
> npm run build 将项目打包进dist文件夹 </br>
> git add . </br>
> git commit -m 'your notice' </br>
> git tag -a release-vX.X.X </br>
> git push -m 'your notice' --tags


## Build Step
> 登录阿里云 </br>
> sudo docker login --username=叫纯数字怎么了 registry.cn-qingdao.aliyuncs.com </br>
> 拉取镜像 </br>
> sudo docker pull registry.cn-qingdao.aliyuncs.com/ivansmoot/devops_webpack:[镜像版本号] </br>
> 请勿push镜像到阿里云 </br>
> 开发人员打的tag格式应为release-vX.X.X(例：release-v1.0.0)，否则无法触发阿里云的自动构建
