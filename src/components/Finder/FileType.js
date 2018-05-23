import vueTypes from 'vue-types'

const fileTypes = ['document', 'folder']

export default vueTypes.shape({
  label: vueTypes.string,
  type: vueTypes.oneOf(fileTypes)
})
