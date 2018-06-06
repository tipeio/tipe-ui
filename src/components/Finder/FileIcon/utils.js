const FileTypeToIconMap = {
  document: 'file',
  folder: 'folder',
  template: 'template'
}

const getFileIcon = file => FileTypeToIconMap[file.type]

export { getFileIcon }
