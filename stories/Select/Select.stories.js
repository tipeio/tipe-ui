import { storiesOf } from '@storybook/vue'

import TipeSelect from '../../src/components/Select'

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
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" /></div>'
  }))
  .add('with a placeholder', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" placeholder="Select a role..." /></div>'
  }))
  .add('disabled', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" :disabled="true" /></div>'
  }))
