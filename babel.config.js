module.exports = {
  presets: [["env", { "modules": false }]],
  env: {
    test: {
      "presets": [["env", { "targets": { "node": "current" } }]]
    }
  }
}

// 如果jest不能运行，把下面的注释掉，npm run serve时记得打开
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}