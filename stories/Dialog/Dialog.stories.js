import { storiesOf } from '@storybook/vue'

import TipeDialog from '../../src/components/Dialog'

storiesOf('Dialog', module).add('default', () => ({
  components: { TipeDialog },
  template: '<tipe-dialog title="Hello World" message="Say hello back?" />'
}))
