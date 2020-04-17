module.exports = {
  preset: "ts-jest",
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  // 将不忽略 lodash-es, other-es-lib 这些es库, 从而使babel-jest去处理它们
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"],
  // 默认风格的覆盖率
  collectCoverage: true,
  collectCoverageFrom: ["**/src/components/Login.vue", "!**/node_modules/**"]
}