# devopswebpack

> 这是一个由webpack项目为基础的前端项目，整个项目分为开发，运维和服务器三部分，实现了开发人员提交代码至此github，自动触发jenkins构建及阿里云docker构建，jenkins在服务器端运行，运维人员通过docker可一键部署项目，从工具的层面实现了devops。

## Build Setup

## 登录阿里云
> sudo docker login --username=叫纯数字怎么了 registry.cn-qingdao.aliyuncs.com

## 拉取镜像
> sudo docker pull registry.cn-qingdao.aliyuncs.com/ivansmoot/devops_webpack:[镜像版本号]

## 请勿push镜像到阿里云

> 开发人员打的tag格式应为release-vX.X.X(例：release-v1.0.0)，否则无法触发阿里云的自动构建
