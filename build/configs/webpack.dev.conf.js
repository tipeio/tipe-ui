const merge = require('webpack-merge')
const base = require('./webpack.base.conf')

module.exports = merge(base, {
  externals: ['vue', 'vue-types', '@type/type-config', '@tipe/tipe-constants'],
  devtool: 'cheap-module-eval-source-map'
})
