const FileTypeToIconMap = {
  document: 'document-filled',
  folder: 'folder-filled',
  template: 'template'
}

const getFileIcon = file => FileTypeToIconMap[file.type]

export { getFileIcon }
