import vueTypes from 'vue-types'
import roleShape from './Roles'

export default {
  id: vueTypes.string,
  profileImageUrl: vueTypes.string,
  email: vueTypes.string,
  firstName: vueTypes.string,
  lastName: vueTypes.string,
  role: vueTypes.shape(roleShape),
  status: vueTypes.string,
  createdAt: vueTypes.integer,
  updatedAt: vueTypes.integer
}
