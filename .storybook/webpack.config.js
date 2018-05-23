const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader', options: { importLoaders: 1 } },
      { loader: 'postcss-loader' }
    ],
    include: path.join(__dirname, '/src')
  })

  defaultConfig.resolve = {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '..', 'src')
    }
  }

  return defaultConfig
}
