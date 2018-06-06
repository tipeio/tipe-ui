import vueTypes from 'vue-types'
import UserShape from '@/types/User'

export default {
  type: vueTypes.string,
  label: vueTypes.string,
  createdAt: vueTypes.integer,
  updatedAt: vueTypes.integer,
  createdBy: vueTypes.shape(UserShape)
}
