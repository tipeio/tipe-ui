import vueTypes from 'vue-types'

export default {
  name: vueTypes.string.def(''),
  field: vueTypes.object.def({}),
  status: vueTypes.oneOf(['error', 'success', 'warning', '']).def('')
}
