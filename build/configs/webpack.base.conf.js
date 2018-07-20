const path = require('path')
const ROOT_DIR = path.resolve(__dirname, '../../')

module.exports = {
  entry: path.resolve(ROOT_DIR, 'build/tmp/index.js'),
  output: {
    path: path.resolve(ROOT_DIR, 'build/lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'umd'
  },
  externals: [
    '@tipe/tipe-config',
    '@tipe/tipe-constants',
    '@tipe/tipe-interfaces',
    'vue',
    'vue-types'
  ],
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
      },
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
  },
  resolve: {
    alias: {
      '@': path.resolve(ROOT_DIR, './src')
    },
    extensions: ['.js', '.json', '.vue', '.css']
  }
}
