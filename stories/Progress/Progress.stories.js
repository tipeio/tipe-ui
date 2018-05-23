import { storiesOf } from '@storybook/vue'

import TipeProgress from '../../src/components/Progress'

storiesOf('Progress', module)
  .add('space progress 20%', () => ({
    components: { TipeProgress },
    template: '<tipe-progress :used=8.08 :total=40 unit="GB" title="Space"/>'
  }))
  .add('completed progress 82%', () => ({
    components: { TipeProgress },
    template: '<tipe-progress :used=82 :total=100 title="Completed"/>'
  }))
