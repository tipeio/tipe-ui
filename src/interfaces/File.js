import vueTypes from 'vue-types'
import UserShape from './User'

export default {
  id: vueTypes.string.def(''),
  icon: vueTypes.string,
  type: vueTypes.string,
  label: vueTypes.string,
  createdAt: vueTypes.integer,
  updatedAt: vueTypes.integer,
  createdBy: vueTypes.shape(UserShape)
}
