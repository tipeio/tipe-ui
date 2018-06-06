const FileTypeToIconMap = {
  document: 'file',
  folder: 'folder'
}

const getFileIcon = file => FileTypeToIconMap[file.type]

export { getFileIcon }
