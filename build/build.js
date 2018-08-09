const {
  componentFileNames,
  cleanTmp,
  generateFile,
  writeFile
} = require('./shared')

// Clean tmp directory
cleanTmp()

// create the main file for webpack
const output = generateFile(componentFileNames)
writeFile(output)
