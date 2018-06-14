import vueTypes from 'vue-types'

export default {
  name: vueTypes.string,
  label: vueTypes.string,
  value: vueTypes.string,
  placeholder: vueTypes.string,
  status: vueTypes.oneOf(['error', 'success', 'warning', '']).def(''),
  disabled: vueTypes.bool.def(false),
  waiting: vueTypes.bool.def(false),
  size: vueTypes.oneOf(['small', 'medium', 'large']).def('medium'),
  tabindex: vueTypes.number
}
