import path from 'path'

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

  return defaultConfig
}
