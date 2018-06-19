import vueTypes from 'vue-types'
import DocumentBlockValidation from '@/types/DocumentBlockValidation'
import { getBlockTypes } from '@/libs/blocks'

export default {
  type: vueTypes.oneOf(getBlockTypes()).isRequired,
  name: vueTypes.string,
  value: vueTypes.any,
  status: vueTypes.oneOf(['success', 'error', 'warning', '']),
  successMessage: vueTypes.string.def(''),
  errorMessage: vueTypes.string.def(''),
  warningMessage: vueTypes.string.def(''),
  waiting: vueTypes.bool.def(false),
  disabled: vueTypes.bool.def(false),
  validation: vueTypes.shape(DocumentBlockValidation)
}
