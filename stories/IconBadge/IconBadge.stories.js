import { storiesOf } from '@storybook/vue'

import IconBadge from '../../src/components/IconBadge'

storiesOf('IconBadge', module).add('icon badge', () => ({
  components: { IconBadge },
  template: '<icon-badge  icon="file" />'
}))
