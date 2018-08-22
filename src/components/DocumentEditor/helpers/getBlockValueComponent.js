import { BLOCK_TYPES } from '@tipe/tipe-constants'

export default blockType => {
  switch (blockType) {
    case BLOCK_TYPES.NUMBER:
      return 'tipe-number-input'
    case BLOCK_TYPES.BOOLEAN:
      return 'tipe-switch'
    case BLOCK_TYPES.SIMPLE_TEXT:
      return 'tipe-text-input'
    default:
      return 'tipe-switch'
  }
}
