import { storiesOf } from '@storybook/vue'

import TipeField from '../../src/components/Field'
import TipeTextInput from '../../src/components/TextInput'

const style = () => ({
  width: '200px'
})

storiesOf('Field', module)
  .add('default field with input', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          label: 'First Name',
          placeholder: 'What is your first name?',
          value: ''
        }
      }
    },
    template:
      '<div :style="style"><tipe-field :label="field.label" name="firstName" :field="field"><tipe-text-input /></tipe-field></div>'
  }))
  .add('error input', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          label: 'First Name',
          placeholder: 'What is your first name?',
          value: ''
        }
      }
    },
    template:
      '<div :style="style"><tipe-field :label="field.label" name="firstName" :field="field" status="error" errorMessage="Invalid name"><tipe-text-input /></tipe-field></div>'
  }))
  .add('success input', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          label: 'First Name',
          placeholder: 'What is your first name?',
          value: 'Olivia'
        }
      }
    },
    template:
      '<div :style="style"><tipe-field :label="field.label" name="firstName" :field="field" status="success"><tipe-text-input /></tipe-field></div>'
  }))
  .add('warning input', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          label: 'First Name',
          placeholder: 'What is your first name?',
          value: 'o'
        }
      }
    },
    template:
      '<div :style="style"><tipe-field :label="field.label" name="firstName" :field="field" status="warning" warningMessage="Warning message watch out"><tipe-text-input /></tipe-field></div>'
  }))
  .add('no label', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          placeholder: 'What is your first name?',
          value: 'o'
        }
      }
    },
    template:
      '<div :style="style"><tipe-field :label="field.label" name="firstName" :field="field" status="warning" warningMessage="Warning message watch out"><tipe-text-input /></tipe-field></div>'
  }))
  .add('no message', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          label: 'First Name',
          placeholder: 'What is your first name?',
          value: ''
        }
      }
    },
    template:
      '<div :style="style"><tipe-field :label="field.label" name="firstName" :field="field" ><tipe-text-input /></tipe-field></div>'
  }))
  .add('multiple slots', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          label: 'First Name',
          placeholder: 'What is your first name?',
          value: ''
        }
      }
    },
    template:
      '<div :style="style"><tipe-field :label="field.label" name="firstName" :field="field"><tipe-text-input /><tipe-text-input /></tipe-field></div>'
  }))
  .add('no slots with label', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          label: 'First Name',
          placeholder: 'What is your first name?',
          value: ''
        }
      }
    },
    template:
      '<div :style="style"><tipe-field :label="field.label" name="firstName" :field="field" /></div>'
  }))
  .add('no slots with message', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          label: 'First Name',
          placeholder: 'What is your first name?',
          value: ''
        }
      }
    },
    template:
      '<div :style="style"><tipe-field status="error" errorMessage="blah blah" name="firstName" :field="field" /></div>'
  }))
  .add('no slots with message and label', () => ({
    components: { TipeField, TipeTextInput },
    computed: { style },
    data() {
      return {
        field: {
          label: 'First Name',
          placeholder: 'What is your first name?',
          value: ''
        }
      }
    },
    template:
      '<div :style="style"><tipe-field status="error" errorMessage="blah blah" :label="field.label" name="firstName" :field="field" /></div>'
  }))
