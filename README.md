# CrazyDave: 歪比歪比

> 这是一个由Webpack3为基础的前端项目，页面展示内容为Devops相关内容，项目提交后触发阿里云的hook构建，再将构建后的容器部署在k8s上(我在淦神魔)。

## 环境

> 为了运行项目你需要有git和npm环境</br>
> 涉及到容器的部分需要有docker和kubernetes

## Code Step
> git init </br>
> git pull https://github.com/ivansmoot/CrazyDave.git </br>
> npm install 下载依赖 </br>
> 修改package.json中，scripts里的js命令的ip为你的本机ip </br>
> 修改network文件夹下request.js文件中的baseURL为你的本机ip </br>
> npm run js 启动后端模拟端口 </br>
> npm run serve 启动项目 </br>
> enjoy your code

## Push Step
> npm run build 将项目打包进dist文件夹 </br>
> git add . </br>
> git commit -m 'your notice' </br>
> git tag -a release-vX.X.X -m 'your notice' </br>
> git remote add origin https://github.com/ivansmoot/CrazyDave.git </br>
> git push origin master --tags


## Build Step
> 登录阿里云 </br>
> sudo docker login --username=叫纯数字怎么了 registry.cn-shanghai.aliyuncs.com </br>
> 拉取镜像 </br>
> sudo docker pull registry.cn-shanghai.aliyuncs.com/ivansmoot/crazy-dave:[镜像版本号] </br>
> docker run -p 8080:80 -d [镜像ID] </br>
> 请勿push镜像到阿里云 </br>
> 开发人员打的tag格式应为release-vX.X.X(例：release-v1.0.0)，否则无法触发阿里云的自动构建

## 部署
> minikube start --image-mirror-country cn \
    --iso-url=https://kubernetes.oss-cn-hangzhou.aliyuncs.com/minikube/iso/minikube-v1.7.3.iso \
    --registry-mirror=https://hoxk59i9.mirror.aliyuncs.com \
    --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers \
    --vmdriver=none
> </br> eval $(minikube docker-env) 切换到minikube的docker中 </br>
> 从阿里云拉镜像 </br>
> kubectl apply -f deployment.yml </br>
> 可以kubectl get pods查看 </br>
> kubectl apply -f service.yml </br>
> kubectl get svc查看端口 </br>
> minikube ip查看k8s虚拟机的ip </br>
> 用ip:端口号进行访问

## 其他你可能用到的命令
> 清空文件下的git：rm -rf .git/ </br>
> 修改镜像名：docker tag 当前镜像名 目标镜像名 然后删除原有镜像即可 </br>
> 升级npm：npm i -g npm </br>
> 如升级报错，可尝试 cnpm i -g npm 后重新升级 </br>
> npm install XX : </br>
> -P：即--save-prod，下载至dependencies，生产环境 </br>
> -D：即--save-dev，下载至devDependencies，开发环境 </br>
> npm查看当前项目的包：npm list --depth=0 </br>
> npm查看全局的包: npm list --depth=0 -g </br>
> 如果npm install报错4048 先npm cache clean --force 然后npm cache verify 再去npm install即可 </br>
> git reset --hard HEAD 可以清除当前的改动，方便忽略本地直接拉取远程 </br>


