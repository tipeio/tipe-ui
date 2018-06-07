import { storiesOf } from '@storybook/vue'

import TipeInput from '../../src/components/Input'

storiesOf('Input', module)
  .add('default input', () => ({
    components: { TipeInput },
    template:
      '<tipe-input textLabel="Email" textPlaceholder="Type your email here" inputType="email" />'
  }))
  .add('success input', () => ({
    components: { TipeInput },
    data() {
      return {
        value: { value: 'olivia.oddo@gmail.com', changed: true },
        validity: { status: 'success', message: '', valid: true }
      }
    },
    template:
      '<tipe-input textLabel="Email" textPlaceholder="Type your email here" inputType="email" :value="value" :validity="validity"/>'
  }))
  .add('error input', () => ({
    components: { TipeInput },
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
      '<tipe-input textLabel="Email" textPlaceholder="Type your email here" inputType="email" :value="value" :validity="validity" />'
  }))
  .add('warning input', () => ({
    components: { TipeInput },
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
      '<tipe-input textLabel="Username" textPlaceholder="Type your username here" inputType="text" :value="value" :validity="validity" />'
  }))
