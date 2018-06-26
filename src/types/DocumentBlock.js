import vueTypes from 'vue-types'
import DocumentBlockValidation from '@/types/DocumentBlockValidation'
import { getBlockTypes } from '@/libs/blocks'

export default {
  type: vueTypes.oneOf(getBlockTypes()).isRequired,
  label: vueTypes.string.def(''),
  name: vueTypes.string.def(''),
  apiId: vueTypes.string.def(''),
  value: vueTypes.any,
  description: vueTypes.string.def(''),
  status: vueTypes.oneOf(['success', 'error', 'warning', '']),
  successMessage: vueTypes.string.def(''),
  errorMessage: vueTypes.string.def(''),
  warningMessage: vueTypes.string.def(''),
  waiting: vueTypes.bool.def(false),
  disabled: vueTypes.bool.def(false),
  validation: vueTypes.shape(DocumentBlockValidation)
}
