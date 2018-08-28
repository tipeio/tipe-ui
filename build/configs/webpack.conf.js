const path = require('path')
const ROOT_DIR = path.resolve(__dirname, '../../')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')
const SpritePlugin = require('svg-sprite-loader/plugin')

module.exports = function({ ENV }) {
  console.log('ENV: ' + ENV)
  const isProd = ENV === 'production'
  const isDev = ENV === 'development'
  function onEnv(fn) {
    return typeof fn === 'function' ? fn(isProd) : fn
  }
  function switchEnv(dev, prod) {
    const fn = isDev ? dev : prod
    return onEnv(fn)
  }

  const externals = ['vue', 'vue-types']

  if (isProd) {
    externals.push('@type/type-config')
    externals.push('@tipe/tipe-constants')
  }
  const plugins = []
  if (isProd) {
    plugins.push(new UglifyJSWebpackPlugin({
      sourceMap: true,
      parallel: true,
      cache: true
    }))
  }
  const rules = [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    switchEnv(
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      () => {
        plugins.push(new ExtractTextPlugin('styles.css'))
        return {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: isProd,
                  importLoaders: 1,
                  hmr: isDev
                }
              },
              'postcss-loader'
            ]
          })
        }
      }
    ),
    onEnv((isProd) => {
      if (isProd) {
        plugins.push(new SpritePlugin())
      }
      const loader = {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: isProd
        }
      }
      // if (isProd) {
      //   loader.options.spriteFilename = (svgPath) => `@tipe/ui/dist${svgPath}`
      // }
      return loader
    })
  ]

  console.log('Plugins\n' + JSON.stringify(plugins.map(plug => plug.constructor.name), null, 2))

  const config = {
    entry: path.resolve(ROOT_DIR, 'build/tmp/index.js'),
    output: {
      path: path.resolve(ROOT_DIR, 'dist'),
      filename: 'index.js',
      library: '',
      libraryTarget: 'umd'
    },
    externals,
    plugins,
    module: {
      rules
    },
    resolve: {
      alias: {
        '@': path.resolve(ROOT_DIR, './src')
      },
      extensions: ['.js', '.json', '.vue', '.css']
    }
  }
  if (isDev) {
    config.devtool = 'cheap-module-eval-source-map'
  } else {
    config.devtool = 'source-map'
  }
  return config
}
