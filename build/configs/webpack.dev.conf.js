const merge = require('webpack-merge')
const base = require('./webpack.base.conf')

module.exports = merge(base, {
  externals: ['vue', 'vue-types', '@type/type-config', '@tipe/tipe-constants'],
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'svg-sprite-loader'
      }
    ]
  }
})
