import { storiesOf } from '@storybook/vue'

import { TipeSelectButton } from '../../src/components/Select'

const options = () => [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' },
  { label: 'Member', value: 'member' }
]
const style = () => ({
  width: '300px'
})
storiesOf('Select Button', module)
  .add('default', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options"/></div>'
  }))
  .add('with placeholder', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options" placeholder="Select a role..." /></div>'
  }))
  .add('disabled', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options" :disabled="true" /></div>'
  }))
  .add('success', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options" status="success"/></div>'
  }))
  .add('error', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button  :options="options" status="error" /></div>'
  }))
  .add('warning', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options" status="warning"/></div>'
  }))
  .add('waiting', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options" :waiting="true"/></div>'
  }))
  .add('small', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options" size="small"/></div>'
  }))
  .add('large', () => ({
    components: { TipeSelectButton },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select-button :options="options" size="large"/></div>'
  }))
  .add('no options', () => ({
    components: { TipeSelectButton },
    computed: { style },
    template: '<div :style="style"><tipe-select-button  size="large"/></div>'
  }))
