const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

const COMPONENTS_DIR = path.resolve(__dirname, '../src/components')
const TMP_DIR = path.resolve(__dirname, 'tmp')

// Clean tmp directory
rimraf.sync(TMP_DIR)
fs.mkdirSync(TMP_DIR)

// create the main file for webpack
const componentFileNames = fs.readdirSync(COMPONENTS_DIR)

let output = ''

// Styles
output += "import '@/styles/globals'\n"

// Components
const printLine = filename =>
  `export { default as Tipe${filename} } from '@/components/${filename}'\n`

output += componentFileNames.reduce((string, filename) => {
  return string + printLine(filename)
}, '')

fs.writeFile(path.resolve(TMP_DIR, 'main.js'), output, function(err) {
  if (err) {
    return console.log(err)
  }

  process.exit()
})
