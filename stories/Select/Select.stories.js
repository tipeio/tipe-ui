import { storiesOf } from '@storybook/vue'

import TipeSelect from '../../src/components/Select'
import TipeField from '../../src/components/Field'

const options = () => [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' },
  { label: 'Member', value: 'member' }
]

const style = () => ({
  width: '300px'
})
storiesOf('Select', module)
  .add('default', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template: '<div :style="style"><tipe-select :options="options" /></div>'
  }))
  .add('select in a field', () => ({
    components: { TipeSelect, TipeField },
    computed: { options, style },
    data() {
      return {
        field: {
          options: options()
        }
      }
    },
    template:
      '<div :style="style"><tipe-field :field="field" label="Role"><tipe-select /></tipe-field></div>'
  }))
  .add('with a placeholder', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" placeholder="Select a role..." /></div>'
  }))
  .add('disabled', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" :disabled="true" /></div>'
  }))
  .add('success', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" status="success"/></div>'
  }))
  .add('error', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" status="error" /></div>'
  }))
  .add('warning', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select  :options="options" status="warning"/></div>'
  }))
  .add('waiting', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" :waiting="true"/></div>'
  }))
  .add('small', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" size="small"/></div>'
  }))
  .add('large', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" size="large"/></div>'
  }))
  .add('no options', () => ({
    components: { TipeSelect },
    computed: { style },
    template: '<div :style="style"><tipe-select size="large"/></div>'
  }))
