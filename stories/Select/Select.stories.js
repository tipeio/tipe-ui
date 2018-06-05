import { storiesOf } from '@storybook/vue'

import TipeSelect from '../../src/components/Select'

const options = () => [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' }
]
const style = () => ({
  width: '300px'
})
storiesOf('Select', module).add('tipe select box', () => ({
  components: { TipeSelect },
  computed: { options, style },
  template:
    '<div :style="style"><tipe-select textLabel="Role" :options="options"/></div>'
}))
