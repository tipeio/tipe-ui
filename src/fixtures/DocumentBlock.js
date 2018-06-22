import documentBlockValidation from '@/fixtures/DocumentBlockValidation'

export default documentBlock => ({
  type: 'SIMPLE_TEXT',
  label: 'Simple Text',
  value: 'test-value',
  name: 'test-name',
  apiId: 'test-apiId',
  description: 'test-description',
  status: 'success',
  successMessage: '',
  errorMessage: '',
  warningMessage: '',
  waiting: false,
  disabled: false,
  validation: documentBlockValidation(),
  ...documentBlock
})
