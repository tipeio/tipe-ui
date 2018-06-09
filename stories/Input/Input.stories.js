import { storiesOf } from '@storybook/vue'

import TipeInput from '../../src/components/Input'

const style = () => ({
  width: '200px'
})
storiesOf('Input', module)
  .add('default input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" /></div>'
  }))
  .add('small input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" size="small" /></div>'
  }))
  .add('large input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" size="large"/></div>'
  }))

  .add('success input', () => ({
    components: { TipeInput },
    computed: { style },
    data() {
      return {
        value: { value: 'olivia.oddo@gmail.com', changed: true },
        validity: { status: 'success', message: '', valid: true }
      }
    },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" :value="value" :validity="validity"/></div>'
  }))
  .add('error input', () => ({
    components: { TipeInput },
    computed: { style },
    data() {
      return {
        value: { value: 'olivia.odd', changed: true },
        validity: {
          status: 'error',
          message: 'Please enter a valid email',
          valid: false
        }
      }
    },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" :value="value" :validity="validity" /></div>'
  }))
  .add('error input large', () => ({
    components: { TipeInput },
    computed: { style },
    data() {
      return {
        value: { value: 'olivia.odd', changed: true },
        validity: {
          status: 'error',
          message: 'Please enter a valid email',
          valid: false
        }
      }
    },
    template:
      '<div :style="style"><tipe-input size="large" label="Email" placeholder="Type your email here" type="email" :value="value" :validity="validity" /></div>'
  }))
  .add('warning input', () => ({
    components: { TipeInput },
    computed: { style },
    data() {
      return {
        value: { value: 'oliv', changed: true },
        validity: {
          status: 'warning',
          message: 'Usernames are normally full names',
          valid: true
        }
      }
    },
    template:
      '<div :style="style"><tipe-input label="Username" placeholder="Type your username here" type="text" :value="value" :validity="validity" /></div>'
  }))
