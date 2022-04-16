const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  chainWebpack: config => {
    // 修改文件引入自定义路径
    config.resolve.alias.set('@', resolve('src/'))
    config.resolve.alias.set('components', resolve('src/components/'))
    config.resolve.alias.set('view', resolve('src/views/'))
  },
})
