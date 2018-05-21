import { storiesOf } from '@storybook/vue'

import SpaceProgress from '../../src/components/SpaceProgress'

storiesOf('Space Progress', module).add('space progress', () => ({
  components: { SpaceProgress },
  template: '<space-progress usedSpace="8.08GB" totalSpace="40GB"/>'
}))
