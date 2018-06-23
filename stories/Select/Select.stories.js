import { storiesOf } from '@storybook/vue'

import TipeSelect, { TipeSelectButton } from '../../src/components/Select'

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
  .add('default select button', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options" size="small"/></div>'
  }))
  .add('select button with placeholder', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options" size="large" placeholder="Select a role..." /></div>'
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
  .add('success', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" status="success"/></div>'
  }))
  .add('error', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" status="error" /></div>'
  }))
  .add('warning', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" status="warning"/></div>'
  }))
  .add('waiting', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" :waiting="true"/></div>'
  }))
  .add('small', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" size="small"/></div>'
  }))
  .add('large', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" size="large"/></div>'
  }))
  .add('no options', () => ({
    components: { TipeSelect },
    computed: { style },
    template:
      '<div :style="style"><tipe-select label="Role" size="large"/></div>'
  }))
