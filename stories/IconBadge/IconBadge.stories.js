import { storiesOf } from '@storybook/vue'

import IconBadge from '../../src/components/IconBadge'

storiesOf('Icon Badge', module).add('icon badge', () => ({
  components: { IconBadge },
  template: '<icon-badge  icon="file" />'
}))
