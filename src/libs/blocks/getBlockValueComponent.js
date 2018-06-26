import * as BlockTypes from '@/constants/block/types'

export default blockType => {
  switch (blockType) {
    case BlockTypes.NUMBER:
      return 'tipe-number-input'
    case BlockTypes.BOOLEAN:
      return 'tipe-switch'
    case BlockTypes.SIMPLE_TEXT:
      return 'tipe-text-input'
    default:
      return 'tipe-switch'
  }
}
