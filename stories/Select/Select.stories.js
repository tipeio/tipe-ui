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
    data() {
      return {
        roleValue: 'member'
      }
    },
    methods: {
      onChangeRole(val) {
        this.roleValue = val
      }
    },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" :value="roleValue" @change="onChangeRole"/></div>'
  }))
  .add('with a placeholder', () => ({
    components: { TipeSelect },
    computed: { options, style },
    data() {
      return {
        roleValue: ''
      }
    },
    methods: {
      onChangeRole(val) {
        this.roleValue = val
      }
    },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" @change="onChangeRole" placeholder="Select a role..." :value="roleValue"/></div>'
  }))
  .add('disabled', () => ({
    components: { TipeSelect },
    computed: { options, style },
    data() {
      return {
        roleValue: 'member'
      }
    },
    methods: {
      onChangeRole(val) {
        this.roleValue = val
      }
    },
    template:
      '<div :style="style"><tipe-select label="Role" :options="options" :value="roleValue" :disabled="true" @change="onChangeRole"/></div>'
  }))
