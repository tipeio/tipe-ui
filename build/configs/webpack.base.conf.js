const path = require('path')
const ROOT_DIR = path.resolve(__dirname, '../../')

module.exports = {
  entry: path.resolve(ROOT_DIR, 'build/tmp/index.js'),
  output: {
    path: path.resolve(ROOT_DIR, 'dist/'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  externals: ['vue', 'vue-types'],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(ROOT_DIR, './src')
    },
    extensions: ['.js', '.json', '.vue', '.css']
  }
}
