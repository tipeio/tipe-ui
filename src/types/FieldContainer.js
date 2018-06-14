import vueTypes from 'vue-types'

export default {
  name: vueTypes.string.def(''),
  field: vueTypes.object.def({}),
  label: vueTypes.string,
  status: vueTypes.oneOf(['error', 'success', 'warning', '']).def(''),
  errorMessage: vueTypes.string,
  successMessage: vueTypes.string,
  warningMessage: vueTypes.string
}