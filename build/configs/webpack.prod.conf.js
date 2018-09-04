const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SpritePlugin = require('svg-sprite-loader/plugin')

module.exports = merge(base, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 1,
                hmr: false
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true
        }
      }
    ]
  },
  plugins: [
    new UglifyJSWebpackPlugin({
      sourceMap: true,
      parallel: true,
      cache: true
    }),
    new ExtractTextPlugin('styles.css'),
    new SpritePlugin()
  ]
})
