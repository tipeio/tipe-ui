const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  const cssRule = defaultConfig.module.rules.find(
    r => r.test.toString() === /\.css$/.toString()
  )
  const postCssUse = cssRule.use.find(
    u => u.loader && u.loader.indexOf('postcss-loader') > -1
  )
  delete postCssUse.options

  defaultConfig.resolve.alias['@'] = path.join(__dirname, '..', 'src')

  const fileRule = defaultConfig.module.rules.find(r =>
    /svg/.test(r.test.toString())
  )

  defaultConfig.module.rules = defaultConfig.module.rules.filter(
    r => !/svg/.test(r.test.toString())
  )

  defaultConfig.module.rules.push({
    ...fileRule,
    test: new RegExp(fileRule.test.toString().replace(/\|svg/, ''))
  })

  defaultConfig.module.rules.push({
    test: /\.svg$/,
    loader: 'svg-sprite-loader'
  })

  return defaultConfig
}
