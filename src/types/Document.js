import vueTypes from 'vue-types'
import DocumentBlocks from '@/types/DocumentBlock'

export default {
  name: vueTypes.string,
  blocks: vueTypes.arrayOf(vueTypes.shape(DocumentBlocks))
}
