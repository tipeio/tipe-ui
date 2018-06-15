import vueTypes from 'vue-types'

export default {
  name: vueTypes.string.def(''),
  value: vueTypes.any,
  status: vueTypes.oneOf(['success', 'error', 'warning']),
  waiting: vueTypes.bool.def(false),
  disabled: vueTypes.bool.def(false),
  size: vueTypes.oneOf(['small', 'medium', 'large']).def('medium'),
  tabindex: vueTypes.number.def(0)
}
