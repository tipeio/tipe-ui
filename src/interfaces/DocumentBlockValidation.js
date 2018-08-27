import vueTypes from 'vue-types'

export default {
  required: vueTypes.bool.def(false),
  unique: vueTypes.bool.def(false),
  maxLength: vueTypes.integer,
  minLength: vueTypes.integer
}
