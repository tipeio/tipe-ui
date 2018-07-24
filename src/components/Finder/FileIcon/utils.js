const FileTypeToIconMap = {
  document: 'document-filled',
  folder: 'folder-filled',
  template: 'template-filled'
}

const getFileIcon = file => FileTypeToIconMap[file.type]

export { getFileIcon }
