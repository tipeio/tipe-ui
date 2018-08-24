const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

const COMPONENTS_DIR = path.resolve(__dirname, '../src/components')
const TMP_DIR = path.resolve(__dirname, 'tmp')
const componentFileNames = generateComponentNames()

// only return component directories that have valid index and vue files
function generateComponentNames() {
  const components = fs.readdirSync(COMPONENTS_DIR)
  const watchedComponents = components.filter(folder => {
    const dir = fs.readdirSync(path.join(COMPONENTS_DIR, folder))
    let hasVue = false
    let hasIndex = false
    dir.forEach(file => {
      if (/\.vue$/.test(file)) {
        hasVue = true
      } else if (/index\.js$/.test(file)) {
        hasIndex = true
      }
    })
    return hasIndex && hasVue
  })
  return watchedComponents
}

// Clean tmp directory
function cleanTmp() {
  rimraf.sync(TMP_DIR)
  fs.mkdirSync(TMP_DIR)
}

function printLine(filename) {
  return `export { default as Tipe${filename} } from '@/components/${filename}'\n`
}

function generateFile(fileNames) {
  let output = ''
  // Styles
  output += "import '@/styles/globals'\n"
  output += "export { default as TipeInterfaces } from '@/interfaces'\n"

  // Components
  output += fileNames.reduce((string, filename) => {
    return string + printLine(filename)
  }, '')
  return output
}

function writeFile(output) {
  fs.writeFile(path.resolve(TMP_DIR, 'index.js'), output, function(err) {
    if (err) {
      return console.log(err)
    }
  })
}

module.exports = {
  COMPONENTS_DIR,
  TMP_DIR,
  generateComponentNames,
  componentFileNames,
  cleanTmp,
  printLine,
  generateFile,
  writeFile
}
