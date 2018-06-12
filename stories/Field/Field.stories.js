import { storiesOf } from '@storybook/vue'

import TipeField from '../../src/components/Field'
import TipeTextInput from '../../src/components/TextInput'

const field = () => ({
  label: 'First Name',
  placeholder: 'What is your first name?',
  value: '',
  size: 'normal'
})
storiesOf('Field', module).add('default input', () => ({
  components: { TipeField, TipeTextInput },
  computed: { field },
  template:
    '<tipe-field :label="field.label" name="firstName" :field="field"><tipe-text-input /></tipe-field>'
}))
