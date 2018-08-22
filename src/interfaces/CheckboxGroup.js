import vueTypes from 'vue-types'
import checkboxOptions from './CheckboxOptions'

export default {
  name: vueTypes.string.def(''),
  tabindex: vueTypes.number.def(0),
  status: vueTypes.oneOf(['success', 'error', 'warning']),
  waiting: vueTypes.bool.def(false),
  disabled: vueTypes.bool.def(false),
  options: vueTypes.arrayOf(checkboxOptions)
}
