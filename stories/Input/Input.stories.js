import { storiesOf } from '@storybook/vue'

import { SimpleInput } from '../../src/components/Input'

storiesOf('Input', module).add('simple input', () => ({
  components: { SimpleInput },
  template:
    '<simple-input textLabel="Email" textPlaceholder="Type your email here" inputType="email" />'
}))
