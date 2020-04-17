module.exports = {
  presets: [["env", { "modules": false }]],
  env: {
    test: {
      "presets": [["env", { "targets": { "node": "current" } }]]
    }
  }
}
  
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}