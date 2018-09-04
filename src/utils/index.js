const validFileTypes = {
  'image/jpeg': true,
  'image/jpg': true,
  'image/gif': true,
  'image/png': true
}

export const isImage = fileType => {
  return validFileTypes[fileType]
}
