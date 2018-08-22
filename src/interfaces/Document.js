import vueTypes from 'vue-types'
import DocumentBlocks from './DocumentBlock'

export default {
  id: vueTypes.string.def(''),
  name: vueTypes.string,
  blocks: vueTypes.arrayOf(vueTypes.shape(DocumentBlocks))
}
