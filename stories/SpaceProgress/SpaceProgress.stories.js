import { storiesOf } from '@storybook/vue'

import SpaceProgress from '../../src/components/SpaceProgress'

storiesOf('Space Progress', module)
  .add('space progress 20%', () => ({
    components: { SpaceProgress },
    template: '<space-progress :usedSpace=8.08 :totalSpace=40 unit="GB"/>'
  }))
  .add('space progress 82%', () => ({
    components: { SpaceProgress },
    template: '<space-progress :usedSpace=82.1 :totalSpace=100 unit="MB"/>'
  }))
