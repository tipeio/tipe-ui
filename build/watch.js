const path = require('path')
const chokidar = require('chokidar')
const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
const {
  COMPONENTS_DIR,
  generateComponentNames,
  cleanTmp,
  generateFile,
  writeFile
} = require('./shared')

// Clean tmp directory
cleanTmp()

// create the main file for webpack
let lastOutput = null
let lastComponentLength = 0
let webpackWatcher = null
function rebuild() {
  const names = generateComponentNames()
  const newLen = names.length
  const hasLessComponents = newLen < lastComponentLength
  const hasMoreComponents = newLen > lastComponentLength
  // restart webpack to avoid webpack importing a file that isn't there
  if (hasLessComponents && webpackWatcher) {
    console.log('Restarting webpack watch')
    webpackWatcher.close()
  }
  if (hasMoreComponents && lastComponentLength !== 0) {
    console.log('Watching new Component')
  }
  lastComponentLength = newLen
  // create main file for webpack
  const output = generateFile(names)
  // restart or create webpack
  if (hasLessComponents || !webpackWatcher) {
    webpackWatcher = createWebpackWatcher()
  }
  // if there are changes then write them
  if (lastOutput !== output) {
    lastOutput = output
    writeFile(output)
    return true
  }
  return false
}
// generate initial build
rebuild()

// watch for changes to generate index again
const fileWatcher = chokidar.watch(COMPONENTS_DIR + '/**', {
  persistent: true
})

let ready = false
fileWatcher
  .on('add', _path => {
    if (ready && rebuild()) {
      console.log(
        'Compponent file changed',
        path.relative(COMPONENTS_DIR, _path)
      )
    }
  })
  .on('addDir', _path => {
    if (ready && rebuild()) {
      console.log(
        'Component directory changed',
        path.relative(COMPONENTS_DIR, _path)
      )
    }
  })
  .on('ready', () => {
    // after initial watch
    ready = true
  })

function createWebpackWatcher() {
  let lastHash = null
  const config = require('./configs/webpack.dev.conf')
  config.plugins.push(new WriteFilePlugin())
  const compiler = webpack(config)
  return compiler.watch({}, (err, stats) => {
    // copy/pasta from webpack cli
    if (err) {
      // Do not keep cache anymore
      compiler.purgeInputFileSystem()
    }
    if (err) {
      lastHash = null
      console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      fileWatcher.close()
      process.exit(1)
    }
    if (stats.hash !== lastHash) {
      lastHash = stats.hash
      if (stats.compilation && stats.compilation.errors.length !== 0) {
        const errors = stats.compilation.errors
        if (errors[0].name === 'EntryModuleNotFoundError') {
          console.error(
            '\n\u001b[1m\u001b[31mInsufficient number of arguments or no entry found.'
          )
          console.error(
            "\u001b[1m\u001b[31mAlternatively, run 'webpack(-cli) --help' for usage info.\u001b[39m\u001b[22m\n"
          )
        }
      }
    }
    if (err || stats.hasErrors()) {
      process.stdout.write(stats.toString('errors-only') + '\n')
    }
  })
}

// watch components and rebuild
;[
  'SIGINT',
  'SIGTERM',
  'SIGHUP',
  'SIGQUIT',
  'exit',
  'uncaughtException'
].forEach(event => {
  process.on(event, () => {
    fileWatcher.close()
    webpackWatcher.close()
  })
})

console.log('Watching Components')
