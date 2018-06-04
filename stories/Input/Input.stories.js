import { storiesOf } from '@storybook/vue'

import TipeInput from '../../src/components/Input'

storiesOf('Input', module).add('simple input', () => ({
  components: { TipeInput },
  template:
    '<tipe-input textLabel="Email" textPlaceholder="Type your email here" inputType="email" />'
}))
