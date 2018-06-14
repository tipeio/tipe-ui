import documentBlockValidation from '@/fixtures/DocumentBlockValidation'

export default documentBlock => ({
  type: 'simple-text',
  value: 'test-value',
  name: 'test-name',
  status: '',
  successMessage: '',
  errorMessage: '',
  warningMessage: '',
  waiting: false,
  disabled: false,
  validation: documentBlockValidation(),
  ...documentBlock
})
