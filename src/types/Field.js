import vueTypes from 'vue-types'

export default {
  name: vueTypes.string,
  field: vueTypes.object,
  label: vueTypes.string.isRequired,
  status: vueTypes.oneOf(['error', 'success', 'warning', '']).def(''),
  errorMessage: vueTypes.string,
  successMessage: vueTypes.string,
  warningMessage: vueTypes.string
}
