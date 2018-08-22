import vueTypes from 'vue-types'
import inputProps from './InputProps'

export default {
  label: vueTypes.string.def(''),
  checked: vueTypes.bool.def(false),
  ...inputProps
}
