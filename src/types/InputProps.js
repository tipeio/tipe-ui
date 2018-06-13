import vueTypes from 'vue-types'

export default {
  status: vueTypes.oneOf(['success', 'error', 'warning']),
  successMessage: vueTypes.string.def(''),
  errorMessage: vueTypes.string.def(''),
  warningMessage: vueTypes.string.def(''),
  waiting: vueTypes.bool.def(false),
  disabled: vueTypes.bool.def(false),
  size: vueTypes.oneOf(['small', 'medium', 'large']).def('medium'),
  tabindex: vueTypes.number.def(-1)
}
