import vueTypes from 'vue-types'
import checkboxOptions from './CheckboxOptions'

export default {
  name: vueTypes.string.def(''),
  options: vueTypes.arrayOf(checkboxOptions)
}
